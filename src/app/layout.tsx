import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skapa Design System - Audit IA de Design System",
  description: "Plateforme d'audit de design system par IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
