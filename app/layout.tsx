import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialDock from "@/components/connect";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anubhav Singh",
  description: "Anubhav's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialDock />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
