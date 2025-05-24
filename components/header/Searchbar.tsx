"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { QUERY_PARAMS } from "@/utils/constant";

const Searchbar = () => {
   const searchParams = useSearchParams();
   const query = searchParams.get(QUERY_PARAMS);
   const router = useRouter();

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         window.location.href = `/courses?${QUERY_PARAMS}=${e.currentTarget.value}`;
      }
   };

   const handleClearSearch = () => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(QUERY_PARAMS);
      router.push(`?${params.toString()}`);
   };

   return (
      <div className="flex-1 max-w-xl mx-auto md:mx-0 bg-white rounded-full">
         <div className="relative">
            <input
               type="text"
               placeholder="Search courses, topics, instructors..."
               className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
               aria-label="Search courses"
               defaultValue={query ? query : ""}
               onKeyDown={handleKeyDown}
            />
            <Search
               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
               aria-hidden="true"
            />
            {query && (
               <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
               >
                  <X className="w-5 h-5" />
               </button>
            )}
         </div>
      </div>
   );
};

export default Searchbar;
