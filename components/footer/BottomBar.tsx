import Link from "next/link";
import React from "react";

const links = [
   { name: "Privacy Policy", href: "/privacy-policy" },
   { name: "Terms of Service", href: "/terms-of-service" },
];

const BottomBar = () => {
   return (
      <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
         <div className="mb-4 md:mb-0">
            {links.map((link) => {
               return (
                  <Link
                     key={link.name}
                     href={link.href}
                     className="hover:text-primary-400 transition-colors mr-4"
                     aria-label="Privacy Policy"
                  >
                     {link.name}
                  </Link>
               );
            })}
            {/* <Link
               href="/privacy"
               className="hover:text-primary-400 transition-colors mr-4"
               aria-label="Privacy Policy"
            >
               Privacy Policy
            </Link>
            <Link
               href="/terms-of-service"
               className="hover:text-primary-400 transition-colors"
               aria-label="Terms of Service"
            >
               Terms of Service
            </Link> */}
         </div>
         <div>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="text-primary-600">
               Learn Your Way
            </Link>
            . All rights reserved.
         </div>
      </div>
   );
};

export default BottomBar;
