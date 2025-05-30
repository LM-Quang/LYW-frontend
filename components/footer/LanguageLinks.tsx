import { createSearchUrl } from "@/utils/utils";
import { Category, SubCategory } from "@/utils/data";
import Link from "next/link";
import React from "react";

const LanguageLinks = () => {
   return (
      <div className="mx-auto">
         <h3 className="text-xl font-semibold mb-4 pl-2">Language</h3>
         <ul className="space-y-3">
            {Object.values(SubCategory.Language).map((value, index) => {
               return (
                  <li key={index}>
                     <Link
                        href={createSearchUrl(value, Category.PROGRAMMING, "")}
                        className="py-2 px-3 rounded-lg hover:bg-primary-600 transition-colors"
                        aria-label={value}
                     >
                        {value}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default LanguageLinks;
