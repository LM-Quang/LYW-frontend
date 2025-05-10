"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import logo from "@/assets/logo-1.png";
import Image from "next/image";
import { Search } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function Header() {
   const searchParams = useSearchParams();
   const query = searchParams.get("q") || "";
   const { user, setUserInfo } = useUser();

   const handleLogout = async () => {
      setUserInfo(null);
      localStorage.removeItem("token");
      window.location.href = "/";
   };

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
            <div className="flex-1 max-w-xl mx-auto md:mx-0">
               <div className="relative">
                  <input
                     type="text"
                     placeholder="Search courses, topics, instructors..."
                     className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                     aria-label="Search courses"
                     defaultValue={query}
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           window.location.href = `/search?q=${e.currentTarget.value}`;
                        }
                     }}
                  />
                  <Search
                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                     aria-hidden="true"
                  />
               </div>
            </div>

            {/* Navbar */}
            <nav className="w-full md:w-auto">
               <ul className="flex flex-wrap justify-center items-center gap-2 text-sm">
                  <li>
                     <Link
                        href="/categories"
                        className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                     >
                        Categories
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
                  {user ? (
                     <>
                        <li>
                           <Link
                              href="/my-courses"
                              className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                           >
                              My Courses
                           </Link>
                        </li>

                        <li className="ml-2 relative group">
                           <Image
                              className="rounded-full"
                              src={logo}
                              alt={user.username || "User avatar"}
                              width={40}
                              height={40}
                           />
                           <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg z-20 transition-opacity duration-200 hidden group-hover:block group-focus-within:block">
                              <div className="p-4 border-b border-gray-200">
                                 <p className="text-sm font-semibold text-gray-800">
                                    {user.username || "User"}
                                 </p>
                                 <p className="text-xs text-gray-600 truncate">
                                    {user.email || "user@example.com"}
                                 </p>
                              </div>
                              <div className="py-1">
                                 <Link
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Profile
                                 </Link>
                                 <Link
                                    href="/my-courses"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    My Courses
                                 </Link>
                                 <button
                                    onClick={handleLogout}
                                    className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Logout
                                 </button>
                              </div>
                           </div>
                        </li>
                     </>
                  ) : (
                     <>
                        <li>
                           <a
                              href="/auth/login"
                              className="px-3 py-1 rounded-full border border-primary-500 text-primary-600 hover:bg-primary-100 transition-colors"
                              aria-label="Sign In"
                           >
                              Log In
                           </a>
                        </li>
                        <li>
                           <Link
                              href="/auth/signup"
                              className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                           >
                              Sign Up
                           </Link>
                        </li>
                     </>
                  )}
               </ul>
            </nav>
         </div>
      </header>
   );
}
