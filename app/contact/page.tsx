import React from "react";

export default function ContactPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>

                  <div className="max-w-4xl mx-auto">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Get in Touch
                           </h2>
                           <p className="text-gray-600 mb-6">
                              Have questions about our courses or becoming an instructor? We&apos;re
                              here to help! Fill out the form or use one of our direct contact
                              methods below.
                           </p>

                           <div className="space-y-6">
                              <div className="flex items-start">
                                 <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                    location_on
                                 </span>
                                 <div>
                                    <h3 className="font-medium text-gray-800">Our Location</h3>
                                    <p className="text-gray-600">
                                       123 Education Avenue, Suite 400
                                       <br />
                                       Learning City, LE 10001
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                    call
                                 </span>
                                 <div>
                                    <h3 className="font-medium text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-sm text-gray-500">
                                       Monday-Friday, 9:00 AM - 5:00 PM EST
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start">
                                 <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                    email
                                 </span>
                                 <div>
                                    <h3 className="font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-600">support@edulearn.com</p>
                                    <p className="text-sm text-gray-500">
                                       We aim to respond within 24 hours
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div className="mt-8">
                              <h3 className="font-medium text-gray-800 mb-3">Connect With Us</h3>
                              <div className="flex space-x-4">
                                 <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                                 >
                                    <span className="material-symbols-outlined">facebook</span>
                                 </a>
                                 <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                                 >
                                    <span className="material-symbols-outlined">twitter</span>
                                 </a>
                                 <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                                 >
                                    <span className="material-symbols-outlined">linkedin</span>
                                 </a>
                                 <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                                 >
                                    <span className="material-symbols-outlined">
                                       youtube_activity
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Send Us a Message
                           </h2>
                           <form className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Your Name
                                 </label>
                                 <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Enter your full name"
                                    required
                                 />
                              </div>

                              <div>
                                 <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Email Address
                                 </label>
                                 <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Enter your email address"
                                    required
                                 />
                              </div>

                              <div>
                                 <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Subject
                                 </label>
                                 <select
                                    id="subject"
                                    name="subject"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    required
                                 >
                                    <option value="" disabled selected>
                                       Select a subject
                                    </option>
                                    <option value="general">General Inquiry</option>
                                    <option value="courses">Course Information</option>
                                    <option value="instructor">Becoming an Instructor</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="billing">Billing & Payments</option>
                                    <option value="other">Other</option>
                                 </select>
                              </div>

                              <div>
                                 <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Your Message
                                 </label>
                                 <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    placeholder="Type your message here..."
                                    required
                                 ></textarea>
                              </div>

                              <div className="flex items-start">
                                 <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                    required
                                 />
                                 <label
                                    htmlFor="privacy"
                                    className="ml-2 block text-sm text-gray-600"
                                 >
                                    I agree to the{" "}
                                    <a href="#" className="text-primary-600 hover:underline">
                                       Privacy Policy
                                    </a>{" "}
                                    and consent to EduLearn Academy processing my data.
                                 </label>
                              </div>

                              <button
                                 type="submit"
                                 className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                              >
                                 Send Message
                              </button>
                           </form>
                        </div>
                     </div>

                     <div className="mt-12 border-t border-gray-200 pt-8">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">
                           Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                           <details className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                              <summary className="font-medium text-gray-800 cursor-pointer">
                                 How do I enroll in a course?
                              </summary>
                              <div className="mt-3 text-gray-600">
                                 <p>
                                    To enroll in a course, simply browse our catalog, select the
                                    course you&apos;re interested in, and click the
                                    &quot;Enroll&quot; button. If the course requires payment,
                                    you&apos;ll be guided through our secure checkout process.
                                 </p>
                              </div>
                           </details>

                           <details className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                              <summary className="font-medium text-gray-800 cursor-pointer">
                                 How can I become an instructor?
                              </summary>
                              <div className="mt-3 text-gray-600">
                                 <p>
                                    To become an instructor, click on the &quot;Teaching&quot; link
                                    in the navigation menu and follow the registration process.
                                    You&apos;ll need to provide information about your expertise,
                                    the courses you plan to teach, and submit samples of your
                                    teaching materials.
                                 </p>
                              </div>
                           </details>

                           <details className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                              <summary className="font-medium text-gray-800 cursor-pointer">
                                 What payment methods do you accept?
                              </summary>
                              <div className="mt-3 text-gray-600">
                                 <p>
                                    We accept all major credit cards (Visa, MasterCard, American
                                    Express, Discover), PayPal, and in some regions, we also support
                                    bank transfers and mobile payment options. All transactions are
                                    secure and encrypted.
                                 </p>
                              </div>
                           </details>

                           <details className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                              <summary className="font-medium text-gray-800 cursor-pointer">
                                 Can I get a refund if I&apos;m not satisfied?
                              </summary>
                              <div className="mt-3 text-gray-600">
                                 <p>
                                    Yes, we offer a 30-day money-back guarantee for most courses. If
                                    you&apos;re not satisfied with your purchase, you can request a
                                    refund within 30 days of enrollment, provided you haven&apos;t
                                    completed more than 30% of the course content.
                                 </p>
                              </div>
                           </details>

                           <details className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
                              <summary className="font-medium text-gray-800 cursor-pointer">
                                 How do I access my courses after purchase?
                              </summary>
                              <div className="mt-3 text-gray-600">
                                 <p>
                                    After purchasing a course, you can access it by logging into
                                    your account and navigating to &quot;My Learning&quot; in the
                                    top navigation menu. All your enrolled courses will be listed
                                    there, and you can continue from where you left off.
                                 </p>
                              </div>
                           </details>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mb-10">
               <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
                  Our Global Offices
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <span className="material-symbols-outlined text-2xl text-primary-500 mr-3">
                           location_city
                        </span>
                        <h3 className="font-bold text-gray-800">North America</h3>
                     </div>
                     <p className="text-gray-600 mb-3">
                        123 Education Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Tel:</span> +1 (555) 123-4567
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Email:</span> na@edulearn.com
                     </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <span className="material-symbols-outlined text-2xl text-primary-500 mr-3">
                           location_city
                        </span>
                        <h3 className="font-bold text-gray-800">Europe</h3>
                     </div>
                     <p className="text-gray-600 mb-3">
                        45 Learning Street
                        <br />
                        London, EC1A 1BB
                        <br />
                        United Kingdom
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Tel:</span> +44 20 7123 4567
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Email:</span> eu@edulearn.com
                     </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <span className="material-symbols-outlined text-2xl text-primary-500 mr-3">
                           location_city
                        </span>
                        <h3 className="font-bold text-gray-800">Asia Pacific</h3>
                     </div>
                     <p className="text-gray-600 mb-3">
                        88 Knowledge Tower
                        <br />
                        Singapore, 018956
                        <br />
                        Singapore
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Tel:</span> +65 6123 4567
                     </p>
                     <p className="text-gray-600">
                        <span className="font-medium">Email:</span> apac@edulearn.com
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
               <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
                  We&apos;d Love to Hear From You
               </h2>
               <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                  Whether you have a question about courses, pricing, or anything else, our team is
                  ready to answer all your questions.
               </p>

               <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <a
                     href="#"
                     className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
                  >
                     <span className="material-symbols-outlined mr-2">forum</span>
                     Start Live Chat
                  </a>
                  <a
                     href="#"
                     className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                     <span className="material-symbols-outlined mr-2">support_agent</span>
                     Schedule a Call
                  </a>
                  <a
                     href="#"
                     className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                     <span className="material-symbols-outlined mr-2">help</span>
                     Visit Help Center
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
