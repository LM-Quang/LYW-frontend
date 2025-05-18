"use client";

import React from "react";
import { useCart } from "@/context/CourseContext";
import CartEmpty from "@/components/cartPage/CartEmpty";
import CartSummary from "@/components/cartPage/CartSummary";
import CartContent from "@/components/cartPage/CartContent";

export default function CartDetailsPage() {
   const { cart } = useCart();
   const totalPrice = cart.reduce((sum, item) => sum + item.finalPrice, 0);

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            {cart.length > 0 ? (
               <div className="flex flex-col lg:flex-row gap-8">
                  {/* Cart Items */}
                  <CartContent />

                  {/* Cart Summary */}
                  <CartSummary totalPrice={totalPrice} />
               </div>
            ) : (
               <CartEmpty />
            )}
         </div>
      </div>
   );
}
