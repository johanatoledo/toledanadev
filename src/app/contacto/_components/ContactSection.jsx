
"use client";

import { useEffect, useState } from "react";
import { Code2, MessagesSquare, Workflow, ArrowRight, } from "lucide-react";
import ContactForm from "./ContactForm";
import { getPlanForService } from "@/lib/services/serviceSelection";

const processSteps = [
  {
    id: "necesidad",
    title: "Cuéntanos tu necesidad",
    description:
      "Explícanos qué proceso quieres mejorar, qué problema necesitas resolver o qué solución tienes en mente.",
    icon: MessagesSquare,
  },
  {
    id: "analisis",
    title: "Analizamos el proyecto",
    description:
      "Revisamos tus requerimientos para identificar la solución tecnológica más adecuada para tu negocio.",
    icon: Workflow,
  },
  {
    id: "solucion",
    title: "Diseñamos una solución",
    description:
      "Definimos una propuesta enfocada en tus procesos, tus clientes y los objetivos que quieres alcanzar.",
    icon: Code2,
  },
];

export default function ContactSection() {
  const [hasSelectedPlan, setHasSelectedPlan] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const selection = getPlanForService(
      params.get("servicio") ?? "",
      params.get("plan") ?? ""
    );

    setHasSelectedPlan(Boolean(selection));
  }, []);

  return (
    <section
      aria-labelledby={ hasSelectedPlan ? undefined : "contact-section-title" }
      aria-label={ hasSelectedPlan ? "Solicitud del plan seleccionado" : undefined }
      className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={
            hasSelectedPlan
              ? "mx-auto max-w-2xl"
              : "grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
          }
        >
          {!hasSelectedPlan && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#007777] dark:text-primary">
                Hablemos de tu proyecto
              </p>

              <h2
                id="contact-section-title"
                className="mt-4 max-w-xl font-title text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Una solución digital comienza entendiendo cómo
                funciona tu negocio
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-toledana-black/65 dark:text-toledana-white/65">
                No todos los negocios necesitan la misma tecnología.
                Antes de desarrollar una solución buscamos entender
                qué haces actualmente y qué procesos pueden mejorarse.
              </p>

              <div className="mt-10 space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.id}
                      className="group flex gap-5 rounded-2xl border border-toledana-black/10 bg-secundary p-5 transition-all duration-300 hover:border-[#007777]/40 hover:shadow-md dark:border-primary/15 dark:bg-toledana-black/80"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#007777]/10 text-[#007777] dark:bg-primary/10 dark:text-primary">
                        <Icon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xs font-bold text-[#007777] dark:text-primary">
                            0{index + 1}
                          </span>

                          <h3 className="font-bold">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-6 text-toledana-black/60 dark:text-toledana-white/60">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-semibold">
                  ¿No sabes exactamente qué solución necesitas?
                </p>

                <p className="mt-2 text-sm leading-6 text-toledana-black/60 dark:text-toledana-white/60">
                  Cuéntanos cómo funciona tu negocio y qué problema
                  quieres solucionar.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#007777] dark:text-primary">
                  Nosotros te ayudamos a definirlo
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          )}

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
