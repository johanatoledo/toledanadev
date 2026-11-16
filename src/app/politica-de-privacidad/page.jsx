
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

const SITE_URL = "https://www.toledanadev.com";
const PRIVACY_URL = `${SITE_URL}/politica-de-privacidad`;

const PRIVACY = {
  legalName: "Johana Toledo Hernandez",
  legalAddress: "Lima, Peru",

  // Confirmar que este correo recibe solicitudes de privacidad.
  email: "toledanadev@gmail.com",

  updatedAt: "16 de noviembre de 2026",
};

const sections = [
  { id: "introduccion", title: "Introducción" },
  { id: "compromiso", title: "Nuestro compromiso" },
  { id: "responsable", title: "Responsable del tratamiento" },
  { id: "informacion", title: "Información que recopilamos" },
  { id: "finalidades", title: "Cómo utilizamos tus datos" },
  { id: "tratamiento", title: "Condiciones del tratamiento" },
  { id: "proveedores", title: "Proveedores y terceros" },
  { id: "transferencias", title: "Transferencias internacionales" },
  { id: "conservacion", title: "Conservación de datos" },
  { id: "seguridad", title: "Seguridad de la información" },
  { id: "cookies", title: "Cookies y almacenamiento local" },
  { id: "derechos", title: "Tus derechos" },
  { id: "actualizaciones", title: "Cambios en esta política" },
  { id: "contacto", title: "Cómo contactarnos" },
];

