"use client";

import React from "react";
import Hero from "@/components/homePage/Hero";
import PopularCourse from "@/components/homePage/PopularCourse";
import PopularCategory from "@/components/homePage/PopularCategory";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import { useUser } from "@/context/UserContext";
import { USERS, TEACHERS, STUDENTS } from "@/utils/data";

export default function HomePage() {
   const { updateUser, updateUserInfo } = useUser();
   const handleClickAdmin = () => {
      updateUser(USERS[0]);
      updateUserInfo(null);
   };
   const handleClickStudent = () => {
      updateUser(USERS[3]);
      updateUserInfo(STUDENTS[1]);
   };
   const handleClickTeacher = () => {
      updateUser(USERS[6]);
      updateUserInfo(TEACHERS[1]);
   };
   return (
      <div className="w-full min-h-screen font-sans bg-gray-50">
         <div className="mb-5 space-x-2">
            <button onClick={handleClickAdmin} className="p-4 bg-black text-white cursor-pointer">
               Admin
            </button>
            <button onClick={handleClickStudent} className="p-4 bg-black text-white cursor-pointer">
               Student
            </button>
            <button onClick={handleClickTeacher} className="p-4 bg-black text-white cursor-pointer">
               Teacher
            </button>
         </div>
         <div className="px-4 md:px-5 py-10">
            {/* Hero Section */}
            <Hero />

            {/* Popular Course Carousel */}
            <PopularCourse />

            {/* Popular Categories Carousel */}
            <PopularCategory />

            {/* Why Choose Us Carousel */}
            <WhyChooseUs />

            {/* Testimonials Carousel  (For Future)*/}
            {/* <Testimonials /> */}

            {/* Price Plans Section (For Future)*/}
            {/* <PricePlan /> */}
         </div>
      </div>
   );
}
