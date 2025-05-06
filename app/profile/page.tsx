"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GraduationCap, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import avatar from "@/assets/avatar.jpg";

// Hard-coded user data (same as in the source code)
interface User {
   avatar: string;
   username: string;
   email: string;
}

const USER: User = {
   avatar: avatar.src,
   username: "Quang",
   email: "quang@gmail.com",
};

export default function ProfilePage() {
   const [user, setUser] = useState<User | null>(USER);
   const router = useRouter();

   // State for email change form
   const [newEmail, setNewEmail] = useState("");
   const [emailPassword, setEmailPassword] = useState("");

   // State for password change form
   const [currentPassword, setCurrentPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmNewPassword, setConfirmNewPassword] = useState("");

   // State for form submission feedback
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [emailSuccess, setEmailSuccess] = useState("");
   const [passwordSuccess, setPasswordSuccess] = useState("");

   // Handle email change form submission
   const handleEmailChange = async (e: React.FormEvent) => {
      e.preventDefault();
      setEmailError("");
      setEmailSuccess("");

      if (!newEmail || !emailPassword) {
         setEmailError("Please fill in all fields.");
         return;
      }

      // Call API
      // try {
      //    const response = await fetch("/api/update-email", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({ newEmail, password: emailPassword }),
      //    });
      //    if (response.ok) {
      //       setUser((prev) => (prev ? { ...prev, email: newEmail } : null));
      //       setEmailSuccess("Email updated successfully!");
      //       setNewEmail("");
      //       setEmailPassword("");
      //    } else {
      //       setEmailError("Failed to update email. Please check your password.");
      //    }
      // } catch (error) {
      //    console.log(error)
      //    setEmailError("An error occurred. Please try again.");
      // }
   };

   // Handle password change form submission
   const handlePasswordChange = (e: React.FormEvent) => {
      e.preventDefault();
      setPasswordError("");
      setPasswordSuccess("");

      if (!currentPassword || !newPassword || !confirmNewPassword) {
         setPasswordError("Please fill in all fields.");
         return;
      }

      if (newPassword !== confirmNewPassword) {
         setPasswordError("New password and confirmation do not match.");
         return;
      }

      // Simulate password update (replace with actual API call)
      console.log("Updating password:", { currentPassword, newPassword });
      setPasswordSuccess("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
   };

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
         {/* Header (same as in HomePage with hover dropdown) */}
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Logo */}
               <div className="flex items-center">
                  <div className="mr-2">
                     <Image
                        className="rounded-full"
                        src={avatar}
                        alt="Logo"
                        width={65}
                        height={65}
                     />
                  </div>
                  <div className="text-2xl font-bold text-primary-500">
                     Learn <br /> Your Way
                  </div>
               </div>

               {/* Search bar */}
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        aria-label="Search courses"
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
                           href="/"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Courses
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Categories
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Teaching
                        </Link>
                     </li>
                     {user ? (
                        <li className="relative group">
                           <div className="flex items-center cursor-pointer">
                              <Image
                                 className="rounded-full"
                                 src={user.avatar || "/default-avatar.png"}
                                 alt={user.username || "User avatar"}
                                 width={40}
                                 height={40}
                              />
                              <ChevronDown className="ml-1 w-4 h-4 text-gray-600 transition-transform group-hover:rotate-180" />
                           </div>

                           {/* Dropdown Menu */}
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
                                    onClick={() => {
                                       setUser(null);
                                       router.push("/"); // Redirect to homepage after logout
                                    }}
                                    className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Logout
                                 </button>
                              </div>
                           </div>
                        </li>
                     ) : (
                        <>
                           <li>
                              <Link
                                 href="/auth/login"
                                 className="px-3 py-1 rounded-full border border-primary-500 text-primary-600 hover:bg-primary-100 transition-colors"
                                 aria-label="Sign In"
                              >
                                 Log In
                              </Link>
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

         {/* Main Content: Profile Page */}
         <main className="container mx-auto px-4 md:px-5 py-10">
            <section className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
               <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Profile</h1>

               {/* User Information */}
               <div className="flex flex-col items-center mb-8">
                  <Image
                     className="rounded-full mb-4"
                     src={user?.avatar || "/default-avatar.png"}
                     alt={user?.username || "User avatar"}
                     width={100}
                     height={100}
                  />
                  <p className="text-lg font-semibold text-gray-800">{user?.username || "User"}</p>
                  <p className="text-sm text-gray-600">{user?.email || "user@example.com"}</p>
               </div>

               {/* Change Email Form */}
               <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Email</h2>
                  <form onSubmit={handleEmailChange}>
                     <div className="mb-4">
                        <label
                           htmlFor="new-email"
                           className="block text-sm font-medium text-gray-700 mb-1"
                        >
                           New Email
                        </label>
                        <input
                           type="email"
                           id="new-email"
                           value={newEmail}
                           onChange={(e) => setNewEmail(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                           placeholder="Enter new email"
                           required
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="email-password"
                           className="block text-sm font-medium text-gray-700 mb-1"
                        >
                           Current Password
                        </label>
                        <input
                           type="password"
                           id="email-password"
                           value={emailPassword}
                           onChange={(e) => setEmailPassword(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                           placeholder="Enter current password"
                           required
                        />
                     </div>
                     {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}
                     {emailSuccess && <p className="text-green-500 text-sm mb-4">{emailSuccess}</p>}
                     <button
                        type="submit"
                        className="w-full bg-primary-500 text-white font-medium py-3 rounded-lg hover:bg-primary-600 transition-colors"
                     >
                        Save Changes
                     </button>
                  </form>
               </div>

               {/* Change Password Form */}
               <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
                  <form onSubmit={handlePasswordChange}>
                     <div className="mb-4">
                        <label
                           htmlFor="current-password"
                           className="block text-sm font-medium text-gray-700 mb-1"
                        >
                           Current Password
                        </label>
                        <input
                           type="password"
                           id="current-password"
                           value={currentPassword}
                           onChange={(e) => setCurrentPassword(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                           placeholder="Enter current password"
                           required
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="new-password"
                           className="block text-sm font-medium text-gray-700 mb-1"
                        >
                           New Password
                        </label>
                        <input
                           type="password"
                           id="new-password"
                           value={newPassword}
                           onChange={(e) => setNewPassword(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                           placeholder="Enter new password"
                           required
                        />
                     </div>
                     <div className="mb-4">
                        <label
                           htmlFor="confirm-new-password"
                           className="block text-sm font-medium text-gray-700 mb-1"
                        >
                           Confirm New Password
                        </label>
                        <input
                           type="password"
                           id="confirm-new-password"
                           value={confirmNewPassword}
                           onChange={(e) => setConfirmNewPassword(e.target.value)}
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                           placeholder="Confirm new password"
                           required
                        />
                     </div>
                     {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
                     {passwordSuccess && (
                        <p className="text-green-500 text-sm mb-4">{passwordSuccess}</p>
                     )}
                     <button
                        type="submit"
                        className="w-full bg-primary-500 text-white font-medium py-3 rounded-lg hover:bg-primary-600 transition-colors"
                     >
                        Save Changes
                     </button>
                  </form>
               </div>
            </section>
         </main>

         {/* Footer (same as in HomePage) */}
         <footer className="bg-white top-shadow py-10">
            <div className="container mx-auto px-4 md:px-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Information */}
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                           <GraduationCap aria-label="Learn Your Way Logo" />
                        </div>
                        <div className="text-xl font-bold">Learn Your Way</div>
                     </div>
                     <p className="text-sm">
                        Empowering learners worldwide with high-quality online courses in
                        programming, design, business, and more.
                     </p>
                  </div>

                  {/* Navigation Links */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                     <ul className="space-y-2 text-sm">
                        <li>
                           <Link
                              href="/"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Home page"
                           >
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Courses page"
                           >
                              Courses
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Categories page"
                           >
                              Categories
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Teaching page"
                           >
                              Teaching
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="About page"
                           >
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Contact page"
                           >
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>

                  {/* Contact and Social Media */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                     <div className="mt-4 flex space-x-4">
                        <a
                           href="https://twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Twitter"
                        >
                           <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </a>
                        <a
                           href="https://facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook"
                        >
                           <i className="fa-brands fa-facebook-f text-2xl"></i>
                        </a>
                        <a
                           href="https://instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram"
                        >
                           <i className="fa-brands fa-square-instagram text-2xl"></i>
                        </a>
                        <a
                           href="https://linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on LinkedIn"
                        >
                           <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                  <div className="mb-4 md:mb-0">
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors mr-4"
                        aria-label="Privacy Policy"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors"
                        aria-label="Terms of Service"
                     >
                        Terms of Service
                     </a>
                  </div>
                  <div>© {new Date().getFullYear()} Learn Your Way. All rights reserved.</div>
               </div>
            </div>
         </footer>
      </div>
   );
}
