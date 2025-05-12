"use client";

import React, { useState } from "react";
import logo from "@/assets/img-1.jpg";
import Image from "next/image";
import renderRatingStars from "@/utils/ratingStars";
import {
   Check,
   ChevronDown,
   CirclePlay,
   Clock3,
   Download,
   FileQuestion,
   FileText,
   Folder,
   Heart,
   Infinity,
   ScrollText,
   Share,
   ShoppingCart,
   SquareTerminal,
   Users,
   Video,
} from "lucide-react";
import CourseDetailModal from "@/components/CourseDetailModal";
import { CartItem, CourseSection } from "@/types/Types";
import { useCart } from "@/context/CourseContext";
import { useRouter } from "next/navigation";

// Test data
const sections: CourseSection[] = [
   {
      id: 1,
      title: "Introduction to Web Development",
      lectures: "5 lectures • 1.5 hours",
      price: 10,
   },
   {
      id: 2,
      title: "JavaScript Fundamentals",
      lectures: "8 lectures • 3.2 hours",
      price: 20,
   },
   {
      id: 3,
      title: "Building the Front-end with React",
      lectures: "12 lectures • 5.8 hours",
      price: 30,
   },
   {
      id: 4,
      title: "Node.js and Express Back-end",
      lectures: "10 lectures • 4.5 hours",
      price: 40,
   },
];

