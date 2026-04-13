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
  title: "Olamide Olorunfemi | Frontend Developer",
  description: "Frontend developer based in Lagos, Nigeria. I build fast, responsive web interfaces using Next.js, TypeScript, Tailwind CSS and Framer Motion.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Lagos", "Nigeria", "Web Developer"],
  authors: [{ name: "Olamide Olorunfemi" }],
  openGraph: {
    title: "Olamide Olorunfemi | Frontend Developer",
    description: "Frontend developer based in Lagos, Nigeria. I build fast, responsive web interfaces using Next.js, TypeScript, Tailwind CSS and Framer Motion.",
    url: "https://yourportfolio.vercel.app",
    siteName: "Olamide Olorunfemi",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
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
