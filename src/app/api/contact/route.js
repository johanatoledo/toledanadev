import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

import { contactSchema } from "../../../lib/contact/contactSchema";
import { createContactEmail, getServiceName, } from "../../../lib/contact/contactEmail";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,

  limiter: Ratelimit.slidingWindow(
    5,
    "10 m"
  ),

  prefix: "toledanadev:contact",
});

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  const allowedOrigins = new Set([
    process.env.SITE_URL,
    "https://toledanadev.com",
    "https://www.toledanadev.com",

    ...(process.env.NODE_ENV === "development"
      ? [
          "http://localhost:3000",
          "http://127.0.0.1:3000",
        ]
      : []),
  ]);

  return allowedOrigins.has(origin);
}

export async function POST(request) {
  try {
    /*
     * 1. Comprobación básica del origen.
     */
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Solicitud no autorizada.",
        },
        {
          status: 403,
        }
      );
    }

    /*
     * 2. Evitar payloads excesivamente grandes.
     */
    const contentLength = Number( request.headers.get("content-length") ?? 0 );

    if (contentLength > 20_000) {
      return NextResponse.json(
        {
          ok: false,
          message: "Solicitud demasiado grande.",
        },
        {
          status: 413,
        }
      );
    }

    /*
     * 3. Rate limiting.
     */
    const ip = getClientIp(request);

    const { success, reset, } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Has realizado varias solicitudes. Intenta nuevamente en unos minutos.",
        },
        {
          status: 429,

          headers: {
            "Retry-After": String(
              Math.max(
                1,
                Math.ceil((reset - Date.now()) / 1000)
              )
            ),
          },
        }
      );
    }

    /*
     * 4. Parsear JSON.
     */
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "Los datos enviados no son válidos.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * 5. Honeypot anti-bot.
     *
     * Respondemos 200 para no revelar al bot
     * que detectamos su envío.
     */
    if ( typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({
        ok: true,
        message:
          "Tu solicitud fue enviada correctamente.",
      });
    }

    /*
     * 6. Validación real en servidor.
     */
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const flattened = validation.error.flatten();

      return NextResponse.json(
        {
          ok: false,

          message: "Revisa los datos del formulario.",

          fieldErrors: flattened.fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const { name,  email, business, service, message, } = validation.data;

    /*
     * 7. Envío del correo.
     */
    const { data, error, } = await resend.emails.send({
      from: `${process.env.CONTACT_FROM_NAME} <${process.env.CONTACT_FROM_EMAIL}>`,

      to: [
        process.env.CONTACT_TO_EMAIL,

      ],

      replyTo: email,

      subject:
        `Nueva solicitud: ${getServiceName(service)} - ${name}`,

      html: createContactEmail({ name, email, business, service, message, }),
    });

    if (error) {
      console.error("[CONTACT_EMAIL_ERROR]", error );

      return NextResponse.json(
        {
          ok: false,
          message:
            "No pudimos enviar tu solicitud en este momento. Intenta nuevamente.",
        },
        {
          status: 502,
        }
      );
    }

    console.info( "[CONTACT_EMAIL_SENT]", { id: data?.id, service, } );

    return NextResponse.json(
      {
        ok: true,

        message:
          "Tu solicitud fue enviada correctamente. Nos pondremos en contacto contigo.",
      },
      {
        status: 200,

        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error );

    return NextResponse.json(
      {
        ok: false,

        message: "Ocurrió un error inesperado. Intenta nuevamente.",
      },
      {
        status: 500,
      }
    );
  }
}