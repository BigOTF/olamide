import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Manrope } from "next/font/google";
import Header from "@/components/Header";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olamide_Dev",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manropeFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-360 mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
