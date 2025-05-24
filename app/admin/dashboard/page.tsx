import { ChartNoAxesCombined, LayoutDashboard, TrendingUp } from "lucide-react";
import React from "react";

export default function AnotherPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
               <div className="lg:col-span-1">
                  <div className="p-5 bg-white rounded-lg border border-gray-200">
                     <h3 className="font-semibold text-xl mb-4 flex items-center">
                        <LayoutDashboard className="mr-2" />
                        System Stats
                     </h3>

                     <div className="space-y-3">
                        <div className="flex items-center justify-between">
                           <span className="text-gray-600">Total Users</span>
                           <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                              12,458
                           </span>
                        </div>

                        <div className="flex items-center justify-between">
                           <span className="text-gray-600">Active Courses</span>
                           <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                              156
                           </span>
                        </div>

                        <div className="flex items-center justify-between">
                           <span className="text-gray-600">Instructors</span>
                           <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              78
                           </span>
                        </div>

                        <div className="flex items-center justify-between">
                           <span className="text-gray-600">System Uptime</span>
                           <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                              99.8%
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-3">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-8">
                     <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                        Admin Dashboard
                     </h1>

                     {/* Platform Overview */}
                     <div className="lg:col-span-1 bg-white border border-gray-200 rounded-lg mb-6">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                           <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                              <ChartNoAxesCombined className="mr-2" />
                              Platform Overview
                           </h3>

                           <div className="relative flex gap-2">
                              <select className="text-sm appearance-none border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                                 <option>Last 7 days</option>
                                 <option>Last 30 days</option>
                                 <option>Last 3 months</option>
                                 <option>Last 6 months</option>
                                 <option>Last year</option>
                                 <option>All time</option>
                              </select>
                              {/* Custom dropdown icon */}
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.2"
                                 stroke="currentColor"
                                 className="h-7 w-7 ml-1 absolute top-[1px] right-0 text-gray-500"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                 />
                              </svg>
                           </div>
                        </div>
                        <div className="p-4">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                                 <p className="text-xs text-gray-500">Total Revenue</p>
                                 <h4 className="text-2xl font-bold text-gray-800">$458,642.75</h4>
                                 <div className="mt-2 flex items-center text-green-600 text-xs">
                                    <TrendingUp className="text-sm mr-1" />
                                    15.3% from last month
                                 </div>
                              </div>

                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                 <p className="text-xs text-gray-500">This Month</p>
                                 <h4 className="text-2xl font-bold text-gray-800">$3,428.50</h4>
                                 <div className="mt-2 flex items-center text-green-600 text-xs">
                                    <TrendingUp className="text-sm mr-1" />
                                    8.2% from last month
                                 </div>
                              </div>

                              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                 <p className="text-xs text-gray-500">System Load</p>
                                 <h4 className="text-2xl font-bold text-gray-800">42%</h4>
                                 <p className="text-xs text-gray-500 mt-2">
                                    Normal operating levels
                                 </p>
                              </div>
                           </div>
                           <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center">
                              {/* Chart would go here */}
                              <div className="text-center p-4">
                                 <ChartNoAxesCombined className="text-gray-400 mb-2 mx-auto w-9 h-9" />
                                 <p className="text-gray-600">Earnings chart over time</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                           <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg text-gray-800">
                                 User Registration
                              </h3>
                              <span className="material-symbols-outlined text-primary-500 hover:text-primary-600 transition-colors cursor-pointer">
                                 more_horiz
                              </span>
                           </div>
                           <div className="h-[180px] relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="text-center">
                                    <span className="text-3xl font-bold text-primary-500">
                                       1,245
                                    </span>
                                    <p className="text-sm text-gray-500 mt-1">
                                       New Users This Month
                                    </p>
                                    <div className="mt-2 flex items-center justify-center text-green-500">
                                       <span className="material-symbols-outlined text-sm">
                                          trending_up
                                       </span>
                                       <span className="text-sm ml-1">8.3% from last month</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">This Week</p>
                                 <p className="font-semibold">286</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">Today</p>
                                 <p className="font-semibold">42</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                           <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg text-gray-800">
                                 Teacher Registration
                              </h3>
                              <span className="material-symbols-outlined text-primary-500 hover:text-primary-600 transition-colors cursor-pointer">
                                 more_horiz
                              </span>
                           </div>
                           <div className="h-[180px] relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="text-center">
                                    <span className="text-3xl font-bold text-primary-500">126</span>
                                    <p className="text-sm text-gray-500 mt-1">
                                       New Teachers This Month
                                    </p>
                                    <div className="mt-2 flex items-center justify-center text-green-500">
                                       <span className="material-symbols-outlined text-sm">
                                          trending_up
                                       </span>
                                       <span className="text-sm ml-1">5.2% from last month</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">Approval Rate</p>
                                 <p className="font-semibold">92%</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">Pending</p>
                                 <p className="font-semibold">18</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                           <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg text-gray-800">
                                 Teacher Registration
                              </h3>
                              <span className="material-symbols-outlined text-primary-500 hover:text-primary-600 transition-colors cursor-pointer">
                                 more_horiz
                              </span>
                           </div>
                           <div className="h-[180px] relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="text-center">
                                    <span className="text-3xl font-bold text-primary-500">126</span>
                                    <p className="text-sm text-gray-500 mt-1">
                                       New Teachers This Month
                                    </p>
                                    <div className="mt-2 flex items-center justify-center text-green-500">
                                       <span className="material-symbols-outlined text-sm">
                                          trending_up
                                       </span>
                                       <span className="text-sm ml-1">5.2% from last month</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">Approval Rate</p>
                                 <p className="font-semibold">92%</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                 <p className="text-sm text-gray-500">Pending</p>
                                 <p className="font-semibold">18</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-md mb-8">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg text-gray-800">User Messages</h3>
                        <div className="flex items-center">
                           <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                              8 New
                           </span>
                           <span className="material-symbols-outlined text-primary-500 hover:text-primary-600 transition-colors cursor-pointer">
                              more_horiz
                           </span>
                        </div>
                     </div>
                     <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
                        <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg shadow-sm hover:shadow transition-all">
                           <div className="flex justify-between">
                              <h4 className="font-medium">James Wilson</h4>
                              <p className="text-xs text-gray-500">Today, 10:25 AM</p>
                           </div>
                           <p className="text-sm text-gray-600 mt-1">
                              I&apos;m having trouble accessing the course materials for
                              &quot;Advanced Web Development&quot;. Can you please help?
                           </p>
                           <div className="flex justify-end mt-2">
                              <button className="text-primary-500 hover:text-primary-600 text-sm flex items-center transition-all">
                                 <span className="material-symbols-outlined text-sm mr-1">
                                    reply
                                 </span>{" "}
                                 Reply
                              </button>
                           </div>
                        </div>

                        <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg shadow-sm hover:shadow transition-all">
                           <div className="flex justify-between">
                              <h4 className="font-medium">Emily Rodriguez</h4>
                              <p className="text-xs text-gray-500">Today, 9:15 AM</p>
                           </div>
                           <p className="text-sm text-gray-600 mt-1">
                              I would like to request a refund for the &quot;Python Data
                              Analysis&quot; course as it doesn&apos;t meet my expectations.
                           </p>
                           <div className="flex justify-end mt-2">
                              <button className="text-primary-500 hover:text-primary-600 text-sm flex items-center transition-all">
                                 <span className="material-symbols-outlined text-sm mr-1">
                                    reply
                                 </span>{" "}
                                 Reply
                              </button>
                           </div>
                        </div>

                        <div className="p-3 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg shadow-sm hover:shadow transition-all">
                           <div className="flex justify-between">
                              <h4 className="font-medium">David Thompson</h4>
                              <p className="text-xs text-gray-500">Yesterday, 2:34 PM</p>
                           </div>
                           <p className="text-sm text-gray-600 mt-1">
                              Is there any discount available for purchasing multiple courses? I am
                              interested in the full web development track.
                           </p>
                           <div className="flex justify-end mt-2">
                              <button className="text-gray-500 hover:text-gray-600 text-sm flex items-center transition-all">
                                 <span className="material-symbols-outlined text-sm mr-1">
                                    done
                                 </span>{" "}
                                 Answered
                              </button>
                           </div>
                        </div>

                        <div className="p-3 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg shadow-sm hover:shadow transition-all">
                           <div className="flex justify-between">
                              <h4 className="font-medium">Lisa Chen</h4>
                              <p className="text-xs text-gray-500">Yesterday, 11:20 AM</p>
                           </div>
                           <p className="text-sm text-gray-600 mt-1">
                              I would like to submit my application to become an instructor on your
                              platform. Where can I find the requirements?
                           </p>
                           <div className="flex justify-end mt-2">
                              <button className="text-gray-500 hover:text-gray-600 text-sm flex items-center transition-all">
                                 <span className="material-symbols-outlined text-sm mr-1">
                                    done
                                 </span>{" "}
                                 Answered
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                     <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all mb-8">
                        <div className="flex items-center mb-4">
                           <div className="bg-green-100 p-3 rounded-full mr-3">
                              <span className="material-symbols-outlined text-green-500">dns</span>
                           </div>
                           <div>
                              <h3 className="font-semibold text-lg text-gray-800">Server Status</h3>
                              <p className="text-sm text-green-500">All systems operational</p>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">CPU Usage</span>
                              <span className="text-sm font-medium">28%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-green-500 h-2 rounded-full"
                                 style={{ width: "28%" }}
                              ></div>
                           </div>

                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Memory Usage</span>
                              <span className="text-sm font-medium">42%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-blue-500 h-2 rounded-full"
                                 style={{ width: "42%" }}
                              ></div>
                           </div>

                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Storage</span>
                              <span className="text-sm font-medium">56%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-yellow-500 h-2 rounded-full"
                                 style={{ width: "56%" }}
                              ></div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all mb-8">
                        <div className="flex items-center mb-4">
                           <div className="bg-blue-100 p-3 rounded-full mr-3">
                              <span className="material-symbols-outlined text-blue-500">speed</span>
                           </div>
                           <div>
                              <h3 className="font-semibold text-lg text-gray-800">
                                 System Performance
                              </h3>
                              <p className="text-sm text-blue-500">Good performance</p>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Response Time</span>
                              <span className="text-sm font-medium">215ms</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-blue-500 h-2 rounded-full"
                                 style={{ width: "35%" }}
                              ></div>
                           </div>

                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Uptime</span>
                              <span className="text-sm font-medium">99.98%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-green-500 h-2 rounded-full"
                                 style={{ width: "99.98%" }}
                              ></div>
                           </div>

                           <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Error Rate</span>
                              <span className="text-sm font-medium">0.02%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                 className="bg-red-500 h-2 rounded-full"
                                 style={{ width: "0.02%" }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                     <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all mb-8">
                        <div className="flex items-center mb-4">
                           <div className="bg-purple-100 p-3 rounded-full mr-3">
                              <span className="material-symbols-outlined text-purple-500">
                                 security
                              </span>
                           </div>
                           <div>
                              <h3 className="font-semibold text-lg text-gray-800">
                                 Security Status
                              </h3>
                              <p className="text-sm text-purple-500">No threats detected</p>
                           </div>
                        </div>
                        <div className="space-y-3 mt-3">
                           <div className="flex items-center">
                              <span className="material-symbols-outlined text-green-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-600">Firewall Active</span>
                           </div>
                           <div className="flex items-center">
                              <span className="material-symbols-outlined text-green-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-600">DDoS Protection</span>
                           </div>
                           <div className="flex items-center">
                              <span className="material-symbols-outlined text-green-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-600">SSL Certificates Valid</span>
                           </div>
                           <div className="flex items-center">
                              <span className="material-symbols-outlined text-yellow-500 mr-2">
                                 warning
                              </span>
                              <span className="text-sm text-gray-600">Updates Available</span>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all mb-8">
                        <div className="flex items-center mb-4">
                           <div className="bg-orange-100 p-3 rounded-full mr-3">
                              <span className="material-symbols-outlined text-orange-500">
                                 notifications
                              </span>
                           </div>
                           <div>
                              <h3 className="font-semibold text-lg text-gray-800">
                                 System Notifications
                              </h3>
                              <p className="text-sm text-orange-500">3 new alerts</p>
                           </div>
                        </div>
                        <div className="space-y-3 max-h-[150px] overflow-y-auto pr-1">
                           <div className="p-2 bg-red-50 rounded border-l-2 border-red-500 text-sm">
                              <p className="font-medium text-red-700">Database Backup Failed</p>
                              <p className="text-xs text-gray-500">Today, 04:15 AM</p>
                           </div>
                           <div className="p-2 bg-yellow-50 rounded border-l-2 border-yellow-500 text-sm">
                              <p className="font-medium text-yellow-700">
                                 High Server Load Detected
                              </p>
                              <p className="text-xs text-gray-500">Yesterday, 2:30 PM</p>
                           </div>
                           <div className="p-2 bg-blue-50 rounded border-l-2 border-blue-500 text-sm">
                              <p className="font-medium text-blue-700">System Update Available</p>
                              <p className="text-xs text-gray-500">Yesterday, 10:45 AM</p>
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
