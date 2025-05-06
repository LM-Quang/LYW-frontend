"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/assets/logo-1.png";
import { useCart } from "@/context/Context";

// Interface for a Cart Item
// interface CartItem {
//    id: string;
//    title: string;
//    instructor: string;
//    price: number;
//    thumbnail: string;
//    quantity: number;
// }

// Sample cart data (in a real app, this would come from state management or a backend)
// const initialCart: CartItem[] = [
//    {
//       id: "1",
//       title: "Complete JavaScript Bootcamp: From Zero to Hero",
//       instructor: "John Smith",
//       price: 49.99,
//       thumbnail:
//          "https://images.unsplash.com/photo-1633356122544-f1348a13f899?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       quantity: 1,
//    },
//    {
//       id: "2",
//       title: "Python for Data Science and Machine Learning",
//       instructor: "Sarah Johnson",
//       price: 79.99,
//       thumbnail:
//          "https://images.unsplash.com/photo-1551288049-b1f3a0a1c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       quantity: 1,
//    },
// ];

export default function CartDetailsPage() {
   // const [cart, setCart] = useState<CartItem[]>(initialCart);
   const router = useRouter();
   const { cart, removeFromCart, updateQuantity } = useCart();
   // Calculate total price
   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   // Remove an item from the cart
   // const removeFromCart = (id: string) => {
   //    setCart(cart.filter((item) => item.id !== id));
   // };

   // // Update quantity of an item
   // const updateQuantity = (id: string, newQuantity: number) => {
   //    if (newQuantity < 1) return; // Prevent quantity from going below 1
   //    setCart(
   //       cart.map((item) =>
   //          item.id === id ? { ...item, quantity: newQuantity } : item
   //       )
   //    );
   // };
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {/* Header */}
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="flex items-center">
                  <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                     <span className="material-symbols-outlined text-lg">school</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-500">EduLearn Academy</div>
               </div>
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-2 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              window.location.href = `/search?q=${e.currentTarget.value}`;
                           }
                        }}
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        search
                     </span>
                  </div>
               </div>
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center gap-2 text-sm">
                     <li>
                        <Link
                           href="/"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <a
                           href="/search"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Courses
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Categories
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Teaching
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           My Learning
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Wishlist
                        </a>
                     </li>
                     <li>
                        <a
                           href="/cart"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors relative"
                        >
                           <span className="material-symbols-outlined">shopping_cart</span>
                           {cart.length > 0 && (
                              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                 {cart.length}
                              </span>
                           )}
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                        >
                           Sign In
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>

         {/* Main Content: Cart Details */}
         <main className="container mx-auto px-4 md:px-6 py-8">
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
                                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                                       >
                                          -
                                       </button>
                                       <span className="px-4 py-1 text-gray-800">
                                          {item.quantity}
                                       </span>
                                       <button
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                                       >
                                          +
                                       </button>
                                    </div>
                                    <button
                                       onClick={() => removeFromCart(item.id)}
                                       className="text-red-500 hover:text-red-600 text-sm flex items-center"
                                    >
                                       <span className="material-symbols-outlined mr-1">
                                          delete
                                       </span>
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
                     href="/search"
                     className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                     Browse Courses
                  </a>
               </div>
            )}
         </main>

         {/* Footer */}
         <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-full mr-2">
                           <span className="material-symbols-outlined text-primary-500">
                              school
                           </span>
                        </div>
                        <div className="text-xl font-bold">EduLearn Academy</div>
                     </div>
                     <p className="text-gray-300 text-sm">
                        Empowering educators to share knowledge and transform lives through online
                        education.
                     </p>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Teach</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Become an Instructor
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Instructor Resources
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Course Standards
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Success Stories
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Support</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Help Center
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Contact Us
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Privacy Policy
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Terms of Service
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
                     <p className="text-gray-300 text-sm mb-4">
                        Subscribe to get updates on new teaching resources and opportunities.
                     </p>
                     <div className="flex">
                        <input
                           type="email"
                           placeholder="Your email"
                           className="px-3 py-2 rounded-l-lg text-gray-800 w-full text-sm focus:outline-none"
                        />
                        <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors text-sm">
                           Subscribe
                        </button>
                     </div>
                  </div>
               </div>

               <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-400 text-sm mb-4 md:mb-0">
                     © 2023 EduLearn Academy. All rights reserved.
                  </div>
                  <div className="flex space-x-4">
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">facebook</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">twitter</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">youtube</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">language</span>
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
