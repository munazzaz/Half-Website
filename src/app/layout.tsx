import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

const roboto_init = Roboto({ 
  subsets: ['latin'], 
  weight: ['100', '300', '700', '400', '500', '900'],
  variable: '--font-roboto',
 });

export const metadata: Metadata = {
  title: {
    default: "CLM Homes | Sell Your Home Fast in Lancaster CA",
    template: "%s - CLM Homes"
  },
  description: "We specialize in Selling Old House!",
  twitter: {
    card:"summary_large_image"
  },
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: 'http://localhost:3000/',
  //   siteName: 'CLM Homes',
  //   title: 'CLM Homes | Sell Your Home Fast in Lancaster CA',
  //   description: 'We specialize in Selling Old House!',
  //   images: [
  //     {
  //       url: '/path/to/your/image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'CLM Homes'
  //     }
  //   ]
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_init.variable}>
      <Header />
        {children}</body>
    </html>
  );
}