export default function CoursesPage() {
   const router = useRouter();
   const [isClicked, setIsClicked] = useState(false);
   const { cart, addToCart } = useCart();
   const handleAddToCart = (totalPrice: number) => {
      setIsClicked(false);
      const cartItem: CartItem = {
         id: cart.length + 1,
         title: "Full-Stack Development Bootcamp",
         instructor: "Sarah Johnson",
         price: totalPrice,
         thumbnail: logo.src,
         quantity: 1,
      };
      addToCart(cartItem);
      router.push("/cart");
   };
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Main */}
               <div className="lg:col-span-2">
                  <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
                     <div className="relative h-64 md:h-80 overflow-hidden">
                        <Image
                           src={logo}
                           alt="Full-Stack Development Bootcamp Cover"
                           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           fill
                        />
                        <div className="absolute top-4 right-4 flex space-x-2">
                           <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium shadow-lg">
                              Bestseller
                           </span>
                           <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg">
                              Updated 2023
                           </span>
                        </div>
                     </div>

                     <div className="p-6">
                        <h2 className="text-3xl font-bold mb-3">Full-Stack Development Bootcamp</h2>
                        <p className="mb-4">
                           Master modern web development with this comprehensive bootcamp. Learn
                           front-end, back-end, databases, and deployment - everything you need to
                           become a professional developer.
                        </p>

                        <div className="flex items-center mb-6">
                           <div className="flex items-center mr-6">
                              <span className="mr-2">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 ></i>
                              </span>
                              <span className="font-semibold">4.8</span>
                              <span className="text-gray-500 ml-1">(3,245 reviews)</span>
                           </div>
                           <div className="flex items-center mr-6">
                              <Users className="mr-1 text-gray-600" />
                              <span className="text-gray-600">12,879 students</span>
                           </div>
                           <div className="flex items-center">
                              <Clock3 className="mr-1 text-gray-600" />
                              <span className="text-gray-600">Last updated: Oct 2023</span>
                           </div>
                        </div>

                        {/* What will you learn */}
                        <div className="border-t border-gray-200 pt-6">
                           <h3 className="text-xl font-semibold mb-4">What You will Learn</h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Build responsive websites with HTML, CSS and JavaScript
                                 </p>
                              </div>
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Create backends with Node.js, Express and MongoDB
                                 </p>
                              </div>
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Develop modern React applications with hooks
                                 </p>
                              </div>
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Deploy applications to cloud platforms
                                 </p>
                              </div>
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Implement authentication and authorization
                                 </p>
                              </div>
                              <div className="flex items-start">
                                 <Check className="text-green-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">Work with RESTful and GraphQL APIs</p>
                              </div>
                           </div>
                        </div>

                        {/* Course Content */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                           <h3 className="text-3xl font-semibold mb-4">Course Content</h3>
                           <div className="space-y-3">
                              {/* Section 1 */}
                              <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                                 <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center">
                                       <Folder className="mr-2" />
                                       Section 1: Introduction to Web Development
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                       <span>5 lectures • 1.5 hours</span>
                                       <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                                    </div>
                                 </summary>
                                 <div className="px-4 py-2 border-t border-gray-200">
                                    <ul className="divide-y divide-gray-100">
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>Course Overview and Setup</span>
                                          </div>
                                          <span className="text-sm text-gray-500">15:20</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>HTML Fundamentals</span>
                                          </div>
                                          <span className="text-sm text-gray-500">22:45</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>CSS Basics and Styling</span>
                                          </div>
                                          <span className="text-sm text-gray-500">28:10</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <FileText className="mr-2 text-primary-500" />
                                             <span>Assignment: Build Your First Webpage</span>
                                          </div>
                                          <span className="text-sm text-gray-500">Practice</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <FileQuestion className="mr-2 text-primary-500" />
                                             <span>Section Quiz</span>
                                          </div>
                                          <span className="text-sm text-gray-500">
                                             10 questions
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                              </details>

                              {/* Section 2 */}
                              <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                                 <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center">
                                       <Folder className="mr-2" />
                                       Section 2: JavaScript Fundamentals
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                       <span>8 lectures • 3.2 hours</span>
                                       <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                                    </div>
                                 </summary>
                                 <div className="px-4 py-2 border-t border-gray-200">
                                    <ul className="divide-y divide-gray-100">
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>JavaScript Basics and Syntax</span>
                                          </div>
                                          <span className="text-sm text-gray-500">28:15</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>Variables, Data Types, and Operators</span>
                                          </div>
                                          <span className="text-sm text-gray-500">24:30</span>
                                       </li>
                                       <li className="py-2 flex justify-between items-center">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-2 text-primary-500" />
                                             <span>Control Flow: Conditions and Loops</span>
                                          </div>
                                          <span className="text-sm text-gray-500">31:45</span>
                                       </li>
                                    </ul>
                                 </div>
                              </details>

                              {/* Section 3 */}
                              <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                                 <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center">
                                       <Folder className="mr-2" />
                                       Section 3: Building the Front-end with React
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                       <span>12 lectures • 5.8 hours</span>
                                       <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                                    </div>
                                 </summary>
                              </details>

                              {/* Section 4 */}
                              <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                                 <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center">
                                       <Folder className="mr-2" />
                                       Section 4: Node.js and Express Back-end
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                       <span>10 lectures • 4.5 hours</span>
                                       <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                                    </div>
                                 </summary>
                              </details>

                              {/* <div> */}
                              <button className="p-3 text-primary-500 font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer hover:text-primary-600">
                                 <span>Show all 12 sections</span>
                                 <ChevronDown className="ml-1" />
                              </button>
                              {/* </div> */}
                           </div>
                        </div>

                        {/* Requirements */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                           <h3 className="text-3xl font-semibold mb-4">Requirements</h3>
                           <ul className="space-y-2">
                              <li className="flex items-start">
                                 <Check className="text-primary-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    Basic computer knowledge and familiarity with using the internet
                                 </p>
                              </li>
                              <li className="flex items-start">
                                 <Check className="text-primary-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    No prior programming experience required - we will start from
                                    the basics
                                 </p>
                              </li>
                              <li className="flex items-start">
                                 <Check className="text-primary-500 mr-2 mt-0.5" />
                                 <p className="text-gray-700">
                                    A computer with at least 8GB RAM and 10GB free disk space
                                    (Windows, Mac, or Linux)
                                 </p>
                              </li>
                           </ul>
                        </div>

                        {/* About Instructor */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                           <h3 className="text-3xl font-semibold mb-4">About the Instructor</h3>
                           <div className="flex items-start">
                              <div className="mr-4">
                                 <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500">
                                    <Image
                                       src={logo}
                                       alt="Instructor profile"
                                       className="w-full h-full object-cover"
                                       width={80}
                                       height={80}
                                    />
                                 </div>
                              </div>
                              <div>
                                 <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                                 <p className="text-gray-600 text-sm mb-2">
                                    Senior Software Engineer & Educator
                                 </p>
                                 <div className="flex items-center mb-2">
                                    <span className="mr-2">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                          aria-label="Full star"
                                       ></i>
                                    </span>
                                    <span className="text-sm ml-1">4.9 Instructor Rating</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <Users className="text-gray-500 text-sm" />
                                    <span className="text-sm ml-1">43,120 Students</span>
                                    <span className="mx-2 text-gray-300">|</span>
                                    <ScrollText className="text-gray-500 text-sm" />
                                    <span className="text-sm ml-1">15 Courses</span>
                                 </div>
                                 <p className="text-gray-700">
                                    Full-stack developer with 10+ years of experience in building
                                    web applications. I have worked with companies like Google and
                                    Amazon, and I am passionate about teaching programming in a
                                    practical, project-based way.
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Feedback */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                           <h3 className="text-3xl font-semibold mb-4">Student Feedback</h3>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Ratings */}
                              <div className="md:col-span-1">
                                 <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                                    <div className="text-5xl font-bold text-primary-500">4.8</div>
                                    <div className="flex items-center my-2 space-x-1">
                                       {renderRatingStars(4.8)}
                                    </div>
                                    <div className="text-gray-600">Course Rating</div>
                                    <div className="text-sm text-gray-500 mt-1">3,245 Reviews</div>
                                 </div>
                              </div>

                              {/* Stars count */}
                              <div className="md:col-span-2">
                                 <div className="space-y-2">
                                    <div className="flex items-center">
                                       <div className="w-20 text-right pr-3">5 stars</div>
                                       <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "78%" }}
                                          ></div>
                                       </div>
                                       <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                          78%
                                       </div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-20 text-right pr-3">4 stars</div>
                                       <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "15%" }}
                                          ></div>
                                       </div>
                                       <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                          15%
                                       </div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-20 text-right pr-3">3 stars</div>
                                       <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "5%" }}
                                          ></div>
                                       </div>
                                       <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                          5%
                                       </div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-20 text-right pr-3">2 stars</div>
                                       <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "1%" }}
                                          ></div>
                                       </div>
                                       <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                          1%
                                       </div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-20 text-right pr-3">1 star</div>
                                       <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "1%" }}
                                          ></div>
                                       </div>
                                       <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                          1%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Comment */}
                           <div className="mt-6 space-y-4">
                              {/* Comment 1 */}
                              <div className="bg-gray-50 p-4 rounded-lg">
                                 <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">
                                       MJ
                                    </div>
                                    <div className="flex-1">
                                       <div className="flex items-center justify-between">
                                          <h4 className="font-semibold">Michael Johnson</h4>
                                          <span className="text-gray-500 text-sm">2 weeks ago</span>
                                       </div>
                                       <div className="flex items-center my-1">
                                          {renderRatingStars(5)}
                                       </div>
                                       <p className="text-gray-700">
                                          This course exceeded my expectations. The instructor
                                          explains complex concepts clearly and the projects are
                                          practical and engaging. I went from knowing nothing about
                                          web development to building full-stack applications.
                                          Highly recommended!
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              {/* Comment 2 */}
                              <div className="bg-gray-50 p-4 rounded-lg">
                                 <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">
                                       AP
                                    </div>
                                    <div className="flex-1">
                                       <div className="flex items-center justify-between">
                                          <h4 className="font-semibold">Amanda Peterson</h4>
                                          <span className="text-gray-500 text-sm">1 month ago</span>
                                       </div>
                                       <div className="flex items-center my-1">
                                          {renderRatingStars(4.5)}
                                       </div>
                                       <p className="text-gray-700">
                                          Great course with a lot of valuable content. My only
                                          suggestion would be to update some of the Node.js sections
                                          as a few packages are now deprecated. Otherwise, this was
                                          exactly what I needed to transition into web development.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              {/* Show more */}
                              <button className="p-3 text-primary-500 font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer hover:text-primary-600">
                                 <span>See all 3,245 reviews</span>
                                 <ChevronDown className="ml-1" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Sidebar */}
               <div className="lg:col-span-1">
                  <div className="sticky top-2.5">
                     {/* Course Price */}
                     <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
                        <div className="p-5">
                           <div className="flex justify-between items-center mb-4">
                              <div className="text-3xl font-bold">$94.99</div>
                              <div className="text-sm text-gray-500 line-through">$199.99</div>
                           </div>
                           <div className="text-sm text-red-600 font-medium mb-4">
                              53% off - 2 days left at this price!
                           </div>

                           <div
                              className="w-full py-3 bg-primary-500 text-white rounded-lg mb-3 font-medium hover:bg-primary-600 transition-colors transform hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                              onClick={() => {
                                 setIsClicked(true);
                              }}
                           >
                              <ShoppingCart className="mr-2" />
                              Add to Cart
                           </div>

                           <div className="text-center text-sm text-gray-500 mb-4">
                              30-Day Money-Back Guarantee
                           </div>

                           <div className="mb-2">
                              <h4 className="font-semibold">This course includes:</h4>
                              <ul className="space-y-2">
                                 <li className="flex items-center text-sm">
                                    <Video className="text-gray-500 mr-2" />
                                    <span>42 hours on-demand video</span>
                                 </li>
                                 <li className="flex items-center text-sm">
                                    <FileText className="text-gray-500 mr-2" />
                                    <span>85 articles</span>
                                 </li>
                                 <li className="flex items-center text-sm">
                                    <Download className="text-gray-500 mr-2" />
                                    <span>120 downloadable resources</span>
                                 </li>
                                 <li className="flex items-center text-sm">
                                    <SquareTerminal className="text-gray-500 mr-2" />
                                    <span>25 coding exercises</span>
                                 </li>
                                 <li className="flex items-center text-sm">
                                    <Infinity className="text-gray-500 mr-2" />
                                    <span>Full lifetime access</span>
                                 </li>
                              </ul>
                           </div>

                           {/* Coupon */}
                           <div>
                              <h4 className="font-semibold mb-2">Coupon:</h4>
                              <div className="flex">
                                 <input
                                    type="text"
                                    placeholder="Enter Coupon"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm mr-2"
                                    aria-label="Search courses"
                                 />
                                 <button className="p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer">
                                    Apply
                                 </button>
                              </div>
                           </div>

                           {/* Share */}
                           <div className="flex justify-center mt-6 space-x-4">
                              <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                                 <Heart className="mr-1" />
                                 Like
                              </button>
                              <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                                 <Share className="mr-1" />
                                 Share
                              </button>
                           </div>
                        </div>
                     </div>

                     {/* Course Statistics */}
                     <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
                        <div className="p-5">
                           <h3 className="font-semibold text-lg mb-3">Course Statistics</h3>
                           <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Enrollment Status</span>
                                 <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                    Active
                                 </span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Last Updated</span>
                                 <span className="text-gray-700">October 15, 2023</span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Language</span>
                                 <span className="text-gray-700">English</span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Skill Level</span>
                                 <span className="text-gray-700">All Levels</span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-gray-600">Students</span>
                                 <span className="text-gray-700">12,879</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Train 5 or More people */}
                     {/* <div className="bg-primary-100 rounded-lg shadow-lg p-5">
                        <h3 className="font-semibold text-lg mb-3">Training 5 or more people?</h3>
                        <p className="text-gray-600 text-sm mb-4">
                           Get your team access to 25,000+ top courses anytime, anywhere.
                        </p>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}
         <CourseDetailModal
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            sections={sections}
            handleAddToCart={handleAddToCart}
         />
      </div>
   );
}
