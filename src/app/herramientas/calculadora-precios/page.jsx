
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Info, Calculator, ReceiptText, TrendingUp, } from "lucide-react";
import PriceCalculator from "@/components/tools/pricing/PriceCalculator";


const PAGE_URL = "https://www.toledanadev.com/herramientas/calculadora-precios";
const PAGE_TITLE = "Calculadora de Precios de Venta y Ganancias Gratis";
const PAGE_DESCRIPTION = "Calcula gratis precios de venta y ganancias en Perú. Incluye costos, gastos generales, comisiones, IGV y estimaciones de impuestos.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: `${PAGE_TITLE} | ToledanaDev`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "ToledanaDev",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "/branding/toledanadev-og.webp",
        width: 1200,
        height: 630,
        alt: "Calculadora de precios y ganancias ToledanaDev",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ToledanaDev`,
    description: PAGE_DESCRIPTION,
    images: ["/branding/toledanadev-og.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BENEFITS = [
  "Calcula el precio de venta considerando los costos reales de tus productos.",
  "Distribuye los gastos generales mensuales entre las unidades previstas.",
  "Incluye comisiones fijas y porcentuales por cada venta.",
  "Agrega IGV cuando corresponde a una operación gravada.",
  "Estima beneficios antes y después de una tasa configurable de Impuesto a la Renta.",
  "Consulta tu margen de ganancia y rentabilidad estimada.",
];

const CALCULATION_STEPS = [
  {
    number: "01",
    title: "Registra los costos",
    description:
      "Ingresa el costo de compra, transporte, empaque y otros gastos relacionados con cada producto.",
  },
  {
    number: "02",
    title: "Configura los gastos generales",
    description:
      "Indica tus gastos mensuales y las unidades previstas de venta para distribuirlos entre tus productos.",
  },
  {
    number: "03",
    title: "Configura impuestos y comisiones",
    description:
      "Selecciona el tratamiento del IGV, introduce las comisiones y configura opcionalmente una tasa estimada de Impuesto a la Renta.",
  },
  {
    number: "04",
    title: "Calcula tu rentabilidad",
    description:
      "Define el margen deseado y obtén un precio de venta sugerido junto con una estimación de ganancias.",
  },
];

const FAQS = [
  {
    question: "¿La calculadora de precios es gratuita?",
    answer:
      "Sí. Puedes utilizarla gratuitamente y sin registrarte para estimar precios de venta y ganancias.",
  },
  {
    question: "¿La calculadora incluye el IGV en Perú?",
    answer:
      "Sí. Permite añadir el 18% correspondiente al IGV e IPM en operaciones sujetas a la tasa general. También contempla un crédito fiscal de compra bajo los supuestos simplificados del formulario.",
  },
  {
    question: "¿La ganancia calculada es mi utilidad neta real?",
    answer:
      "No necesariamente. Es una estimación que depende de los costos, gastos, comisiones e impuestos configurados. Puede diferir de la utilidad contable y tributaria real.",
  },
  {
    question: "¿Cómo se distribuyen los gastos generales?",
    answer:
      "Se dividen los gastos mensuales entre las unidades previstas de venta. Este método es simplificado y puede no representar correctamente productos con costos diferentes.",
  },
  {
    question: "¿Calcula automáticamente el Impuesto a la Renta?",
    answer:
      "La herramienta utiliza una tasa efectiva estimada ingresada por el usuario. No determina automáticamente los impuestos correspondientes a los distintos regímenes tributarios de SUNAT.",
  },
];


// ESTILOS COMPARTIDOS


const sectionTitle = "font-title text-2xl font-semibold tracking-tight text-toledana-black dark:text-toledana-white sm:text-3xl";
const bodyText = "text-base leading-8 text-toledana-black/75 dark:text-toledana-white/75";
const cardStyle = "rounded-2xl border border-toledana-black/10 bg-secundary p-6 transition-colors duration-300 hover:border-primary/60 dark:border-primary/20 dark:bg-toledana-black/80 dark:hover:border-primary/60";
const accentText = "text-[#007777] dark:text-primary";

// PÁGINA

export default function CalculadoraPreciosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 pb-24 pt-12 text-toledana-black dark:text-toledana-white sm:px-6 lg:pt-16">

      {/* ELEMENTOS DECORATIVOS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-96 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* NAVEGACIÓN */}

        <nav
          aria-label="Ruta de navegación"
          className="mb-12"
        >
          <Link
            href="/herramientas"
            className={`inline-flex min-h-11 items-center gap-2 text-sm font-semibold transition-colors hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${accentText}`}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Volver a herramientas
          </Link>
        </nav>

        {/* ENCABEZADO */}

        <header className="mb-14 max-w-4xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
            <Calculator
              size={16}
              aria-hidden="true"
              className={accentText}
            />

            <span
              className={`text-xs font-bold uppercase tracking-widest ${accentText}`}
            >
              Herramientas gratuitas ToledanaDev
            </span>
          </div>

          <h1 className="font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Calculadora de{" "}
            <span className={accentText}>
              precios y ganancias
            </span>
          </h1>

          <p className={`mt-6 max-w-3xl sm:text-lg ${bodyText}`}>
            Calcula cuánto deberías cobrar por tus productos
            considerando costos de compra, empaques, transporte,
            gastos generales, comisiones e impuestos estimados.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-toledana-black/60 dark:text-toledana-white/60">
            Una herramienta gratuita diseñada para comerciantes
            y emprendedores que desean planificar sus precios
            y conocer la rentabilidad estimada de sus ventas.
          </p>
        </header>

        {/* CALCULADORA */}

        <section
          aria-label="Calculadora interactiva de precios y ganancias"
        >
          <PriceCalculator />
        </section>

        {/* BENEFICIOS */}

        <section
          aria-labelledby="benefits-title"
          className="mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <Calculator
              size={27}
              aria-hidden="true"
              className={accentText}
            />

            <h2
              id="benefits-title"
              className={sectionTitle}
            >
              ¿Qué puedes calcular?
            </h2>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className={cardStyle}
              >
                <CheckCircle2
                  size={23}
                  aria-hidden="true"
                  className={`mb-4 ${accentText}`}
                />

                <p className={bodyText}>
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* PASOS */}

        <section
          aria-labelledby="steps-title"
          className="mt-24"
        >
          <h2
            id="steps-title"
            className={sectionTitle}
          >
            Cómo utilizar la calculadora
          </h2>

          <p className={`mt-4 max-w-3xl ${bodyText}`}>
            Obtén un precio de venta sugerido siguiendo
            estos cuatro pasos.
          </p>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2">
            {CALCULATION_STEPS.map((step) => (
              <li
                key={step.number}
                className={cardStyle}
              >
                <span
                  className={`font-title text-3xl font-bold ${accentText}`}
                >
                  {step.number}
                </span>

                <h3 className="mt-5 font-title text-xl font-semibold">
                  {step.title}
                </h3>

                <p className={`mt-3 ${bodyText}`}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* EXPLICACIÓN */}

        <section
          aria-labelledby="pricing-title"
          className="mt-24 max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <TrendingUp
              size={27}
              aria-hidden="true"
              className={accentText}
            />

            <h2
              id="pricing-title"
              className={sectionTitle}
            >
              ¿Cómo se calcula el precio de venta?
            </h2>
          </div>

          <p className={`mt-6 ${bodyText}`}>
            Para determinar un precio de venta, primero debes
            conocer cuánto cuesta adquirir y vender cada producto.
            También es importante considerar los gastos generales
            que necesita cubrir tu negocio.
          </p>

          <p className={`mt-4 ${bodyText}`}>
            Nuestra calculadora incorpora los costos por unidad,
            una distribución de los gastos generales mensuales
            y las comisiones de venta.
          </p>

          <p className={`mt-4 ${bodyText}`}>
            Para operaciones configuradas como gravadas, agrega
            el IGV al precio final. Opcionalmente, permite estimar
            un impuesto sobre el beneficio mediante una tasa
            definida por el usuario.
          </p>

          {/* EXPLICACIÓN DEL MARGEN */}

          <div className="mt-10 rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-8">

            <h3
              className={`font-title text-xl font-semibold ${accentText}`}
            >
              ¿Qué significa el margen de ganancia?
            </h3>

            <p className={`mt-4 ${bodyText}`}>
              El margen representa el porcentaje del valor
              de venta, sin IGV, que queda como beneficio
              después de descontar los costos y comisiones
              considerados en el cálculo.
            </p>

            <p className={`mt-4 ${bodyText}`}>
              Cuando introduces una tasa estimada de Impuesto
              a la Renta, el resultado también considera
              esa estimación.
            </p>
          </div>
        </section>

        {/* IMPUESTOS */}

        <section
          aria-labelledby="taxes-title"
          className="mt-24 max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <ReceiptText
              size={27}
              aria-hidden="true"
              className={accentText}
            />

            <h2
              id="taxes-title"
              className={sectionTitle}
            >
              IGV e impuestos en Perú
            </h2>
          </div>

          <div className="mt-8 space-y-8">

            <article className={cardStyle}>

              <h3 className="font-title text-xl font-semibold">
                Impuesto General a las Ventas
              </h3>

              <p className={`mt-4 ${bodyText}`}>
                Para operaciones sujetas a la tasa general,
                la calculadora utiliza el 18% correspondiente
                al IGV e IPM.
              </p>

              <p className={`mt-4 ${bodyText}`}>
                También permite indicar si una compra incluye
                IGV que constituye crédito fiscal válido,
                bajo los supuestos simplificados de la herramienta.
              </p>
            </article>

            <article className={cardStyle}>

              <h3 className="font-title text-xl font-semibold">
                Impuesto a la Renta
              </h3>

              <p className={`mt-4 ${bodyText}`}>
                El Impuesto a la Renta depende del régimen
                tributario y de las condiciones particulares
                de cada negocio.
              </p>

              <p className={`mt-4 ${bodyText}`}>
                La calculadora permite introducir una tasa
                efectiva estimada para simular el beneficio
                después de impuestos.
              </p>

              <a
                href="https://www.gob.pe/sunat"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${accentText}`}
              >
                Consultar información oficial de SUNAT
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        {/* AVISO IMPORTANTE */}

        <aside
          aria-labelledby="notice-title"
          className="mt-12 rounded-2xl border border-accent/40 bg-accent/5 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">

            <Info
              size={25}
              aria-hidden="true"
              className="mt-1 shrink-0 text-accent"
            />

            <div>
              <h2
                id="notice-title"
                className="font-title text-xl font-semibold text-toledana-black dark:text-toledana-white"
              >
                Información importante
              </h2>

              <p className={`mt-4 ${bodyText}`}>
                Los resultados sirven para planificar precios
                y estimar la rentabilidad de tus productos,
                pero no reemplazan la contabilidad ni la
                determinación tributaria de tu negocio.
              </p>

              <p className={`mt-3 ${bodyText}`}>
                La ganancia neta estimada depende de los
                costos, gastos, comisiones y tasas configuradas.
                Puede diferir de la utilidad contable
                o tributaria real.
              </p>
            </div>
          </div>
        </aside>

        {/* PREGUNTAS FRECUENTES */}

        <section
          aria-labelledby="faq-title"
          className="mt-24 max-w-4xl"
        >
          <h2
            id="faq-title"
            className={sectionTitle}
          >
            Preguntas frecuentes
          </h2>

          <div className="mt-8 divide-y divide-toledana-black/10 overflow-hidden rounded-2xl border border-toledana-black/10 bg-secundary px-6 dark:divide-primary/15 dark:border-primary/20 dark:bg-toledana-black/80">

            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group py-5"
              >
                <summary className="cursor-pointer font-semibold leading-7 text-toledana-black transition-colors marker:text-[#007777] hover:text-[#007777] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-toledana-white dark:marker:text-primary dark:hover:text-primary">
                  {faq.question}
                </summary>

                <p className={`mt-4 ${bodyText}`}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* EXPLORAR MÁS HERRAMIENTAS */}

        <section className="relative mt-24 overflow-hidden rounded-2xl border border-primary/30 bg-toledana-black p-7 text-toledana-white sm:p-10">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative">
            <h2 className="font-title text-2xl font-semibold sm:text-3xl">
              Más herramientas para emprendedores
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-toledana-white/75">
              Descubre los recursos gratuitos de ToledanaDev
              para analizar costos, calcular ganancias
              y mejorar la gestión de tu negocio.
            </p>

            <Link
              href="/herramientas"
              className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-xl border border-primary bg-primary px-6 py-3 font-bold text-toledana-black transition-colors hover:bg-transparent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explorar herramientas

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
