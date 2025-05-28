"use client";
import React, { useState } from "react";
import img from "@/assets/img-1.jpg";
import Image from "next/image";
import {
   ArrowLeftRight,
   CalendarSync,
   Check,
   ChevronDown,
   CircleHelp,
   CirclePlay,
   FileCode,
   FileQuestion,
   FileTerminal,
   FileText,
   Folder,
   Headset,
   Heart,
   Hourglass,
   Paperclip,
   ScrollText,
   Shapes,
   Share,
   ShoppingCart,
   Users,
} from "lucide-react";
import { courseDetails } from "@/libs/courseAPIs";
import { formatDuration } from "@/utils/utils";
import Link from "next/link";
import { ALL_COURSES, LectureFileType, SECTIONS } from "@/utils/data";
import CourseCard from "@/components/common/CourseCard";
import Modal from "@/components/courseDetailPage/Modal";
import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";
// import { CourseDetail } from "@/utils/data";

export default function CourseDetailPage() {
   // const params = useParams<{ courseId: string }>();
   // const [course, setCourse] = useState<CourseDetail | null>(null);
   // useEffect(() => {
   //    async function getCourse() {
   //       const response = await getCourseByIdAPI(params.courseId);
   //       setCourse(response);
   //    }
   //    getCourse();
   // }, [params]);
   const router = useRouter();
   const [isClicked, setIsClicked] = useState(false);

   const handleAddToCart = (price: number) => {
      setIsClicked(false);
      console.log(price);
      router.push("/cart");
   };

   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
               <div className="w-full lg:w-2/3">
                  {/* Title */}
                  <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                     <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                           Artificial Intelligence
                        </span>
                        <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                           Machine Learning
                        </span>
                        <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                           Data Science
                        </span>
                     </div>
                     <div className="mb-5">
                        <h1 className="text-4xl font-bold text-gray-800 mb-5">
                           Advanced JavaScript Concepts for Modern Web Development
                        </h1>
                        <p className="text-lg text-gray-700 mb-5">
                           Take your JavaScript skills to the next level with this comprehensive
                           course on advanced JavaScript concepts. Perfect for intermediate
                           developers looking to master modern JavaScript and build robust, scalable
                           web applications.
                        </p>
                     </div>
                     <div className="flex items-center gap-5 mb-5">
                        <span className="bg-primary-500 font-bold px-2 py-1 text-white rounded-full">
                           Bestseller
                        </span>
                        <span className="px-5 border-x-2 border-gray-200">
                           Rating:
                           <span className="mx-1">4.8</span>
                           <i
                              className="fa-solid fa-star text-yellow-400 w-4 h-4"
                              aria-label="Full star"
                           />
                        </span>
                        <span>Student: 123,456</span>
                     </div>
                     <div className="border-y-2 border-gray-200 py-4 px-2 flex justify-between">
                        <div className="flex items-center gap-2">
                           <CalendarSync className="w-7 h-7" />
                           <div>
                              <p className="text-gray-500 text-sm">Last updated</p>
                              <p className="font-medium">2025-05-01</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-2">
                           <Hourglass className="w-7 h-7" />
                           <div>
                              <p className="text-gray-500 text-sm">Duration</p>
                              <p className="font-medium">{formatDuration(55800)}</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-2">
                           <Shapes className="w-7 h-7" />
                           <div>
                              <p className="text-gray-500 text-sm">Level</p>
                              <p className="font-medium">Advanced</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-2">
                           <FileCode className="w-7 h-7" />
                           <div>
                              <p className="text-gray-500 text-sm">Projects</p>
                              <p className="font-medium">3</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-2">
                           <Paperclip className="w-7 h-7" />
                           <div>
                              <p className="text-gray-500 text-sm">Resourse</p>
                              <p className="font-medium">15</p>
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
                        {[
                           "Advanced JavaScript Patterns and Best Practices",
                           "Deep dive into Closures, Prototypes, and Objects",
                           "Asynchronous Programming with Promises and Async/Await",
                           "Modern ES6+ Features and Syntax",
                           "Functional Programming Concepts",
                           "Performance Optimization Techniques",
                           "Error Handling and Debugging Strategies",
                           "Building Scalable Web Applications",
                        ].map((item, i) => (
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
                                                {lecture.fileType == LectureFileType.VIDEO && (
                                                   <CirclePlay className="mr-2 text-gray-500" />
                                                )}
                                                {lecture.fileType == LectureFileType.PDF && (
                                                   <FileText className="mr-2 text-gray-500" />
                                                )}
                                                {lecture.fileType == LectureFileType.QUIZ && (
                                                   <FileQuestion className="mr-2 text-gray-500" />
                                                )}
                                                {lecture.fileType == LectureFileType.PRACTICE && (
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
                     <h3 className="text-4xl font-semibold mb-5">Related Courses</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ALL_COURSES.slice(0, 3).map((course) => (
                           <CourseCard key={course.id} course={course} />
                        ))}
                     </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                     <h3 className="text-4xl font-semibold mb-5">Feedback</h3>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 rounded-xl border border-gray-200 hover:shadow-lg transition">
                           <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center text-yellow-400 mr-2">
                                 <span className="mr-1">4.8</span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-3 h-3 mb-1"
                                    aria-label="Full star"
                                 />
                              </div>
                              <span className="text-gray-500 text-sm">2 weeks ago</span>
                           </div>
                           <p className="text-gray-700 mb-2">
                              &quot;This course completely changed my understanding of AI. The
                              practical examples and clear explanations made complex concepts easy
                              to grasp.&quot;
                           </p>
                           <p className="text-gray-500 text-sm">John D. - Software Engineer</p>
                        </div>

                        <div className="p-4 rounded-xl border border-gray-200 hover:shadow-lg transition">
                           <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center text-yellow-400 mr-2">
                                 <span className="mr-1">4.8</span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-3 h-3 mb-1"
                                    aria-label="Full star"
                                 />
                              </div>
                              <span className="text-gray-500 text-sm">2 weeks ago</span>
                           </div>
                           <p className="text-gray-700 mb-2">
                              &quot;Dr. Johnson is an exceptional instructor. Her passion for the
                              subject shines through in every lecture. Highly recommended!&quot;
                           </p>
                           <p className="text-gray-500 text-sm">Maria L. - Data Scientist</p>
                        </div>

                        <div className="p-4 rounded-xl border border-gray-200 hover:shadow-lg transition">
                           <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center text-yellow-400 mr-2">
                                 <span className="mr-1">4.8</span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-3 h-3 mb-1"
                                    aria-label="Full star"
                                 />
                              </div>
                              <span className="text-gray-500 text-sm">2 weeks ago</span>
                           </div>
                           <p className="text-gray-700 mb-2">
                              &quot;Great content and structure. Some sections could use more
                              detailed explanations, but overall a fantastic learning
                              experience.&quot;
                           </p>
                           <p className="text-gray-500 text-sm">Robert K. - Student</p>
                        </div>
                     </div>
                  </div>

                  {/* About Instructor */}
                  <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                     <h3 className="text-4xl font-semibold mb-5">More About Instructor</h3>
                     <div className="flex items-start pb-6 mb-6 border-b border-gray-200">
                        <div className="mr-4">
                           <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500">
                              <Image
                                 src={img}
                                 alt="Instructor profile"
                                 className="w-full h-full object-cover"
                                 width={80}
                                 height={80}
                              />
                           </div>
                        </div>
                        <div>
                           <h4 className="font-semibold text-lg">
                              {courseDetails.instructor.username}
                           </h4>
                           <div className="flex items-center mb-2">
                              <span className="mr-2">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 ></i>
                              </span>
                              <span className="text-sm ml-1">
                                 {courseDetails.instructor.rating} Instructor Rating
                              </span>
                              <span className="mx-2 text-gray-300">|</span>
                              <Users className="text-gray-500 text-sm" />
                              <span className="text-sm ml-1">
                                 {courseDetails.instructor.studentsCount?.toLocaleString()} Students
                              </span>
                              <span className="mx-2 text-gray-300">|</span>
                              <ScrollText className="text-gray-500 text-sm" />
                              <span className="text-sm ml-1">
                                 {courseDetails.instructor.coursesCount?.toLocaleString()} Courses
                              </span>
                           </div>
                           <p className="text-gray-700">{courseDetails.instructor.bio}</p>
                        </div>
                     </div>

                     {/* Other Courses */}
                     <div>
                        <h3 className="text-3xl font-semibold mb-5">Student Also See</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                           {ALL_COURSES.slice(3, 6).map((course) => (
                              <CourseCard key={course.id} course={course} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="w-full lg:w-1/3">
                  <div className="bg-white rounded-xl shadow-sm sticky top-2.5">
                     <div className="p-5">
                        <div className="flex justify-between items-center mb-4">
                           <div className="text-3xl font-bold">$89.99</div>
                           <div className="text-sm text-gray-500 line-through">$199.99</div>
                        </div>
                        <div className="text-sm text-red-600 font-medium mb-4">
                           53% off - 2 days left at this price!
                        </div>

                        <button
                           className="w-full py-3 bg-primary-500 text-white rounded-lg mb-3 font-medium hover:bg-primary-600 transition-colors transform hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                           onClick={() => setIsClicked(true)}
                        >
                           <ShoppingCart className="mr-2" />
                           Add to Cart
                        </button>

                        <div className="text-center text-sm text-gray-500 mb-4">
                           30-Day Money-Back Guarantee
                        </div>

                        {/* Coupon */}
                        <div>
                           <h4 className="font-semibold mb-2 text-lg">Coupon:</h4>
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

                     <div className="p-4 border-t border-gray-100">
                        <h3 className="font-medium text-gray-700 mb-2">Need Help?</h3>
                        <div className="flex flex-col gap-2 text-sm">
                           <Link href="#" className="text-gray-700 flex items-center">
                              <CircleHelp className="mr-1 w-5 h-5" />
                              Help Center
                           </Link>
                           <Link href="#" className="text-gray-700 flex items-center">
                              <ArrowLeftRight className="mr-1 w-5 h-5" />
                              Refund Policy
                           </Link>
                           <Link href="#" className="text-gray-700 flex items-center">
                              <Headset className="mr-1 w-5 h-5" />
                              Contact Support
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}
         <Modal
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            handleAddToCart={handleAddToCart}
            sections={SECTIONS.slice(0, 10)}
         />
      </div>
   );
}
