import { CourseCardType } from "@/utils/data";
import truncateText, { formatDuration } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import DefaultAvatar from "./DefaultAvatar";
import Link from "next/link";

const CourseCard = ({ course }: { course: CourseCardType }) => {
   return (
      <div
         key={course.id}
         className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg"
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
         <h3 className="text-2xl font-semibold mb-2 h-16">{truncateText(course.title, 40)}</h3>
         <p className="text-gray-600 mb-4">{truncateText(course.description, 75)}</p>
         <div className="mt-4 pt-4 border-t border-gray-100 text-gray-500">
            <div className="flex justify-between items-center">
               <span className="text-sm font-medium mr-auto">
                  {formatDuration(course.duration)}
               </span>
               <i className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-2" />
               <span className="text-sm font-medium">{course.rating} / 5</span>
            </div>
         </div>
         <div className="flex items-center gap-2 mt-4">
            {course.instructorImg ? (
               <Image
                  src={course.instructorImg}
                  alt="Instructor"
                  className="rounded-full"
                  width={32}
                  height={32}
               />
            ) : (
               <DefaultAvatar name={course.instructor} width={32} height={32} fontSize={16} />
            )}
            <span className="text-sm">{course.instructor}</span>
            <span className="font-bold text-lg ml-auto">$ {course.price}</span>
         </div>
         <Link
            href={`/course-detail/${course.id}`}
            className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
         >
            <span>View Details</span>
         </Link>
      </div>
   );
};

export default CourseCard;
