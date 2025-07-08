import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-1.png";
import Link from "next/link";
import SocialMedias from "../common/SocialMedias";

const appLinks = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   { name: "Contact", href: "/contact" },
   { name: "Courses", href: "/courses" },
   { name: "Price Plan", href: "/price-plan" },
   { name: "Partnerships", href: "/teaching" },
];

const BrandSocialMedias = () => {
   return (
      <div>
         <div className="flex items-center mb-4 pl-2">
            <Image src={logo} alt="Logo" width={50} height={50} className="mr-2 rounded-full" />
            <div className="text-xl font-bold">
               Learn <br /> Your Way
            </div>
         </div>
         <ul className="space-y-3">
            {appLinks.map((link) => {
               return (
                  <li key={link.name}>
                     <Link
                        href={link.href}
                        className="py-2 px-3 rounded-lg hover:bg-primary-600 transition-colors"
                        aria-label={link.name}
                     >
                        {link.name}
                     </Link>
                  </li>
               );
            })}
         </ul>
         <div className="ml-3">
            <SocialMedias />
         </div>
      </div>
   );
};

export default BrandSocialMedias;
