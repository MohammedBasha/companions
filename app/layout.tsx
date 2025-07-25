import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {ClerkProvider} from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Companions",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables: {colorPrimary: '#fe5933'}}}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
