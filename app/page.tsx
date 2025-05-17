"use client";

import React from "react";
import Hero from "@/components/homePage/Hero";
import FeaturedCourse from "@/components/homePage/FeaturedCourse";
import PopularCategory from "@/components/homePage/PopularCategory";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import { useUser } from "@/context/UserContext";
import { ADMIN, STUDENT, STUDENT_INFO, TEACHER, TEACHER_INFO } from "@/utils/data";

export default function HomePage() {
   const { updateUser, updateUserInfo } = useUser();
   const handleClickAdmin = () => {
      updateUser(ADMIN);
      updateUserInfo(null);
   };
   const handleClickStudent = () => {
      updateUser(STUDENT);
      updateUserInfo(STUDENT_INFO);
   };
   const handleClickTeacher = () => {
      updateUser(TEACHER);
      updateUserInfo(TEACHER_INFO);
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

            {/* Featured Course Carousel */}
            <FeaturedCourse />

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
