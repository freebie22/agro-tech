import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "../components/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Agricultural dashboard for farming company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="main-content" id="mainContent">
          {children}
        </div>
      </body>
    </html>
  );
}
