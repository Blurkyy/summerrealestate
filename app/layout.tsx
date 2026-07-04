import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TelegramButton from "@/components/TelegramButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.begapropfind.com"),

  title: "Summer Real Estate — Premium Apartment Developments in Addis Ababa",

  description:
    "Diaspora-led residential developments in Addis Ababa. Summer Bulgaria (Behind AU) and Summer Abtes (British Embassy) — own your home, away from home.",

  openGraph: {
    title: "Summer Real Estate",
    description:
      "Diaspora-led residential developments in Addis Ababa. Summer Bulgaria (Behind AU) and Summer Abtes (British Embassy) — own your home, away from home.",
    url: "https://www.begapropfind.com",
    siteName: "Summer Real Estate",
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Summer Real Estate",
              url: "https://www.begapropfind.com/",
            }),
          }}
        />
      </head>
      <body className="font-body bg-ink text-ivory antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <TelegramButton />
      </body>
    </html>
  );
}