export const metadata = {
  title: "Política de privacidad",

  description:
    "Conoce cómo ToledanaDev recopila, utiliza y protege los datos personales de visitantes, potenciales clientes y clientes de nuestros servicios digitales.",

  alternates: {
    canonical: PRIVACY_URL,
  },

  openGraph: {
    title: "Política de privacidad | ToledanaDev",
    description:
      "Información sobre nuestras prácticas de privacidad, protección de datos personales y derechos de los usuarios.",
    url: PRIVACY_URL,
    siteName: "ToledanaDev",
    locale: "es_PE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const textClass =
  "leading-8 text-toledana-black/70 dark:text-toledana-white/70";

const listClass =
  "list-disc space-y-3 pl-6 leading-8 text-toledana-black/70 dark:text-toledana-white/70";

const sectionClass = "scroll-mt-28 space-y-5";

const titleClass =
  "font-title text-2xl font-bold tracking-tight text-toledana-black dark:text-toledana-white sm:text-[1.75rem]";

function PolicySection({ id, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={sectionClass}
    >
      <h2 id={`${id}-title`} className={titleClass}>
        {title}
      </h2>

      {children}
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-toledana-white text-toledana-black transition-colors duration-300 dark:bg-toledana-black dark:text-toledana-white">
      {/* Encabezado */}
      <header className="border-b border-toledana-black/10 dark:border-toledana-white/10">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-36 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-toledana-black/60 transition-colors hover:text-[#007777] dark:text-toledana-white/60 dark:hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#007777] dark:text-primary">
              Información legal
            </p>

            <h1 className="mt-5 font-title text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Política de privacidad
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-toledana-black/65 dark:text-toledana-white/65">
              La confianza comienza con la transparencia.
              Conoce cómo tratamos la información personal que
              compartes con nosotros y qué derechos tienes
              sobre tus datos.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-toledana-black/50 dark:text-toledana-white/50">
              <span>ToledanaDev</span>
              <span className="hidden h-1 w-1 rounded-full bg-current sm:block" />
              <span>
                Última actualización: {PRIVACY.updatedAt}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20 lg:px-10 lg:py-20">
        {/* Navegación lateral */}
        <aside className="lg:self-start">
          <nav
            aria-label="Índice de la política de privacidad"
            className="lg:sticky lg:top-28"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-toledana-black/50 dark:text-toledana-white/50">
              En esta página
            </h2>

            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-6 text-toledana-black/65 transition-colors hover:bg-toledana-black/5 hover:text-[#007777] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-toledana-white/65 dark:hover:bg-toledana-white/5 dark:hover:text-primary"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Documento legal */}
        <article className="min-w-0 max-w-3xl space-y-14 sm:space-y-16">
          {/* Introducción */}
          <PolicySection id="introduccion" title="Introducción">
            <p className={textClass}>
              En ToledanaDev ofrecemos servicios profesionales de
              desarrollo web, aplicaciones web, software a medida,
              comercio electrónico, automatización e integración
              de soluciones tecnológicas.
            </p>

            <p className={textClass}>
              Durante nuestras actividades podemos recibir y tratar
              información personal de quienes visitan nuestro sitio,
              solicitan información, presentan una propuesta de
              proyecto o contratan nuestros servicios.
            </p>

            <p className={textClass}>
              Esta Política de privacidad tiene como finalidad
              explicar de manera clara qué información recopilamos,
              cómo la utilizamos, con quién podemos compartirla,
              durante cuánto tiempo la conservamos y cuáles son
              tus derechos.
            </p>

            <p className={textClass}>
              El tratamiento de datos personales se realiza
              teniendo en cuenta la Ley N.º 29733, Ley de
              Protección de Datos Personales del Perú, su
              reglamento y las demás disposiciones aplicables.
            </p>
          </PolicySection>

          {/* Principios */}
          <PolicySection id="compromiso" title="Nuestro compromiso con tu privacidad">
            <p className={textClass}>
              Consideramos que la confianza es una parte esencial
              de cualquier relación profesional. Por ello,
              procuramos que el uso de la información personal
              sea transparente, limitado y acorde con las
              finalidades para las que fue proporcionada.
            </p>

            <div className="divide-y divide-toledana-black/10 border-y border-toledana-black/10 dark:divide-toledana-white/10 dark:border-toledana-white/10">
              <div className="py-6">
                <h3 className="font-title text-lg font-bold">
                  Recopilamos información necesaria
                </h3>

                <p className={`mt-3 ${textClass}`}>
                  Solicitamos los datos que resultan pertinentes
                  para comprender las necesidades de un proyecto,
                  responder consultas y gestionar nuestros servicios.
                </p>
              </div>

              <div className="py-6">
                <h3 className="font-title text-lg font-bold">
                  Respetamos la finalidad de tus datos
                </h3>

                <p className={`mt-3 ${textClass}`}>
                  La información recibida mediante una consulta
                  comercial no se utiliza automáticamente para
                  suscribirte a campañas publicitarias o listas
                  de distribución.
                </p>
              </div>

              <div className="py-6">
                <h3 className="font-title text-lg font-bold">
                  Aplicamos medidas de protección
                </h3>

                <p className={`mt-3 ${textClass}`}>
                  Incorporamos controles técnicos y organizativos
                  adecuados a las características de nuestro
                  servicio para reducir el riesgo de acceso,
                  alteración o utilización no autorizada.
                </p>
              </div>

              <div className="py-6">
                <h3 className="font-title text-lg font-bold">
                  Respetamos tus derechos
                </h3>

                <p className={`mt-3 ${textClass}`}>
                  Puedes comunicarte con nosotros para solicitar
                  información sobre el tratamiento de tus datos
                  y ejercer los derechos que te correspondan
                  conforme a la legislación aplicable.
                </p>
              </div>
            </div>
          </PolicySection>

          {/* Responsable */}
          <PolicySection id="responsable" title="¿Quién es responsable de tus datos?">
            <p className={textClass}>
              ToledanaDev es una marca comercial utilizada para
              ofrecer servicios profesionales de manera
              independiente. Actualmente, los servicios son
              prestados por una persona natural y no por una
              sociedad constituida bajo esta denominación.
            </p>

            <p className={textClass}>
              La persona responsable del tratamiento de los
              datos personales relacionados con estas
              actividades es:
            </p>

            <dl className="grid gap-5 border-l-2 border-[#007777] pl-5 dark:border-primary">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-toledana-black/50 dark:text-toledana-white/50">
                  Responsable
                </dt>

                <dd className="mt-1 font-medium">
                  {PRIVACY.legalName}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-toledana-black/50 dark:text-toledana-white/50">
                  Nombre comercial
                </dt>

                <dd className="mt-1 font-medium">
                  ToledanaDev
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-toledana-black/50 dark:text-toledana-white/50">
                  Domicilio
                </dt>

                <dd className="mt-1 font-medium">
                  {PRIVACY.legalAddress}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-toledana-black/50 dark:text-toledana-white/50">
                  Correo de contacto
                </dt>

                <dd className="mt-1">
                  <a
                    href={`mailto:${PRIVACY.email}`}
                    className="font-semibold text-[#007777] hover:underline dark:text-primary"
                  >
                    {PRIVACY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </PolicySection>

          {/* Datos */}
          <PolicySection id="informacion" title="¿Qué información recopilamos?">
            <p className={textClass}>
              La información que tratamos depende de la
              interacción que mantengas con ToledanaDev.
            </p>

            <h3 className="font-title text-lg font-bold">
              Información proporcionada directamente
            </h3>

            <p className={textClass}>
              Al completar nuestro formulario de contacto,
              podemos recibir:
            </p>

            <ul className={listClass}>
              <li>Nombre de la persona que realiza la consulta.</li>
              <li>Correo electrónico de contacto.</li>
              <li>Nombre de la empresa o negocio, si se proporciona.</li>
              <li>Servicio o plan en el que existe interés.</li>
              <li>Descripción del proyecto y mensaje enviado.</li>
            </ul>

            <h3 className="font-title text-lg font-bold">
              Información relacionada con nuestros servicios
            </h3>

            <p className={textClass}>
              Si posteriormente se establece una relación
              profesional, puede ser necesario solicitar
              información adicional para preparar propuestas,
              gestionar contratos, coordinar el desarrollo
              del proyecto y cumplir las obligaciones legales
              correspondientes.
            </p>

            <p className={textClass}>
              La información específica dependerá del servicio
              contratado y deberá comunicarse al titular
              cuando corresponda.
            </p>

            <h3 className="font-title text-lg font-bold">
              Información técnica
            </h3>

            <p className={textClass}>
              Durante el uso del formulario procesamos
              identificadores técnicos, incluida la dirección
              IP, para limitar solicitudes repetitivas
              y prevenir posibles abusos.
            </p>

            <p className={textClass}>
              Recomendamos no enviar contraseñas, información
              financiera confidencial ni datos personales
              sensibles mediante el formulario de contacto.
            </p>
          </PolicySection>

          {/* Finalidades */}
          <PolicySection id="finalidades" title="¿Para qué utilizamos tu información?">
            <p className={textClass}>
              Utilizamos los datos personales recibidos para
              desarrollar las siguientes actividades:
            </p>

            <ul className={listClass}>
              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Atender solicitudes.
                </strong>{" "}
                Responder preguntas, consultas y solicitudes
                de información sobre nuestros servicios.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Evaluar proyectos.
                </strong>{" "}
                Comprender necesidades técnicas, comerciales
                y operativas para elaborar una propuesta.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Gestionar relaciones profesionales.
                </strong>{" "}
                Coordinar actividades relacionadas con
                servicios que hayan sido contratados.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Mantener la seguridad.
                </strong>{" "}
                Prevenir envíos automatizados, abuso del
                formulario y otras actividades indebidas.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Cumplir obligaciones legales.
                </strong>{" "}
                Atender los deberes que resulten aplicables
                a nuestra actividad profesional.
              </li>
            </ul>

            <p className={textClass}>
              No utilizamos automáticamente la información
              proporcionada en el formulario para enviar
              publicidad no solicitada.
            </p>
          </PolicySection>

          {/* Condiciones */}
          <PolicySection id="tratamiento" title="Condiciones para el tratamiento de datos">
            <p className={textClass}>
              El tratamiento de información personal debe
              contar con una condición que lo permita
              conforme a la legislación aplicable.
            </p>

            <p className={textClass}>
              Cuando sea necesario obtener consentimiento,
              este deberá cumplir los requisitos legales
              correspondientes. En los supuestos previstos
              por la normativa pueden resultar aplicables
              otras condiciones que permitan tratar datos
              sin solicitar un consentimiento adicional.
            </p>

            <p className={textClass}>
              Los datos solicitados como obligatorios en el
              formulario permiten identificar y responder
              al remitente. No proporcionar esa información
              puede impedir que atendamos la solicitud.
            </p>

            <p className={textClass}>
              Cualquier finalidad distinta de la inicialmente
              informada será evaluada antes de utilizar
              los datos para ese nuevo propósito.
            </p>
          </PolicySection>

          {/* Proveedores */}
          <PolicySection id="proveedores" title="¿Con quién podemos compartir información?">
            <p className={textClass}>
              Para mantener nuestro sitio web y gestionar
              las comunicaciones, utilizamos servicios de
              terceros que pueden procesar información
              necesaria para cumplir funciones técnicas
              específicas.
            </p>

            <p className={textClass}>
              Entre los proveedores utilizados se encuentran:
            </p>

            <ul className={listClass}>
              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Resend:
                </strong>{" "}
                procesamiento y envío de los mensajes recibidos
                mediante el formulario de contacto.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Upstash:
                </strong>{" "}
                aplicación de límites de solicitudes mediante
                identificadores técnicos como la dirección IP.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Servicios de alojamiento e infraestructura:
                </strong>{" "}
                publicación de la web, procesamiento de
                solicitudes y funcionamiento de los servicios.
              </li>
            </ul>

            <p className={textClass}>
              Estos proveedores pueden acceder o tratar los
              datos estrictamente relacionados con las
              funciones que desempeñan, de acuerdo con las
              condiciones aplicables a sus servicios.
            </p>

            <p className={textClass}>
              También puede resultar necesario proporcionar
              información a autoridades competentes cuando
              exista una obligación legal válida.
            </p>
          </PolicySection>

          {/* Transferencias */}
          <PolicySection id="transferencias" title="¿Dónde se procesa tu información?">
            <p className={textClass}>
              Algunos servicios tecnológicos utilizados
              por ToledanaDev operan mediante infraestructura
              distribuida y pueden procesar información
              fuera del territorio peruano.
            </p>

            <p className={textClass}>
              El tratamiento internacional de datos
              personales debe ajustarse a las condiciones
              y garantías exigidas por las normas de
              protección de datos que resulten aplicables.
            </p>

            <p className={textClass}>
              Los países de destino, los destinatarios y
              las condiciones concretas de estas operaciones
              deben identificarse conforme a los servicios
              y configuraciones efectivamente utilizados.
            </p>
          </PolicySection>

          {/* Conservación */}
          <PolicySection id="conservacion" title="¿Durante cuánto tiempo conservamos tu información?">
            <p className={textClass}>
              Procuramos conservar los datos personales
              únicamente durante el tiempo necesario para
              cumplir las finalidades para las que fueron
              recopilados y las obligaciones legales
              correspondientes.
            </p>

            <p className={textClass}>
              Los datos enviados mediante el formulario
              de contacto se conservan durante el tiempo
              necesario para responder la consulta y
              realizar un seguimiento razonable de la
              solicitud.
            </p>

            <p className={textClass}>
              Si se establece una relación contractual,
              los datos necesarios para la prestación del
              servicio podrán conservarse durante la
              ejecución del proyecto de diseño, desarrollo,
              hosting o mantenimiento web y posteriormente
              durante los plazos exigidos por la legislación
              aplicable.
            </p>

            <p className={textClass}>
              Para determinar estos periodos consideramos
              la finalidad, naturaleza de los datos,
              obligaciones legales y necesidad de atender
              posibles solicitudes o controversias.
            </p>

            <p className={textClass}>
              Cuando la información deje de ser necesaria
              y no exista una obligación que justifique
              su conservación, deberá eliminarse o
              anonimizarse mediante medidas apropiadas.
            </p>
          </PolicySection>

          {/* Seguridad */}
          <PolicySection id="seguridad" title="¿Cómo protegemos tu información?">
            <p className={textClass}>
              La seguridad de la información forma parte
              del desarrollo y funcionamiento de nuestros
              servicios digitales.
            </p>

            <p className={textClass}>
              Nuestro formulario de contacto incorpora
              validaciones del lado del servidor,
              mecanismos de detección de envíos
              automatizados y controles que limitan
              la frecuencia de las solicitudes.
            </p>

            <p className={textClass}>
              También procuramos restringir el acceso
              a la información y evitar su exposición
              innecesaria durante el funcionamiento
              de los servicios.
            </p>

            <p className={textClass}>
              Ningún sistema de transmisión o
              almacenamiento electrónico puede garantizar
              una seguridad absoluta. Por ello, las
              medidas de protección deben revisarse
              y mantenerse de manera continua.
            </p>
          </PolicySection>

          {/* Cookies */}
          <PolicySection id="cookies" title="Cookies y tecnologías de almacenamiento">
            <p className={textClass}>
              ToledanaDev puede utilizar tecnologías
              de almacenamiento del navegador para
              mantener determinadas preferencias
              funcionales del sitio web.
            </p>

            <p className={textClass}>
              Actualmente, hemos identificado el uso
              de almacenamiento local para recordar
              la preferencia de apariencia del
              visitante, como el modo oscuro o claro.
            </p>

            <p className={textClass}>
              Esta preferencia se guarda mediante
              la clave local denominada{" "}
              <code className="rounded bg-toledana-black/5 px-1.5 py-0.5 text-sm dark:bg-toledana-white/10">
                darkMode
              </code>
              .
            </p>

            <p className={textClass}>
              En nuestra revisión inicial no se
              identificaron cookies de seguimiento
              publicitario ni de Google Analytics
              instaladas directamente por ToledanaDev.
            </p>

            <p className={textClass}>
              El almacenamiento funcional puede
              administrarse o eliminarse mediante
              las opciones de privacidad y datos
              del navegador.
            </p>

            <p className={textClass}>
              Si posteriormente incorporamos
              herramientas de analítica, publicidad
              u otras tecnologías de seguimiento,
              actualizaremos la información
              correspondiente e implementaremos
              los mecanismos exigidos cuando resulten
              aplicables.
            </p>
          </PolicySection>

          {/* Derechos */}
          <PolicySection id="derechos" title="Tus derechos sobre tus datos personales">
            <p className={textClass}>
              De acuerdo con la legislación de
              protección de datos aplicable, puedes
              ejercer los derechos que correspondan
              respecto de tu información personal.
            </p>

            <ul className={listClass}>
              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Acceso:
                </strong>{" "}
                conocer qué datos personales tratamos
                y recibir información sobre su uso.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Rectificación:
                </strong>{" "}
                solicitar la corrección de datos
                inexactos o desactualizados.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Cancelación:
                </strong>{" "}
                solicitar la cancelación de tus
                datos cuando corresponda legalmente.
              </li>

              <li>
                <strong className="text-toledana-black dark:text-toledana-white">
                  Oposición:
                </strong>{" "}
                oponerte a determinados tratamientos
                en los casos previstos por la ley.
              </li>
            </ul>

            <p className={textClass}>
              Puedes presentar una solicitud
              relacionada con tus datos personales
              a través de nuestro correo de contacto.
            </p>

            <p className={textClass}>
              Con el fin de proteger la información,
              puede ser necesario verificar
              razonablemente la identidad de quien
              presenta la solicitud.
            </p>

            <p className={textClass}>
              Las solicitudes se atenderán de
              conformidad con los procedimientos
              y plazos previstos por la normativa
              aplicable.
            </p>

            <p className={textClass}>
              Si consideras que tus derechos no
              han sido debidamente atendidos,
              puedes acudir a la Autoridad Nacional
              de Protección de Datos Personales
              del Perú.
            </p>

            <a
              href="https://www.gob.pe/anpd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#007777] hover:underline dark:text-primary"
            >
              Autoridad Nacional de Protección de Datos Personales
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </PolicySection>

          {/* Actualizaciones */}
          <PolicySection id="actualizaciones" title="Actualizaciones de esta política">
            <p className={textClass}>
              Podemos actualizar esta Política
              de privacidad cuando cambien
              nuestros servicios, las tecnologías
              utilizadas, las prácticas de
              tratamiento de datos o los
              requisitos legales aplicables.
            </p>

            <p className={textClass}>
              La versión vigente estará disponible
              en esta página junto con su fecha
              de última actualización.
            </p>

            <p className={textClass}>
              Si una modificación exige comunicar
              información adicional a los
              titulares u obtener un nuevo
              consentimiento, se aplicarán
              los procedimientos correspondientes.
            </p>
          </PolicySection>

          {/* Contacto */}
          <PolicySection id="contacto" title="Cómo contactar con nosotros">
            <p className={textClass}>
              Si tienes preguntas sobre esta
              Política de privacidad o deseas
              realizar una solicitud relacionada
              con el tratamiento de tus datos
              personales, puedes escribirnos
              directamente.
            </p>

            <div className="rounded-2xl border border-toledana-black/10 bg-white p-6 dark:border-toledana-white/10 dark:bg-toledana-white/5 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[#007777] dark:text-primary">
                  <ShieldCheck
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-title text-lg font-bold">
                    Contacto de privacidad
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-toledana-black/60 dark:text-toledana-white/60">
                    Puedes comunicarte con la persona
                    responsable de ToledanaDev mediante:
                  </p>

                  <a
                    href={`mailto:${PRIVACY.email}?subject=Consulta%20sobre%20privacidad`}
                    className="mt-4 inline-block break-all font-semibold text-[#007777] underline underline-offset-4 dark:text-primary"
                  >
                    {PRIVACY.email}
                  </a>
                </div>
              </div>
            </div>
          </PolicySection>

          {/* Cierre */}
          <div className="border-t border-toledana-black/10 pt-8 dark:border-toledana-white/10">
            <p className="text-sm leading-7 text-toledana-black/50 dark:text-toledana-white/50">
              Esta política se aplica al sitio web
              de ToledanaDev y al tratamiento de
              información personal descrito en
              las secciones anteriores.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#007777] transition-colors hover:underline dark:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a ToledanaDev
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
