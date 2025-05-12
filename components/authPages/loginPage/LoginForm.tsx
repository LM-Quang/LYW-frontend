"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginForm = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const router = useRouter();

   const handleEmailLogin = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !password) {
         setError("Please fill in all fields.");
         return;
      }

      setError("");

      try {
         const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
            email,
            password,
         });
         localStorage.setItem("token", res.data.token);
         router.push("/");
      } catch (err: unknown) {
         if (axios.isAxiosError(err)) {
            setError(err.message);
         } else {
            setError("Unknown Error");
         }
      }
   };

   return (
      <div>
         {/* Error Message */}
         {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">{error}</div>}

         {/* Email/Password Form */}
         <form className="mt-3 space-y-6" onSubmit={handleEmailLogin}>
            <div className="space-y-4">
               <div className="relative">
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email address"
                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                     aria-label="Email address"
                     // required
                  />
               </div>
               <div className="relative">
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                     aria-label="Password"
                     // required
                  />
               </div>
            </div>

            <button
               type="submit"
               className="w-full bg-primary-500 text-white font-medium py-3 px-6 rounded-full hover:bg-primary-600 transition-colors cursor-pointer"
               aria-label="Sign in with email"
            >
               Log In
            </button>
         </form>
      </div>
   );
};

export default LoginForm;
