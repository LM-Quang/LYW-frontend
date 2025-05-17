"use client";

import React, { useState } from "react";
import logo from "@/assets/img-1.jpg";
import Modal from "@/components/courseDetailPage/Modal";
import { CartItemProps } from "@/utils/dataTypes";
import { useCart } from "@/context/CourseContext";
import { useRouter } from "next/navigation";
import { sections } from "@/utils/data";
import Sidebar from "@/components/courseDetailPage/Sidebar";
import CourseDetail from "@/components/courseDetailPage/CourseDetail";

export default function CoursesPage() {
   const router = useRouter();
   const [isClicked, setIsClicked] = useState(false);
   const { cart, addToCart } = useCart();

   const handleAddToCart = (totalPrice: number) => {
      setIsClicked(false);
      const cartItem: CartItemProps = {
         id: cart.length + 1,
         title: "Full-Stack Development Bootcamp",
         instructor: "Sarah Johnson",
         price: totalPrice,
         thumbnail: logo.src,
         isBestseller: false,
      };
      addToCart(cartItem);
      router.push("/cart");
   };

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Main */}
               <CourseDetail />

               {/* Sidebar */}
               <Sidebar setIsClicked={setIsClicked} />
            </div>
         </div>

         {/* Modal */}
         <Modal
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            sections={sections}
            handleAddToCart={handleAddToCart}
         />
      </div>
   );
}
