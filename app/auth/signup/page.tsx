"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function SignupPage() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const router = useRouter();

   const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (!name || !email || !password) {
         setError("Please fill in all fields.");
         return;
      }

      try {
         await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
            email,
            password,
         });
         alert("Signup successful");
         router.push("/login");
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         if (err.response?.status === 409) {
            setError("Email already in use.");
         } else {
            setError("Signup failed. Try again.");
         }
      }
   };

   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div>
               <div className="flex items-center justify-center">
                  <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                     <GraduationCap aria-label="EduLearn Academy Logo" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-500">Learn Your Way</h2>
               </div>
               <h3 className="mt-6 text-center text-2xl font-semibold text-gray-800">
                  Create your account
               </h3>
            </div>

            {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">{error}</div>}

            <form className="mt-8 space-y-6" onSubmit={handleSignup}>
               <div className="space-y-4">
                  <div className="relative">
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Full name"
                        required
                     />
                  </div>
                  <div className="relative">
                     <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Email address"
                        required
                     />
                  </div>
                  <div className="relative">
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Password"
                        required
                     />
                  </div>
               </div>

               <button
                  type="submit"
                  className="w-full bg-primary-500 text-white font-medium py-3 px-6 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="Sign up"
               >
                  Sign Up
               </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
               </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4">
               {/* Github */}
               <button
                  // onClick={() => {
                  //    handleGithubLogin("github");
                  // }}
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Sign in with GitHub"
               >
                  <svg
                     className="mr-2"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     width={24}
                     height={24}
                     aria-label="GitHub logo"
                     role="img"
                  >
                     <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.003-.403 1.018.005 2.045.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.63-5.475 5.922.431.372.815 1.104.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Sign up with GitHub
               </button>

               {/* Google */}
               <button
                  // onClick={() => {
                  //    handleGithubLogin("google");
                  // }}
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Sign in with Google"
               >
                  <svg
                     className="mr-1.5"
                     viewBox="0 0 24 24"
                     width={24}
                     height={24}
                     aria-label="Google logo"
                     role="img"
                  >
                     <path
                        d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z"
                        fill="#EA4335"
                     ></path>
                     <path
                        d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z"
                        fill="#FBBC05"
                     ></path>
                     <path
                        d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z"
                        fill="#34A853"
                     ></path>
                     <path
                        d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z"
                        fill="#4285F4"
                     ></path>
                  </svg>
                  Sign up with Google
               </button>

               {/* Facobook */}
               <button
                  // onClick={() => {
                  //    handleGithubLogin("facebook");
                  // }}
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Sign in with Facebook"
               >
                  <svg
                     className="w-5 h-5 mr-2 text-white bg-blue-600 rounded-full"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     aria-label="Facebook logo"
                     role="img"
                     width={25}
                     height={25}
                  >
                     <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103v3.28h-2.259c-.51 0-.957.344-.957 1.02v1.155h3.226l-.513 3.667h-2.713v7.98h-3.11z" />
                  </svg>
                  Sign up with Facebook
               </button>

               {/* Apple */}
               {/* <button
                  onClick={() => {
                     handleGithubLogin("apple");
                  }}
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Sign in with Apple"
               >
                  <svg
                     className="mr-1.5"
                     viewBox="0 0 24 24"
                     width={24}
                     height={24}
                     aria-label="Apple logo"
                     role="img"
                  >
                     <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                  </svg>
                  Sign up with Apple
               </button> */}
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
               Already have an account?{" "}
               <Link
                  href="/auth/login"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                  aria-label="Sign in to your account"
               >
                  Log in
               </Link>
            </p>
         </div>
      </div>
   );
}
