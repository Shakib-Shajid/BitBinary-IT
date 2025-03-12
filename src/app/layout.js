import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NewsLetter from "@/components/shared/NewsLetter";


export const metadata = {
  title: "BitBinary IT",
  description: "We are IT agency with Social Media",

  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  openGraph: {
    title: "BitBinary IT - Web & SEO",
    description: "We are IT agency with Social Media",
    url: "https://bitbinaryit.com",
    type: "website",
    images: [
      {
        url: "https://bitbinaryit.com/logo.png",
        width: 1200,
        height: 627,
        alt: "BitBinary IT Preview Image",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BitBinary IT - Web & SEO",
    description: "We are IT agency with Social Media",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
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
