import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analytics Roundtable",
  description: "Open Data Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
