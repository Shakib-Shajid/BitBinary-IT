import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import Head from 'next/head';


export const metadata = {
  title: "Whale Lagoon",
  description: "It is a Social Media Marketing Agency",
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
