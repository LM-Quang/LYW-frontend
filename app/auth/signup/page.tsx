import React from "react";
import Link from "next/link";
import Title from "@/components/authPages/Title";
import Divider from "@/components/authPages/Divider";
import SocialsLogin from "@/components/authPages/SocialsLogin";
import SignUpForm from "@/components/authPages/signupPage/SignUpForm";

export default function SignupPage() {
   return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
            <Title title="Create your account" />

            {/* Sign up Form */}
            <SignUpForm />

            {/* Divider */}
            <Divider />

            {/* Social Login Buttons */}
            <SocialsLogin />

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
