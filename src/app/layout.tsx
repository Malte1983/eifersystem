import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eifel-systems.de"),
  title: {
    default: "Eifel-Systems | Moderne Webseiten für Unternehmen in der Eifel",
    template: "%s | Eifel-Systems",
  },
  description:
    "Eifel-Systems entwickelt moderne Webseiten mit Next.js und WordPress für lokale Unternehmen, Praxen und Handwerksbetriebe.",
  keywords: [
    "Webdesign Eifel",
    "Next.js Agentur Eifel",
    "WordPress Eifel",
    "Webseiten für Praxen",
    "Webseiten für Handwerker",
    "Eifel-Systems",
    "Webentwicklung Hürtgenwald",
  ],
  authors: [{ name: "Eifel-Systems" }],
  creator: "Eifel-Systems",
  publisher: "Eifel-Systems",
  openGraph: {
    title: "Eifel-Systems | Moderne Webseiten für Unternehmen in der Eifel",
    description:
      "Moderne Webseiten mit Next.js und WordPress für lokale Unternehmen, Praxen und Handwerksbetriebe.",
    url: "https://www.eifel-systems.de",
    siteName: "Eifel-Systems",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}