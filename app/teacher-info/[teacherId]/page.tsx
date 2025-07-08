"use client";
import React, { useState } from "react";
import DefaultAvatar from "@/components/common/DefaultAvatar";
import { ChevronDown } from "lucide-react";
import { ALL_COURSES, SAMPLE_COURSE_DETAIL } from "@/utils/data";
import CourseCard from "@/components/common/CourseCard";
import { timeFromNow } from "@/utils/utils";

export default function TeacherInfoPage() {
   // Implement pagination
   const coursesPerPage = 8;
   const [page, setPage] = useState(1);
   const paginatedCourses = ALL_COURSES.slice((page - 1) * coursesPerPage, page * coursesPerPage);
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-5">
                  <DefaultAvatar name="Alan Johnson" width={100} height={100} fontSize={50} />
                  <div className="flex-1">
                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Dr. Alan Johnson
                     </h1>
                     <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-primary-50 text-primary-600 text-xs font-medium px-2.5 py-1 rounded-full">
                           Machine Learning
                        </span>
                        <span className="bg-primary-50 text-primary-600 text-xs font-medium px-2.5 py-1 rounded-full">
                           Web Development
                        </span>
                        <span className="bg-primary-50 text-primary-600 text-xs font-medium px-2.5 py-1 rounded-full">
                           Data Science
                        </span>
                     </div>
                     <p className="text-gray-600 mb-4">
                        Professor of Computer Science at Stanford University with over 10 years of
                        teaching experience. Specialized in machine learning algorithms and web
                        technologies.
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-5">
                  <div className="md:col-span-2">
                     <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                     <p className="text-gray-600 mb-4">
                        I&apos;m passionate about teaching complex technical subjects in an
                        easy-to-understand manner. With a PhD in Computer Science from MIT and
                        industry experience at Google, I bring both theoretical knowledge and
                        practical applications to my courses.
                     </p>
                     <p className="text-gray-600 mb-4">
                        My teaching philosophy focuses on hands-on learning with real-world
                        projects. I believe in empowering students to not just understand concepts
                        but to apply them confidently in their own work.
                     </p>
                     <div className="rounded-xl p-6 border border-gray-200 shadow-md">
                        <h3 className="font-medium text-lg mb-2">Specializations</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                           <li>Advanced Machine Learning Algorithms</li>
                           <li>Full-Stack Web Development</li>
                           <li>Data Visualization Techniques</li>
                           <li>Cloud Computing and Infrastructure</li>
                        </ul>
                     </div>
                  </div>

                  <div className="rounded-xl p-6 border border-gray-200 shadow-md">
                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Stats</h2>
                     <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                           <span className="text-gray-600">Courses</span>
                           <span className="font-medium text-gray-800">20</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                           <span className="text-gray-600">Total Students</span>
                           <span className="font-medium text-gray-800">4,250+</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                           <span className="text-gray-600">Reviews</span>
                           <span className="font-medium text-gray-800">968</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                           <span className="text-gray-600">Average Rating</span>
                           <div className="flex items-center">
                              <span className="ml-1 font-medium text-gray-800">4.8</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="text-gray-600">Years Teaching</span>
                           <span className="font-medium text-gray-800">10+</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Course */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <h2 className="text-4xl font-bold mb-5">Courses</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {paginatedCourses.map((course) => {
                     return (
                        <CourseCard
                           key={course.id}
                           course={course}
                           titleLength={55}
                           descriptionLength={75}
                        />
                     );
                  })}
               </div>

               {/* Pagination */}
               {paginatedCourses.length > 0 && (
                  <div className="mt-8 flex justify-center space-x-2">
                     <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 disabled:hover:bg-gray-200 cursor-pointer"
                     >
                        Previous
                     </button>
                     <span className="px-4 py-2">Page {page}</span>
                     <button
                        onClick={() => setPage((p) => p + 1)}
                        disabled={page * coursesPerPage >= ALL_COURSES.length}
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:hover:bg-primary-500 cursor-pointer"
                     >
                        Next
                     </button>
                  </div>
               )}
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <h2 className="text-4xl font-bold mb-5">Student Reviews</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {SAMPLE_COURSE_DETAIL.feedbacks.map((feedback) => {
                     return (
                        <div
                           key={feedback.id}
                           className="p-4 rounded-xl border border-gray-200 shadow-lg"
                        >
                           <div className="flex items-start gap-2 mb-2">
                              <div>
                                 <DefaultAvatar
                                    name={feedback.student}
                                    width={35}
                                    height={35}
                                    fontSize={16}
                                 />
                              </div>
                              <div className="w-full">
                                 <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-gray-800">
                                       {feedback.student}
                                    </h4>
                                    <div className="flex items-center">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-2"
                                          aria-label="Full star"
                                       />
                                       <span>{feedback.rating}</span>
                                    </div>
                                 </div>
                                 <p className="text-gray-500 text-sm">
                                    {timeFromNow(feedback.createdAt)}
                                 </p>
                              </div>
                           </div>
                           <p className="text-gray-700 h-[110px]">&quot;{feedback.content}&quot;</p>
                        </div>
                     );
                  })}
               </div>

               <div className="text-center mt-6">
                  <button className="text-primary-500 hover:text-primary-600 font-medium flex items-center mx-auto cursor-pointer">
                     <span>Read more reviews</span>
                     <ChevronDown className="ml-1" />
                  </button>
               </div>
            </section>
         </div>
      </div>
   );
}
