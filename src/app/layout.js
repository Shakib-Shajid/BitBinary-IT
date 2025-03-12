import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import Head from 'next/head';


export const metadata = {
  title: "BitBinary IT",
  description: "We are IT agency with Social Media",
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
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
