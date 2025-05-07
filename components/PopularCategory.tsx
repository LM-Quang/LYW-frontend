"use client";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Code, Database, PenTool } from "lucide-react";
import Link from "next/link";

const categories = [
   {
      title: "Web Development",
      icon: <Code className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#web-development",
   },
   {
      title: "Data Science",
      description: "Master Python, R, and data analysis.",
      icon: <Database className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#data-science",
   },
   {
      title: "Design",
      icon: <PenTool className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#design",
   },
   {
      title: "Data Science",
      icon: <Database className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#data-science",
   },
   {
      title: "Design",
      icon: <PenTool className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#design",
   },
];

const PopularCategory = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   return (
      <section className="mb-12 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Popular Categories
         </h2>
         <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
               prevEl: ".featured-course-prev",
               nextEl: ".featured-course-next",
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
            {categories.map((category, index) => (
               <SwiperSlide key={index}>
                  <Link
                     href={category.link}
                     className="bg-white rounded-lg p-6 border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow"
                     aria-label={`${category.title} Courses`}
                  >
                     {category.icon}
                     <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                  </Link>
               </SwiperSlide>
            ))}
            <button
               className={`featured-course-prev absolute left-0 top-1/2 border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 ${
                  isBeginning ? "hidden" : ""
               }`}
               aria-label="Previous course"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>
            <button
               className={`featured-course-next absolute right-0 top-1/2 border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-100
                           ${isEnd ? "hidden" : ""}`}
               aria-label="Next course"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
         </Swiper>
      </section>
   );
};

export default PopularCategory;
