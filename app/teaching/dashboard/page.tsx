import React from "react";
import logo from "@/assets/logo-1.png";
import Image from "next/image";

export default function TeacherDashboard() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8">
                  <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                     Teacher Dashboard
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                     <div className="lg:col-span-1">
                        <div className="mb-6 flex flex-col items-center">
                           <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 mb-4 border-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-300 group">
                              <Image
                                 className="absolute inset-0 w-full h-full object-cover"
                                 src={logo}
                                 alt="Profile"
                                 width={128}
                                 height={128}
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                                 <span className="material-symbols-outlined text-white opacity-0 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300 p-2 bg-primary-500 rounded-full">
                                    photo_camera
                                 </span>
                              </div>
                           </div>
                           <h2 className="text-xl font-semibold text-gray-800">John Smith</h2>

                           <p className="text-gray-600">System Administrator</p>

                           <div className="mt-2 flex items-center gap-1">
                              <span className="material-symbols-outlined text-yellow-400 text-lg">
                                 star
                              </span>
                              <span className="material-symbols-outlined text-yellow-400 text-lg">
                                 star
                              </span>
                              <span className="material-symbols-outlined text-yellow-400 text-lg">
                                 star
                              </span>
                              <span className="material-symbols-outlined text-yellow-400 text-lg">
                                 star
                              </span>
                              <span className="material-symbols-outlined text-yellow-400 text-lg">
                                 star_half
                              </span>
                              <span className="text-sm text-gray-600 ml-1">4.7</span>
                           </div>

                           <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full">
                              <span className="material-symbols-outlined mr-2">
                                 admin_panel_settings
                              </span>
                              Admin Settings
                           </button>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-5 mt-4">
                           <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                              <span className="material-symbols-outlined mr-2">dashboard</span>
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
                        <div className="bg-white border border-gray-200 rounded-lg mb-6">
                           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                              <h3 className="font-semibold text-gray-800 flex items-center">
                                 <span className="material-symbols-outlined mr-2">monitoring</span>
                                 Platform Overview
                              </h3>

                              <div className="flex gap-2">
                                 <button className="p-2 text-gray-500 hover:bg-gray-100 rounded transition-colors">
                                    <span className="material-symbols-outlined">download</span>
                                 </button>
                                 <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
                                    <option>Last 30 days</option>
                                    <option>Last 3 months</option>
                                    <option>Last 6 months</option>
                                    <option>Last year</option>
                                    <option>All time</option>
                                 </select>
                              </div>
                           </div>
                           <div className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                 <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                                    <p className="text-xs text-gray-500">Total Revenue</p>
                                    <h4 className="text-2xl font-bold text-gray-800">
                                       $458,642.75
                                    </h4>
                                    <div className="mt-2 flex items-center text-green-600 text-xs">
                                       <span className="material-symbols-outlined text-sm mr-1">
                                          trending_up
                                       </span>
                                       15.3% from last month
                                    </div>
                                 </div>

                                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <p className="text-xs text-gray-500">This Month</p>
                                    <h4 className="text-2xl font-bold text-gray-800">$3,428.50</h4>
                                    <div className="mt-2 flex items-center text-green-600 text-xs">
                                       <span className="material-symbols-outlined text-sm mr-1">
                                          trending_up
                                       </span>
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
                                    <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">
                                       monitoring
                                    </span>
                                    <p className="text-gray-600">Earnings chart over time</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg mb-6">
                           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                              <h3 className="font-semibold text-gray-800 flex items-center">
                                 <span className="material-symbols-outlined mr-2">list_alt</span>
                                 Recent Activities
                              </h3>

                              <button className="px-3 py-1.5 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors flex items-center text-sm">
                                 <span className="material-symbols-outlined text-sm mr-1">add</span>
                                 New Course
                              </button>
                           </div>
                           <div className="overflow-x-auto">
                              <table className="w-full min-w-full divide-y divide-gray-200">
                                 <thead className="bg-gray-50">
                                    <tr>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Course
                                       </th>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Students
                                       </th>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Rating
                                       </th>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Revenue
                                       </th>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Status
                                       </th>
                                       <th
                                          scope="col"
                                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                       >
                                          Actions
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                       <div className="px-6 py-4 whitespace-nowrap">
                                          <div className="flex items-center">
                                             <div className="h-10 w-10 rounded overflow-hidden mr-3 bg-blue-100 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-blue-500">
                                                   person_add
                                                </span>
                                             </div>
                                             <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                   New User Registration
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                   5 minutes ago
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                             User: john.doe@example.com
                                          </div>
                                          <div className="text-xs text-gray-600">
                                             IP: 192.168.1.105
                                          </div>
                                       </td>

                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">Standard Plan</div>
                                       </td>

                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">$8,245.50</div>
                                          <div className="text-xs text-green-600">
                                             $420.25 this month
                                          </div>
                                       </td>

                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             Completed
                                          </span>
                                       </td>

                                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                          <div className="flex space-x-2">
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   edit
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   analytics
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   more_vert
                                                </span>
                                             </button>
                                          </div>
                                       </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors">
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="flex items-center">
                                             <div className="h-10 w-10 rounded overflow-hidden mr-3 bg-yellow-100 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-yellow-500">
                                                   payments
                                                </span>
                                             </div>
                                             <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                   Payment Processed
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                   20 minutes ago
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                             Transaction ID: TRX-8942311
                                          </div>
                                          <div className="text-xs text-gray-600">
                                             User: sarah.m@example.com
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">Premium Plan</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">$49.99</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             Successful
                                          </span>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                          <div className="flex space-x-2">
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   visibility
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   receipt_long
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   more_vert
                                                </span>
                                             </button>
                                          </div>
                                       </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors">
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="flex items-center">
                                             <div className="h-10 w-10 rounded overflow-hidden mr-3 bg-red-100 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-red-500">
                                                   error
                                                </span>
                                             </div>
                                             <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                   System Alert
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                   1 hour ago
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                             High CPU Usage
                                          </div>
                                          <div className="text-xs text-gray-600">
                                             Server: app-server-03
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">Maintenance</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-900">
                                             Level: Warning
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                             Investigating
                                          </span>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                          <div className="flex space-x-2">
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   visibility
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   bug_report
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   more_vert
                                                </span>
                                             </button>
                                          </div>
                                       </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors">
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="flex items-center">
                                             <div className="h-10 w-10 rounded overflow-hidden mr-3 bg-gray-100 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-gray-400">
                                                   description
                                                </span>
                                             </div>
                                             <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                   Full-Stack Development Bootcamp
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                   Last edited 2 days ago
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">-</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">-</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">-</div>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap">
                                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                             Draft
                                          </span>
                                       </td>
                                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                          <div className="flex space-x-2">
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   edit
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   preview
                                                </span>
                                             </button>
                                             <button className="text-gray-500 hover:text-primary-500 transition-colors">
                                                <span className="material-symbols-outlined">
                                                   more_vert
                                                </span>
                                             </button>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>

                           <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                              <div className="text-sm text-gray-600">Showing 3 of 152 events</div>
                              <div className="flex space-x-1">
                                 <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                    Previous
                                 </button>
                                 <button className="px-3 py-1 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                                    1
                                 </button>
                                 <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                    2
                                 </button>
                                 <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                    3
                                 </button>
                                 <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                    Next
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg mb-6">
                           <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                              <h3 className="font-semibold text-gray-800 flex items-center">
                                 <span className="material-symbols-outlined mr-2">warning</span>
                                 System Alerts
                              </h3>

                              <button className="text-primary-500 hover:text-primary-700 text-sm flex items-center">
                                 View All
                                 <span className="material-symbols-outlined ml-1 text-sm">
                                    arrow_forward
                                 </span>
                              </button>
                           </div>
                           <div className="p-4 space-y-4">
                              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r-lg">
                                 <div className="flex justify-between items-start">
                                    <div>
                                       <div className="flex items-center mb-1">
                                          <span className="font-medium text-gray-800 mr-2">
                                             Database Performance
                                          </span>
                                          <span className="px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded-full text-xs">
                                             Warning
                                          </span>
                                       </div>
                                       <p className="text-sm text-gray-600 mb-1">
                                          Query optimization needed
                                       </p>
                                       <p className="text-sm text-gray-700">
                                          Database response time exceeded threshold on analytics
                                          queries. Consider optimizing or indexing.
                                       </p>
                                    </div>
                                    <span className="text-xs text-gray-500">3 hours ago</span>
                                 </div>
                              </div>

                              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
                                 <div className="flex justify-between items-start">
                                    <div>
                                       <div className="flex items-center mb-1">
                                          <span className="font-medium text-gray-800 mr-2">
                                             Storage Space
                                          </span>
                                          <span className="px-2 py-0.5 bg-green-200 text-green-800 rounded-full text-xs">
                                             Normal
                                          </span>
                                       </div>
                                       <p className="text-sm text-gray-600 mb-1">
                                          All storage systems
                                       </p>
                                       <p className="text-sm text-gray-700">
                                          Storage utilization is at 68% with 1.2TB available. No
                                          action needed at this time.
                                       </p>
                                    </div>
                                    <span className="text-xs text-gray-500">1 day ago</span>
                                 </div>
                              </div>

                              <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
                                 <div className="flex justify-between items-start">
                                    <div>
                                       <div className="flex items-center mb-1">
                                          <span className="font-medium text-gray-800 mr-2">
                                             Failed Login Attempts
                                          </span>
                                          <span className="px-2 py-0.5 bg-red-200 text-red-800 rounded-full text-xs">
                                             Critical
                                          </span>
                                       </div>
                                       <p className="text-sm text-gray-600 mb-1">Security alert</p>
                                       <p className="text-sm text-gray-700">
                                          Multiple failed login attempts detected from IP
                                          203.0.113.42. Account lockouts have been triggered.
                                       </p>
                                    </div>
                                    <span className="text-xs text-gray-500">2 days ago</span>
                                 </div>
                              </div>

                              <div className="text-center mt-3">
                                 <button className="text-primary-500 hover:text-primary-700 text-sm px-4 py-2 border border-primary-200 rounded-lg hover:bg-primary-50 transition-all">
                                    View All Alerts
                                    <span className="material-symbols-outlined ml-1 text-sm align-text-bottom">
                                       arrow_forward
                                    </span>
                                 </button>
                              </div>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                           <div className="bg-white border border-gray-200 rounded-lg">
                              <div className="p-4 border-b border-gray-200">
                                 <h3 className="font-semibold text-gray-800 flex items-center">
                                    <span className="material-symbols-outlined mr-2">task_alt</span>
                                    To-Do Items
                                 </h3>
                              </div>
                              <div className="p-4">
                                 <ul className="space-y-2">
                                    <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                       <div className="flex items-center">
                                          <input
                                             type="checkbox"
                                             className="mr-3 h-4 w-4 text-primary-500 rounded border-gray-300"
                                          />
                                          <span className="text-gray-800">
                                             Security audit for user permissions
                                          </span>
                                       </div>
                                       <span className="text-xs text-red-500 font-medium">
                                          High Priority
                                       </span>
                                    </li>

                                    <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                       <div className="flex items-center">
                                          <input
                                             type="checkbox"
                                             className="mr-3 h-4 w-4 text-primary-500 rounded border-gray-300"
                                          />
                                          <span className="text-gray-800">
                                             Review and approve new course submissions
                                          </span>
                                       </div>
                                       <span className="text-xs text-orange-500 font-medium">
                                          5 pending
                                       </span>
                                    </li>

                                    <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                       <div className="flex items-center">
                                          <input
                                             type="checkbox"
                                             className="mr-3 h-4 w-4 text-primary-500 rounded border-gray-300"
                                          />
                                          <span className="text-gray-800">
                                             Update system to latest security patches
                                          </span>
                                       </div>
                                       <span className="text-xs text-gray-500 font-medium">
                                          Scheduled
                                       </span>
                                    </li>

                                    <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                       <div className="flex items-center">
                                          <input
                                             type="checkbox"
                                             className="mr-3 h-4 w-4 text-primary-500 rounded border-gray-300"
                                          />
                                          <span className="text-gray-800">
                                             Generate monthly financial reports
                                          </span>
                                       </div>
                                       <span className="text-xs text-gray-500 font-medium">
                                          Due in 3 days
                                       </span>
                                    </li>
                                 </ul>
                                 <button className="mt-4 w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined mr-1">add</span>
                                    Add New Task
                                 </button>

                                 <div className="mt-4 flex space-x-2">
                                    <button className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
                                       <span className="material-symbols-outlined mr-1">
                                          refresh
                                       </span>
                                       Refresh
                                    </button>
                                    <button className="flex-1 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center">
                                       <span className="material-symbols-outlined mr-1">add</span>
                                       New Task
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <footer className="bg-gray-800 text-white py-10 mt-10">
                           <div className="container mx-auto px-4">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                 <div>
                                    <div className="flex items-center mb-4">
                                       <div className="bg-white p-2 rounded-full mr-2">
                                          <span className="material-symbols-outlined text-primary-500">
                                             school
                                          </span>
                                       </div>
                                       <div className="text-xl font-bold">EduLearn Academy</div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                       Empowering educators to share knowledge and transform lives
                                       through online education.
                                    </p>
                                 </div>

                                 <div>
                                    <h4 className="font-bold text-lg mb-4">Teach</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Become an Instructor
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Instructor Resources
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Course Standards
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Success Stories
                                          </a>
                                       </li>
                                    </ul>
                                 </div>

                                 <div>
                                    <h4 className="font-bold text-lg mb-4">Support</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Help Center
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Contact Us
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Privacy Policy
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="#"
                                             className="hover:text-white transition-colors"
                                          >
                                             Terms of Service
                                          </a>
                                       </li>
                                    </ul>
                                 </div>

                                 <div>
                                    <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
                                    <p className="text-gray-300 text-sm mb-4">
                                       Subscribe to get updates on new teaching resources and
                                       opportunities.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </footer>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
