import Link from "next/link";
import React from "react";

const AuthActions = () => {
   return (
      <>
         <li>
            <Link
               href="/auth/login"
               className="px-3 py-2 rounded-lg border-2 border-primary-500 text-white hover:bg-white hover:text-primary-500 transition-colors"
               aria-label="Sign In"
            >
               Log In
            </Link>
         </li>
         <li>
            <Link
               href="/auth/signup"
               className="px-3 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
               Sign Up
            </Link>
         </li>
      </>
   );
};

export default AuthActions;
