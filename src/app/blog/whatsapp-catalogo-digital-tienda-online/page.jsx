import Link from "next/link";

import ArticleHeader from "../_components/ArticleHeader";
import ArticleSection from "../_components/ArticleSection";
import ArticleList from "../_components/ArticleList";
import ComparisonSection from "../_components/ComparisonSection";
import BusinessExamplesSection from "../_components/BusinessExamplesSection";
import ProcessStepsSection from "../_components/ProcessStepsSection";
import FAQSection from "../_components/FAQSection";
import ArticleCTA from "../_components/ArticleCTA";

import { articleData } from "./_data/articleData";

const articleUrl =
  "https://www.toledanadev.com/blog/whatsapp-catalogo-digital-tienda-online";

export const metadata = {
  title:
    "¿WhatsApp es suficiente para vender? Catálogo digital vs tienda online",

  description:
    "Descubre cuándo WhatsApp es suficiente para vender y cuándo tu negocio necesita un catálogo digital, una tienda online o un sistema personalizado.",

  alternates: {
    canonical: articleUrl,
  },

  openGraph: {
    title:
      "¿WhatsApp es suficiente para vender? Catálogo digital vs tienda online",
    description:
      "Aprende cuándo seguir vendiendo por WhatsApp y cuándo dar el siguiente paso hacia un catálogo digital, ecommerce o sistema personalizado.",
    url: articleUrl,
    siteName: "ToledanaDev",
    locale: "es_PE",
    type: "article",
    images: [
      {
        url:
          "/blog/whatsapp-catalogo-tienda-online-og.webp",
        width: 1200,
        height: 630,
        alt:
          "WhatsApp, catálogo digital y tienda online para negocios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "¿WhatsApp es suficiente para vender?",
    description:
      "Descubre cuándo tu negocio necesita pasar de WhatsApp a un catálogo, ecommerce o sistema digital.",
    images: [
      "/blog/whatsapp-catalogo-tienda-online-og.webp",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  
  "@type": "BlogPosting",
  
  headline: articleData.title,

  description:
    "Descubre cuándo WhatsApp es suficiente para vender y cuándo tu negocio necesita un catálogo digital, una tienda online o un sistema personalizado.",

  url: articleUrl,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },

  datePublished: "2026-10-26",

  dateModified: "2026-10-26",

  author: {
    "@type": "Organization",
    name: "ToledanaDev",
    url: "https://www.toledanadev.com",
  },

  publisher: {
    "@type": "Organization",
    name: "ToledanaDev",
    url: "https://www.toledanadev.com",
  },

  image:
    "https://www.toledanadev.com/blog/whatsapp-catalogo-tienda-online-og.webp",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item:
        "https://www.toledanadev.com",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item:
        "https://www.toledanadev.com/blog",
    },

    {
      "@type": "ListItem",
      position: 3,
      name:
        "WhatsApp, catálogo digital o tienda online",
      item: articleUrl,
    },
  ],
};

export default function WhatsAppCatalogoTiendaArticlePage() {
  const {
    title,
    excerpt,
    publishedAt,
    readingTime,
    intro,
    mainQuestion,
    whatsappEnough,
    whatsappProblem,
    warningSigns,
    whatsappBusiness,
    catalog,
    ecommerce,
    customSystem,
    comparison,
    examples,
    diagnosisQuestions,
    automation,
    humanVsAutomation,
    digitizationSteps,
    faq,
  } = articleData;

  return (
    <main className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify( articleJsonLd ), }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify( breadcrumbJsonLd ),}}
      />

      <ArticleHeader
        title={title}
        excerpt={excerpt}
        publishedAt={publishedAt}
        readingTime={readingTime}
      />

      <article className="mx-auto max-w-4xl space-y-16 px-5 py-14 sm:px-8 sm:py-20">
        <section className="space-y-5 text-lg leading-8 text-black/70 dark:text-white/70">
          {intro.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}

          <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 font-medium text-black dark:text-white">
            {mainQuestion}
          </blockquote>
        </section>

        <ArticleSection
          id="vender-por-whatsapp"
          title={whatsappEnough.title}
        >
          {whatsappEnough.paragraphs.map( (paragraph) => ( <p key={paragraph}> {paragraph} </p> )
          )}

          <ArticleList
            items={ whatsappEnough.items }
          />

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 font-semibold text-black dark:text-white">
            { whatsappEnough.highlight }
          </div>
        </ArticleSection>

        <ArticleSection
          id="cuando-whatsapp-no-es-suficiente"
          title={whatsappProblem.title}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {whatsappProblem.questions.map(
              (question) => (
                <div
                  key={question}
                  className="rounded-xl border border-black/10 p-4 dark:border-white/10"
                >
                  {question}
                </div>
              )
            )}
          </div>

          {whatsappProblem.paragraphs.map(
            (paragraph) => ( <p key={paragraph}> {paragraph} </p> )
          )}
        </ArticleSection>

        <ArticleSection
          id="senales-digitalizacion"
          title={warningSigns.title}
        >
          <div className="space-y-5">
            {warningSigns.items.map(
              (item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/10 p-5 dark:border-white/10"
                >
                  <h3 className="font-title text-lg font-bold text-black dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3"> { item.description } </p>
                </article>
              )
            )}
          </div>
        </ArticleSection>

        <ArticleSection
          id="whatsapp-business"
          title={whatsappBusiness.title}
        >
          {whatsappBusiness.paragraphs.map(
            (paragraph) => ( <p key={paragraph}> {paragraph} </p>
            )
          )}

          <ArticleList
            items={ whatsappBusiness.items }
          />
        </ArticleSection>

        <ArticleSection
          id="catalogo-digital"
          title={catalog.title}
        >
          {catalog.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

          <h3 className="font-title text-xl font-bold text-black dark:text-white">
            Qué puede hacer el cliente
          </h3>

          <ArticleList
            items={catalog.capabilities}
          />

          <h3 className="font-title text-xl font-bold text-black dark:text-white">
            Negocios donde puede funcionar especialmente bien
          </h3>

          <ArticleList
            items={catalog.businesses}
          />
        </ArticleSection>

        <ArticleSection
          id="tienda-online"
          title={ecommerce.title}
        >
          {ecommerce.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

          <ProcessStepsSection
            steps={ecommerce.process.map(
              (description) => ({
                title:
                  description,
                description: "",
              })
            )}
          />

          <h3 className="font-title text-xl font-bold text-black dark:text-white">
            Una tienda online suele tener sentido cuando
          </h3>

          <ArticleList
            items={
              ecommerce.whenUseful
            }
          />
        </ArticleSection>

        <ArticleSection
          id="sistema-digital"
          title={customSystem.title}
        >
          {customSystem.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

          <ArticleList
            items={
              customSystem.items
            }
          />

          <p>
            Si quieres profundizar en
            este concepto, puedes leer{" "}
            <Link
              href="/blog/que-es-un-sistema-digital-para-negocios"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              qué es un sistema digital
              para negocios
            </Link>
            .
          </p>
        </ArticleSection>

        <ArticleSection
          id="comparacion"
          title="WhatsApp, catálogo, ecommerce o sistema: comparación rápida"
        >
          <ComparisonSection
            items={comparison}
          />
        </ArticleSection>

        <ArticleSection
          id="ejemplos"
          title="Cómo cambia la solución según el tipo de negocio"
        >
          <BusinessExamplesSection
            examples={examples}
          />
        </ArticleSection>

        <ArticleSection
          id="diagnostico"
          title="Entonces, ¿cuál necesita tu negocio?"
        >
          <p>
            La respuesta depende menos
            del tamaño de tu empresa y
            más de tus procesos.
          </p>

          <p>
            Para detectar dónde existe
            una oportunidad real de
            digitalización, empieza por
            responder estas preguntas:
          </p>

          <ArticleList
            items={
              diagnosisQuestions
            }
          />

          <p>
            No siempre necesitas empezar
            con un sistema grande.
            Muchas veces el mejor camino
            es resolver primero el
            proceso que más tiempo
            consume.
          </p>
        </ArticleSection>

        <ArticleSection
          id="automatizacion"
          title={automation.title}
        >
          {automation.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-5 text-center dark:border-white/10">
              <p className="text-2xl font-bold text-primary">
                {
                  automation
                    .calculation
                    .messages
                }
              </p>

              <p className="mt-2 text-sm">
                por día
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-5 text-center dark:border-white/10">
              <p className="text-2xl font-bold text-primary">
                {
                  automation
                    .calculation
                    .timePerMessage
                }
              </p>

              <p className="mt-2 text-sm">
                por conversación
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-2xl font-bold text-primary">
                {
                  automation
                    .calculation
                    .total
                }
              </p>

              <p className="mt-2 text-sm">
                en atención
              </p>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection
          id="automatizar-vs-atencion-humana"
          title={
            humanVsAutomation.title
          }
        >
          {humanVsAutomation.paragraphs.map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-title text-xl font-bold text-black dark:text-white">
                Automatizar
              </h3>

              <div className="mt-4">
                <ArticleList
                  items={
                    humanVsAutomation.automate
                  }
                />
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
              <h3 className="font-title text-xl font-bold text-black dark:text-white">
                Mantener atención humana
              </h3>

              <div className="mt-4">
                <ArticleList
                  items={
                    humanVsAutomation.human
                  }
                />
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection
          id="como-empezar"
          title="Cómo empezar a digitalizar tu negocio"
        >
          <p>
            No necesitas implementar
            todo al mismo tiempo.
          </p>

          <ProcessStepsSection
            steps={
              digitizationSteps
            }
          />
        </ArticleSection>

        <ArticleSection
          id="solucion-adecuada"
          title="¿Cómo saber qué solución es adecuada para tu negocio?"
        >
          <p>
            No necesitas conocer
            términos técnicos ni decidir
            por tu cuenta si debes
            construir una página web,
            ecommerce o sistema.
          </p>

          <p>
            Lo importante es explicar
            cómo funciona actualmente tu
            negocio, qué tareas haces
            manualmente, qué problemas
            se repiten y qué quieres
            mejorar.
          </p>

          <p>
            En ToledanaDev desarrollamos
            soluciones digitales
            adaptadas a procesos reales,
            desde catálogos digitales y
            tiendas online hasta sistemas
            personalizados,
            automatizaciones e
            inteligencia artificial.
          </p>

          <p className="font-semibold text-black dark:text-white">
            La tecnología debe adaptarse
            al negocio. No al revés.
          </p>

          <Link
            href="/servicios"
            className="inline-flex font-semibold text-primary underline-offset-4 hover:underline"
          >
            Conoce nuestros servicios
            digitales →
          </Link>
        </ArticleSection>

        <ArticleSection
          id="preguntas-frecuentes"
          title="Preguntas frecuentes"
        >
          <FAQSection
            items={faq}
          />
        </ArticleSection>

        <ArticleSection
          id="conclusion"
          title="Convierte WhatsApp en parte de tu sistema, no en todo tu sistema"
        >
          <p>
            WhatsApp puede seguir siendo
            uno de los canales más
            valiosos para hablar con tus
            clientes.
          </p>

          <p>
            Pero no necesariamente tiene
            que funcionar como catálogo,
            sistema de pedidos,
            inventario, agenda y panel
            administrativo al mismo
            tiempo.
          </p>

          <p>
            Si tu negocio está empezando
            a crecer y cada vez dedicas
            más tiempo a tareas
            repetitivas, probablemente
            sea momento de evaluar qué
            procesos puedes digitalizar.
          </p>

          <p>
            El objetivo no es añadir
            tecnología por añadirla. El
            objetivo es utilizar la
            tecnología adecuada para
            simplificar tu negocio.
          </p>
        </ArticleSection>

        <ArticleCTA
          title="¿Tu negocio depende demasiado de procesos manuales?"
          description="Cuéntanos cómo gestionas actualmente tus pedidos, reservas, ventas o atención al cliente. Podemos ayudarte a identificar qué procesos vale la pena digitalizar y qué tipo de solución necesitas."
          href="/contacto?servicio=soluciones-digitales"
          label="Analizar mi negocio"
        />
      </article>
    </main>
  );
}