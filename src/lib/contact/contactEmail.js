const SERVICE_NAMES = {
  "desarrollo-web": "Desarrollo Web",
  "software-medida": "Software a Medida",
  "aplicaciones-web": "Aplicaciones Web",
  "comercio-electronico": "Comercio Electrónico",
  "soluciones-digitales": "Soluciones Digitales",
  "automatizacion-ia": "Automatización e IA",
  otro: "Otro proyecto",
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function getServiceName(service) {
  return SERVICE_NAMES[service] ?? "No especificado";
}

export function createContactEmail({
  name,
  email,
  business,
  service,
  message,
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const safeBusiness = business
    ? escapeHtml(business)
    : "No especificado";

  const safeService = escapeHtml(getServiceName(service));

  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <!doctype html>

    <html lang="es">
      <head>
        <meta charset="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <title>Nueva solicitud desde ToledanaDev</title>
      </head>

      <body
        style="
          margin:0;
          padding:0;
          background:#f4f4f5;
          font-family:Arial,Helvetica,sans-serif;
          color:#0a0a0a;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
        >
          <tr>
            <td align="center" style="padding:40px 16px;">
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  max-width:640px;
                  background:#ffffff;
                  border-radius:16px;
                  overflow:hidden;
                "
              >
                <tr>
                  <td
                    style="
                      background:#0a0a0a;
                      padding:28px 32px;
                    "
                  >
                    <div
                      style="
                        color:#00ffff;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:2px;
                        text-transform:uppercase;
                      "
                    >
                      ToledanaDev
                    </div>

                    <h1
                      style="
                        margin:10px 0 0;
                        color:#ffffff;
                        font-size:24px;
                        line-height:1.3;
                      "
                    >
                      Nueva solicitud de contacto
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px;">
                    <p
                      style="
                        margin:0 0 24px;
                        color:#52525b;
                        line-height:1.6;
                      "
                    >
                      Se ha recibido una nueva solicitud desde
                      toledanadev.com.
                    </p>

                    ${createRow("Nombre", safeName)}

                    ${createRow("Correo", safeEmail)}

                    ${createRow("Empresa o negocio", safeBusiness)}

                    ${createRow("Servicio", safeService)}

                    <div style="margin-top:28px;">
                      <div
                        style="
                          margin-bottom:8px;
                          font-size:12px;
                          font-weight:700;
                          color:#71717a;
                          text-transform:uppercase;
                          letter-spacing:1px;
                        "
                      >
                        Mensaje
                      </div>

                      <div
                        style="
                          padding:20px;
                          background:#f4f4f5;
                          border-radius:12px;
                          font-size:15px;
                          line-height:1.7;
                          color:#27272a;
                        "
                      >
                        ${safeMessage}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:20px 32px;
                      background:#fafafa;
                      border-top:1px solid #eeeeee;
                      font-size:12px;
                      color:#71717a;
                    "
                  >
                    Solicitud generada desde el formulario oficial de
                    ToledanaDev.
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

function createRow(label, value) {
  return `
    <div
      style="
        margin-bottom:18px;
        padding-bottom:18px;
        border-bottom:1px solid #eeeeee;
      "
    >
      <div
        style="
          margin-bottom:5px;
          font-size:12px;
          font-weight:700;
          color:#71717a;
          text-transform:uppercase;
          letter-spacing:1px;
        "
      >
        ${label}
      </div>

      <div
        style="
          font-size:15px;
          line-height:1.5;
          color:#18181b;
        "
      >
        ${value}
      </div>
    </div>
  `;
}