import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/Footer";
import NewsLetter from "@/components/shared/NewsLetter";


export const metadata = {
  title: "Whale Lagoon SMMA",
  description: "It is a Social Media Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#B8DCFF]">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          {children}
          <NewsLetter />
        </div>
          <Footer />
      </body>
    </html>
  );
}
