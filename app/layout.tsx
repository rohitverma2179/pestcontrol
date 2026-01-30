import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fit India Pest Control & DeemakRoko - #1 Termite Treatment in Gurgaon & Delhi",
  description: "Official Fit India Pest Control & DeemakRoko. Experts in Anti-Termite Piping, Drill-Fill-Seal, and Organic Pest Management. Safe, Government Approved (Lic: 2358) solutions across India.",
  keywords: "Pest Control Gurgaon, DeemakRoko, Termite Treatment Delhi, Anti-Termite Piping, Fit India Pest Control, Professional Exterminator, Bed Bug Removal, Mosquito Control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
