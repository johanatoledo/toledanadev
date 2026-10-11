
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Info,
} from "lucide-react";

import {
  SERVICE_PLANS,
  formatUSD,
} from "@/data/servicePlans";

function PricingCard({ plan, serviceId }) {
  const pricing = SERVICE_PLANS[plan.key];

  if (!pricing) return null;

  const isFrom = pricing.pricingType === "from";

  const contactHref = `/contacto?${new URLSearchParams({
    servicio: serviceId,
    plan: pricing.id,
  }).toString()}`;

  return (
    <article
      className={`flex h-full min-w-0 flex-col rounded-2xl border p-6 sm:p-7 ${
        plan.featured
          ? "border-[#007777]/50 bg-primary/5 dark:border-primary/60"
          : "border-toledana-black/10 bg-secundary dark:border-primary/20 dark:bg-toledana-black/70"
      }`}
    >
      {plan.featured && (
        <span className="mb-5 w-fit rounded-full bg-[#007777]/10 px-3 py-1 text-xs font-bold text-[#006666] dark:bg-primary/10 dark:text-primary">
          Plan destacado
        </span>
      )}

      <h3 className="font-title text-xl font-bold text-toledana-black dark:text-toledana-white">
        {pricing.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-toledana-black/65 dark:text-toledana-white/65">
        {plan.description}
      </p>

      <div className="mt-6 border-b border-toledana-black/10 pb-6 dark:border-primary/15">
        <p className="text-xs font-medium uppercase tracking-widest text-toledana-black/60 dark:text-toledana-white/60">
          {isFrom ? "Inversión desde" : "Precio de desarrollo"}
        </p>

        <p className="mt-2 font-title text-3xl font-bold tracking-tight text-toledana-black dark:text-primary">
          {formatUSD(pricing.priceUSD)}
        </p>

        <p className="mt-1 text-xs text-toledana-black/60 dark:text-toledana-white/60">
          Pago único · USD
        </p>
      </div>

      <div className="mt-6 flex-1">
        <h4 className="text-sm font-bold text-toledana-black dark:text-toledana-white">
          ¿Qué incluye?
        </h4>

        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-toledana-black/75 dark:text-toledana-white/75"
            >
              <Check
                className="mt-1 h-4 w-4 shrink-0 text-[#007777] dark:text-primary"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {plan.exclusions?.length > 0 && (
          <div className="mt-7 border-t border-toledana-black/10 pt-5 dark:border-primary/15">
            <h4 className="text-sm font-bold text-toledana-black dark:text-toledana-white">
              No incluye
            </h4>

            <ul className="mt-4 space-y-3">
              {plan.exclusions.map((exclusion) => (
                <li
                  key={exclusion}
                  className="flex items-start gap-3 text-sm leading-6 text-toledana-black/60 dark:text-toledana-white/60"
                >
                  <X
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{exclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link
        href={contactHref}
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-toledana-black px-5 py-3 text-sm font-bold text-toledana-white transition-colors hover:bg-[#006666] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:text-toledana-black dark:hover:bg-primary/80"
      >
        Solicitar este plan
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function ServiceDetail({ service, details }) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-toledana-white text-toledana-black dark:bg-toledana-black dark:text-toledana-white">
      <section className="border-b border-toledana-black/10 px-5 py-16 dark:border-primary/15 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#007777] hover:underline dark:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos los servicios
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#007777]/20 bg-[#007777]/10 text-[#007777] dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#007777] dark:text-primary">
              {details.subtitle}
            </p>

            <h1 className="mt-4 font-title text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-toledana-black/70 dark:text-toledana-white/70">
              {details.introduction}
            </p>

            <a
              href="#planes"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#007777]/40 px-6 py-3 text-sm font-bold text-[#007777] transition-colors hover:bg-[#007777]/10 dark:border-primary/50 dark:text-primary dark:hover:bg-primary/10"
            >
              Ver opciones y precios
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="benefits-title"
        className="px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="benefits-title"
            className="font-title text-2xl font-bold sm:text-3xl"
          >
            ¿Qué beneficios ofrece?
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-toledana-black/10 bg-secundary p-5 dark:border-primary/15 dark:bg-toledana-black/70"
              >
                <Check
                  className="mt-1 h-5 w-5 shrink-0 text-[#007777] dark:text-primary"
                  aria-hidden="true"
                />
                <span className="leading-7">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="planes"
        aria-labelledby="plans-title"
        className="scroll-mt-24 px-5 pb-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="plans-title"
            className="font-title text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {details.customQuote
              ? "Desarrollo personalizado"
              : "Planes y precios"}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-toledana-black/70 dark:text-toledana-white/70">
            Conoce qué incluye cada opción y selecciona
            la que mejor se adapte a tu proyecto.
          </p>

          {details.plans.length > 0 ? (
            <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
              {details.plans.map((plan) => (
                <PricingCard
                  key={plan.key}
                  plan={plan}
                  serviceId={service.id}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 max-w-3xl rounded-2xl border border-toledana-black/10 bg-secundary p-7 dark:border-primary/20 dark:bg-toledana-black/70">
              <h3 className="font-title text-xl font-bold">
                Cuéntanos qué necesitas desarrollar
              </h3>

              <p className="mt-4 leading-7 text-toledana-black/70 dark:text-toledana-white/70">
                Analizaremos las funcionalidades, integraciones,
                usuarios y procesos de tu negocio para preparar
                una propuesta con alcance y precio definidos.
              </p>

              <Link
                href={`/contacto?servicio=${encodeURIComponent(service.id)}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-toledana-black px-6 py-3 text-sm font-bold text-toledana-white hover:bg-[#006666] dark:bg-primary dark:text-toledana-black dark:hover:bg-primary/80"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <aside
        aria-labelledby="payment-info-title"
        className="border-t border-toledana-black/10 bg-secundary px-5 py-12 dark:border-primary/15 dark:bg-toledana-black/80 sm:px-8"
      >
        <div className="mx-auto flex max-w-5xl items-start gap-4">
          <Info
            className="mt-1 h-5 w-5 shrink-0 text-[#007777] dark:text-primary"
            aria-hidden="true"
          />

          <div className="space-y-3 text-sm leading-7 text-toledana-black/70 dark:text-toledana-white/70">
            <h2
              id="payment-info-title"
              className="font-title text-lg font-bold text-toledana-black dark:text-toledana-white"
            >
              Condiciones de contratación y pagos
            </h2>

            <p>
              Los precios están expresados en dólares
              estadounidenses (USD). Para pagos en soles (PEN)
              se aplicará el tipo de cambio de venta de la
              entidad de referencia indicada en la cotización,
              vigente al confirmar cada pago.
            </p>

            <p>
              La contratación requiere confirmar el alcance,
              los entregables y el calendario de pagos. Como
              esquema general proponemos 50% al inicio, 30%
              durante el avance y 20% a la entrega final.
            </p>

            <p>
              Dominio, hosting, mantenimiento, licencias y
              servicios de terceros se presupuestan por separado,
              salvo que se indique expresamente lo contrario.
              Se aplicarán las condiciones tributarias
              correspondientes al servicio contratado.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
