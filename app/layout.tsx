import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.cespedverde.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Césped Verde | Jardinería y Paisajismo en Mendoza",
    template: "%s | Césped Verde Mendoza",
  },
  description:
    "Servicio profesional de jardinería, mantenimiento de espacios verdes, riego y paisajismo en Mendoza. Pedí tu presupuesto sin cargo.",
  keywords: [
    "jardinería Mendoza",
    "jardinero Mendoza",
    "paisajismo Mendoza",
    "mantenimiento de jardines Mendoza",
    "riego por aspersión Mendoza",
    "espacios verdes Mendoza",
  ],
  authors: [{ name: "Césped Verde" }],
  creator: "Césped Verde",
  publisher: "Césped Verde",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Césped Verde",
    title: "Césped Verde | Jardinería y Paisajismo en Mendoza",
    description:
      "Diseñamos, cuidamos y transformamos jardines en Mendoza. Soluciones pensadas para el clima local.",
    images: [
      {
        url: "/images/hero-jardin-mendoza.webp",
        width: 1536,
        height: 1024,
        alt: "Jardín residencial diseñado por Césped Verde en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Césped Verde | Jardinería en Mendoza",
    description: "Jardines que se disfrutan, soluciones que perduran.",
    images: ["/images/hero-jardin-mendoza.webp"],
  },
  category: "Jardinería y paisajismo",
};

export const viewport: Viewport = {
  themeColor: "#183e2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
