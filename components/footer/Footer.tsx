import React from "react";
import BrandSocialMedias from "./BrandSocialMedias";
import Subscribe from "./Subscribe";
import BottomBar from "./BottomBar";
import LanguageLinks from "./LanguageLinks";
import CategoryLinks from "./CategoryLinks";

const Footer = () => {
   return (
      <footer className="bg-gray-800 py-10 text-white">
         <div className="container mx-auto px-4 md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Brand & Social Media Information */}
               <BrandSocialMedias />

               {/* Category */}
               <CategoryLinks />

               {/* Language */}
               <LanguageLinks />

               {/* Subscribe */}
               <Subscribe />
            </div>

            {/* Bottom Bar */}
            <BottomBar />
         </div>
      </footer>
   );
};

export default Footer;
