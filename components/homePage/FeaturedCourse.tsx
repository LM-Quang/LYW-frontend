"use client";

import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "@/assets/img-1.jpg";
import renderRatingStars from "@/utils/ratingStars";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Course } from "@/types/Types";

const featuredCourses: Course[] = [
   {
      id: "1",
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      category: { id: "cat1", name: "Web Development" },
      description:
         "Learn JavaScript from scratch and build real-world projects in this comprehensive course.",
      totalPrice: 49.99,
      thumbnail: img1.src,
      rating: 4.8,
      ratingsCount: 42297,
      isBestSeller: true,
      updated: "July 2023",
      progress: 0,
      sections: [
         {
            id: "sec1",
            title: "Basics",
            price: 0,
            lectures: [
               {
                  id: "lec1",
                  title: "Intro to JS",
                  fileType: "video",
                  fileUrl: "https://example.com/video1.mp4",
                  duration: "5:00",
                  isWatched: false,
               },
            ],
         },
      ],
   },
   {
      id: "2",
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      category: { id: "cat2", name: "Data Science" },
      description:
         "Master Python for data science, including pandas, numpy, and machine learning basics.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.6,
      ratingsCount: 12345,
      isBestSeller: false,
      updated: "July 2023",
      progress: 0,
      sections: [
         {
            id: "sec2",
            title: "Intro to Python",
            price: 0,
            lectures: [
               {
                  id: "lec2",
                  title: "Python Basics",
                  fileType: "video",
                  fileUrl: "https://example.com/video2.mp4",
                  duration: "7:30",
                  isWatched: false,
               },
            ],
         },
      ],
   },
   {
      id: "3",
      title: "Introduction to Web Development",
      instructor: "Michael Brown",
      category: { id: "cat1", name: "Web Development" },
      description: "A beginner-friendly course covering HTML, CSS, and basic JavaScript.",
      totalPrice: 0,
      thumbnail: img1.src,
      rating: 4.2,
      ratingsCount: 12000,
      isBestSeller: true,
      updated: "July 2023",
      progress: 0,
      sections: [
         {
            id: "sec3",
            title: "HTML Basics",
            price: 0,
            lectures: [
               {
                  id: "lec3",
                  title: "Intro to HTML",
                  fileType: "pdf",
                  fileUrl: "https://example.com/html.pdf",
                  isWatched: false,
               },
            ],
         },
      ],
   },
   {
      id: "4",
      title: "Complete JavaScript Course 2023",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description:
         "Master JavaScript with the most comprehensive course available, taught by John Smith.",
      totalPrice: 0,
      thumbnail: img1.src,
      rating: 4.8,
      ratingsCount: 42297,
      isBestSeller: true,
      updated: "July 2023",
      progress: 0,
      sections: [],
   },
   {
      id: "5",
      title: "Python for Data Science",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description:
         "Learn Python and data analysis techniques with hands-on projects, taught by Jane Doe.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      isBestSeller: false,
      updated: "August 2023",
      progress: 0,
      sections: [],
   },
   {
      id: "6",
      title: "Typescript for Front End",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description: "Learn TypeScript and its application in frontend development with React.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      isBestSeller: false,
      updated: "August 2023",
      progress: 0,
      sections: [],
   },
   {
      id: "7",
      title: "Spring Boot 3",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description: "Build REST APIs and full-stack applications using Spring Boot 3.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      isBestSeller: false,
      updated: "August 2023",
      progress: 0,
      sections: [],
   },
   {
      id: "8",
      title: ".NET with C#",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description:
         "Develop modern web applications using .NET and C# in this beginner-friendly course.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      isBestSeller: false,
      updated: "August 2023",
      progress: 0,
      sections: [],
   },
   {
      id: "9",
      title: "C",
      instructor: "Quang",
      category: { id: "cat1", name: "Web Development" },
      description:
         "Understand the fundamentals of programming in C language with practical examples.",
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      isBestSeller: false,
      updated: "August 2023",
      progress: 0,
      sections: [],
   },
];

function truncateText(text: string, maxLength: number): string {
   if (text.length <= maxLength) {
      return text;
   }
   return text.slice(0, maxLength - 2) + "..";
}

const FeaturedCourse = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   return (
      <section className="mb-12 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Featured Courses
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
            {featuredCourses.map((course, index) => (
               <SwiperSlide key={index}>
                  <Link
                     href={`/course-detail/${course.id}`}
                     className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-col border border-gray-100 hover:opacity-90"
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
                           <div className="flex space-x-0.5">
                              {renderRatingStars(course.rating)}
                           </div>
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
