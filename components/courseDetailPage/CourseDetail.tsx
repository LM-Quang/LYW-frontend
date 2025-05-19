"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/img-1.jpg";
import {
   Check,
   ChevronDown,
   ChevronRight,
   CirclePlay,
   Clock3,
   FileQuestion,
   FileTerminal,
   FileText,
   Folder,
   ScrollText,
   Users,
} from "lucide-react";
import renderStars from "../RenderStars";
import { CourseDetailProps } from "@/libs/courseAPIs";
import { formatDuration, percentageCalculate, timeFromNow } from "@/utils/utils";
import DefaultAvatar from "../DefaultAvatar";
import { LectureFileType } from "@/utils/types";
import RelatedCourses from "../cartPage/RelatedCourses";

const CourseDetail = ({ course }: { course: CourseDetailProps }) => {
   const [sectionSize, setSectionSize] = useState(4);
   const [showAllSections, setShowAllSections] = useState(false);

   const handleShowAllSections = () => {
      setSectionSize(course.sections.length);
      setShowAllSections(true);
   };

   return (
      <div className="lg:col-span-2">
         {/* Hero */}
         <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
               <Image
                  src={logo}
                  alt="Full-Stack Development Bootcamp Cover"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  fill
               />
            </div>

            <div className="p-6">
               <h2 className="text-3xl font-bold mb-3">{course.title}</h2>
               <p className="mb-4">{course.description}</p>

               <div className="flex items-center">
                  <div className="flex items-center mr-6">
                     {course.isBestSeller && (
                        <span className="p-2 bg-primary-500 text-white rounded-lg mr-2 font-medium shadow-lg">
                           Bestseller
                        </span>
                     )}
                     <span className="mr-2">
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        ></i>
                     </span>
                     <span className="font-semibold">{course.rating}</span>
                     <span className="text-gray-500 ml-1">({course.reviewsCount} reviews)</span>
                  </div>
                  <div className="flex items-center mr-6">
                     <Users className="mr-1 text-gray-600" />
                     <span className="text-gray-600">{course.enrolledStudents} students</span>
                  </div>
                  <div className="flex items-center">
                     <Clock3 className="mr-1 text-gray-600" />
                     <span className="text-gray-600">Last updated: {course.updatedAt}</span>
                  </div>
               </div>
            </div>
         </div>

         {/* What will you learn */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <h3 className="text-3xl font-semibold mb-4">What You will Learn</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {course.summary.map((item, index) => {
                  return (
                     <div key={index} className="lg:col-span-1 flex items-start">
                        <Check className="text-green-500 mr-2 mt-0.5" />
                        <p className="text-gray-700">{item.name}</p>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Course Content */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <h3 className="text-3xl font-semibold mb-4">Course Content</h3>
            <div className="space-y-3">
               {course.sections.slice(0, sectionSize).map((section, index) => {
                  return (
                     <details
                        key={section.id}
                        className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group"
                     >
                        <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                           <div className="flex items-center">
                              <Folder className="mr-2" />
                              Section {index + 1}: {section.title}
                           </div>
                           <div className="flex items-center text-sm text-gray-500">
                              <span>
                                 {section.lectures.length} lectures •{" "}
                                 {formatDuration(
                                    section.lectures.reduce((sum, curr) => sum + curr.duration, 0)
                                 )}
                              </span>
                              <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                           </div>
                        </summary>
                        <div className="px-4 py-2 border-t border-gray-200">
                           <ul className="divide-y divide-gray-100">
                              {section.lectures.map((lecture) => {
                                 return (
                                    <li
                                       key={lecture.id}
                                       className="py-2 flex justify-between items-center"
                                    >
                                       <div className="flex items-center">
                                          {lecture.fileType == LectureFileType.VIDEO && (
                                             <CirclePlay className="mr-2 text-primary-500" />
                                          )}
                                          {lecture.fileType == LectureFileType.PDF && (
                                             <FileText className="mr-2 text-primary-500" />
                                          )}
                                          {lecture.fileType == LectureFileType.QUIZ && (
                                             <FileQuestion className="mr-2 text-primary-500" />
                                          )}
                                          {lecture.fileType == LectureFileType.PRACTICE && (
                                             <FileTerminal className="mr-2 text-primary-500" />
                                          )}
                                          <span>{lecture.title}</span>
                                       </div>
                                       <span className="text-sm text-gray-500">15:20</span>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                     </details>
                  );
               })}
               <button
                  onClick={handleShowAllSections}
                  className={`p-3 text-primary-500 font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer hover:text-primary-600 ${
                     showAllSections ? "hidden" : ""
                  }`}
               >
                  <span>Show all {course.sections.length} sections</span>
                  <ChevronDown className="ml-1" />
               </button>
            </div>
         </div>

         {/* Requirements */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <h3 className="text-3xl font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2">
               {course.requirements.map((requirement, index) => {
                  return (
                     <li key={index} className="flex items-start">
                        <ChevronRight className="text-primary-500 mr-2 mt-0.5" />
                        <p className="text-gray-700">{requirement.name}</p>
                     </li>
                  );
               })}
            </ul>
         </div>

         {/* Feedback */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <h3 className="text-3xl font-semibold mb-4">Student Feedback</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Ratings */}
               <div className="md:col-span-1">
                  <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                     <div className="text-5xl font-bold text-primary-500">{course.rating}</div>
                     <div className="flex items-center my-2 space-x-1">{renderStars(4.8)}</div>
                     <div className="text-gray-600">Course Rating</div>
                     <div className="text-sm text-gray-500 mt-1">{course.reviewsCount} Reviews</div>
                  </div>
               </div>

               {/* Stars count */}
               <div className="md:col-span-2">
                  <div className="space-y-2">
                     <div className="flex items-center">
                        <div className="w-20 text-right pr-3">5 stars</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div
                              className="bg-primary-500 h-full rounded-full"
                              style={{
                                 width: `${percentageCalculate(
                                    course.fiveStarsCount,
                                    course.reviewsCount
                                 )}%`,
                              }}
                           ></div>
                        </div>
                        <div className="w-10 text-right pl-3 text-sm text-gray-500">
                           {percentageCalculate(course.fiveStarsCount, course.reviewsCount)}%
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-20 text-right pr-3">4 stars</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div
                              className="bg-primary-500 h-full rounded-full"
                              style={{
                                 width: `${percentageCalculate(
                                    course.fourStarsCount,
                                    course.reviewsCount
                                 )}%`,
                              }}
                           ></div>
                        </div>
                        <div className="w-10 text-right pl-3 text-sm text-gray-500">
                           {percentageCalculate(course.fourStarsCount, course.reviewsCount)}%
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-20 text-right pr-3">3 stars</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div
                              className="bg-primary-500 h-full rounded-full"
                              style={{
                                 width: `${percentageCalculate(
                                    course.threeStarsCount,
                                    course.reviewsCount
                                 )}%`,
                              }}
                           ></div>
                        </div>
                        <div className="w-10 text-right pl-3 text-sm text-gray-500">
                           {percentageCalculate(course.threeStarsCount, course.reviewsCount)}%
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-20 text-right pr-3">2 stars</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div
                              className="bg-primary-500 h-full rounded-full"
                              style={{
                                 width: `${percentageCalculate(
                                    course.twoStarsCount,
                                    course.reviewsCount
                                 )}%`,
                              }}
                           ></div>
                        </div>
                        <div className="w-10 text-right pl-3 text-sm text-gray-500">
                           {percentageCalculate(course.twoStarsCount, course.reviewsCount)}%
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-20 text-right pr-3">1 star</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div
                              className="bg-primary-500 h-full rounded-full"
                              style={{
                                 width: `${percentageCalculate(
                                    course.oneStarsCount,
                                    course.reviewsCount
                                 )}%`,
                              }}
                           ></div>
                        </div>
                        <div className="w-10 text-right pl-3 text-sm text-gray-500">
                           {percentageCalculate(course.oneStarsCount, course.reviewsCount)}%
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Comment */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
               {course.comments.slice(0, 4).map((comment) => {
                  return (
                     <div key={comment.id} className="bg-gray-50 p-4 rounded-lg lg:col-span-1">
                        <div className="flex items-start justify-center">
                           {comment.userAvatar ? (
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                 <Image
                                    src={comment.userAvatar}
                                    width={40}
                                    height={40}
                                    alt={comment.username}
                                 />
                              </div>
                           ) : (
                              <div className="mr-3">
                                 <DefaultAvatar
                                    name={comment.username}
                                    width={40}
                                    height={40}
                                    fontSize={16}
                                 />
                              </div>
                           )}
                           <div className="flex-1">
                              <div className="flex items-center justify-between">
                                 <h4 className="font-semibold">{comment.username}</h4>
                                 <span className="text-gray-500 text-sm">
                                    {timeFromNow(comment.updatedAt)}
                                 </span>
                              </div>
                              <div className="flex items-center my-1">
                                 {renderStars(comment.rating)}
                              </div>
                              <p className="text-gray-700">{comment.content}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Related Courses */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <RelatedCourses />
         </div>

         {/* About Instructor */}
         <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
            <h3 className="text-3xl font-semibold mb-4">About Instructor</h3>
            <div className="flex items-start pb-6 mb-6 border-b border-gray-200">
               <div className="mr-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500">
                     <Image
                        src={logo}
                        alt="Instructor profile"
                        className="w-full h-full object-cover"
                        width={80}
                        height={80}
                     />
                  </div>
               </div>
               <div>
                  <h4 className="font-semibold text-lg">{course.instructor.username}</h4>
                  <div className="flex items-center mb-2">
                     <span className="mr-2">
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        ></i>
                     </span>
                     <span className="text-sm ml-1">
                        {course.instructor.rating} Instructor Rating
                     </span>
                     <span className="mx-2 text-gray-300">|</span>
                     <Users className="text-gray-500 text-sm" />
                     <span className="text-sm ml-1">
                        {course.instructor.studentsCount?.toLocaleString()} Students
                     </span>
                     <span className="mx-2 text-gray-300">|</span>
                     <ScrollText className="text-gray-500 text-sm" />
                     <span className="text-sm ml-1">
                        {course.instructor.coursesCount?.toLocaleString()} Courses
                     </span>
                  </div>
                  <p className="text-gray-700">{course.instructor.bio}</p>
               </div>
            </div>

            {/* Related Courses */}
            <RelatedCourses />
         </div>
      </div>
   );
};

export default CourseDetail;
