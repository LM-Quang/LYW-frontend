"use client";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COURSES } from "@/utils/data";
import CourseCard from "../CourseCard";

const RelatedCourses = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);
   return (
      <>
         <h2 className="text-3xl font-semibold mb-6">Related Courses</h2>
         <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
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
            {COURSES.map((course, index) => (
               <SwiperSlide key={index}>
                  <CourseCard course={course} />
               </SwiperSlide>
            ))}

            <button
               className={`featured-course-prev absolute left-0 top-[190px] border border-gray-200 shadow-md bg-white rounded-full p-1.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 ${
                  isBeginning ? "hidden" : ""
               }`}
               aria-label="Previous course"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>

            <button
               className={`featured-course-next absolute right-0 top-[190px] border border-gray-200 shadow-md bg-white rounded-full p-1.5 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-100
               ${isEnd ? "hidden" : ""}`}
               aria-label="Next course"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
         </Swiper>
      </>
   );
};

export default RelatedCourses;
