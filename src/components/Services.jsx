
import { servicesList } from "@/data/serviceList";
import ServiceCard from "@/components/services/ServiceCard";

export default function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="relative w-full bg-toledana-white px-5 py-16 transition-colors duration-300 dark:bg-toledana-black sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2
            id="services-title"
            className="font-title text-3xl font-bold tracking-tight text-toledana-black sm:text-4xl dark:text-toledana-white"
          >
            NUESTROS{" "}
            <span className="italic text-[#007777] dark:text-primary">
              SERVICIOS
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-accent shadow-[0_0_8px_rgba(255,0,60,0.35)]"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-toledana-black/70 dark:text-toledana-white/70">
            Soluciones digitales adaptadas a tu negocio.
            Explora nuestros servicios, conoce la inversión
            inicial y elige cómo quieres comenzar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
