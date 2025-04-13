import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { UserProvider } from "@/lib/user-context";
import {Header} from "@/components/header-two";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LearnProf",
  description:
    "LearnProf is a platform for learning and teaching, with certificates verifiable on blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={`${inter} antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </UserProvider>
  );
}
