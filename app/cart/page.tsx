"use client";
import React from "react";
import img from "@/assets/avatar.jpg";
import Image from "next/image";
import {
   ArrowLeftRight,
   ArrowRight,
   Check,
   CircleHelp,
   CircleUser,
   Clock3,
   Save,
   Trash2,
} from "lucide-react";
import truncateText, { formatDuration } from "@/utils/utils";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const DISCOUNT_PERCENT = 5;
const TAX_PERCENT = 5;

export default function CartNewPage() {
   const { cart, removeFromCart, clearCart } = useCart();
   const originalPrice = cart.reduce((sum, item) => sum + item.finalPrice, 0);
   const discount = (originalPrice * DISCOUNT_PERCENT) / 100;
   const tax = (originalPrice * TAX_PERCENT) / 100;
   const totalPrice = originalPrice - discount - tax;

   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
               <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-lg shadow-md mb-4">
                     <div className="pt-6 px-6 mb-4">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                           Your Shopping Cart
                        </h1>
                        <p className="text-gray-600">You have {cart.length} courses in your cart</p>
                     </div>

                     <div className="px-6">
                        {cart.map((item) => {
                           return (
                              <div
                                 key={item.id}
                                 className="border-2 border-gray-200 rounded-lg mb-4 p-4 flex flex-col md:flex-row gap-4 hover:shadow-md"
                              >
                                 <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                                       {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                       Created by: {item.instructorName}
                                    </p>
                                    <div className="flex items-center mb-2">
                                       <span className="p-1 bg-primary-500 text-white rounded-full text-xs mr-2">
                                          Bestseller
                                       </span>
                                       <span className="text-yellow-500 font-bold text-sm mr-1">
                                          {item.rating}
                                       </span>
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                          aria-label="Full star"
                                       />
                                       <div className="bg-gray-400 w-0.5 h-4 mx-3" />
                                       <span className="text-xs text-gray-500">
                                          {item.student} students
                                       </span>
                                       <div className="bg-gray-400 w-0.5 h-4 mx-3" />
                                       <span className="flex items-center mr-2 text-xs text-gray-500">
                                          <Clock3 className="mr-1 w-4 h-4" />
                                          {formatDuration(item.duration)}
                                       </span>
                                    </div>
                                 </div>
                                 <div className="flex flex-col items-end justify-between">
                                    <div className="text-primary-500 font-bold">
                                       ${item.finalPrice}
                                    </div>
                                    <button className="text-xs text-purple-500 hover:text-purple-700 transition-colors flex items-center mt-2 cursor-pointer">
                                       <Save className="mr-1" />
                                       Buy Later
                                    </button>
                                    <button
                                       className="text-xs text-red-500 hover:text-red-700 transition-colors flex items-center mt-2 cursor-pointer"
                                       onClick={() => removeFromCart(item.id)}
                                    >
                                       <Trash2 className="mr-1" />
                                       Remove
                                    </button>
                                 </div>
                              </div>
                           );
                        })}
                     </div>

                     <div className="p-4 border-t border-gray-100 flex gap-2 justify-between">
                        <Link
                           href="/courses"
                           className="flex items-center text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
                        >
                           Continue Finding Course
                        </Link>
                        <button
                           className="bg-gray-100 text-gray-600 px-3 py-2 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                           onClick={() => clearCart()}
                        >
                           Clear Cart
                        </button>
                     </div>
                  </div>

                  <section className="bg-white rounded-lg shadow-md p-6 mb-4">
                     <h2 className="text-3xl font-bold mb-4">Related Courses</h2>

                     {/* Course List */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                           <div className="flex justify-between items-center mb-3">
                              <span className="text-sm text-gray-500">Programming</span>
                              <div className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                 Hot & New
                              </div>
                           </div>
                           <h3 className="text-2xl font-semibold mb-2 transition-colors">
                              JavaScript Fundamentals
                           </h3>
                           <p className="text-gray-600 mb-4">
                              {truncateText(
                                 "Master JavaScript from scratch with practical exercises and real-world projects",
                                 65
                              )}
                           </p>
                           <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                 <span className="font-medium text-primary-600 mr-auto">
                                    10 weeks • 24 lessons
                                 </span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-sm font-medium">4.8 / 5</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-2 mt-4">
                              <Image
                                 src={img}
                                 alt="Instructor"
                                 className="rounded-full"
                                 width={32}
                                 height={32}
                              />
                              <span className="text-sm">James Wilson</span>
                              <span className="font-bold text-lg ml-auto">$49.99</span>
                           </div>
                           <Link
                              href={`/course-detail/${1}`}
                              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                           >
                              <span>View Details</span>
                              <ArrowRight />
                           </Link>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                           <div className="flex justify-between items-center mb-3">
                              <span className="text-sm text-gray-500">Design</span>
                              <div className="flex items-center gap-1">
                                 <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                    Bestseller
                                 </div>
                              </div>
                           </div>
                           <h3 className="text-2xl font-semibold mb-2">Figma for UI Designers</h3>
                           <p className="text-gray-600 mb-4">
                              {truncateText(
                                 "Learn to create beautiful interfaces and prototypes with Figma",
                                 55
                              )}
                           </p>
                           <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                 <span className="font-medium text-primary-600 mr-auto">
                                    8 weeks • 18 lessons
                                 </span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-sm font-medium">4.8 / 5</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-2 mt-4">
                              <Image
                                 src={img}
                                 alt="Instructor"
                                 className="rounded-full"
                                 width={32}
                                 height={32}
                              />
                              <span className="text-sm">Emily Chen</span>
                              <span className="font-bold text-lg ml-auto">$59.99</span>
                           </div>
                           <Link
                              href={`/course-detail/${1}`}
                              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                           >
                              <span>View Details</span>
                              <ArrowRight />
                           </Link>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                           <div className="flex justify-between items-center mb-3">
                              <span className="text-sm text-gray-500">Data Science</span>
                           </div>
                           <h3 className="text-2xl font-semibold mb-2">Python for Data Analysis</h3>
                           <p className="text-gray-600 mb-4">
                              {truncateText(
                                 "Learn to analyze and visualize data using Python, Pandas and NumPy",
                                 60
                              )}
                           </p>
                           <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex justify-between items-center">
                                 <span className="font-medium text-primary-600 mr-auto">
                                    12 weeks • 30 lessons
                                 </span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-sm font-medium">4.8 / 5</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-2 mt-4">
                              <Image
                                 src={img}
                                 alt="Instructor"
                                 className="rounded-full"
                                 width={32}
                                 height={32}
                              />
                              <span className="text-sm">Robert Kim</span>
                              <span className="font-bold text-lg ml-auto">$69.99</span>
                           </div>
                           <Link
                              href={`/course-detail/${1}`}
                              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                           >
                              <span>View Details</span>
                              <ArrowRight />
                           </Link>
                        </div>
                     </div>
                  </section>
                  {/* Next: "Add course bundles or discounted packages" */}
               </div>

               <div className="w-full lg:w-1/3">
                  <div className="bg-white rounded-xl shadow-sm sticky top-5 mb-4">
                     <div className="p-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
                     </div>

                     <div className="p-4">
                        <div className="space-y-3">
                           <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Original Price:</span>
                              <span className="text-gray-800">${originalPrice.toFixed(2)}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">
                                 Discounts ({DISCOUNT_PERCENT}%):
                              </span>
                              <span className="text-red-500">-${discount.toFixed(2)}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Tax ({TAX_PERCENT}%):</span>
                              <span className="text-red-500">${tax.toFixed(2)}</span>
                           </div>
                           <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                              <span className="font-bold">Total:</span>
                              <span className="font-bold text-lg text-primary-500">
                                 ${totalPrice.toFixed(2)}
                              </span>
                           </div>
                        </div>

                        <div className="mt-6">
                           <input
                              type="text"
                              placeholder="Enter coupon code"
                              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all mb-3"
                           />
                           <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded transition-colors font-medium">
                              Checkout Now
                           </button>
                           <div className="flex items-center justify-center mt-4">
                              <Check className="text-green-500 mr-1" />
                              <span className="text-xs text-gray-600">
                                 30-Day Money-Back Guarantee
                              </span>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 border-t border-gray-100">
                        <h3 className="font-medium text-gray-700 mb-2">Need Help?</h3>
                        <div className="flex flex-col gap-2 text-sm">
                           <a
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <CircleHelp className="mr-1 w-5 h-5" />
                              Help Center
                           </a>
                           <a
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <ArrowLeftRight className="mr-1 w-5 h-5" />
                              Refund Policy
                           </a>
                           <Link
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <CircleUser className="mr-1 w-5 h-5" />
                              Contact Support
                           </Link>
                        </div>
                     </div>
                     {/* Next: "Add gift card option" */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
