import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const lora = Lora({
  weight: ['400', '700'], 
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: "Safaricom",
  description: "Safaricom login page and dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
