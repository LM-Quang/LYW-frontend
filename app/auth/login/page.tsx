import React from "react";
import Link from "next/link";
import Title from "@/components/authPages/Title";
import Divider from "@/components/authPages/Divider";
import SocialsLogin from "@/components/authPages/SocialsLogin";
import LoginForm from "@/components/authPages/loginPage/LoginForm";

export default function LoginPage() {
   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
            <Title title="Log in to your account" />

            {/* Login Form */}
            <LoginForm />

            {/* Divider */}
            <Divider />

            {/* Social Login Buttons */}
            <SocialsLogin />

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
               Don&apos;t have an account?{" "}
               <Link
                  href="/auth/signup"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                  aria-label="Sign up for a new account"
               >
                  Sign up
               </Link>
            </p>
         </div>
      </div>
   );
}
