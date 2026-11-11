import ArticleHeader from "../_components/ArticleHeader";
import ArticleSection from "../_components/ArticleSection";
import ComparisonSection from "../_components/ComparisonSection";
import ProcessStepsSection from "../_components/ProcessStepsSection";
import RestaurantExample from "../_components/RestaurantExample";
import BusinessExamplesSection from "../_components/BusinessExamplesSection";
import NeedsSystemSection from "../_components/NeedsSystemSection";
import PersonalizationSection from "../_components/PersonalizationSection";
import ToledanaDevSection from "../_components/ToledanaDevSection";
import FAQSection from "../_components/FAQSection";
import ArticleCTA from "../_components/ArticleCTA";


import { articleData } from "./_data/articleData";

import { solutions, processes, businessTypes, systemSigns, faqs, } from "./_data/solutionData";

export const metadata = {
  title: "¿Qué es un sistema digital para negocios?",

  description:
    "Descubre qué es un sistema digital, cómo ayuda a automatizar reservas, pedidos, ventas y atención al cliente, y cuándo tu negocio necesita uno.",

  alternates: {
    canonical:
      "https://www.toledanadev.com/blog/que-es-un-sistema-digital-para-negocios",
  },
};

export default function SistemaDigitalNegociosPage() {
  return (
    <main className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-transparent dark:text-secundary">
      <article>
        <ArticleHeader
          title="¿Qué es un sistema digital para negocios y cómo puede ayudarte?"
          excerpt="Descubre qué es un sistema digital, qué procesos puede automatizar y cómo puede ayudarte a organizar reservas, pedidos, ventas, atención al cliente y otras operaciones de tu negocio."
          publishedAt="30 de septiembre de 2026"
          readingTime="10 min de lectura"
       />

        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="space-y-20">
            <ArticleSection
              id="que-es-un-sistema-digital"
              title="¿Qué es un sistema digital?"
            >
              <p>
                Un sistema digital es una solución tecnológica diseñada para
                ejecutar, organizar o automatizar uno o varios procesos de un
                negocio.
              </p>

              <p>
                A diferencia de una herramienta meramente informativa, puede
                recibir datos, procesarlos, almacenarlos y permitir que
                clientes o administradores realicen acciones específicas.
              </p>

              <p>
                Por ejemplo, un sistema puede recibir una reserva, registrar
                un pedido, guardar información de un cliente, confirmar un pago
                o mostrar esa información en un panel administrativo.
              </p>
            </ArticleSection>
            <ComparisonSection items={solutions} />

            <ProcessStepsSection steps={processes} /> 

            <RestaurantExample />

            <BusinessExamplesSection examples={businessTypes} />

            <NeedsSystemSection signs={systemSigns} />

            <PersonalizationSection />

            <ToledanaDevSection />

            <FAQSection items={faqs} />

           <ArticleCTA />
          </div>
        </div>
      </article>
    </main>
  );
}