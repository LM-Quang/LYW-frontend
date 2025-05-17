import React from "react";
import img from "@/assets/avatar-square.jpg";
import Image from "next/image";

export default function MyTeachingPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        My Uploaded Courses
                     </h1>
                     <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Create New Course
                     </button>
                  </div>

                  <div className="mb-8">
                     <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center space-x-2 mb-3 md:mb-0">
                           <span className="material-symbols-outlined text-primary-500">info</span>
                           <p className="text-gray-600">
                              You have 6 published courses and 2 drafts
                           </p>
                        </div>
                        <div className="flex items-center space-x-2">
                           <div className="relative">
                              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm">
                                 <option>All Courses</option>
                                 <option>Published</option>
                                 <option>Drafts</option>
                                 <option>Archived</option>
                              </select>
                              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                 expand_more
                              </span>
                           </div>
                           <div className="relative">
                              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm">
                                 <option>Sort by: Newest</option>
                                 <option>Sort by: Oldest</option>
                                 <option>Sort by: Popular</option>
                                 <option>Sort by: Rating</option>
                              </select>
                              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                 expand_more
                              </span>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Published Courses */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
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
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_half
                                 </span>
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.5 (128 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    837 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    12 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$49.99</span>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          insights
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          more_vert
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    Python Masterclass: From Basics to Advanced
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="text-gray-600 text-sm ml-1">
                                    5.0 (256 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    1,243 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    18 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$59.99</span>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          insights
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          more_vert
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    Introduction to Machine Learning and AI
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.0 (104 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    621 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    15 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$69.99</span>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          insights
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          more_vert
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Draft Course */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                 Draft
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    UI/UX Design Fundamentals
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-gray-400">
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="text-gray-400 text-sm ml-1">No ratings yet</span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    0 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    Est. 10 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <div className="flex items-center text-yellow-600 bg-yellow-50 px-2 py-1 rounded text-xs">
                                    <span className="material-symbols-outlined text-xs mr-1">
                                       warning
                                    </span>
                                    Incomplete: 3 sections needed
                                 </div>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-primary-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          delete
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    Excel for Business: Data Analysis and Visualization
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_half
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="text-gray-600 text-sm ml-1">
                                    3.5 (82 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    412 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    8 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$39.99</span>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          insights
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          more_vert
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    Digital Marketing Strategy
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-yellow-500">
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="text-gray-600 text-sm ml-1">
                                    4.9 (178 ratings)
                                 </span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    968 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    14 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <span className="font-medium text-gray-900">$54.99</span>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          insights
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          more_vert
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Draft Course */}
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                 Draft
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                 <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors line-clamp-2">
                                    Blockchain Fundamentals
                                 </h3>
                              </div>
                              <div className="flex items-center mb-2 text-gray-400">
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="material-symbols-outlined text-sm">
                                    star_outline
                                 </span>
                                 <span className="text-gray-400 text-sm ml-1">No ratings yet</span>
                              </div>
                              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       people
                                    </span>
                                    0 students
                                 </div>
                                 <div className="flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       schedule
                                    </span>
                                    Est. 16 hours
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                 <div className="flex items-center text-yellow-600 bg-yellow-50 px-2 py-1 rounded text-xs">
                                    <span className="material-symbols-outlined text-xs mr-1">
                                       warning
                                    </span>
                                    Incomplete: 5 sections needed
                                 </div>
                                 <div className="flex space-x-1">
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-primary-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          delete
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="relative">
                              <Image
                                 src={img}
                                 alt="Course thumbnail"
                                 className="w-full h-48 object-cover"
                                 width={192}
                                 height={192}
                              />
                              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                 Published
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="flex justify-between items-start mb-2"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
