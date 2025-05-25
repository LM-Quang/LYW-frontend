import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-1.png";
import Link from "next/link";

const socialMedias = [
   {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      tag: <i className="fa-brands fa-linkedin text-2xl" />,
   },
   {
      name: "Facebook",
      href: "https://www.facebook.com",
      tag: <i className="fa-brands fa-facebook-f text-2xl" />,
   },
   {
      name: "Instagram",
      href: "https://www.instagram.com",
      tag: <i className="fa-brands fa-square-instagram text-2xl" />,
   },
   { name: "X", href: "https://www.x.com", tag: <i className="fa-brands fa-x-twitter text-2xl" /> },
   {
      name: "TikTok",
      href: "https://www.tiktok.com",
      tag: <i className="fa-brands fa-tiktok text-2xl" />,
   },
];

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
         <div className="mt-4 flex space-x-4 pl-2">
            {socialMedias.map((media) => {
               return (
                  <a
                     key={media.name}
                     href={media.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={media.name}
                     className="hover:text-primary-500 transition-colors"
                  >
                     {media.tag}
                  </a>
               );
            })}
         </div>
      </div>
   );
};

export default BrandSocialMedias;
