import ContactSection from "./_components/ContactSection";

export const metadata = {
  title: "Contacto | Soluciones digitales para negocios",

  description:
    "Cuéntanos qué proceso quieres digitalizar. En ToledanaDev desarrollamos páginas web, software a medida, aplicaciones web, automatizaciones y soluciones con inteligencia artificial.",

  alternates: {
    canonical: "https://www.toledanadev.com/contacto",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-12 pt-32 text-center sm:px-8 sm:pb-16 sm:pt-36 lg:px-10">
          <h1 className="max-w-5xl font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Conversemos sobre la solución digital que necesita tu negocio
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl dark:text-white/70">
            Cuéntanos qué proceso quieres mejorar, automatizar o digitalizar.
            Analizaremos tu necesidad para ayudarte a encontrar una solución
            tecnológica adaptada a tu negocio.
          </p>
        </div>
      </header>

      <ContactSection />
    </main>
  );
}