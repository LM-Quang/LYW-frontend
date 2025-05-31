import { CourseOverviewCard } from "@/utils/data";
import truncateText from "@/utils/utils";
import Image from "next/image";
import React from "react";
import DefaultAvatar from "./DefaultAvatar";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Users } from "lucide-react";

const CourseCard = ({
   course,
   titleLength,
   descriptionLength,
}: {
   course: CourseOverviewCard;
   titleLength: number;
   descriptionLength: number;
}) => {
   return (
      <div
         key={course.id}
         className="bg-white rounded-xl p-6 border border-gray-200 shadow-md transition hover:shadow-lg"
      >
         <div className="flex justify-between items-center mb-3 h-6">
            <span className="text-sm text-gray-500">{course.level}</span>
            {course.tag && (
               <div
                  className={`inline-block text-white text-xs px-2 py-1 rounded-full ${course.tag.color}`}
               >
                  {course.tag.name}
               </div>
            )}
         </div>
         <h3 className="text-xl font-semibold mb-1 h-14">
            {truncateText(course.title, titleLength)}
         </h3>
         <p className="text-gray-600 mb-1 h-12 text-sm">
            {truncateText(course.description, descriptionLength)}
         </p>
         <div className="flex items-center gap-2 pt-2 border-t border-gray-200 text-gray-500">
            {course.instructorImg ? (
               <Image
                  src={course.instructorImg}
                  alt="Instructor"
                  className="rounded-full"
                  width={25}
                  height={25}
               />
            ) : (
               <DefaultAvatar name={course.instructor} width={25} height={25} fontSize={12} />
            )}
            <span className="text-sm">{course.instructor}</span>
         </div>
         <div className="pt-2 text-gray-500">
            <div className="flex justify-between items-center">
               <span className="text-sm font-medium mr-auto flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  12,345 Students
               </span>

               <span className="text-sm font-medium">
                  <i className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1" />
                  {course.rating} (2,345)
               </span>
            </div>
         </div>
         <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold auto">$ {course.price}</span>
            <Link
               href={`/course-detail/${course.id}`}
               className="text-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center"
            >
               View Details
               <ArrowRight className="w-5 h-5 mr-1" />
            </Link>
         </div>
         <button className="mt-3 w-full py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center cursor-pointer">
            <ShoppingCart className="mr-2" />
            Add to Cart
         </button>
      </div>
   );
};

export default CourseCard;
