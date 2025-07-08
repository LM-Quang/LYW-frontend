"use client";

import React from "react";
import Link from "next/link";
import logo from "@/assets/logo-1.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useCart } from "@/context/CartContext";
import AuthActions from "./AuthActions";
import Searchbar from "./Searchbar";
import { Role } from "@/utils/types";
import StudentNavbar from "./StudentNavbar";
import AdminNavbar from "./AdminNavbar";
import TeacherNavbar from "./TeacherNavbar";

export default function Header() {
   const { user } = useUser();
   const { cart } = useCart();

   return (
      <header>
         <h1 className="text-lg font-bold text-center py-5 bg-white">
            This is a sample page for personal practice
         </h1>
         <div className="py-2 bg-gray-800">
            <div className="container mx-auto py-2 flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Logo */}
               <Link href="/" className="flex items-center">
                  <Image
                     className="rounded-full mr-2"
                     src={logo}
                     alt="Logo"
                     width={65}
                     height={65}
                  />
                  <h1 className="text-3xl font-bold text-white">
                     Learn <br /> Your Way
                  </h1>
               </Link>

               {/* Searchbar */}
               <Searchbar />

               {/* Navbar */}
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center items-center gap-2">
                     {(!user || user.roles[0] === Role.STUDENT) && (
                        <>
                           <li>
                              <Link
                                 href="/courses"
                                 className="px-3 py-2 text-white font-medium rounded-lg hover:bg-primary-500 transition-colors"
                              >
                                 Courses
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="/price-plan"
                                 className="px-3 py-2 text-white font-medium rounded-lg hover:bg-primary-500 transition-colors"
                              >
                                 Price Plan
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="/teaching"
                                 className="px-3 py-2 text-white font-medium rounded-lg hover:bg-primary-500 transition-colors"
                              >
                                 Partnerships
                              </Link>
                           </li>
                           <li className="ml-3 mr-5">
                              <Link
                                 href="/cart"
                                 className="px-3 py-2 text-white font-medium hover:text-primary-500 transition-colors relative"
                              >
                                 <ShoppingCart />
                                 {cart.length > 0 && (
                                    <span className="absolute top-4 -right-5 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                       {cart.length}
                                    </span>
                                 )}
                              </Link>
                           </li>
                        </>
                     )}

                     {user ? (
                        <>
                           {user.roles[0] === Role.ADMIN && <AdminNavbar />}
                           {user.roles[0] === Role.STUDENT && <StudentNavbar />}
                           {user.roles[0] === Role.TEACHER && <TeacherNavbar />}
                        </>
                     ) : (
                        <AuthActions />
                     )}
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}
