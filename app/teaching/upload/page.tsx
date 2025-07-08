"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function CouseUploadNewPage() {
   const [showAddLecture, setShowAddLecture] = useState(false);
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
               <div className="w-full md:w-3/4">
                  <div className="space-y-6">
                     {/* Course Basic Info */}
                     <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                           Course Basic Information
                        </h2>

                        <div className="space-y-4">
                           <div>
                              <label
                                 htmlFor="title"
                                 className="block mb-1 font-medium text-gray-700"
                              >
                                 Course Title*
                              </label>
                              <input
                                 type="text"
                                 id="title"
                                 placeholder="e.g. Complete JavaScript Development Course"
                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor="description"
                                 className="block mb-1 font-medium text-gray-700"
                              >
                                 Course Description*
                              </label>
                              <textarea
                                 id="description"
                                 rows={4}
                                 placeholder="Provide a detailed description of your course..."
                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                              ></textarea>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <label
                                    htmlFor="category"
                                    className="block mb-1 font-medium text-gray-700"
                                 >
                                    Category*
                                 </label>
                                 <div className="relative">
                                    <select
                                       id="category"
                                       className="appearance-none w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all pr-10"
                                    >
                                       <option value="">Select a category</option>
                                       <option value="programming">Programming</option>
                                       <option value="design">Design</option>
                                       <option value="business">Business</option>
                                       <option value="marketing">Marketing</option>
                                       <option value="photography">Photography</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                 </div>
                              </div>

                              <div>
                                 <label
                                    htmlFor="level"
                                    className="block mb-1 font-medium text-gray-700"
                                 >
                                    Level*
                                 </label>
                                 <div className="relative">
                                    <select
                                       id="level"
                                       className="appearance-none w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all pr-10"
                                    >
                                       <option value="">Select a level</option>
                                       <option value="beginner">Beginner</option>
                                       <option value="intermediate">Intermediate</option>
                                       <option value="advanced">Advanced</option>
                                       <option value="all-levels">All Levels</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                 </div>
                              </div>
                           </div>

                           <div>
                              <label
                                 htmlFor="price"
                                 className="block mb-1 font-medium text-gray-700"
                              >
                                 Course Price ($)*
                              </label>
                              <input
                                 type="number"
                                 id="price"
                                 placeholder="e.g. 49.99"
                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                           </div>
                        </div>
                     </div>

                     {/* Course Image */}
                     <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                           Course Thumbnail*
                        </h2>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors cursor-pointer">
                           <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-gray-400 text-5xl mb-2">
                                 upload
                              </span>
                              <p className="text-gray-700 mb-2">
                                 Drag and drop an image here, or click to browse
                              </p>
                              <p className="text-gray-500 text-sm">
                                 Recommended size: 1280 x 720 pixels, 16:9 ratio
                              </p>
                              <input type="file" className="hidden" accept="image/*" />
                              <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                 Upload Image
                              </button>
                           </div>
                        </div>
                     </div>

                     {/* What You Will Learn */}
                     <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                           What You Will Learn*
                        </h2>
                        <p className="text-gray-600 mb-4">Add learning objectives (minimum 4)</p>

                        <div className="space-y-3">
                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. Create interactive web applications with JavaScript"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. Understand core programming concepts"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. Build modern, responsive user interfaces"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. Deploy applications to production environments"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <button className="flex items-center text-primary-600 hover:text-primary-700 transition-colors mt-2">
                              <span className="material-symbols-outlined text-sm mr-1">add</span>
                              Add Another Learning Objective
                           </button>
                        </div>
                     </div>

                     {/* Requirements */}
                     <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements*</h2>
                        <p className="text-gray-600 mb-4">
                           List the knowledge or tools learners need to start this course
                        </p>

                        <div className="space-y-3">
                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. Basic HTML and CSS knowledge"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <div className="flex items-center gap-2">
                              <input
                                 type="text"
                                 placeholder="e.g. A computer with internet access"
                                 className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                              />
                              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                 <span className="material-symbols-outlined text-gray-500">
                                    delete
                                 </span>
                              </button>
                           </div>

                           <button className="flex items-center text-primary-600 hover:text-primary-700 transition-colors mt-2">
                              <span className="material-symbols-outlined text-sm mr-1">add</span>
                              Add Another Requirement
                           </button>
                        </div>
                     </div>

                     {/* Course Content */}
                     <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                           Course Content*
                        </h2>
                        <p className="text-gray-600 mb-4">
                           Create sections and lectures for your course (minimum 1 section with 1
                           lecture)
                        </p>

                        <div className="space-y-6">
                           {/* Section 1 */}
                           <div className="border border-gray-300 rounded-lg overflow-hidden">
                              <div className="flex items-center justify-between bg-gray-100 p-4 cursor-pointer">
                                 <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-gray-600">
                                       menu
                                    </span>
                                    <h3 className="font-medium">Section 1: Getting Started</h3>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          edit
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          delete
                                       </span>
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                       <span className="material-symbols-outlined text-gray-600">
                                          expand_more
                                       </span>
                                    </button>
                                 </div>
                              </div>

                              <div className="p-4 border-t border-gray-300">
                                 {/* Lecture 1 */}
                                 <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                                    <div className="flex items-center justify-between mb-3">
                                       <div className="flex items-center gap-2">
                                          <span className="material-symbols-outlined text-gray-600">
                                             videocam
                                          </span>
                                          <h4 className="font-medium">
                                             Lecture 1: Course Introduction
                                          </h4>
                                       </div>
                                       <div className="flex items-center gap-2">
                                          <span className="text-gray-500 text-sm">10:00</span>
                                          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                             <span className="material-symbols-outlined text-gray-600">
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

                                    <div className="pl-7">
                                       <div className="flex items-center gap-2 text-sm text-gray-600">
                                          <span className="material-symbols-outlined text-xs">
                                             description
                                          </span>
                                          Course-intro.pdf
                                          <button className="text-primary-600 hover:text-primary-700 transition-colors text-xs">
                                             Delete
                                          </button>
                                       </div>
                                    </div>
                                 </div>

                                 {/* Add Lecture Button */}
                                 <button
                                    className="flex items-center text-primary-600 hover:text-primary-700 transition-colors mt-3"
                                    onClick={() => setShowAddLecture(true)}
                                 >
                                    <span className="material-symbols-outlined text-sm mr-1">
                                       add
                                    </span>
                                    Add Lecture to This Section
                                 </button>
                              </div>
                           </div>

                           {/* Add New Section Button */}
                           <button className="flex items-center justify-center w-full py-3 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
                              <span className="material-symbols-outlined text-sm mr-1">add</span>
                              Add New Section
                           </button>
                        </div>
                     </div>

                     {/* Add Lecture Modal (Hidden by default) */}
                     {showAddLecture && (
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                           <div className="bg-white rounded-xl p-6 max-w-lg w-full">
                              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                 Add New Lecture
                              </h3>

                              <div className="space-y-4">
                                 <div>
                                    <label className="block mb-1 font-medium text-gray-700">
                                       Lecture Title*
                                    </label>
                                    <input
                                       type="text"
                                       placeholder="e.g. Introduction to JavaScript Variables"
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                    />
                                 </div>

                                 <div>
                                    <label className="block mb-1 font-medium text-gray-700">
                                       Lecture Type*
                                    </label>
                                    <div className="relative">
                                       <select className="appearance-none w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all pr-10">
                                          <option value="video">Video</option>
                                          <option value="pdf">PDF</option>
                                          <option value="quiz">Quiz</option>
                                       </select>
                                       <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                          expand_more
                                       </span>
                                    </div>
                                 </div>

                                 <div>
                                    <label className="block mb-1 font-medium text-gray-700">
                                       Duration (minutes)*
                                    </label>
                                    <input
                                       type="number"
                                       placeholder="e.g. 15"
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                    />
                                 </div>

                                 <div>
                                    <label className="block mb-1 font-medium text-gray-700">
                                       Upload Content*
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors cursor-pointer">
                                       <div className="flex flex-col items-center">
                                          <span className="material-symbols-outlined text-gray-400 text-3xl mb-2">
                                             upload_file
                                          </span>
                                          <p className="text-gray-700 mb-1">
                                             Drag and drop your file here, or click to browse
                                          </p>
                                          <p className="text-gray-500 text-sm">
                                             MP4, PDF, PPTX files supported (max 2GB)
                                          </p>
                                          <input type="file" className="hidden" />
                                          <button className="mt-3 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                             Upload File
                                          </button>
                                       </div>
                                    </div>
                                 </div>

                                 <div>
                                    <label className="block mb-1 font-medium text-gray-700">
                                       Downloadable Resources (Optional)
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary-500 transition-colors cursor-pointer">
                                       <div className="flex flex-col items-center">
                                          <span className="material-symbols-outlined text-gray-400 text-2xl mb-1">
                                             download
                                          </span>
                                          <p className="text-gray-700 text-sm">
                                             Add downloadable materials for students
                                          </p>
                                          <input type="file" className="hidden" multiple />
                                          <button className="mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                             Add Resources
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="flex justify-end gap-3 mt-6">
                                 <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    Cancel
                                 </button>
                                 <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                    Add Lecture
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}

                     {/* Save and Preview Buttons */}
                     <div className="flex flex-col sm:flex-row gap-3 justify-end">
                        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1 sm:flex-none">
                           Save as Draft
                        </button>
                        <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors flex-1 sm:flex-none">
                           Preview
                        </button>
                        <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex-1 sm:flex-none">
                           Submit for Review
                        </button>
                     </div>
                  </div>
               </div>

               <div className="w-full md:w-1/4 sticky top-24">
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                     <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Course Creation Progress
                     </h3>

                     <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-green-600">
                           <span className="material-symbols-outlined">check_circle</span>
                           <span>Basic Information</span>
                        </li>
                        <li className="flex items-center gap-2 text-yellow-600">
                           <span className="material-symbols-outlined">pending</span>
                           <span>Course Image</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                           <span className="material-symbols-outlined">radio_button_unchecked</span>
                           <span>Learning Objectives</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                           <span className="material-symbols-outlined">radio_button_unchecked</span>
                           <span>Requirements</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                           <span className="material-symbols-outlined">radio_button_unchecked</span>
                           <span>Course Content</span>
                        </li>
                     </ul>

                     <div className="mt-5">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                           <div
                              className="bg-primary-500 h-2.5 rounded-full"
                              style={{ width: "25%" }}
                           ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">25% Complete</p>
                     </div>

                     <div className="mt-6 pt-5 border-t border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">Need Help?</h4>
                        <ul className="space-y-2 text-sm">
                           <li>
                              <a
                                 href="#"
                                 className="text-primary-600 hover:underline flex items-center gap-1"
                              >
                                 <span className="material-symbols-outlined text-sm">article</span>
                                 Course creation guidelines
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="text-primary-600 hover:underline flex items-center gap-1"
                              >
                                 <span className="material-symbols-outlined text-sm">
                                    support_agent
                                 </span>
                                 Contact support
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="text-primary-600 hover:underline flex items-center gap-1"
                              >
                                 <span className="material-symbols-outlined text-sm">
                                    play_circle
                                 </span>
                                 Watch tutorial video
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
