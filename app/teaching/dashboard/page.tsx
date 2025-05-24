import DefaultAvatar from "@/components/common/DefaultAvatar";
import renderStars from "@/components/common/RenderStars";
import {
   Banknote,
   ChartColumn,
   CirclePlus,
   MessageCircleMore,
   PiggyBank,
   RotateCw,
   Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import img from "@/assets/avatar-square.jpg";
import Image from "next/image";

export default function TeacherDashboard() {
   return (
      <div id="webcrumbs">
         <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 md:px-6 py-8">
               <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                     <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Teacher Dashboard
                     </h1>
                     <div className="flex gap-3">
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                           <span className="text-xl">+</span> New Course
                        </button>
                        <button className="border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                           <Settings className="w-5" />
                           Settings
                        </button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                           <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
                           <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">
                              +12.5%
                           </span>
                        </div>
                        <div className="flex items-end gap-3">
                           <p className="text-3xl font-bold text-gray-800">$24,589</p>
                           <p className="text-sm text-gray-500 pb-1">Lifetime earnings</p>
                        </div>
                        <div className="h-[120px] mt-4">
                           <div className="bg-primary-50 h-full w-full rounded-lg p-3 relative">
                              {/* Chart would go here */}
                              <div className="absolute inset-0 p-3">
                                 <div className="h-full w-full flex items-end">
                                    <div className="w-1/6 h-[30%] bg-primary-200 rounded-sm mx-0.5"></div>
                                    <div className="w-1/6 h-[45%] bg-primary-300 rounded-sm mx-0.5"></div>
                                    <div className="w-1/6 h-[35%] bg-primary-300 rounded-sm mx-0.5"></div>
                                    <div className="w-1/6 h-[60%] bg-primary-400 rounded-sm mx-0.5"></div>
                                    <div className="w-1/6 h-[75%] bg-primary-500 rounded-sm mx-0.5"></div>
                                    <div className="w-1/6 h-[90%] bg-primary-600 rounded-sm mx-0.5"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                           <h3 className="text-lg font-semibold text-gray-700">Total Students</h3>
                           <span className="bg-primary-100 text-primary-600 text-xs px-2.5 py-1 rounded-full font-medium">
                              +8.3%
                           </span>
                        </div>
                        <div className="flex items-end gap-3">
                           <p className="text-3xl font-bold text-gray-800">4,250+</p>
                           <p className="text-sm text-gray-500 pb-1">Across all courses</p>
                        </div>
                        <div className="h-[120px] mt-4">
                           <div className="bg-primary-50 h-full w-full rounded-lg p-3 relative">
                              {/* Chart would go here */}
                              <div className="grid grid-cols-4 h-full gap-2">
                                 <div className="flex flex-col justify-end">
                                    <div className="bg-primary-200 h-[40%] rounded-t-sm"></div>
                                    <div className="text-xs text-center text-gray-500 mt-1">Q1</div>
                                 </div>
                                 <div className="flex flex-col justify-end">
                                    <div className="bg-primary-300 h-[55%] rounded-t-sm"></div>
                                    <div className="text-xs text-center text-gray-500 mt-1">Q2</div>
                                 </div>
                                 <div className="flex flex-col justify-end">
                                    <div className="bg-primary-400 h-[60%] rounded-t-sm"></div>
                                    <div className="text-xs text-center text-gray-500 mt-1">Q3</div>
                                 </div>
                                 <div className="flex flex-col justify-end">
                                    <div className="bg-primary-500 h-[80%] rounded-t-sm"></div>
                                    <div className="text-xs text-center text-gray-500 mt-1">Q4</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                           <h3 className="text-lg font-semibold text-gray-700">Course Rating</h3>
                           <span className="bg-yellow-100 text-yellow-600 text-xs px-2.5 py-1 rounded-full font-medium">
                              4.8/5
                           </span>
                        </div>
                        <div className="flex items-end gap-3">
                           <p className="text-3xl font-bold text-gray-800">968</p>
                           <p className="text-sm text-gray-500 pb-1">Total reviews</p>
                        </div>
                        <div className="space-y-2 mt-4">
                           {/* 5 Stars */}
                           <div className="flex items-center">
                              <div className="text-yellow-500 flex text-sm w-32">
                                 {renderStars(5)}
                              </div>
                              <div className="w-full h-2 mx-2 bg-gray-200 rounded-full">
                                 <div className="h-2 bg-primary-500 rounded-full w-[80%]"></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8">80%</span>
                           </div>

                           {/* 4 Stars */}
                           <div className="flex items-center">
                              <div className="text-yellow-500 flex text-sm w-32">
                                 {renderStars(4)}
                              </div>
                              <div className="w-full h-2 mx-2 bg-gray-200 rounded-full">
                                 <div className="h-2 bg-primary-500 rounded-full w-[15%]"></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8">15%</span>
                           </div>

                           {/* 3 Stars */}
                           <div className="flex items-center">
                              <div className="text-yellow-500 flex text-sm w-32">
                                 {renderStars(3)}
                              </div>
                              <div className="w-full h-2 mx-2 bg-gray-200 rounded-full">
                                 <div className="h-2 bg-primary-500 rounded-full w-[5%]"></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8">5%</span>
                           </div>

                           {/* 2 Stars */}
                           <div className="flex items-center">
                              <div className="text-yellow-500 flex text-sm w-32">
                                 {renderStars(2)}
                              </div>
                              <div className="w-full h-2 mx-2 bg-gray-200 rounded-full">
                                 <div className="h-2 bg-primary-500 rounded-full w-[5%]"></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8">5%</span>
                           </div>

                           {/* 1 Stars */}
                           <div className="flex items-center">
                              <div className="text-yellow-500 flex text-sm w-32">
                                 {renderStars(1)}
                              </div>
                              <div className="w-full h-2 mx-2 bg-gray-200 rounded-full">
                                 <div className="h-2 bg-primary-500 rounded-full w-[5%]"></div>
                              </div>
                              <span className="text-xs text-gray-500 w-8">5%</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-4">
                           <h3 className="text-lg font-semibold text-gray-700">Course Status</h3>
                           <button className="text-primary-500 hover:text-primary-600 transition-colors">
                              <RotateCw className="text-primary-500" />
                           </button>
                        </div>
                        <div className="space-y-3">
                           <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Published</span>
                              <span className="font-medium text-gray-800">5</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Draft</span>
                              <span className="font-medium text-gray-800">2</span>
                           </div>
                           <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Under Review</span>
                              <span className="font-medium text-gray-800">1</span>
                           </div>
                           <div className="bg-primary-50 rounded-lg p-3 mt-1">
                              <div className="flex items-center justify-between mb-2">
                                 <span className="text-sm font-medium text-gray-700">
                                    Course Completion
                                 </span>
                                 <span className="text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                                    62.5%
                                 </span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-primary-500 rounded-full w-[62.5%]"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                     <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="text-xl font-bold text-gray-800">Revenue Overview</h3>
                              <div className="flex items-center space-x-2">
                                 <button className="border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-1 rounded transition-colors text-sm">
                                    Monthly
                                 </button>
                                 <button className="bg-primary-50 text-primary-600 border border-primary-100 px-3 py-1 rounded transition-colors text-sm">
                                    Yearly
                                 </button>
                              </div>
                           </div>
                           <div className="h-[280px] relative">
                              <div className="absolute inset-0">
                                 <div className="flex h-full items-end pb-8">
                                    <div className="h-full w-full">
                                       <div className="grid grid-cols-12 h-full gap-1 relative z-10">
                                          {Array.from({ length: 12 }).map((_, index) => (
                                             <div key={index} className="flex flex-col justify-end">
                                                <div
                                                   className={`bg-primary-${
                                                      300 + (index % 3) * 100
                                                   } rounded-t-sm`}
                                                   style={{
                                                      height: `${Math.floor(
                                                         20 + Math.random() * 50
                                                      )}%`,
                                                   }}
                                                ></div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                                 <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 text-xs text-gray-500 text-center">
                                    <div>Jan</div>
                                    <div>Feb</div>
                                    <div>Mar</div>
                                    <div>Apr</div>
                                    <div>May</div>
                                    <div>Jun</div>
                                    <div>Jul</div>
                                    <div>Aug</div>
                                    <div>Sep</div>
                                    <div>Oct</div>
                                    <div>Nov</div>
                                    <div>Dec</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow h-full">
                           <h3 className="text-xl font-bold text-gray-800 mb-6">
                              Upcoming Payouts
                           </h3>
                           <div className="space-y-4">
                              <div className="border-b border-gray-100 pb-4">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-gray-800">
                                       January Payout
                                    </span>
                                    <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                                       Processing
                                    </span>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">
                                       $1,245.65
                                    </span>
                                    <span className="text-sm text-gray-500">Jan 31, 2023</span>
                                 </div>
                              </div>

                              <div className="border-b border-gray-100 pb-4">
                                 <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium text-gray-800">
                                       February Payout
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                       Pending
                                    </span>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-800">
                                       $972.40
                                    </span>
                                    <span className="text-sm text-gray-500">Feb 28, 2023</span>
                                 </div>
                              </div>

                              <div className="pt-2">
                                 <div className="flex justify-between items-center mb-3">
                                    <span className="font-medium text-gray-800">
                                       Lifetime Earnings
                                    </span>
                                    <button className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium">
                                       View history
                                    </button>
                                 </div>
                                 <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                       <div>
                                          <span className="text-sm text-gray-500 block">
                                             Total earned
                                          </span>
                                          <span className="text-2xl font-bold text-gray-800">
                                             $24,589.75
                                          </span>
                                       </div>
                                       <PiggyBank className="text-primary-500 w-10 h-10" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="text-xl font-bold text-gray-800">Recent Reviews</h3>
                           <Link
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
                           >
                              View all
                           </Link>
                        </div>
                        <div className="space-y-4">
                           <div className="border-b border-gray-100 pb-4">
                              <div className="flex items-start gap-3">
                                 <DefaultAvatar
                                    name="John Doe"
                                    width={32}
                                    height={32}
                                    fontSize={20}
                                 />
                                 <div>
                                    <div className="flex items-center mb-1">
                                       <h4 className="font-medium text-gray-800 mr-2 text-sm">
                                          John Doe
                                       </h4>
                                       <div className="flex items-center justify-center">
                                          <span className="mr-1 font-medium text-sm">4.5</span>
                                          <i
                                             className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                             aria-label="Full star"
                                          />
                                       </div>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-1">
                                       Python Masterclass • 2 weeks ago
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                       &quot;Dr. Johnson6apos;s teaching style is
                                       exceptional...&quot;
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div className="border-b border-gray-100 pb-4">
                              <div className="flex items-start gap-3">
                                 <DefaultAvatar
                                    name="Amanda Smith"
                                    width={32}
                                    height={32}
                                    fontSize={20}
                                 />
                                 <div>
                                    <div className="flex items-center mb-1">
                                       <h4 className="font-medium text-gray-800 mr-2 text-sm">
                                          Amanda Smith
                                       </h4>
                                       <div className="flex items-center justify-center">
                                          <span className="mr-1 font-medium text-sm">4.5</span>
                                          <i
                                             className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                             aria-label="Full star"
                                          />
                                       </div>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-1">
                                       JavaScript for Beginners • 1 month ago
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                       &quot;Coming from a non-technical background...&quot;
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <div className="flex items-start gap-3">
                                 <DefaultAvatar
                                    name="Robert Jackson"
                                    width={32}
                                    height={32}
                                    fontSize={20}
                                 />
                                 <div>
                                    <div className="flex items-center mb-1">
                                       <h4 className="font-medium text-gray-800 mr-2 text-sm">
                                          Robert Jackson
                                       </h4>
                                       <div className="flex items-center justify-center">
                                          <span className="mr-1 font-medium text-sm">4.5</span>
                                          <i
                                             className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                             aria-label="Full star"
                                          />
                                       </div>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-1">
                                       Machine Learning and AI • 2 months ago
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                       &quot;Great course content, very informative...&quot;
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="text-xl font-bold text-gray-800">Popular Courses</h3>
                           <Link
                              href="#"
                              className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
                           >
                              View all
                           </Link>
                        </div>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center justify-center gap-2">
                                 <Image src={img} alt="Avatar" width={45} height={45} />
                                 <div className="flex flex-col text-sm">
                                    <h4 className="font-medium text-gray-800">
                                       Python Masterclass
                                    </h4>
                                    <span className="text-gray-500">1,243 students</span>
                                 </div>
                              </div>
                              <div className="flex items-center justify-center">
                                 <div className="flex justify-between items-center mr-3">
                                    <div className="flex items-center justify-between text-yellow-500">
                                       <span className="mr-1">5.0</span>
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                          aria-label="Full star"
                                       />
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="font-bold text-gray-800">$8,649</span>
                                    <span className="text-xs text-gray-500 block">Revenue</span>
                                 </div>
                              </div>
                           </div>

                           <div className="flex items-center justify-between">
                              <div className="flex items-center justify-center gap-2">
                                 <Image src={img} alt="Avatar" width={45} height={45} />
                                 <div className="flex flex-col text-sm">
                                    <h4 className="font-medium text-gray-800">
                                       Python Masterclass
                                    </h4>
                                    <span className="text-gray-500">1,243 students</span>
                                 </div>
                              </div>
                              <div className="flex items-center justify-center">
                                 <div className="flex justify-between items-center mr-3">
                                    <div className="flex items-center justify-between text-yellow-500">
                                       <span className="mr-1">5.0</span>
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                          aria-label="Full star"
                                       />
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="font-bold text-gray-800">$8,649</span>
                                    <span className="text-xs text-gray-500 block">Revenue</span>
                                 </div>
                              </div>
                           </div>

                           <div className="flex items-center justify-between">
                              <div className="flex items-center justify-center gap-2">
                                 <Image src={img} alt="Avatar" width={45} height={45} />
                                 <div className="flex flex-col text-sm">
                                    <h4 className="font-medium text-gray-800">
                                       Python Masterclass
                                    </h4>
                                    <span className="text-gray-500">1,243 students</span>
                                 </div>
                              </div>
                              <div className="flex items-center justify-center">
                                 <div className="flex justify-between items-center mr-3">
                                    <div className="flex items-center justify-between text-yellow-500">
                                       <span className="mr-1">5.0</span>
                                       <i
                                          className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                          aria-label="Full star"
                                       />
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="font-bold text-gray-800">$8,649</span>
                                    <span className="text-xs text-gray-500 block">Revenue</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="text-xl font-bold text-gray-800">Quick Actions</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                           <button className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-4 rounded-lg transition-colors flex flex-col items-center">
                              <CirclePlus className="mb-2" />
                              <span className="text-sm font-medium">New Course</span>
                           </button>
                           <button className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-4 rounded-lg transition-colors flex flex-col items-center">
                              <MessageCircleMore className="mb-2" />
                              <span className="text-sm font-medium">Messages</span>
                           </button>
                           <button className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-4 rounded-lg transition-colors flex flex-col items-center">
                              <Banknote className="mb-2" />
                              <span className="text-sm font-medium">Payouts</span>
                           </button>
                           <button className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-4 rounded-lg transition-colors flex flex-col items-center">
                              <ChartColumn className="mb-2" />
                              <span className="text-sm font-medium">Analytics</span>
                           </button>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-primary-50 to-white border border-primary-100 rounded-lg p-4">
                           <h4 className="font-medium text-gray-800 mb-2">Complete Your Profile</h4>
                           <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                              <div className="h-full bg-primary-500 rounded-full w-[75%]"></div>
                           </div>
                           <div className="flex justify-between text-xs text-gray-500">
                              <span>75% Complete</span>
                              <span>3 of 4 tasks done</span>
                           </div>
                           <ul className="space-y-2 mt-3">
                              <li className="flex items-center text-sm"></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
