import ArticleHeader from "./_components/ArticleHeader";
import ArticleSection from "./_components/ArticleSection";
import ComparisonSection from "./_components/ComparisonSection";
import ProcessesSection from "./_components/ProcessesSection";
import RestaurantExample from "./_components/RestaurantExample";
import BusinessTypesSection from "./_components/BusinessTypesSection";
import NeedsSystemSection from "./_components/NeedsSystemSection";
import PersonalizationSection from "./_components/PersonalizationSection";
import ToledanaDevSection from "./_components/ToledanaDevSection";
import FAQSection from "./_components/FAQSection";
import ArticleCTA from "./_components/ArticleCTA";

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
        <ArticleHeader />

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

            <ComparisonSection />

            <ProcessesSection />

            <RestaurantExample />

            <BusinessTypesSection />

            <NeedsSystemSection />

            <PersonalizationSection />

            <ToledanaDevSection />

            <FAQSection />

            <ArticleCTA />
          </div>
        </div>
      </article>
    </main>
  );
}