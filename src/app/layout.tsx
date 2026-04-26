import type { Metadata } from "next";
import { Inter, Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natalia Ghizzoni — Product Designer & UX Lead",
  description:
    "Portfolio de Natalia Ghizzoni. Diseñadora de producto y UX Lead con 15 años de experiencia en diseño de experiencias digitales escalables.",
  keywords: ["UX Design", "Product Design", "Portfolio", "Natalia Ghizzoni"],
  authors: [{ name: "Natalia Ghizzoni" }],
  openGraph: {
    title: "Natalia Ghizzoni — Product Designer & UX Lead",
    description:
      "De problemas complejos a soluciones que las personas aman usar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
