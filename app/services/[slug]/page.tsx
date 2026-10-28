import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/components/services/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = services[(await params).slug];
  return content ? content.metadata : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!services[slug]) notFound();
  return <ServicePage slug={slug} />;
}
