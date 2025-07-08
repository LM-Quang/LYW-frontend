import React from "react";

export default function Step1RegistrationPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
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
                              <span className="text-lg font-bold">1</span>
                           </div>
                           <div className="h-1 w-20 bg-primary-500"></div>
                           <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center">
                              <span className="text-lg font-bold">2</span>
                           </div>
                           <div className="h-1 w-20 bg-gray-200"></div>
                           <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                              <span className="text-lg font-bold">3</span>
                           </div>
                        </div>
                        <div className="text-sm text-gray-500">Step 1 of 3</div>
                     </div>

                     <form className="space-y-6">
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Personal Information
                           </h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    First Name
                                 </label>
                                 <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Enter your first name"
                                    required
                                 />
                              </div>
                              <div>
                                 <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Last Name
                                 </label>
                                 <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Enter your last name"
                                    required
                                 />
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Professional Profile
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="headline"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Professional Headline
                                 </label>
                                 <input
                                    type="text"
                                    id="headline"
                                    name="headline"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="e.g., 'Web Developer with 5+ years experience'"
                                    required
                                 />
                              </div>

                              <div>
                                 <label
                                    htmlFor="biography"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Biography
                                 </label>
                                 <textarea
                                    id="biography"
                                    name="biography"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Tell students about yourself, your background, and what they can expect from your courses"
                                    required
                                 ></textarea>
                                 <p className="text-xs text-gray-500 mt-1">
                                    Minimum 120 characters, highlight your expertise and teaching
                                    style
                                 </p>
                              </div>

                              <div>
                                 <label
                                    htmlFor="website"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Website/Portfolio (Optional)
                                 </label>
                                 <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="https://your-website.com"
                                 />
                              </div>

                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Profile Photo
                                 </label>
                                 <div className="flex items-center space-x-4">
                                    <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                       <span className="material-symbols-outlined text-gray-400 text-3xl">
                                          person
                                       </span>
                                    </div>
                                    <div className="flex-1">
                                       <button
                                          type="button"
                                          className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
                                       >
                                          Upload Photo
                                       </button>
                                       <p className="text-xs text-gray-500 mt-1">
                                          JPEG, PNG or GIF, max 5MB. A clear headshot improves
                                          student trust.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Teaching Categories
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="primaryCategory"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Primary Teaching Category
                                 </label>
                                 <select
                                    id="primaryCategory"
                                    name="primaryCategory"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    required
                                 >
                                    <option value="" disabled selected>
                                       Select your primary teaching category
                                    </option>
                                    <option value="webDevelopment">Web Development</option>
                                    <option value="datascience">Data Science</option>
                                    <option value="business">Business</option>
                                    <option value="marketing">Digital Marketing</option>
                                    <option value="design">Design</option>
                                    <option value="photography">Photography</option>
                                    <option value="music">Music</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="languages">Languages</option>
                                    <option value="other">Other</option>
                                 </select>
                              </div>

                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Secondary Teaching Categories (Optional, max 2)
                                 </label>
                                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat1"
                                          name="secondaryCategories"
                                          value="webDevelopment"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat1" className="ml-2 text-sm text-gray-700">
                                          Web Development
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat2"
                                          name="secondaryCategories"
                                          value="datascience"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat2" className="ml-2 text-sm text-gray-700">
                                          Data Science
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat3"
                                          name="secondaryCategories"
                                          value="business"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat3" className="ml-2 text-sm text-gray-700">
                                          Business
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat4"
                                          name="secondaryCategories"
                                          value="marketing"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat4" className="ml-2 text-sm text-gray-700">
                                          Digital Marketing
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat5"
                                          name="secondaryCategories"
                                          value="design"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat5" className="ml-2 text-sm text-gray-700">
                                          Design
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat6"
                                          name="secondaryCategories"
                                          value="photography"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat6" className="ml-2 text-sm text-gray-700">
                                          Photography
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat7"
                                          name="secondaryCategories"
                                          value="music"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat7" className="ml-2 text-sm text-gray-700">
                                          Music
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="checkbox"
                                          id="cat8"
                                          name="secondaryCategories"
                                          value="other"
                                          className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                       />
                                       <label htmlFor="cat8" className="ml-2 text-sm text-gray-700">
                                          Other
                                       </label>
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <label
                                    htmlFor="experience"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Years of Experience in Primary Category
                                 </label>
                                 <select
                                    id="experience"
                                    name="experience"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    required
                                 >
                                    <option value="" disabled selected>
                                       Select your experience level
                                    </option>
                                    <option value="0-1">Less than 1 year</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10+">More than 10 years</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Teaching Experience
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Do you have previous teaching experience?
                                 </label>
                                 <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                       <input
                                          type="radio"
                                          id="teachYes"
                                          name="previousTeaching"
                                          value="yes"
                                          className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                       />
                                       <label
                                          htmlFor="teachYes"
                                          className="ml-2 text-sm text-gray-700"
                                       >
                                          Yes
                                       </label>
                                    </div>
                                    <div className="flex items-center">
                                       <input
                                          type="radio"
                                          id="teachNo"
                                          name="previousTeaching"
                                          value="no"
                                          className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                       />
                                       <label
                                          htmlFor="teachNo"
                                          className="ml-2 text-sm text-gray-700"
                                       >
                                          No
                                       </label>
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <label
                                    htmlFor="teachingDetails"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Describe your teaching experience (Optional)
                                 </label>
                                 <textarea
                                    id="teachingDetails"
                                    name="teachingDetails"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Describe any previous teaching or mentoring experience you have"
                                 ></textarea>
                              </div>

                              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                 <div className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                       lightbulb
                                    </span>
                                    <p className="text-sm text-gray-700">
                                       Don&apos;t worry if you don&apos;t have formal teaching
                                       experience. Many of our top instructors were new to teaching
                                       when they started. We provide resources to help you create
                                       engaging courses.
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
                                 Back to home
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
                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">edit_document</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Step 2: Course Planning</h3>
                     <p className="text-gray-600 text-center text-sm">
                        You&apos;ll define your course structure, objectives, and target audience
                     </p>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
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
      </div>
   );
}
