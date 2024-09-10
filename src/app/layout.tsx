import { Metadata } from "next";
import { Inter as FontSans, Pridi, Outfit } from "@next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

// Importando Pridi
const pridi = Pridi({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Pesos para Pridi
});

// Importando Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Pesos para Outfit
});

export const metadata: Metadata = {
  title: "Hakutaku AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          pridi.className // Usando Pridi como fonte padrão
        )}
      >
        {children}
      </body>
    </html>
  );
}
