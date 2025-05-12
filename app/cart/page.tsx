"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo1 from "@/assets/logo-1.png";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CourseContext";

export default function CartDetailsPage() {
   const router = useRouter();
   const { cart, removeFromCart, updateQuantity } = useCart();

   // Calculate total price
   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {/* Main Content: Cart Details */}
         <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

            {cart.length > 0 ? (
               <div className="flex flex-col lg:flex-row gap-8">
                  {/* Cart Items */}
                  <div className="lg:w-3/4">
                     <div className="space-y-4">
                        {cart.map((item) => (
                           <div
                              key={item.id}
                              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
                           >
                              {/* Thumbnail */}
                              <div className="md:w-1/4">
                                 <Image
                                    src={logo1}
                                    alt={item.title}
                                    className="w-full h-32 object-cover rounded-lg"
                                    width={128}
                                    height={128}
                                 />
                              </div>

                              {/* Item Details */}
                              <div className="flex-1 flex flex-col justify-between">
                                 <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                       {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-2">
                                       By {item.instructor}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-800">
                                       ${item.price.toFixed(2)}
                                    </p>
                                 </div>
                                 <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center border border-gray-300 rounded-lg">
                                       <button
                                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg cursor-pointer"
                                       >
                                          -
                                       </button>
                                       <span className="px-4 py-1 text-gray-800">
                                          {item.quantity}
                                       </span>
                                       <button
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg cursor-pointer"
                                       >
                                          +
                                       </button>
                                    </div>
                                    <button
                                       onClick={() => removeFromCart(item.id)}
                                       className="px-3 py-1 text-red-500 hover:bg-gray-100 rounded-lg text-sm flex items-center cursor-pointer"
                                    >
                                       <Trash2 className="mr-1" />
                                       Remove
                                    </button>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Cart Summary */}
                  <div className="lg:w-1/4">
                     <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
                        <div className="space-y-2 mb-4">
                           <div className="flex justify-between text-gray-700">
                              <span>Subtotal</span>
                              <span>${totalPrice.toFixed(2)}</span>
                           </div>
                           <div className="flex justify-between text-gray-700">
                              <span>Tax (5%)</span>
                              <span>${(totalPrice * 0.05).toFixed(2)}</span>
                           </div>
                           <div className="flex justify-between font-semibold text-gray-800 border-t pt-2">
                              <span>Total</span>
                              <span>${(totalPrice * 1.05).toFixed(2)}</span>
                           </div>
                        </div>
                        <button
                           onClick={() => router.push("/checkout")} // In a real app, redirect to payment gateway
                           className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                           Proceed to Checkout
                        </button>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="text-center py-10">
                  <h2 className="text-xl font-semibold text-gray-800">Your Cart is Empty</h2>
                  <p className="text-gray-600 mb-4">
                     Add some courses to your cart to get started!
                  </p>
                  <a
                     href="/courses"
                     className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                     Browse Courses
                  </a>
               </div>
            )}
         </div>
      </div>
   );
}
