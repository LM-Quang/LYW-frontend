import React from "react";
import img from "@/assets/avatar-square.jpg";
import Image from "next/image";
import DefaultAvatar from "@/components/common/DefaultAvatar";
import { ArrowRight, ChevronDown, CirclePlus, Clock3, ScrollText, Users } from "lucide-react";
import Link from "next/link";

export default function TeacherInfoPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8 space-y-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
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
                           Professor of Computer Science at Stanford University with over 10 years
                           of teaching experience. Specialized in machine learning algorithms and
                           web technologies.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                           <div className="flex items-center">
                              <ScrollText className="mr-1 text-gray-500" />8 Courses
                           </div>
                           <div className="flex items-center">
                              <Users className="mr-1 text-gray-500" />
                              4,250+ Students
                           </div>
                           <div className="flex items-center">
                              <i
                                 className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                 aria-label="Full star"
                              />
                              4.8 Instructor Rating
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-8">
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
                           projects. I believe in empowering students to not just understand
                           concepts but to apply them confidently in their own work.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                           <h3 className="font-medium text-gray-800 mb-2">Specializations</h3>
                           <ul className="list-disc list-inside text-gray-600 space-y-1">
                              <li>Advanced Machine Learning Algorithms</li>
                              <li>Full-Stack Web Development</li>
                              <li>Data Visualization Techniques</li>
                              <li>Cloud Computing and Infrastructure</li>
                           </ul>
                        </div>
                     </div>

                     <div className="bg-gray-50 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                           Stats & Achievements
                        </h2>
                        <div className="space-y-4">
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

                  <div className="border-t border-gray-200 pt-8">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800">
                           Courses by Dr. Alan Johnson
                        </h2>
                        <div className="flex items-center space-x-2">
                           <div className="relative">
                              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm cursor-pointer">
                                 <option>All Courses</option>
                                 <option>Published</option>
                                 <option>Featured</option>
                                 <option>Popular</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Banner"
                                 className="w-full h-48 object-cover"
                                 width={300}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    JavaScript for Beginners: Complete Guide
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <Users className="mr-1" />
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <Clock3 className="mr-1" />
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <Link
                                    href="#"
                                    className="text-primary-500 hover:text-primary-600 transition-colors font-medium flex items-center"
                                 >
                                    View Course
                                    <ArrowRight className="ml-1" />
                                 </Link>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Banner"
                                 className="w-full h-48 object-cover"
                                 width={300}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    JavaScript for Beginners: Complete Guide
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <Users className="mr-1" />
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <Clock3 className="mr-1" />
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <Link
                                    href="#"
                                    className="text-primary-500 hover:text-primary-600 transition-colors font-medium flex items-center"
                                 >
                                    View Course
                                    <ArrowRight className="ml-1" />
                                 </Link>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Banner"
                                 className="w-full h-48 object-cover"
                                 width={300}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    JavaScript for Beginners: Complete Guide
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <Users className="mr-1" />
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <Clock3 className="mr-1" />
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <Link
                                    href="#"
                                    className="text-primary-500 hover:text-primary-600 transition-colors font-medium flex items-center"
                                 >
                                    View Course
                                    <ArrowRight className="ml-1" />
                                 </Link>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Banner"
                                 className="w-full h-48 object-cover"
                                 width={300}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    JavaScript for Beginners: Complete Guide
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <Users className="mr-1" />
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <Clock3 className="mr-1" />
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <Link
                                    href="#"
                                    className="text-primary-500 hover:text-primary-600 transition-colors font-medium flex items-center"
                                 >
                                    View Course
                                    <ArrowRight className="ml-1" />
                                 </Link>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Banner"
                                 className="w-full h-48 object-cover"
                                 width={300}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    JavaScript for Beginners: Complete Guide
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                                    aria-label="Full star"
                                 />
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <Users className="mr-1" />
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <Clock3 className="mr-1" />
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <Link
                                    href="#"
                                    className="text-primary-500 hover:text-primary-600 transition-colors font-medium flex items-center"
                                 >
                                    View Course
                                    <ArrowRight className="ml-1" />
                                 </Link>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary-50 to-white border border-primary-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="p-6 flex flex-col items-center text-center">
                              <CirclePlus className="w-12 h-12 text-primary-500 mb-4" />
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                 View All Courses
                              </h3>
                              <p className="text-gray-600 mb-4">
                                 Browse all 8 courses from Dr. Alan Johnson
                              </p>
                              <button className="text-white bg-primary-500 hover:bg-primary-600  px-4 py-2 rounded-lg transition-colors cursor-pointer">
                                 View All Courses
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Reviews</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                           <div className="flex items-start gap-3 mb-3">
                              <DefaultAvatar name="John Doe" width={40} height={40} fontSize={20} />
                              <div>
                                 <div className="flex items-center">
                                    <h4 className="font-medium text-gray-800 mr-2">John Doe</h4>
                                    <div className="flex items-center">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-2"
                                          aria-label="Full star"
                                       />
                                       <span>4.8</span>
                                    </div>
                                 </div>
                                 <p className="text-gray-500 text-sm">
                                    2 weeks ago • Python Masterclass
                                 </p>
                              </div>
                           </div>
                           <p className="text-gray-600">
                              &quot;Dr. Johnson&apos;s teaching style is exceptional. Complex topics
                              are broken down into manageable chunks, making learning Python
                              enjoyable and effective. The hands-on projects were especially
                              valuable.&quot;
                           </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                           <div className="flex items-start gap-3 mb-3">
                              <DefaultAvatar
                                 name="Amanda Smith"
                                 width={40}
                                 height={40}
                                 fontSize={20}
                              />
                              <div>
                                 <div className="flex items-center">
                                    <h4 className="font-medium text-gray-800 mr-2">Amanda Smith</h4>
                                    <div className="flex items-center">
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-2"
                                          aria-label="Full star"
                                       />
                                       <span>4.3</span>
                                    </div>
                                 </div>
                                 <p className="text-gray-500 text-sm">
                                    1 month ago • JavaScript for Beginners
                                 </p>
                              </div>
                           </div>
                           <p className="text-gray-600">
                              &quot;Coming from a non-technical background, I was worried about
                              learning JavaScript. Dr. Johnson&apos;s course made it approachable
                              and I&apos;m now confident in building my own web applications.&quot;
                           </p>
                        </div>
                     </div>
                     <div className="text-center mt-6">
                        <button className="text-primary-500 hover:text-primary-600 font-medium flex items-center mx-auto cursor-pointer">
                           <span>View more reviews</span>
                           <ChevronDown className="ml-1" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
