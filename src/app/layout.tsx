import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import AppHeader from "@/components/AppHeader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqqaru - Modern Web Application",
  description:
    "Aqqaru is a modern, fast, and responsive web application built with Next.js, TypeScript, Bootstrap, and SCSS.",
  keywords: ["Next.js", "React", "TypeScript", "Bootstrap", "SCSS", "Frontend Development"],
  authors: [{ name: "Ferit Banipal" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppHeader />
        <main className="container py-4">{children}</main>
        <footer className="bg-dark text-light text-center py-3 mt-auto">
          <div className="container">
            <p className="mb-0">© {new Date().getFullYear()} Aqqaru. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
