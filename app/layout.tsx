import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "@/context/UserContext"; // Adjust path as needed
import { CartProvider } from "@/context/CourseContext"; // Adjust path as needed
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//    variable: "--font-geist-sans",
//    subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//    variable: "--font-geist-mono",
//    subsets: ["latin"],
// });

export const metadata: Metadata = {
   title: "Learn Your Way",
   description: "Learn Your Way to The Future",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
         <body>
            <Toaster />
            <UserProvider>
               <CartProvider>
                  <Header />
                  {children}
                  <Footer />
               </CartProvider>
            </UserProvider>
         </body>
      </html>
   );
}
