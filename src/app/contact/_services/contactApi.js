const CONTACT_ENDPOINT = "/api/contact";

const REQUEST_TIMEOUT_MS = 15_000;

export class ContactRequestError extends Error {
  constructor(
    message,
    {
      status = 500,
      fieldErrors = {},
    } = {}
  ) {
    super(message);

    this.name = "ContactRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export async function sendContactRequest(payload) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
         Accept: "application/json",
      },
      credentials: "same-origin",
      cache: "no-store",
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const contentType = response.headers.get("content-type") ?? "";

    const data = contentType.includes("application/json")
      ? await response.json()
      : null;

    if (!response.ok) {
      throw new ContactRequestError(
        data?.message ??
          "No pudimos procesar tu solicitud.",
        {
          status: response.status,
          fieldErrors: data?.fieldErrors ?? {},
        }
      );
    }

    if (!data?.ok) {
      throw new ContactRequestError(
        data?.message ??
          "El servidor devolvió una respuesta no válida.",
        {
          status: response.status,
        }
      );
    }

    return data;
  } catch (error) {
    if (
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {
      throw new ContactRequestError(
        "La solicitud tardó demasiado. Intenta nuevamente.",
        {
          status: 408,
        }
      );
    }

    if (error instanceof ContactRequestError) {
      throw error;
    }

    throw new ContactRequestError(
      "No pudimos conectar con el servidor. Verifica tu conexión e intenta nuevamente.",
      {
        status: 0,
      }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}