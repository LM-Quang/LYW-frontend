"use client";
import React, { useState } from "react";
import img from "@/assets/img-1.jpg";
import Image from "next/image";
import {
   ArrowLeftRight,
   ArrowRight,
   Check,
   ChevronDown,
   CircleHelp,
   CirclePlay,
   CircleUser,
   Clock3,
   Dot,
   Download,
   FileQuestion,
   FileTerminal,
   FileText,
   Folder,
   Heart,
   Infinity,
   ScrollText,
   Share,
   ShoppingCart,
   SquareTerminal,
   Users,
   Video,
} from "lucide-react";
import { courseDetails } from "@/libs/courseAPIs";
import truncateText, { formatDuration } from "@/utils/utils";
import { LectureFileType } from "@/utils/types";
import Link from "next/link";
import RenderStars from "@/components/common/RenderStars";

export default function CourseDetailPage() {
   // const params = useParams<{ courseId: string }>();
   // const [course, setCourse] = useState<CourseDetailProps | null>(null);
   // useEffect(() => {
   //    async function getCourse() {
   //       const response = await getCourseByIdAPI(params.courseId);
   //       setCourse(response);
   //    }
   //    getCourse();
   // }, [params]);

   const [sectionSize, setSectionSize] = useState(4);
   const [showAllSections, setShowAllSections] = useState(false);

   const handleShowAllSections = () => {
      setSectionSize(courseDetails.sections.length);
      setShowAllSections(true);
   };
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
               <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-xl shadow-sm mb-6">
                     <div className="p-4">
                        <div className="flex flex-col md:flex-row gap-3">
                           <span className="text-sm bg-primary-50 text-primary-600 px-2 py-1 rounded-full">
                              JavaScript
                           </span>
                           <span className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                              Web Development
                           </span>
                           <span className="text-sm bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
                              Advanced
                           </span>
                           <span className="text-sm bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full">
                              Front-End
                           </span>
                        </div>
                        <div className="mb-3 mt-3">
                           <h1 className="text-2xl font-bold text-gray-800 mb-1">
                              Advanced JavaScript Concepts for Modern Web Development
                           </h1>
                           <p className="text-gray-700 mb-4">
                              Take your JavaScript skills to the next level with this comprehensive
                              course on advanced JavaScript concepts. Perfect for intermediate
                              developers looking to master modern JavaScript and build robust,
                              scalable web applications.
                           </p>
                           <p className="text-gray-700 mb-4">
                              This course covers everything from advanced object-oriented
                              programming to the latest ES6+ features, functional programming
                              paradigms, and performance optimization techniques. You&apos;ll learn
                              through practical, real-world examples and projects that will enhance
                              your problem-solving abilities.
                           </p>
                        </div>
                        <div className="flex items-center">
                           <div className="flex items-center mr-6">
                              {true && (
                                 <span className="p-1 bg-primary-500 text-white rounded-full mr-2 font-medium shadow-lg">
                                    Bestseller
                                 </span>
                              )}
                              <span className="mr-2">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 ></i>
                              </span>
                              <span className="font-semibold">4.8</span>
                              <span className="text-gray-500 ml-1">(2,345 reviews)</span>
                           </div>
                           <div className="flex items-center mr-6">
                              <Users className="mr-1 text-gray-600" />
                              <span className="text-gray-600">5,000 students</span>
                           </div>
                           <div className="flex items-center">
                              <Clock3 className="mr-1 text-gray-600" />
                              <span className="text-gray-600">Last updated: 2025-05-24</span>
                           </div>
                        </div>
                        <div className="mt-6">
                           <h3 className="text-3xl font-bold text-gray-800 mb-3">
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
                        <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
                           <h3 className="text-3xl font-semibold mb-4">Course Content</h3>
                           <div className="space-y-3">
                              {courseDetails.sections
                                 .slice(0, sectionSize)
                                 .map((section, index) => {
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
                                                      section.lectures.reduce(
                                                         (sum, curr) => sum + curr.duration,
                                                         0
                                                      )
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
                                                            {lecture.fileType ==
                                                               LectureFileType.VIDEO && (
                                                               <CirclePlay className="mr-2 text-primary-500" />
                                                            )}
                                                            {lecture.fileType ==
                                                               LectureFileType.PDF && (
                                                               <FileText className="mr-2 text-primary-500" />
                                                            )}
                                                            {lecture.fileType ==
                                                               LectureFileType.QUIZ && (
                                                               <FileQuestion className="mr-2 text-primary-500" />
                                                            )}
                                                            {lecture.fileType ==
                                                               LectureFileType.PRACTICE && (
                                                               <FileTerminal className="mr-2 text-primary-500" />
                                                            )}
                                                            <span>{lecture.title}</span>
                                                         </div>
                                                         <span className="text-sm text-gray-500">
                                                            15:20
                                                         </span>
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
                                 <span>Show all {courseDetails.sections.length} sections</span>
                                 <ChevronDown className="ml-1" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm mb-6">
                     <div className="p-4 border-b border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800">Similar Courses</h2>
                     </div>

                     <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                           <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                              <div className="flex justify-between items-center mb-3">
                                 <span className="text-sm text-gray-500">Programming</span>
                                 <div className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                    Hot & New
                                 </div>
                              </div>
                              <h3 className="text-2xl font-semibold mb-2 transition-colors">
                                 JavaScript Fundamentals
                              </h3>
                              <p className="text-gray-600 mb-4">
                                 {truncateText(
                                    "Master JavaScript from scratch with practical exercises and real-world projects",
                                    75
                                 )}
                              </p>
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                 <div className="flex justify-between items-center">
                                    <span className="font-medium text-primary-600 mr-auto">
                                       10 weeks • 24 lessons
                                    </span>
                                    <i
                                       className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                       aria-label="Full star"
                                    />
                                    <span className="text-sm font-medium">4.8 / 5</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2 mt-4">
                                 <Image
                                    src={img}
                                    alt="Instructor"
                                    className="rounded-full"
                                    width={32}
                                    height={32}
                                 />
                                 <span className="text-sm">James Wilson</span>
                                 <span className="font-bold text-lg ml-auto">$49.99</span>
                              </div>
                              <Link
                                 href={`/course-detail/${1}`}
                                 className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                              >
                                 <span>View Details</span>
                                 <ArrowRight />
                              </Link>
                           </div>

                           <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                              <div className="flex justify-between items-center mb-3">
                                 <span className="text-sm text-gray-500">Design</span>
                                 <div className="flex items-center gap-1">
                                    <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                       Bestseller
                                    </div>
                                 </div>
                              </div>
                              <h3 className="text-2xl font-semibold mb-2">
                                 Figma for UI Designers
                              </h3>
                              <p className="text-gray-600 mb-4">
                                 Learn to create beautiful interfaces and prototypes with Figma
                              </p>
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                 <div className="flex justify-between items-center">
                                    <span className="font-medium text-primary-600">
                                       8 weeks • 18 lessons
                                    </span>
                                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                                       Intermediate
                                    </span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2 mt-4">
                                 <Image
                                    src={img}
                                    alt="Instructor"
                                    className="rounded-full"
                                    width={32}
                                    height={32}
                                 />
                                 <span className="text-sm">Emily Chen</span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 />
                                 <span className="text-sm font-medium">4.8 / 5</span>
                                 <span className="font-bold text-lg ml-auto">$59.99</span>
                              </div>
                              <Link
                                 href={`/course-detail/${1}`}
                                 className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                              >
                                 <span>View Details</span>
                                 <ArrowRight />
                              </Link>
                           </div>

                           <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                              <div className="flex justify-between items-center mb-3">
                                 <span className="text-sm text-gray-500">Data Science</span>
                              </div>
                              <h3 className="text-2xl font-semibold mb-2">
                                 Python for Data Analysis
                              </h3>
                              <p className="text-gray-600 mb-4">
                                 Learn to analyze and visualize data using Python, Pandas and NumPy
                              </p>
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                 <div className="flex justify-between items-center">
                                    <span className="font-medium text-primary-600">
                                       12 weeks • 30 lessons
                                    </span>
                                    <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                                       Advanced
                                    </span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2 mt-4">
                                 <Image
                                    src={img}
                                    alt="Instructor"
                                    className="rounded-full"
                                    width={32}
                                    height={32}
                                 />
                                 <span className="text-sm">Robert Kim</span>
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 />
                                 <span className="text-sm font-medium">4.8 / 5</span>
                                 <span className="font-bold text-lg ml-auto">$69.99</span>
                              </div>
                              <Link
                                 href={`/course-detail/${1}`}
                                 className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                              >
                                 <span>View Details</span>
                                 <ArrowRight />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm mb-6">
                     <div className="p-4 border-b border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800">Reviews</h2>
                     </div>

                     <div className="p-4">
                        <div className="flex flex-col md:flex-row gap-6">
                           <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                              <div className="text-5xl font-bold text-primary-500">4.8</div>
                              <div className="text-gray-500">Course Rating</div>
                              <div className="text-xs text-gray-400 mt-1">(2,458 reviews)</div>
                           </div>

                           <div className="flex-1">
                              <div className="space-y-3">
                                 {[
                                    { rating: 5, percent: 78 },
                                    { rating: 4, percent: 15 },
                                    { rating: 3, percent: 5 },
                                    { rating: 2, percent: 1 },
                                    { rating: 1, percent: 1 },
                                 ].map((item) => (
                                    <div key={item.rating} className="flex items-center gap-2">
                                       <div className="flex gap-0.5 w-30">
                                          {/* {renderStars(item.rating)} */}
                                          <RenderStars rating={item.rating} />
                                       </div>
                                       <div className="w-full bg-gray-200 rounded-full h-2">
                                          <div
                                             className="bg-primary-500 h-2 rounded-full"
                                             style={{ width: `${item.percent}%` }}
                                          ></div>
                                       </div>
                                       <div className="text-xs text-gray-500 w-10">
                                          {item.percent}%
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="mt-6 space-y-4">
                           <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                              <div className="flex items-center mb-3">
                                 <Image
                                    src={img}
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full mr-3"
                                    width={40}
                                    height={40}
                                 />
                                 <div>
                                    <p className="font-medium text-gray-800">Emma Wilson</p>
                                    <div className="flex items-center">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 text-sm mb-0.5"
                                          aria-label="Full star"
                                       />
                                       <span className="mx-1 text-xs text-gray-500">4.8</span>
                                       <Dot className="mx-1 w-4 h-4 text-gray-500" />
                                       <span className="text-xs text-gray-500">2 months ago</span>
                                    </div>
                                 </div>
                              </div>
                              <p className="text-sm text-gray-700">
                                 This course completely transformed my understanding of JavaScript.
                                 The advanced concepts are explained in a way that&apos;s easy to
                                 grasp, and the practical examples helped me apply these concepts in
                                 real-world scenarios. Highly recommended for anyone looking to
                                 level up their JS skills!
                              </p>
                           </div>

                           <div className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                              <div className="flex items-center mb-3">
                                 <Image
                                    src={img}
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full mr-3"
                                    width={40}
                                    height={40}
                                 />
                                 <div>
                                    <p className="font-medium text-gray-800">David Chen</p>
                                    <div className="flex items-center">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 text-sm mb-0.5"
                                          aria-label="Full star"
                                       />
                                       <span className="mx-1 text-xs text-gray-500">4</span>
                                       <Dot className="mx-1 w-4 h-4 text-gray-500" />
                                       <span className="text-xs text-gray-500">1 months ago</span>
                                    </div>
                                 </div>
                              </div>
                              <p className="text-sm text-gray-700">
                                 The course content is excellent and comprehensive. Dr. Johnson
                                 knows his stuff and explains complex topics clearly. I&apos;m
                                 giving 4 stars because some sections could use more practical
                                 exercises, but overall it&apos;s a great course for serious
                                 JavaScript developers.
                              </p>
                           </div>

                           <button className="w-full py-2 bg-primary-500 border text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
                              Load More Reviews
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* About Instructor */}
                  <div className="shadow-md bg-white rounded-lg border-gray-200 p-6 mt-6">
                     <h3 className="text-3xl font-semibold mb-4">About Instructor</h3>
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

                     {/* Related Courses */}
                     <div className="bg-white rounded-xl shadow-sm mb-6">
                        <div className="p-4 border-b border-gray-100">
                           <h2 className="text-3xl font-bold text-gray-800">Related Courses</h2>
                        </div>

                        <div className="p-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                                 <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-gray-500">Programming</span>
                                    <div className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                       Hot & New
                                    </div>
                                 </div>
                                 <h3 className="text-2xl font-semibold mb-2 transition-colors">
                                    JavaScript Fundamentals
                                 </h3>
                                 <p className="text-gray-600 mb-4">
                                    {truncateText(
                                       "Master JavaScript from scratch with practical exercises and real-world projects",
                                       75
                                    )}
                                 </p>
                                 <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center">
                                       <span className="font-medium text-primary-600 mr-auto">
                                          10 weeks • 24 lessons
                                       </span>
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                          aria-label="Full star"
                                       />
                                       <span className="text-sm font-medium">4.8 / 5</span>
                                    </div>
                                 </div>
                                 <div className="flex items-center gap-2 mt-4">
                                    <Image
                                       src={img}
                                       alt="Instructor"
                                       className="rounded-full"
                                       width={32}
                                       height={32}
                                    />
                                    <span className="text-sm">James Wilson</span>
                                    <span className="font-bold text-lg ml-auto">$49.99</span>
                                 </div>
                                 <Link
                                    href={`/course-detail/${1}`}
                                    className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                                 >
                                    <span>View Details</span>
                                    <ArrowRight />
                                 </Link>
                              </div>

                              <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                                 <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-gray-500">Design</span>
                                    <div className="flex items-center gap-1">
                                       <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                          Bestseller
                                       </div>
                                    </div>
                                 </div>
                                 <h3 className="text-2xl font-semibold mb-2">
                                    Figma for UI Designers
                                 </h3>
                                 <p className="text-gray-600 mb-4">
                                    Learn to create beautiful interfaces and prototypes with Figma
                                 </p>
                                 <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center">
                                       <span className="font-medium text-primary-600">
                                          8 weeks • 18 lessons
                                       </span>
                                       <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                                          Intermediate
                                       </span>
                                    </div>
                                 </div>
                                 <div className="flex items-center gap-2 mt-4">
                                    <Image
                                       src={img}
                                       alt="Instructor"
                                       className="rounded-full"
                                       width={32}
                                       height={32}
                                    />
                                    <span className="text-sm">Emily Chen</span>
                                    <i
                                       className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                       aria-label="Full star"
                                    />
                                    <span className="text-sm font-medium">4.8 / 5</span>
                                    <span className="font-bold text-lg ml-auto">$59.99</span>
                                 </div>
                                 <Link
                                    href={`/course-detail/${1}`}
                                    className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                                 >
                                    <span>View Details</span>
                                    <ArrowRight />
                                 </Link>
                              </div>

                              <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                                 <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-gray-500">Data Science</span>
                                 </div>
                                 <h3 className="text-2xl font-semibold mb-2">
                                    Python for Data Analysis
                                 </h3>
                                 <p className="text-gray-600 mb-4">
                                    Learn to analyze and visualize data using Python, Pandas and
                                    NumPy
                                 </p>
                                 <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center">
                                       <span className="font-medium text-primary-600">
                                          12 weeks • 30 lessons
                                       </span>
                                       <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                                          Advanced
                                       </span>
                                    </div>
                                 </div>
                                 <div className="flex items-center gap-2 mt-4">
                                    <Image
                                       src={img}
                                       alt="Instructor"
                                       className="rounded-full"
                                       width={32}
                                       height={32}
                                    />
                                    <span className="text-sm">Robert Kim</span>
                                    <i
                                       className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                       aria-label="Full star"
                                    />
                                    <span className="text-sm font-medium">4.8 / 5</span>
                                    <span className="font-bold text-lg ml-auto">$69.99</span>
                                 </div>
                                 <Link
                                    href={`/course-detail/${1}`}
                                    className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                                 >
                                    <span>View Details</span>
                                    <ArrowRight />
                                 </Link>
                              </div>
                           </div>
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

                        <div className="w-full py-3 bg-primary-500 text-white rounded-lg mb-3 font-medium hover:bg-primary-600 transition-colors transform hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer">
                           <ShoppingCart className="mr-2" />
                           Add to Cart
                        </div>

                        <div className="text-center text-sm text-gray-500 mb-4">
                           30-Day Money-Back Guarantee
                        </div>

                        <div className="mb-2">
                           <h4 className="font-semibold text-lg">This course includes:</h4>
                           <ul className="space-y-1">
                              <li className="flex items-center text-sm">
                                 <Video className="text-gray-500 mr-2" />
                                 <span>{formatDuration(40200)} on-demand video</span>
                              </li>
                              <li className="flex items-center text-sm">
                                 <FileText className="text-gray-500 mr-2" />
                                 <span>85 articles</span>
                              </li>
                              <li className="flex items-center text-sm">
                                 <Download className="text-gray-500 mr-2" />
                                 <span>120 downloadable resources</span>
                              </li>
                              <li className="flex items-center text-sm">
                                 <SquareTerminal className="text-gray-500 mr-2" />
                                 <span>25 coding exercises</span>
                              </li>
                              <li className="flex items-center text-sm">
                                 <Infinity className="text-gray-500 mr-2" />
                                 <span>Full lifetime access</span>
                              </li>
                           </ul>
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

                        <div className="border-t border-gray-100 pt-4">
                           <h4 className="font-semibold text-lg mb-1">Course Stats</h4>
                           <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gray-50 rounded p-3 text-center">
                                 <div className="text-primary-600 text-lg font-bold">12,345</div>
                                 <div className="text-xs text-gray-500">Enrolled Students</div>
                              </div>
                              <div className="bg-gray-50 rounded p-3 text-center">
                                 <div className="text-primary-600 text-lg font-bold">134</div>
                                 <div className="text-xs text-gray-500">Course Lessons</div>
                              </div>
                              <div className="bg-gray-50 rounded p-3 text-center">
                                 <div className="text-primary-600 text-lg font-bold">95%</div>
                                 <div className="text-xs text-gray-500">Completion Rate</div>
                              </div>
                              <div className="bg-gray-50 rounded p-3 text-center">
                                 <div className="text-primary-600 text-lg font-bold">2023</div>
                                 <div className="text-xs text-gray-500">Last Updated</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 border-t border-gray-100">
                        <h3 className="font-medium text-gray-700 mb-2">Need Help?</h3>
                        <div className="flex flex-col gap-2 text-sm">
                           <a
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <CircleHelp className="mr-1 w-5 h-5" />
                              Help Center
                           </a>
                           <a
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <ArrowLeftRight className="mr-1 w-5 h-5" />
                              Refund Policy
                           </a>
                           <Link
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors flex items-center"
                           >
                              <CircleUser className="mr-1 w-5 h-5" />
                              Contact Support
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
