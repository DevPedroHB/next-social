import { cn } from "@/functions/cn";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NextSocial",
    default: "NextSocial",
  },
  description:
    "Desbloqueie sua rede social com NextSocial, uma plataforma construída com Next.js para uma experiência de usuário única.",
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "bg-primary-50 text-primary-950 scroll-smooth font-sans antialiased",
          "dark:bg-primary-950 dark:text-primary-50",
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
