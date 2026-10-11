
import { notFound } from "next/navigation";

import { servicesList } from "@/data/serviceList";
import { serviceDetails } from "@/data/serviceDetails";
import ServiceDetail from "@/components/services/ServiceDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = servicesList.find(
    (item) => item.id === slug
  );

  const details = serviceDetails[slug];

  if (!service || !details) {
    return {
      title: "Servicio no encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `https://www.toledanadev.com/servicios/${slug}`;

  const title = `${service.title} y precios`;
  const description = details.introduction;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ToledanaDev`,
      description,
      url,
      type: "website",
      siteName: "ToledanaDev",
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ToledanaDev`,
      description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = servicesList.find(
    (item) => item.id === slug
  );

  const details = serviceDetails[slug];

  if (!service || !details) {
    notFound();
  }

  return (
    <ServiceDetail
      service={service}
      details={details}
    />
  );
}
