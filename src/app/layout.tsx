import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat, Exo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toast";
import MySession from "./providers/MySession";
import CartContext from "@/context/CartContext";

const montserratHeading = Montserrat({ subsets: ['latin'], variable: '--font-heading' });

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL || 'http://localhost:3000'
  ),

  title: {
    default: "FreshCart | Online Shopping",
    template: "%s | FreshCart",
  },

  description: "Shop your favorite products at FreshCart.",

  applicationName: "FreshCart",

  openGraph: {
    title: "FreshCart | Online Shopping",
    description: "Discover and shop your favorite products at FreshCart.",
    siteName: "FreshCart",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable, montserratHeading.variable, exo.variable)}
    >
      <body className="min-h-full flex flex-col">
        <MySession>
          <CartContext>
          <Navbar />
          <main className="pt-16 min-h-[calc(100vh-60px)]">
            {children}
          </main>
          </CartContext>
          <Toaster />
          <Footer />
        </MySession>
      </body>
    </html>
  );
}
