"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CategoryList, getCategoriesAPI } from "@/libs/courseAPIs";
import { QUERY_PARAMS } from "@/utils/constant";

const PopularCategory = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);
   const [categories, setCategories] = useState<CategoryList[]>([]);

   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const [swiperReady, setSwiperReady] = useState(false);

   useEffect(() => {
      async function getCategories() {
         const response = await getCategoriesAPI();
         setCategories(response);
         setSwiperReady(true);
      }
      getCategories();
   }, []);

   return (
      <section id="popularCategories" className="mb-12 container mx-auto relative">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Popular Categories
         </h2>
         <div>
            <button
               ref={prevRef}
               className={`absolute left-[-10px] top-[72%] border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 transition-opacity duration-200 
                              ${isBeginning ? "hidden" : ""}
                              `}
               aria-label="Previous course"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>

            <button
               ref={nextRef}
               className={`absolute right-[-10px] top-[72%] border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 transition-opacity duration-200 
                           ${isEnd ? "hidden" : ""}`}
               aria-label="Next course"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
         </div>
         {swiperReady && (
            <Swiper
               modules={[Navigation]}
               spaceBetween={20}
               slidesPerView={4}
               navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
               }}
               onBeforeInit={(swiper) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  swiper.params.navigation.prevEl = prevRef.current;
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  swiper.params.navigation.nextEl = nextRef.current;
               }}
               onInit={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
               }}
               pagination={{ clickable: true }}
               className="relative"
               onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
               }}
               onReachBeginning={() => setIsBeginning(true)}
               onReachEnd={() => setIsEnd(true)}
               onFromEdge={() => {
                  setIsBeginning(false);
                  setIsEnd(false);
               }}
            >
               {categories.map((category) => (
                  <SwiperSlide key={category.id}>
                     <Link
                        href={`/courses?${QUERY_PARAMS}=${category.name}`}
                        className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col items-center hover:shadow-md transition-colors"
                        aria-label={`${category.name} Courses`}
                     >
                        <h3 className="text-2xl text-center font-semibold text-gray-800">
                           {category.name}
                        </h3>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </section>
   );
};

export default PopularCategory;
