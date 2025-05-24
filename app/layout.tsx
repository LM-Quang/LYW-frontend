import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";

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
         <body className="bg-gray-200">
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
