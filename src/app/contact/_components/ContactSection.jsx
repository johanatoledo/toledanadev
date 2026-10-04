import {
  Code2,
  MessagesSquare,
  Workflow,
  ArrowRight,
} from "lucide-react";

import ContactForm from "./ContactForm";

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
  return (
    <section
      aria-labelledby="contact-section-title"
      className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Información */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Hablemos de tu proyecto
            </p>

            <h2
              id="contact-section-title"
              className="mt-4 max-w-xl font-title text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Una solución digital comienza entendiendo cómo funciona tu
              negocio
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-black/65 dark:text-white/65">
              No todos los negocios necesitan la misma tecnología. Antes de
              desarrollar una solución buscamos entender qué haces actualmente,
              dónde están los problemas y qué procesos pueden mejorarse.
            </p>

            <div className="mt-10 space-y-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.id}
                    className="group flex gap-5 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md dark:border-white/10 dark:bg-white/3"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">
                          0{index + 1}
                        </span>

                        <h3 className="font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-black/60 dark:text-white/60">
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

              <p className="mt-2 text-sm leading-6 text-black/60 dark:text-white/60">
                No es necesario que conozcas términos técnicos. Cuéntanos cómo
                funciona actualmente tu negocio y qué problema quieres
                solucionar.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Nosotros te ayudamos a definirlo
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}