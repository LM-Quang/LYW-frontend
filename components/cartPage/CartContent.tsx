import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RelatedCourses from "./RelatedCourses";
import { useCart } from "@/context/CourseContext";
import CartItem from "./CartItem";

const CartContent = () => {
   const { cart } = useCart();
   return (
      <div className="lg:w-3/4">
         <div className="space-y-4 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
            {cart.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))}
         </div>

         {/* Related Courses */}
         <RelatedCourses />
      </div>
   );
};

export default CartContent;
