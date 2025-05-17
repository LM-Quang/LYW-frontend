"use client";

import React, { useState } from "react";
import { Award, ChevronLeft, ChevronRight, Video, Infinity } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const whyChooseItems = [
   {
      title: "On-Demand Learning",
      description: "Access 67+ hours of video content anytime, anywhere.",
      icon: <Video className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Earn Certificates",
      description: "Get a certificate of completion for every course.",
      icon: <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Lifetime Access",
      description: "Learn at your own pace with full lifetime access.",
      icon: <Infinity className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
];

const WhyChooseUs = () => {
   // State to track if carousel is at the beginning or end
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   return (
      <section className="mb-12 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Why Choose EduLearn Academy?
         </h2>
         <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={{
               prevEl: ".featured-course-prev",
               nextEl: ".featured-course-next",
            }}
            pagination={{ clickable: true }}
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
            {whyChooseItems.map((item, index) => (
               <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-colors">
                     {item.icon}
                     <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
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

export default WhyChooseUs;
