import React from "react";
import { Save, Trash2 } from "lucide-react";
import renderRatingStars from "@/utils/ratingStars";
import Image from "next/image";
import logo1 from "@/assets/logo-1.png";
import { CartItemProps } from "@/types/Types";
import { useCart } from "@/context/CourseContext";

const CartItem = ({ item }: { item: CartItemProps }) => {
   const { removeFromCart } = useCart();
   return (
      <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition-all">
         {/* Thumbnail */}
         <div className="md:w-1/4">
            <Image
               src={logo1}
               alt={item.title}
               className="w-full h-32 object-cover rounded-lg"
               width={128}
               height={128}
            />
         </div>

         {/* Item Details */}
         <div className="flex-1 flex flex-col justify-between">
            <div>
               <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
               <p className="text-sm text-gray-600 mb-2">By {item.instructor}</p>
               <div className="mb-2 space-x-1">
                  <span>{renderRatingStars(4.5)} 4.5</span>
                  <span>(12,000 reviews)</span>
               </div>
               <p className="text-lg font-semibold text-gray-800">
                  <span className="bg-primary-500 text-white p-1 mr-2 rounded-lg text-sm font-medium">
                     Best Seller
                  </span>
                  ${item.price.toFixed(2)}
               </p>
            </div>
         </div>

         {/* Actions */}
         <div className="flex items-start gap-4">
            <button
               // onClick={}
               className="px-3 py-1 text-purple-500 hover:bg-gray-100 rounded-lg text-sm flex items-center cursor-pointer"
            >
               <Save className="mr-1" />
               Buy Later
            </button>
            <button
               onClick={() => removeFromCart(item.id)}
               className="px-3 py-1 text-red-500 hover:bg-gray-100 rounded-lg text-sm flex items-center cursor-pointer"
            >
               <Trash2 className="mr-1" />
               Remove
            </button>
         </div>
      </div>
   );
};

export default CartItem;
