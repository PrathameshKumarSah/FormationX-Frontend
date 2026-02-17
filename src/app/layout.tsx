import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "./admin-dashboard/components/ui/toaster";
import { Toaster as Sonner } from "./admin-dashboard/components/ui/toaster";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackManage",
  description: "Hackathon Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        <Sonner />
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer always visible */}
        <Footer />
      </body>
    </html>
  );
}
