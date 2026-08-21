import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const SITE_URL = "https://lumeraleisurecarts.com";
const DESCRIPTION =
  "Six-passenger golf carts built to our own spec, loaded as standard and ready to ride. Serving the Sarasota and Orlando areas with delivery anywhere in Florida. Request a quote or your own color combination.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lumera Leisure Carts — Six-Passenger Carts | Sarasota & Orlando, FL",
  description: DESCRIPTION,
  keywords: [
    "Lumera Leisure Carts",
    "golf carts",
    "6 passenger golf cart",
    "low speed vehicles",
    "LSV",
    "street legal golf carts",
    "golf carts for sale",
    "golf carts Sarasota",
    "golf carts Orlando",
    "golf cart delivery Florida",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Lumera Leisure Carts",
    title: "Lumera Leisure Carts",
    description: DESCRIPTION,
    images: [{ url: "/lumera-logo.webp", width: 900, height: 886, alt: "Lumera Leisure Carts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumera Leisure Carts",
    description: DESCRIPTION,
    images: ["/lumera-logo.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#fbf4e6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
