import React from "react";
import { useRouter } from "next/navigation";

const CartSummary = ({ totalPrice }: { totalPrice: number }) => {
   const router = useRouter();
   return (
      <div className="lg:w-1/4">
         <div className="bg-white rounded-lg shadow-md p-6 sticky top-2.5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
            {/* Total Price */}
            <div className="space-y-2 mb-3">
               <div className="flex justify-between text-gray-700">
                  <span className="text-xl">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-gray-700">
                  <span>Discount</span>
                  <span>$10.99</span>
               </div>
               <div className="flex justify-between text-gray-700">
                  <span>Tax (5%)</span>
                  <span>${(totalPrice * 0.05).toFixed(2)}</span>
               </div>
               <div className="flex justify-between font-semibold text-gray-800 border-t border-gray-300 pt-2">
                  <span className="text-xl">Total</span>
                  <span>${(totalPrice * 1.05).toFixed(2)}</span>
               </div>
            </div>

            {/* Promo Code */}
            <div>
               <div className="mb-3">
                  <label htmlFor="coupon" className=" font-medium text-gray-700 mb-1 block">
                     Promo Code
                  </label>
                  <div className="flex gap-1">
                     <input
                        type="text"
                        id="coupon"
                        placeholder="Enter code"
                        className="p-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                     />
                     <button className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors text-sm cursor-pointer">
                        Apply
                     </button>
                  </div>
               </div>
            </div>

            {/* Actions */}
            <button
               onClick={() => router.push("/checkout")} // In a real app, redirect to payment gateway
               className="w-full px-4 py-3 mb-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
            >
               Proceed to Checkout
            </button>
            <button
               onClick={() => router.push("/courses")}
               className="w-full px-4 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer"
            >
               Continue Finding Course
            </button>
         </div>
      </div>
   );
};

export default CartSummary;
