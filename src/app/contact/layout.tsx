import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Olamide Olorunfemi",
  description: "Get in touch with Olamide Olorunfemi for frontend development opportunities, freelance work, or collaborations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}