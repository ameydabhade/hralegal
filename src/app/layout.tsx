import type { Metadata } from "next";
import { Lora, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRA Legal - Professional Legal Services",
  description: "Professional law firm with specialized expertise across Civil and Business Law, Intellectual Property Laws, Corporate and Commercial Law, and other specialized areas of law.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${geistMono.variable} font-serif antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <DisclaimerModal />
      </body>
    </html>
  );
}
