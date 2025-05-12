"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SignUpForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const router = useRouter();

   const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!name || !email || !password) {
         setError("Please fill in all fields.");
         return;
      }

      setError("");

      try {
         await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
            email,
            password,
         });

         toast.success("Sign up successful! Redirect to Login...");
         setTimeout(() => {
            router.push("/auth/login");
         }, 2000);
      } catch (err: unknown) {
         if (axios.isAxiosError(err)) {
            setError(err.message);
         } else {
            setError("Unknown Error");
         }
      }
   };

   return (
      <div className="relative">
         {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4">{error}</div>
         )}

         <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <div className="space-y-4">
               <div className="relative">
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Full name"
                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                     required
                  />
               </div>
            </div>

            <button
               type="submit"
               className="w-full bg-primary-500 text-white font-medium py-3 px-6 rounded-full hover:bg-primary-600 transition-colors"
            >
               Sign Up
            </button>
         </form>
      </div>
   );
};

export default SignUpForm;
