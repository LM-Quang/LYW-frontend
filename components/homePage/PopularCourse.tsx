"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import truncateText from "@/utils/utils";
import renderStars from "../RenderStars";
import { CourseList, getCoursesAPI } from "@/libs/courseAPIs";
import img from "@/assets/img-1.jpg";

const PopularCourse = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);
   const [courses, setCourses] = useState<CourseList[]>([]);

   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const [swiperReady, setSwiperReady] = useState(false);

   useEffect(() => {
      async function getCourses() {
         const response = await getCoursesAPI();
         setCourses(response);
         setSwiperReady(true);
      }
      getCourses();
   }, []);

   return (
      <section className="mb-12 container mx-auto relative z-10 overflow-visible">
         <h2 className="p-2 flex justify-center text-4xl font-bold mb-3">Popular Courses</h2>
         <div>
            <button
               ref={prevRef}
               className={`absolute left-0 top-1/2 border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 transition-opacity duration-200 
                     ${isBeginning ? "hidden" : ""}
                     `}
               aria-label="Previous course"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>

            <button
               ref={nextRef}
               className={`absolute right-0 top-1/2 border border-gray-200 shadow-md bg-white rounded-full p-2.5 transform -translate-y-1/2 z-30 cursor-pointer hover:bg-gray-100 transition-opacity duration-200 
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
               {courses.map((course, index) => (
                  <SwiperSlide key={index}>
                     <Link
                        href={`/course-detail/${course.courseId}`}
                        className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-col border border-gray-200 hover:opacity-90"
                     >
                        <Image
                           src={img}
                           alt={course.courseTitle}
                           className="w-full h-48 object-cover"
                           width={360}
                           height={190}
                        />
                        <div className="p-4 flex-1 rounded-lg">
                           <h3 className="text-xl font-bold text-gray-800 h-14">
                              {truncateText(course.courseTitle, 45)}
                           </h3>
                           <p className="text-gray-600 mb-4 text-sm">By {course.instructorName}</p>
                           <div className="flex items-center mb-2 h-7">
                              {course.isBestseller && (
                                 <span className="bg-primary-500 text-white p-1 mr-2 rounded-lg text-sm font-medium">
                                    Best Seller
                                 </span>
                              )}
                              <span className="text-sm text-gray-500">
                                 Updated {course.courseUpdatedAt}
                              </span>
                           </div>
                           <div className="flex items-center mb-4">
                              <span className="text-sm text-gray-600 mr-2">
                                 {course.courseRating}
                              </span>
                              <div className="flex space-x-0.5">
                                 {renderStars(course.courseRating)}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">
                                 ({course.courseReviewCounts.toLocaleString()} ratings)
                              </span>
                           </div>
                           <span className="text-lg font-semibold">
                              {course.courseTotalPrice === 0
                                 ? "Free"
                                 : `$${course.courseTotalPrice.toFixed(2)}`}
                           </span>
                        </div>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </section>
   );
};

export default PopularCourse;
