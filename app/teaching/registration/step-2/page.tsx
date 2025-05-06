import React from "react";

export default function Step2RegistrationPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="flex items-center">
                  <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                     <span className="material-symbols-outlined text-lg">school</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-500">EduLearn Academy</div>
               </div>
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-2 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        search
                     </span>
                  </div>
               </div>
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
                           className="px-3 py-1 bg-primary-50 text-primary-600 rounded font-medium hover:bg-primary-100 transition-colors"
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

         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                     Register to Become an Instructor
                  </h1>

                  <div className="max-w-4xl mx-auto">
                     <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center">
                           <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                              <span className="material-symbols-outlined text-lg">check</span>
                           </div>
                           <div className="h-1 w-20 bg-primary-500"></div>
                           <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                              <span className="text-lg font-bold">2</span>
                           </div>
                           <div className="h-1 w-20 bg-primary-500"></div>
                           <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                              <span className="text-lg font-bold">3</span>
                           </div>
                        </div>
                        <div className="text-sm text-gray-500">Step 2 of 3</div>
                     </div>

                     <form className="space-y-6">
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Course Details
                           </h2>
                           <div className="grid grid-cols-1 gap-4">
                              <div>
                                 <label
                                    htmlFor="courseTitle"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Course Title
                                 </label>
                                 <input
                                    type="text"
                                    id="courseTitle"
                                    name="courseTitle"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Enter a clear, descriptive title for your course"
                                    required
                                 />
                                 <p className="text-xs text-gray-500 mt-1">
                                    A good title clearly indicates what students will learn (e.g.,
                                    &quot;Complete Python Bootcamp: From Zero to Hero&quot;)
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Course Description & Goals
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="courseDescription"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Course Description
                                 </label>
                                 <textarea
                                    id="courseDescription"
                                    name="courseDescription"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Provide a detailed overview of what your course covers and who it's designed for"
                                    required
                                 ></textarea>
                                 <p className="text-xs text-gray-500 mt-1">
                                    Be specific about what students will learn and any prerequisites
                                    they should have
                                 </p>
                              </div>

                              <div>
                                 <label
                                    htmlFor="learningObjectives"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Learning Objectives
                                 </label>
                                 <textarea
                                    id="learningObjectives"
                                    name="learningObjectives"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="List 3-5 specific skills or knowledge students will gain from your course"
                                    required
                                 ></textarea>
                                 <p className="text-xs text-gray-500 mt-1">
                                    Start each objective with an action verb (e.g., &quot;Build a
                                    responsive website using HTML/CSS&quot;)
                                 </p>
                              </div>

                              <div>
                                 <label
                                    htmlFor="targetAudience"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Target Audience
                                 </label>
                                 <textarea
                                    id="targetAudience"
                                    name="targetAudience"
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Describe who would benefit most from your course (experience level, career goals, etc.)"
                                    required
                                 ></textarea>
                              </div>

                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Course Thumbnail
                                 </label>
                                 <div className="flex items-center space-x-4">
                                    <div className="w-36 h-24 rounded-lg bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                       <span className="material-symbols-outlined text-gray-400 text-3xl">
                                          image
                                       </span>
                                    </div>
                                    <div className="flex-1">
                                       <button
                                          type="button"
                                          className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
                                       >
                                          Upload Thumbnail
                                       </button>
                                       <p className="text-xs text-gray-500 mt-1">
                                          JPEG or PNG, 1280x720 pixels recommended. An eye-catching
                                          thumbnail increases enrollment.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Course Structure
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="courseLevel"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Course Level
                                 </label>
                                 <select
                                    id="courseLevel"
                                    name="courseLevel"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    required
                                 >
                                    <option value="" disabled selected>
                                       Select the difficulty level of your course
                                    </option>
                                    <option value="beginner">
                                       Beginner - No prior knowledge required
                                    </option>
                                    <option value="intermediate">
                                       Intermediate - Some basic knowledge required
                                    </option>
                                    <option value="advanced">
                                       Advanced - Comprehensive knowledge required
                                    </option>
                                    <option value="allLevels">
                                       All Levels - Content for beginners through advanced
                                    </option>
                                 </select>
                              </div>

                              <div className="space-y-4">
                                 <label
                                    htmlFor="courseSections"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Course Sections (Outline)
                                 </label>
                                 <div className="p-4 border border-gray-300 rounded-lg">
                                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                                       <div className="flex justify-between items-center mb-2">
                                          <div className="font-medium text-gray-800">Section 1</div>
                                          <div className="flex gap-2">
                                             <button
                                                type="button"
                                                className="text-gray-500 hover:text-primary-600 transition-colors"
                                             >
                                                <span className="material-symbols-outlined text-sm">
                                                   edit
                                                </span>
                                             </button>
                                             <button
                                                type="button"
                                                className="text-gray-500 hover:text-red-600 transition-colors"
                                             >
                                                <span className="material-symbols-outlined text-sm">
                                                   delete
                                                </span>
                                             </button>
                                          </div>
                                       </div>
                                       <input
                                          type="text"
                                          placeholder="Section Title (e.g., Introduction to the Course)"
                                          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                       />
                                       <div className="text-xs text-gray-500 mb-2">
                                          Lectures in this section:
                                       </div>
                                       <ul className="space-y-2 mb-2">
                                          <li className="flex justify-between items-center bg-white p-2 rounded border border-gray-200">
                                             <div className="text-sm">Welcome to the Course</div>
                                             <div className="flex gap-1">
                                                <button
                                                   type="button"
                                                   className="text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                   <span className="material-symbols-outlined text-sm">
                                                      edit
                                                   </span>
                                                </button>
                                                <button
                                                   type="button"
                                                   className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                   <span className="material-symbols-outlined text-sm">
                                                      delete
                                                   </span>
                                                </button>
                                             </div>
                                          </li>
                                       </ul>
                                       <button
                                          type="button"
                                          className="text-primary-600 hover:text-primary-700 transition-colors text-sm flex items-center"
                                       >
                                          <span className="material-symbols-outlined text-sm mr-1">
                                             add
                                          </span>
                                          Add Lecture
                                       </button>
                                    </div>
                                    <button
                                       type="button"
                                       className="w-full p-2 border border-dashed border-gray-300 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors flex items-center justify-center"
                                    >
                                       <span className="material-symbols-outlined mr-1">add</span>
                                       Add New Section
                                    </button>
                                 </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <div>
                                    <label
                                       htmlFor="estimatedDuration"
                                       className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                       Estimated Course Duration
                                    </label>
                                    <select
                                       id="estimatedDuration"
                                       name="estimatedDuration"
                                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                       required
                                    >
                                       <option value="" disabled selected>
                                          Select estimated duration
                                       </option>
                                       <option value="0-1">0-1 hours</option>
                                       <option value="1-3">1-3 hours</option>
                                       <option value="3-6">3-6 hours</option>
                                       <option value="6-10">6-10 hours</option>
                                       <option value="10-15">10-15 hours</option>
                                       <option value="15+">15+ hours</option>
                                    </select>
                                 </div>
                                 <div>
                                    <label
                                       htmlFor="coursePrice"
                                       className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                       Course Price
                                    </label>
                                    <div className="relative">
                                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                          $
                                       </span>
                                       <input
                                          type="number"
                                          id="coursePrice"
                                          name="coursePrice"
                                          min="0"
                                          step="0.01"
                                          className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                          placeholder="29.99"
                                          required
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Requirements & Materials
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Course Prerequisites
                                 </label>
                                 <textarea
                                    id="prerequisites"
                                    name="prerequisites"
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="List any knowledge, skills, tools, or equipment students need before starting"
                                 ></textarea>
                                 <p className="text-xs text-gray-500 mt-1">
                                    Leave blank if no prerequisites are required
                                 </p>
                              </div>

                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Materials Students Will Need
                                 </label>
                                 <textarea
                                    id="materials"
                                    name="materials"
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="List any software, books, or equipment students will need to complete the course"
                                 ></textarea>
                              </div>

                              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                 <div className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                       lightbulb
                                    </span>
                                    <p className="text-sm text-gray-700">
                                       Be clear about prerequisites and materials to set proper
                                       expectations. Students should know exactly what they need
                                       before enrolling in your course.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                           <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                              <a
                                 href="#"
                                 className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                              >
                                 <span className="material-symbols-outlined mr-1">arrow_back</span>
                                 Back to step 1
                              </a>
                              <div className="flex gap-4">
                                 <button
                                    type="button"
                                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                 >
                                    Save as Draft
                                 </button>
                                 <button
                                    type="submit"
                                    className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                                 >
                                    Continue to Next Step
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-10">
               <h2 className="text-xl font-bold mb-4 text-gray-800">What Happens Next?</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors opacity-40">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">edit_document</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Step 2: Course Planning</h3>
                     <p className="text-gray-600 text-center text-sm">
                        You&apos;ll define your course structure, objectives, and target audience
                     </p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-primary-50 border border-primary-100 rounded-lg transition-colors">
                     <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">videocam</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Step 3: Content Creation</h3>
                     <p className="text-gray-600 text-center text-sm">
                        Set up your recording equipment and create your course content
                     </p>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">rocket_launch</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Launch Your Course</h3>
                     <p className="text-gray-600 text-center text-sm">
                        Submit your course for review and publish to our global audience
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mb-10">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                     <h2 className="text-xl font-bold mb-3 text-gray-800">
                        Need Help Getting Started?
                     </h2>
                     <p className="text-gray-600 mb-4">
                        Our instructor support team is here to answer your questions and guide you
                        through the process.
                     </p>
                     <a
                        href="#"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
                     >
                        View Instructor Resources
                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                     </a>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                     <div className="bg-white p-5 rounded-lg shadow-sm max-w-md w-full">
                        <h3 className="font-bold text-gray-800 mb-3">Have Questions?</h3>
                        <div className="space-y-4">
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 chat
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">Live Chat Support</div>
                                 <div className="text-sm text-gray-500">
                                    Available Mon-Fri, 9AM-5PM
                                 </div>
                              </div>
                           </a>
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 email
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">Email Us</div>
                                 <div className="text-sm text-gray-500">
                                    instructors@edulearn.com
                                 </div>
                              </div>
                           </a>
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 forum
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">
                                    Instructor Community
                                 </div>
                                 <div className="text-sm text-gray-500">
                                    Connect with other instructors
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
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
                        Empowering educators to share knowledge and transform lives through online
                        education.
                     </p>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Teach</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Become an Instructor
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Instructor Resources
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Course Standards
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Success Stories
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Support</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Help Center
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Contact Us
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Privacy Policy
                           </a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-white transition-colors">
                              Terms of Service
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
                     <p className="text-gray-300 text-sm mb-4">
                        Subscribe to get updates on new teaching resources and opportunities.
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
