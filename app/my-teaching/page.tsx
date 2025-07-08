import CourseCard from "@/components/common/CourseCard";
import { ALL_COURSES } from "@/utils/data";
import React from "react";

export default function MyTeachingPage() {
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md mb-8">
               <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                     <h1 className="text-4xl font-bold text-gray-800">My Courses</h1>
                     <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                        <span>+</span>
                        Create New Course
                     </button>
                  </div>

                  <div>
                     <h2 className="text-3xl font-bold mb-4">Uploaded Courses</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ALL_COURSES.slice(0, 9).map((course) => (
                           <CourseCard
                              key={course.id}
                              course={course}
                              titleLength={55}
                              descriptionLength={75}
                           />
                        ))}
                     </div>
                     <div className="mt-5 flex items-center justify-center">
                        <button
                           className="inline-flex items-center text-white bg-primary-500 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
                           aria-label="Explore Courses"
                        >
                           Explore Courses
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-white rounded-xl shadow-md">
               <div className="p-6 md:p-8">
                  <div>
                     <h2 className="text-3xl font-bold mb-4">Draft Courses</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ALL_COURSES.slice(0, 2).map((course) => (
                           <CourseCard
                              key={course.id}
                              course={course}
                              titleLength={55}
                              descriptionLength={75}
                           />
                        ))}
                     </div>
                     <div className="mt-5 flex items-center justify-center">
                        <button
                           className="inline-flex items-center text-white bg-primary-500 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
                           aria-label="Explore Courses"
                        >
                           Explore Courses
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
