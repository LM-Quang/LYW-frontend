import Link from "next/link";
import React from "react";
import logo from "@/assets/logo-1.png";
import Image from "next/image";

const quickLinks = [
   { name: "Home", href: "/" },
   { name: "Categories", href: "/categories" },
   { name: "Teaching", href: "/teaching" },
   { name: "About", href: "/about" },
   { name: "Contact", href: "/contact" },
];

const socialMedias = [
   { name: "Mail", href: "", tag: <i className="fa-regular fa-envelope text-2xl" /> },
   {
      name: "Youtube",
      href: "https://www.youtube.com",
      tag: <i className="fa-brands fa-youtube text-2xl" />,
   },
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
];

const Footer = () => {
   return (
      <footer className="bg-gray-800 py-10 text-white">
         <div className="container mx-auto px-4 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Brand Information */}
               <div>
                  <div className="flex items-center mb-4">
                     <Image
                        src={logo}
                        alt="Logo"
                        width={40}
                        height={40}
                        className="mr-2 rounded-full"
                     />
                     <div className="text-xl font-bold">Learn Your Way</div>
                  </div>
                  <p className="text-sm">
                     Empowering learners worldwide with high-quality online courses in programming,
                     design, business, and more.
                  </p>
               </div>

               {/* Navigation Links */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                     {quickLinks.map((link) => {
                        return (
                           <li key={link.name}>
                              <Link
                                 href={link.href}
                                 className="hover:text-primary-400 transition-colors"
                                 aria-label="Home page"
                              >
                                 {link.name}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </div>

               {/* Contact and Social Media */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                  <div className="mt-4 flex space-x-4">
                     {socialMedias.map((media) => {
                        return (
                           <a
                              key={media.name}
                              href={media.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={media.name}
                           >
                              {media.tag}
                           </a>
                        );
                     })}
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
               <div className="mb-4 md:mb-0">
                  <a
                     href="#"
                     className="hover:text-primary-400 transition-colors mr-4"
                     aria-label="Privacy Policy"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="#"
                     className="hover:text-primary-400 transition-colors"
                     aria-label="Terms of Service"
                  >
                     Terms of Service
                  </a>
               </div>
               <div>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="/" className="text-primary-600">
                     Learn Your Way
                  </Link>
                  . All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
