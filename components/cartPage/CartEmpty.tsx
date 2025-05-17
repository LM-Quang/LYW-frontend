import Link from "next/link";
import React from "react";

const CartEmpty = () => {
   return (
      <div className="text-center py-10">
         <h2 className="text-xl font-semibold text-gray-800">Your Cart is Empty</h2>
         <p className="text-gray-600 mb-4">Add some courses to your cart to get started!</p>
         <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
         >
            Browse Courses
         </Link>
      </div>
   );
};

export default CartEmpty;
