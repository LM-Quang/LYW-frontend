"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/img-1.jpg";
import Modal from "@/components/courseDetailPage/Modal";
// import { CartItem } from "@/utils/types";
// import { useCart } from "@/context/CourseContext";
import { useParams, useRouter } from "next/navigation";
import { SECTIONS } from "@/utils/data";
import Sidebar from "@/components/courseDetailPage/Sidebar";
import { CourseDetailProps, getCourseByIdAPI } from "@/libs/courseAPIs";
import Link from "next/link";
import CourseDetail from "@/components/courseDetailPage/CourseDetail";

export default function CoursesPage() {
   const params = useParams<{ courseId: string }>();
   const [course, setCourse] = useState<CourseDetailProps | null>(null);
   const router = useRouter();
   const [isClicked, setIsClicked] = useState(false);
   // const { addToCart } = useCart();

   const handleAddToCart = (totalPrice: number) => {
      setIsClicked(false);
      // const cartItem: CartItem = {
      const cartItem = {
         id: "1",
         title: "Full-Stack Development Bootcamp",
         instructor: "Sarah Johnson",
         price: totalPrice,
         thumbnail: logo.src,
         isBestseller: false,
      };
      console.log(cartItem);
      // addToCart(cartItem);
      router.push("/cart");
   };

   useEffect(() => {
      async function getCourse() {
         const response = await getCourseByIdAPI(params.courseId);
         setCourse(response);
      }
      getCourse();
   }, [params]);

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {course ? (
            <>
               <div className="container mx-auto px-4 md:px-6 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {/* Main */}
                     <CourseDetail course={course} />

                     {/* Sidebar */}
                     <Sidebar setIsClicked={setIsClicked} course={course} />
                  </div>
               </div>

               {/* Modal */}
               <Modal
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  sections={SECTIONS}
                  handleAddToCart={handleAddToCart}
               />
            </>
         ) : (
            <div className="text-center py-10">
               <h2 className="text-xl font-semibold text-gray-800">
                  Your Course doesn&apos;t exist!
               </h2>
               <p className="text-gray-600 mb-4">Find course here!</p>
               <Link
                  href="/courses"
                  className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
               >
                  Browse Courses
               </Link>
            </div>
         )}
      </div>
   );
}
