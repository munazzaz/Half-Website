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
  }
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
