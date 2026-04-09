import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inteliabyte | Tecnología, Automatización e Inteligencia Artificial Empresarial",
  description: "Inteliabyte transforma operaciones empresariales con tecnología avanzada, automatización inteligente, ciberseguridad e IA aplicada. Soluciones enterprise para bancos, corporativos y empresas de alto crecimiento.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
