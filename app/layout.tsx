import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/organisms/NewsletterSection";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Isolla - Espacio de diseño de mobiliario contemporáneo",
  description: "ISOLLA surge de la pasión por la artesanía y el amor al diseño. Muebles únicos que combinan creatividad, estética y significado cultural.",
  keywords: ["muebles", "diseño contemporáneo", "mobiliario", "artesanía", "diseño de interiores"],
  authors: [{ name: "Isolla" }],
  openGraph: {
    title: "Isolla - Espacio de diseño de mobiliario contemporáneo",
    description: "Muebles únicos que combinan creatividad, estética y significado cultural.",
    type: "website",
    locale: "es_ES",
    siteName: "Isolla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isolla - Mobiliario Contemporáneo",
    description: "Muebles únicos que combinan creatividad, estética y significado cultural.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} ${bricolage.variable} ${crimson.variable} antialiased flex flex-col min-h-screen`}
        style={{ backgroundColor: '#FFFFFA' }}
      >
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
