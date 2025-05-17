import Link from "next/link";
import React from "react";

const AuthActions = () => {
   return (
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
   );
};

export default AuthActions;
