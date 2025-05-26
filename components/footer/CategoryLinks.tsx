import React from "react";
import Link from "next/link";
import { Category } from "@/utils/data";
import { createSearchUrl } from "@/utils/utils";

const CategoryLinks = () => {
   return (
      <div className="mx-auto">
         <h3 className="text-xl font-semibold mb-4 pl-2">Category</h3>
         <ul className="space-y-2">
            {Object.values(Category).map((value, index) => {
               return (
                  <li key={index}>
                     <Link
                        href={createSearchUrl("", value, "")}
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

export default CategoryLinks;
