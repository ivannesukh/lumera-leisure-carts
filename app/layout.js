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
  "Lumera Leisure Carts is coming soon — premium six-passenger golf carts and street-legal LSVs, fully loaded and ready to ride. No custom build queue, no waiting.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lumera Leisure Carts — Coming Soon",
  description: DESCRIPTION,
  keywords: [
    "Lumera Leisure Carts",
    "golf carts",
    "6 passenger golf cart",
    "low speed vehicles",
    "LSV",
    "street legal golf carts",
    "golf carts for sale",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Lumera Leisure Carts",
    title: "Lumera Leisure Carts — Coming Soon",
    description: DESCRIPTION,
    images: [{ url: "/lumera-logo.webp", width: 900, height: 886, alt: "Lumera Leisure Carts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumera Leisure Carts — Coming Soon",
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
