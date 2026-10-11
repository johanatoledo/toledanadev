
import { getServiceById, getPlanForService, } from "@/lib/services/serviceSelection";
import { formatUSD } from "@/data/servicePlans";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function getServiceName(serviceId) {
  if (serviceId === "otro") return "Otro proyecto";

  return getServiceById(serviceId)?.title ??
    "No especificado";
}

function createRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e4e4e7">
        <p style="margin:0 0 5px;color:#71717a;font-size:12px;font-weight:700">
          ${escapeHtml(label)}
        </p>
        <p style="margin:0;color:#18181b;font-size:15px;line-height:1.6">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>
  `;
}

export function createContactEmail({ name, email, business, service, plan = "", message, }) {
  const selectedPlan = getPlanForService( service, plan );

  const priceText = selectedPlan
    ? `${selectedPlan.pricingType === "from" ? "Desde " : ""}${formatUSD(selectedPlan.priceUSD)}`
    : "";

  const rows = [
    createRow("Nombre", name),
    createRow("Correo electrónico", email),
    createRow( "Empresa o negocio", business || "No especificado" ),
    createRow( "Servicio", getServiceName(service) ),
    createRow( "Plan", plan || "No especificado" ),
  ];

  if (selectedPlan) {
    rows.push(
      createRow("Plan", selectedPlan.planName),
      createRow(
        "Inversión inicial",
        `${priceText} USD · Pago único por desarrollo`
      )
    );
  }

  const safeMessage = escapeHtml(message)
    .replaceAll("\n", "<br>");

  return `
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        >
        <title>Nueva solicitud - ToledanaDev</title>
      </head>

      <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#0a0a0a">
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
        >
          <tr>
            <td align="center" style="padding:32px 16px">
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="max-width:640px;background:#ffffff;border-radius:16px"
              >
                <tr>
                  <td style="padding:30px;background:#0a0a0a">
                    <p style="margin:0;color:#00ffff;font-size:12px;font-weight:700;letter-spacing:2px">
                      TOLEDANADEV
                    </p>

                    <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;line-height:1.4">
                      Nueva solicitud comercial
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding:30px">
                    <p style="margin:0 0 20px;color:#52525b;font-size:14px;line-height:1.6">
                      Has recibido una solicitud desde
                      www.toledanadev.com.
                    </p>

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      ${rows.join("")}
                    </table>

                    <div style="margin-top:28px">
                      <p style="margin:0 0 8px;color:#71717a;font-size:12px;font-weight:700">
                        MENSAJE DEL CLIENTE
                      </p>

                      <div style="padding:18px;background:#f4f4f5;border-radius:12px;color:#27272a;font-size:15px;line-height:1.7;overflow-wrap:anywhere">
                        ${safeMessage}
                      </div>
                    </div>

                    <p style="margin:24px 0 0;font-size:12px;color:#71717a;line-height:1.7">
                      El precio mostrado es una referencia comercial.
                      El alcance, el tipo de cambio y las condiciones
                      de contratación deben confirmarse antes del pago.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:20px 30px;border-top:1px solid #eeeeee;background:#fafafa;font-size:12px;color:#71717a">
                    Solicitud recibida mediante el formulario
                    oficial de ToledanaDev.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
