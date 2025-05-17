"use client";

import React from "react";
import Link from "next/link";
import logo from "@/assets/logo-1.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useCart } from "@/context/CourseContext";
import AuthActions from "./AuthActions";
import Searchbar from "./Searchbar";
import { Role } from "@/utils/dataTypes";
import StudentNavbar from "./StudentNavbar";
import AdminNavbar from "./AdminNavbar";
import TeacherNavbar from "./TeacherNavbar";

export default function Header() {
   const { user } = useUser();
   const { cart } = useCart();

   return (
      <header className="bg-white z-10 shadow-md border-gray-100 border-b">
         <div className="container mx-auto py-2 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
               <Image className="rounded-full mr-2" src={logo} alt="Logo" width={65} height={65} />
               <div className="text-2xl font-bold text-primary-500">
                  Learn <br /> Your Way
               </div>
            </Link>

            {/* Searchbar */}
            <Searchbar />

            {/* Navbar */}
            <nav className="w-full md:w-auto">
               <ul className="flex flex-wrap justify-center items-center gap-2">
                  <li>
                     <Link
                        href="/courses"
                        className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                     >
                        Courses
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/teaching"
                        className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                     >
                        Teaching
                     </Link>
                  </li>
                  <li className="ml-3 mr-5">
                     <Link
                        href="/cart"
                        className="px-3 py-1 font-medium hover:text-primary-600 transition-colors relative"
                     >
                        <ShoppingCart />
                        {cart.length > 0 && (
                           <span className="absolute top-4 -right-5 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {cart.length}
                           </span>
                        )}
                     </Link>
                  </li>
                  {user ? (
                     <>
                        {user.role == Role.ADMIN && <AdminNavbar />}
                        {user.role == Role.STUDENT && <StudentNavbar />}
                        {user.role == Role.TEACHER && <TeacherNavbar />}
                     </>
                  ) : (
                     <AuthActions />
                  )}
               </ul>
            </nav>
         </div>
      </header>
   );
}
