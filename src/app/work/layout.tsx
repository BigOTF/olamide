import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Olamide Olorunfemi",
  description: "Explore frontend projects built by Olamide Olorunfemi including e-commerce, Web3, and SaaS platforms.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}