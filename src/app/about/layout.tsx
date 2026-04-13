import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Olamide Olorunfemi",
  description: "Learn more about Olamide Olorunfemi, a frontend developer based in Lagos, Nigeria.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}