import React from "react";
import Image from "next/image";
import img1 from "@/assets/img-1.jpg";
import {
   ArrowRight,
   Award,
   BellRing,
   BookOpen,
   CheckCircle,
   ChevronDown,
   ChevronRight,
   CirclePlay,
   Download,
   FileText,
   GraduationCap,
   Infinity,
   MessageSquareText,
   NotebookPen,
   ScrollText,
   Search,
   Star,
   User,
   Users,
   Video,
} from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
   // Function to render rating stars dynamically
   const renderRatingStars = (rating: number) => {
      const fullStars = Math.floor(rating); // Number of full stars
      const hasHalfStar = rating % 1 >= 0.5; // Check for half star
      const stars = [];

      // Add full stars
      for (let i = 0; i < fullStars; i++) {
         stars.push(
            <i
               key={`star-${i}`}
               className="fa-solid fa-star text-yellow-400"
               aria-label="Full star"
            />
         );
      }

      // Add half star if applicable
      if (hasHalfStar) {
         stars.push(
            <i
               key="star-half"
               className="fa-solid fa-star-half-stroke text-yellow-400"
               aria-label="Half star"
            />
         );
      }

      return stars;
   };

   return (
      <div className="w-full min-h-screen bottom-shadow bg-gray-50 font-sans">
         {/* Header */}
         <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Logo */}
               <div className="flex items-center">
                  <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                     <GraduationCap aria-label="Education Logo" />
                  </div>
                  <div className="text-2xl font-bold text-primary-500">
                     EduLearn <br /> Academy
                  </div>
               </div>

               {/* Search bar */}
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        aria-label="Search courses"
                     />
                     <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        aria-hidden="true"
                     />
                  </div>
               </div>

               {/* Navbar */}
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center gap-2 text-sm">
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Courses
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Categories
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Teaching
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           My Learning
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Wishlist
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                        >
                           Sign In
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>

         {/* Main */}
         <div className="container mx-auto px-4 md:px-5 py-5">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
               {/* <!-- Sidebar --> */}
               <div className="lg:col-span-2">
                  <div className="bg-white shadow-sm rounded-lg p-4 sticky top-2.5">
                     <div className="mb-6">
                        <span className="bg-primary-500 text-white p-1 mr-1 rounded-lg text-sm font-medium">
                           Best Seller
                        </span>
                        <h2 className="text-2xl font-bold mt-2">Complete JavaScript Course 2023</h2>
                        <div className="text-sm mt-1">
                           <span>4.8</span>
                           <span className="mx-1">{renderRatingStars(4.8)}</span>(
                           <Link href="#" className="mx-1 underline text-blue-500">
                              42,297 ratings
                           </Link>
                           )
                        </div>
                     </div>

                     <div className="my-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                        <div className="font-bold text-2xl text-gray-800 mb-2">
                           Course Includes:
                        </div>
                        <ul className="space-y-2">
                           <li className="flex items-center text-sm">
                              <Video className="text-primary-500 mr-2" />
                              <span>67 hours on-demand video</span>
                           </li>
                           <li className="flex items-center text-sm">
                              <FileText className="text-primary-500 mr-2" />
                              <span>25 articles</span>
                           </li>
                           <li className="flex items-center text-sm">
                              <Download className="text-primary-500 mr-2" />
                              <span>154 downloadable resources</span>
                           </li>
                           <li className="flex items-center text-sm">
                              <Award className="text-primary-500 mr-2" />
                              <span>Certificate of completion</span>
                           </li>
                           <li className="flex items-center text-sm">
                              <Infinity className="text-primary-500 mr-2" />
                              <span>Full lifetime access</span>
                           </li>
                        </ul>
                        <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-full transition-colors shadow-sm cursor-pointer">
                           Enroll Now - $89.99
                        </button>
                        <div className="text-center mt-2 text-sm">30-Day Money-Back Guarantee</div>
                     </div>

                     {/* <nav className="space-y-1">
                        <a
                           href="#overview"
                           className="flex items-center p-2 rounded-md bg-gray-100 text-primary-600 font-medium transition-colors"
                        >
                           <ScrollText
                              className="mr-2 text-primary-500"
                              aria-label="Course Overview"
                           />
                           Course Overview
                        </a>
                        <a
                           href="#content"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <BookOpen
                              className="mr-2 text-primary-500"
                              aria-label="Course Content"
                           />
                           Course Content
                        </a>
                        <a
                           href="#reviews"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <Star className="mr-2 text-primary-500" aria-label="Reviews" />
                           Reviews
                        </a>
                        <a
                           href="#instructor"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <User className="mr-2 text-primary-500" aria-label="Instructor" />
                           Instructor
                        </a>
                        <a
                           href="#faq"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <HelpCircle className="mr-2 text-primary-500" aria-label="FAQ" />
                           FAQ
                        </a>
                        <a
                           href="#requirements"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <CheckSquare
                              className="mr-2 text-primary-500"
                              aria-label="Requirements"
                           />
                           Requirements
                        </a>
                        <a
                           href="#resources"
                           className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                           <Download className="mr-2 text-primary-500" aria-label="Resources" />
                           Resources
                        </a>
                     </nav> */}
                  </div>
               </div>

               {/* <!-- Main Content --> */}
               <div className="lg:col-span-5">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                     {/* <!-- Title Section --> */}
                     <div className="relative">
                        <Image
                           src={img1}
                           alt="JavaScript programming code on screen"
                           className="w-full h-64 object-cover"
                           width={img1.width}
                           height={img1.height}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                           <div className="p-6 text-white">
                              <div className="text-3xl font-bold mb-2">
                                 Complete JavaScript Course 2023
                              </div>
                              <div className="text-lg">
                                 Master JavaScript with the most comprehensive course available
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                 <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                                    Bestseller
                                 </div>
                                 <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                                    Updated July 2023
                                 </div>
                                 <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                                    67 hours
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* <!-- Content Sections --> */}
                     <div className="p-6 space-y-10">
                        {/* <!-- Overview Section --> */}
                        <section id="overview" className="scroll-mt-20">
                           <div className="text-3xl font-bold mb-4 text-gray-800 flex items-center border-b pb-2">
                              <ScrollText
                                 className="mr-2 text-primary-500 w-7 h-7"
                                 aria-label="Course Overview"
                              />
                              Course Overview
                           </div>

                           <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-primary-500">
                              <div className="text-gray-700">
                                 This complete JavaScript course takes you from zero to expert!
                                 Learn JavaScript from scratch with hands-on projects, challenges,
                                 and real-world applications. Whether you are a complete beginner or
                                 looking to enhance your skills, this course covers everything you
                                 need to become a professional JavaScript developer.
                              </div>
                           </div>

                           <h4 className="font-bold mb-3 text-gray-800">What you will learn:</h4>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    JavaScript fundamentals: variables, operators, conditionals
                                 </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    Modern ES6+ features and syntax
                                 </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    Object-oriented programming with JavaScript
                                 </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    Asynchronous JavaScript: Promises, async/await
                                 </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    Modern tools: NPM, Parcel, Babel and ES6 modules
                                 </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                 <CheckCircle className="text-green-500 mt-0.5" />
                                 <div className="text-gray-700">
                                    5 real-world projects to build a portfolio
                                 </div>
                              </div>
                           </div>

                           <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                              <div className="flex items-start">
                                 <BellRing className="text-blue-600 mr-3 mt-1" />
                                 <div>
                                    <div className="font-bold text-gray-800 mb-1">
                                       Limited Time Offer!
                                    </div>
                                    <div className="text-gray-700">
                                       Enroll now and get the{" "}
                                       <strong>Advanced JavaScript Patterns</strong> bonus module
                                       for free! Offer valid until August 31, 2023.
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>

                        {/* <!-- Course Content Section --> */}
                        <section id="content" className="scroll-mt-20">
                           <div className="text-3xl font-bold mb-4 text-gray-800 flex items-center border-b pb-2">
                              <BookOpen
                                 className="mr-2 text-primary-500 w-7 h-7"
                                 aria-label="Course Content"
                              />
                              Course Content
                           </div>

                           <div className="mb-4">
                              <div className="flex items-center justify-between mb-3">
                                 <div className="text-gray-700">
                                    <span className="font-medium">17 sections</span> •{" "}
                                    <span className="font-medium">157 lectures</span> •{" "}
                                    <span className="font-medium">Total: 67 hours</span>
                                 </div>
                                 <button className="text-primary-500 hover:text-primary-600 font-medium text-sm cursor-pointer">
                                    Expand All Sections
                                 </button>
                              </div>

                              <div className="relative">
                                 <input
                                    type="text"
                                    placeholder="Search lectures..."
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                 />
                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              </div>
                           </div>

                           <div className="space-y-3">
                              <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-sm transition-all">
                                 <summary className="flex items-center justify-between cursor-pointer p-4">
                                    <div className="flex items-center">
                                       <ChevronRight className="mr-3 text-primary-500 group-open:rotate-90 transition-transform" />
                                       <div>
                                          <div className="font-medium text-gray-800">
                                             1. Introduction to JavaScript
                                          </div>
                                          <div className="text-sm text-gray-500">
                                             5 lectures • 32 min
                                          </div>
                                       </div>
                                    </div>
                                    <div className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                                       Preview
                                    </div>
                                 </summary>
                                 <div className="p-4 pt-0 border-t border-gray-100">
                                    <ul className="divide-y">
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">
                                                Welcome to the Course!
                                             </div>
                                          </div>
                                          <div className="text-sm text-gray-500">8:12</div>
                                       </li>
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">
                                                Setting Up the Development Environment
                                             </div>
                                          </div>
                                          <div className="text-sm text-gray-500">10:35</div>
                                       </li>
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <FileText className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">
                                                Course Resources & Documents
                                             </div>
                                          </div>
                                          <div className="text-sm text-gray-500">5:08</div>
                                       </li>
                                    </ul>
                                 </div>
                              </details>

                              <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-sm transition-all">
                                 <summary className="flex items-center justify-between cursor-pointer p-4">
                                    <div className="flex items-center">
                                       <ChevronRight className="mr-3 text-primary-500 group-open:rotate-90 transition-transform" />
                                       <div>
                                          <div className="font-medium text-gray-800">
                                             2. JavaScript Fundamentals – Part 1
                                          </div>
                                          <div className="text-sm text-gray-500">
                                             12 lectures • 1h 45min
                                          </div>
                                       </div>
                                    </div>
                                    <div className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                                       Preview
                                    </div>
                                 </summary>
                                 <div className="p-4 pt-0 border-t border-gray-100">
                                    <ul className="divide-y">
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">
                                                Variables and Values
                                             </div>
                                          </div>
                                          <div className="text-sm text-gray-500">14:20</div>
                                       </li>
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <CirclePlay className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">Data Types</div>
                                          </div>
                                          <div className="text-sm text-gray-500">11:05</div>
                                       </li>
                                       <li className="py-3 flex items-center justify-between">
                                          <div className="flex items-center">
                                             <NotebookPen className="mr-3 text-gray-400" />
                                             <div className="text-gray-700">
                                                Coding Challenge #1
                                             </div>
                                          </div>
                                          <div className="text-sm text-gray-500">8:15</div>
                                       </li>
                                    </ul>
                                 </div>
                              </details>

                              <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-sm transition-all">
                                 <summary className="flex items-center justify-between cursor-pointer p-4">
                                    <div className="flex items-center">
                                       <ChevronRight className="mr-3 text-primary-500 group-open:rotate-90 transition-transform" />
                                       <div>
                                          <div className="font-medium text-gray-800">
                                             3. JavaScript Fundamentals – Part 2
                                          </div>
                                          <div className="text-sm text-gray-500">
                                             15 lectures • 2h 20min
                                          </div>
                                       </div>
                                    </div>
                                 </summary>
                              </details>

                              <details className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-sm transition-all">
                                 <summary className="flex items-center justify-between cursor-pointer p-4">
                                    <div className="flex items-center">
                                       <ChevronRight className="mr-3 text-primary-500 group-open:rotate-90 transition-transform" />
                                       <div>
                                          <div className="font-medium text-gray-800">
                                             4. DOM and Events Fundamentals
                                          </div>
                                          <div className="text-sm text-gray-500">
                                             13 lectures • 2h 05min
                                          </div>
                                       </div>
                                    </div>
                                 </summary>
                              </details>
                           </div>

                           <button className="mt-6 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors flex items-center justify-center">
                              <span>Show 13 more sections</span>
                              <ChevronDown className="ml-2" />
                           </button>
                        </section>

                        {/* <!-- Instructor Section --> */}
                        <section id="instructor" className="scroll-mt-20">
                           <div className="text-3xl font-bold mb-4 text-gray-800 flex items-center border-b pb-2">
                              <Star
                                 className="mr-2 text-primary-500 w-7 h-7"
                                 aria-label="Reviews"
                              />
                              Instructor
                           </div>

                           <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/4">
                                 <Image
                                    src={img1}
                                    alt="Instructor portrait"
                                    className="w-40 h-40 object-cover rounded-full mx-auto"
                                    width={160}
                                    height={160}
                                 />
                              </div>
                              <div className="md:w-3/4">
                                 <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                                 <div className="text-gray-600 mb-2">
                                    Web Developer & JavaScript Expert
                                 </div>

                                 <div className="flex items-center mb-4 text-sm text-gray-600">
                                    <div className="flex items-center mr-4">
                                       <Star className="material-symbols-outlined text-gray-500 mr-1" />
                                       4.8 Instructor Rating
                                    </div>
                                    <div className="flex items-center mr-4">
                                       <MessageSquareText className="text-gray-500 mr-1" />
                                       12,487 Reviews
                                    </div>
                                    <div className="flex items-center">
                                       <Users className="text-gray-500 mr-1" />
                                       124,587 Students
                                    </div>
                                 </div>

                                 <p className="text-gray-700 mb-4">
                                    I have spent the last 10 years working as a professional web
                                    developer for major tech companies. During this time, I have
                                    taught over 120,000 students online, helping them achieve their
                                    goals in web development. My teaching approach focuses on
                                    practical, real-world applications rather than theory.
                                 </p>

                                 <p className="text-gray-700 mb-4">
                                    My courses are project-based because I firmly believe in
                                    learning by doing. With over 15 years of JavaScript experience,
                                    I will guide you through becoming a confident JavaScript
                                    developer from scratch.
                                 </p>

                                 <button className="text-primary-500 hover:text-primary-600 font-medium flex items-center cursor-pointer">
                                    <span>View full profile</span>
                                    <ArrowRight className="ml-1" />
                                 </button>
                              </div>
                           </div>
                        </section>

                        {/* <!-- Reviews Section --> */}
                        <section id="reviews" className="scroll-mt-20">
                           <div className="text-3xl font-bold mb-4 text-gray-800 flex items-center border-b pb-2">
                              <User
                                 className="mr-2 text-primary-500 w-7 h-7"
                                 aria-label="Instructor"
                              />
                              Student Reviews
                           </div>

                           <div className="flex flex-col md:flex-row gap-6 mb-6">
                              <div className="md:w-1/3 bg-gray-50 p-5 rounded-lg flex flex-col items-center justify-center">
                                 <div className="text-5xl font-bold text-gray-800 mb-2">4.8</div>
                                 <div className="flex items-center mb-2 space-x-1">
                                    {renderRatingStars(4.8)}
                                 </div>
                                 <div className="text-gray-600 text-sm">Course Rating</div>
                                 <div className="mt-2 text-gray-700 font-medium">
                                    (4,297 ratings)
                                 </div>
                              </div>

                              <div className="md:w-2/3">
                                 <div className="space-y-1">
                                    <div className="flex items-center">
                                       <div className="w-24 text-sm text-gray-600">5 stars</div>
                                       <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "78%" }}
                                          ></div>
                                       </div>
                                       <div className="w-12 text-sm text-gray-600 ml-2">78%</div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-24 text-sm text-gray-600">4 stars</div>
                                       <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "14%" }}
                                          ></div>
                                       </div>
                                       <div className="w-12 text-sm text-gray-600 ml-2">14%</div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-24 text-sm text-gray-600">3 stars</div>
                                       <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "5%" }}
                                          ></div>
                                       </div>
                                       <div className="w-12 text-sm text-gray-600 ml-2">5%</div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-24 text-sm text-gray-600">2 stars</div>
                                       <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                                          <div
                                             className="bg-primary-500 h-full rounded-full"
                                             style={{ width: "2%" }}
                                          ></div>
                                       </div>
                                       <div className="w-12 text-sm text-gray-600 ml-2">2%</div>
                                    </div>
                                    <div className="flex items-center">
                                       <div className="w-24 text-sm text-gray-600">1 star</div>
                                       <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden"></div>
                                       <div className="w-12 text-sm text-gray-600 ml-2">0%</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <footer className="bg-white top-shadow py-10">
            <div className="container mx-auto px-4 md:px-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Information */}
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                           <GraduationCap aria-label="EduLearn Academy Logo" />
                        </div>
                        <div className="text-xl font-bold">EduLearn Academy</div>
                     </div>
                     <p className="text-sm">
                        Empowering learners worldwide with high-quality online courses in
                        programming, design, business, and more.
                     </p>
                  </div>

                  {/* Navigation Links */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                     <ul className="space-y-2 text-sm">
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Home page"
                           >
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Courses page"
                           >
                              Courses
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Categories page"
                           >
                              Categories
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Teaching page"
                           >
                              Teaching
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="About page"
                           >
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Contact page"
                           >
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>

                  {/* Contact and Social Media */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                     <div className="mt-4 flex space-x-4">
                        <a
                           href="https://twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Twitter"
                        >
                           <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </a>
                        <a
                           href="https://facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook"
                        >
                           <i className="fa-brands fa-facebook-f text-2xl"></i>
                        </a>
                        <a
                           href="https://instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram"
                        >
                           <i className="fa-brands fa-square-instagram text-2xl"></i>
                        </a>
                        <a
                           href="https://linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on LinkedIn"
                        >
                           <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                  <div className="mb-4 md:mb-0">
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors mr-4"
                        aria-label="Privacy Policy"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors"
                        aria-label="Terms of Service"
                     >
                        Terms of Service
                     </a>
                  </div>
                  <div>
                     &copy; {new Date().getFullYear()} EduLearn Academy. All rights reserved.
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
