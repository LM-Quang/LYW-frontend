"use client";
import React, { useEffect, useState } from "react";
import {
   ArrowRight,
   CalendarSync,
   Check,
   ChevronDown,
   CirclePlay,
   FileCode,
   FileQuestion,
   FileTerminal,
   FileText,
   Folder,
   Heart,
   Hourglass,
   Paperclip,
   Shapes,
   Share,
   ShoppingCart,
} from "lucide-react";
import { courseDetails } from "@/libs/courseAPIs";
import truncateText, { createSearchUrl, formatDuration, timeFromNow } from "@/utils/utils";
import Link from "next/link";
import { ALL_COURSES, CourseDetail, LectureFileType, SAMPLE_COURSE_DETAIL } from "@/utils/data";
import CourseCard from "@/components/common/CourseCard";
import Modal from "@/components/courseDetailPage/Modal";
import { useParams, useRouter } from "next/navigation";
import NeedHelp from "@/components/common/NeedHelp";
// import { useParams } from "next/navigation";
// import { CourseDetail } from "@/utils/data";

export default function CourseDetailPage() {
   const router = useRouter();
   const [isClicked, setIsClicked] = useState(false);
   const [courseDetail, setCourseDetail] = useState<CourseDetail>();
   const params = useParams<{ courseId: string }>();

   useEffect(() => {
      setCourseDetail(SAMPLE_COURSE_DETAIL);
   }, [params]);

   const handleAddToCart = (price: number) => {
      setIsClicked(false);
      console.log(price);
      router.push("/cart");
   };

   const price = courseDetail
      ? courseDetail.totalPrice - (courseDetail.originalPrice * courseDetail.discount) / 100
      : 0;

   return (
      <div className="w-full min-h-screen font-sans">
         {courseDetail ? (
            <>
               <div className="container mx-auto px-4 md:px-6 py-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                     <div className="w-full lg:w-2/3">
                        {/* Title */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <div className="flex flex-wrap items-center gap-2 mb-5">
                              <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                                 {courseDetail.category}
                              </span>
                              {courseDetail.subCategory.map((subCategory, index) => {
                                 return (
                                    <span
                                       key={index}
                                       className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
                                    >
                                       {subCategory}
                                    </span>
                                 );
                              })}
                           </div>
                           <div className="mb-5">
                              <h1 className="text-4xl font-bold text-gray-800 mb-5">
                                 {courseDetail.title}
                              </h1>
                              <p className="text-lg text-gray-700 mb-5">
                                 {courseDetail.description}
                              </p>
                           </div>
                           <div className="flex items-center gap-5 mb-5 text-sm">
                              {courseDetail.tag && (
                                 <div
                                    className={`inline-block text-white text-xs px-2 py-1 rounded-full ${courseDetail.tag.color}`}
                                 >
                                    {courseDetail.tag.name}
                                 </div>
                              )}
                              <span className="px-5 border-x border-gray-200">
                                 Rating: {courseDetail.rating}
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 ml-2"
                                    aria-label="Full star"
                                 />
                              </span>
                              <span>Student: {courseDetail.enrolledStudents.toLocaleString()}</span>
                           </div>
                           <div className="border-y border-gray-200 py-4 px-2 flex justify-between">
                              <div className="flex items-center gap-2">
                                 <CalendarSync className="w-7 h-7 text-gray-500" />
                                 <div>
                                    <p className="text-gray-500">Last updated</p>
                                    <p className="font-medium">{courseDetail.updatedAt}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-2">
                                 <Hourglass className="w-7 h-7 text-gray-500" />
                                 <div>
                                    <p className="text-gray-500">Duration</p>
                                    <p className="font-medium">
                                       {formatDuration(courseDetail.duration)}
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-2">
                                 <Shapes className="w-7 h-7 text-gray-500" />
                                 <div>
                                    <p className="text-gray-500">Level</p>
                                    <p className="font-medium">{courseDetail.level}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-2">
                                 <FileCode className="w-7 h-7 text-gray-500" />
                                 <div>
                                    <p className="text-gray-500">Projects</p>
                                    <p className="font-medium">{courseDetail.projects}</p>
                                 </div>
                              </div>

                              <div className="flex items-center gap-2">
                                 <Paperclip className="w-7 h-7 text-gray-500" />
                                 <div>
                                    <p className="text-gray-500">Resourse</p>
                                    <p className="font-medium">{courseDetail.resources}</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* What You Will Learn */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <h3 className="text-4xl font-bold text-gray-800 mb-5">
                              What you&apos;ll learn
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {courseDetail.whatYouWillLearn.map((item, i) => (
                                 <div key={i} className="flex items-start">
                                    <Check className="text-green-500 mr-2 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Course Content */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <h3 className="text-4xl font-semibold mb-5">Course Content</h3>
                           <div className="space-y-3">
                              {courseDetails.sections.map((section, index) => {
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
                                          <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                                       </summary>
                                       <div className="px-4 py-2 border-t border-gray-200 bg-white">
                                          <ul className="divide-y divide-gray-200">
                                             {section.lectures.map((lecture) => {
                                                return (
                                                   <li
                                                      key={lecture.id}
                                                      className="py-2 flex justify-between items-center"
                                                   >
                                                      <span>{lecture.title}</span>
                                                      {lecture.fileType ==
                                                         LectureFileType.VIDEO && (
                                                         <CirclePlay className="mr-2 text-gray-500" />
                                                      )}
                                                      {lecture.fileType == LectureFileType.PDF && (
                                                         <FileText className="mr-2 text-gray-500" />
                                                      )}
                                                      {lecture.fileType == LectureFileType.QUIZ && (
                                                         <FileQuestion className="mr-2 text-gray-500" />
                                                      )}
                                                      {lecture.fileType ==
                                                         LectureFileType.PRACTICE && (
                                                         <FileTerminal className="mr-2 text-gray-500" />
                                                      )}
                                                   </li>
                                                );
                                             })}
                                          </ul>
                                       </div>
                                    </details>
                                 );
                              })}
                           </div>
                        </div>

                        {/* Related Courses */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <div className="flex justify-between items-center mb-5">
                              <h3 className="text-4xl font-semibold mb-5">Related Courses</h3>
                              <Link
                                 href={createSearchUrl("", courseDetail.category, "")}
                                 className="text-primary-500 hover:text-primary-600 flex"
                              >
                                 View All
                                 <ArrowRight className="ml-1" />
                              </Link>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {ALL_COURSES.slice(0, 3).map((course) => (
                                 <CourseCard key={course.id} course={course} />
                              ))}
                           </div>
                        </div>

                        {/* Feedback */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <h3 className="text-4xl font-semibold mb-5">Feedback</h3>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {courseDetail.feedbacks.map((feedback) => {
                                 return (
                                    <div
                                       key={feedback.id}
                                       className="p-4 rounded-xl border border-gray-200 hover:shadow-lg transition"
                                    >
                                       <div className="flex items-center justify-between mb-3">
                                          <div className="flex items-center text-yellow-400 mr-2">
                                             <span className="mr-1">{feedback.rating}</span>
                                             <i
                                                className="fa-solid fa-star text-yellow-400 w-3 h-3 mb-1"
                                                aria-label="Full star"
                                             />
                                          </div>
                                          <span className="text-gray-500 text-sm">
                                             {timeFromNow(feedback.createdAt)}
                                          </span>
                                       </div>
                                       <p className="text-gray-700 mb-2 h-[120px]">
                                          &quot;{truncateText(feedback.content, 145)}&quot;
                                       </p>
                                       <p className="text-gray-500 text-sm">{feedback.student}</p>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>

                        {/* More Course From Instructor */}
                        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                           <div className="flex justify-between items-center mb-5">
                              <h3 className="text-3xl font-semibold">
                                 More Course From Instructor
                              </h3>
                              <Link
                                 href={`/teacher-info/${courseDetail.instructorId}`}
                                 className="text-primary-500 hover:text-primary-600 flex"
                              >
                                 View All
                                 <ArrowRight className="ml-1" />
                              </Link>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {ALL_COURSES.slice(3, 6).map((course) => (
                                 <CourseCard key={course.id} course={course} />
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Price */}
                     <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-2.5">
                           <div className="mb-5">
                              <div className="flex justify-between items-center mb-4">
                                 <div className="text-3xl font-bold">
                                    {courseDetail.currency}
                                    {price.toFixed(2)}
                                 </div>
                                 <div className="text-gray-500 line-through">
                                    {courseDetail.currency}
                                    {courseDetail.originalPrice.toFixed(2)}
                                 </div>
                              </div>
                              <div className="text-sm text-red-600 font-medium mb-4">
                                 {courseDetail.discount}% off - 2 days left at this price!
                              </div>

                              <button
                                 className="w-full py-3 bg-primary-500 text-white rounded-lg mb-3 font-medium hover:bg-primary-600 transition-colors transform hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                                 onClick={() => setIsClicked(true)}
                              >
                                 <ShoppingCart className="mr-2" />
                                 Add to Cart
                              </button>

                              <div className="flex justify-center items-center text-center text-sm text-gray-500 mb-4">
                                 <Check className="mr-1 w-5 h-5" />
                                 30-Day Money-Back Guarantee
                              </div>

                              {/* Coupon */}
                              <div>
                                 <h4 className="mb-2 text-lg">Coupon:</h4>
                                 <div className="flex">
                                    <input
                                       type="text"
                                       placeholder="Enter Coupon"
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm mr-2"
                                       aria-label="Search courses"
                                    />
                                    <button className="p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer">
                                       Apply
                                    </button>
                                 </div>
                              </div>
                              {/* Share */}
                              <div className="flex justify-center mt-6 space-x-4">
                                 <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                                    <Heart className="mr-1" />
                                    Like
                                 </button>
                                 <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                                    <Share className="mr-1" />
                                    Share
                                 </button>
                              </div>
                           </div>

                           <NeedHelp />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Modal */}
               <Modal
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  handleAddToCart={handleAddToCart}
                  sections={courseDetail.section}
               />
            </>
         ) : (
            <div className="text-center py-10">
               <h2 className="text-xl font-semibold text-gray-800">Your Course does not exist</h2>
               <p className="text-gray-600 mb-4">Find a course to get started!</p>
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
