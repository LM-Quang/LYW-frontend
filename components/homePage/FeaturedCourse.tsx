"use client";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { courses } from "@/utils/data";
import truncateText from "@/utils/utils";
import renderStars from "../RenderStars";

const FeaturedCourse = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   return (
      <section className="mb-12 container mx-auto">
         <h2 className="p-2 flex justify-center text-4xl font-bold mb-3">Popular Courses</h2>
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
            {courses.map((course, index) => (
               <SwiperSlide key={index}>
                  <Link
                     href={`/course-detail/${course.id}`}
                     className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-col border border-gray-200 hover:opacity-90"
                  >
                     <Image
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                        width={360}
                        height={190}
                     />
                     <div className="p-4 flex-1 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 h-14">
                           {truncateText(course.title, 45)}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">By {course.instructor}</p>
                        <div className="flex items-center mb-2 h-7">
                           {course.isBestSeller && (
                              <span className="bg-primary-500 text-white p-1 mr-2 rounded-lg text-sm font-medium">
                                 Best Seller
                              </span>
                           )}
                           <span className="text-sm text-gray-500">Updated {course.updated}</span>
                        </div>
                        <div className="flex items-center mb-4">
                           <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
                           <div className="flex space-x-0.5">{renderStars(course.rating)}</div>
                           <span className="text-sm text-gray-600 ml-2">
                              ({course.ratingsCount.toLocaleString()} ratings)
                           </span>
                        </div>
                        <span className="text-lg font-semibold">
                           {course.totalPrice === 0 ? "Free" : `$${course.totalPrice.toFixed(2)}`}
                        </span>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
            <button
               className={`featured-course-prev absolute left-0 top-[190px] border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 ${
                  isBeginning ? "hidden" : ""
               }`}
               aria-label="Previous course"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>
            <button
               className={`featured-course-next absolute right-0 top-[190px] border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-100
               ${isEnd ? "hidden" : ""}`}
               aria-label="Next course"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
         </Swiper>
      </section>
   );
};

export default FeaturedCourse;
