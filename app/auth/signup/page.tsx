"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   //   const router = useRouter();

   const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (!name || !email || !password) {
         setError("Please fill in all fields.");
         return;
      }

      try {
         const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
         });

         if (!response.ok) {
            const data = await response.json();
            setError(data.error || "Something went wrong.");
            return;
         }

         // Automatically sign in after signup
         // Call Log In API
         // const result = await signIn("credentials", {
         //   redirect: false,
         //   email,
         //   password,
         // });

         // if (result?.error) {
         //   setError("Error signing in after registration.");
         // } else {
         //   router.push("/edu");
         // }
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
         setError("An unexpected error occurred.");
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
                  <h2 className="text-3xl font-bold text-primary-500">EduLearn Academy</h2>
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
