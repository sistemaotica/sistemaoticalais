import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Gerador de OS",
  description: "Sistema para geração de OS de ótica",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="antialiased">
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
