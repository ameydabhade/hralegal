import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

const kohinoor = localFont({
  src: [
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Light_Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Medium_Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Semibold_Italic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/fonnts.com-Kohinoor_Bold_Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-kohinoor',
  display: 'swap',
});

// Note: Optima will be handled via CSS fallbacks until font files are added

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
      <body className={`${kohinoor.variable} font-sans antialiased`}>
        <Header />
        <main >{children}</main>
        <Footer />
        <DisclaimerModal />
      </body>
    </html>
  );
}
