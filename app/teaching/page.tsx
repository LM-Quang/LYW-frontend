import Image from "next/image";
import React from "react";
import logo1 from "@/assets/logo-1.png";

export default function TeachingIntroductionPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl overflow-hidden mb-10">
               <div className="flex flex-col md:flex-row">
                  <div className="p-8 md:p-12 md:w-3/5">
                     <div className="text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                           Share Your Knowledge
                        </h1>
                        <p className="text-primary-50 text-lg mb-6">
                           Become an instructor and change lives — including your own
                        </p>
                        <button className="bg-white text-primary-700 hover:bg-primary-50 transition-colors px-6 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                           Start Teaching Today
                        </button>
                     </div>
                  </div>
                  <div className="hidden md:block md:w-2/5">
                     <Image
                        src={logo1}
                        alt="Teacher with students in classroom"
                        className="h-full w-full object-cover"
                        width={logo1.width}
                        height={logo1.height}
                     />
                  </div>
               </div>
            </div>

            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-3 text-gray-800">
                  How to Become an Instructor
               </h2>
               <p className="text-gray-600 max-w-3xl mx-auto">
                  Join thousands of instructors who are sharing their knowledge and earning income
                  by teaching students worldwide on our platform.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="material-symbols-outlined text-3xl text-primary-600">
                        menu_book
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Plan Your Course</h3>
                  <p className="text-gray-600 text-center">
                     Choose a topic you&apos;re knowledgeable about and plan your curriculum based
                     on student needs.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="material-symbols-outlined text-3xl text-primary-600">
                        videocam
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Create Your Content</h3>
                  <p className="text-gray-600 text-center">
                     Record high-quality video lectures and develop engaging assignments, quizzes,
                     and resources.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                     <span className="material-symbols-outlined text-3xl text-primary-600">
                        payments
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Earn Revenue</h3>
                  <p className="text-gray-600 text-center">
                     Get paid for your expertise with our revenue sharing model. Earn money each
                     time a student enrolls in your course.
                  </p>
               </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                     <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Why Teach on EduLearn Academy?
                     </h2>

                     <div className="space-y-6">
                        <div className="flex items-start">
                           <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                              public
                           </span>
                           <div>
                              <h4 className="font-bold text-gray-800">Global Reach</h4>
                              <p className="text-gray-600">
                                 Reach millions of students around the world who are eager to learn
                                 from your expertise.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                              auto_awesome
                           </span>
                           <div>
                              <h4 className="font-bold text-gray-800">Comprehensive Platform</h4>
                              <p className="text-gray-600">
                                 Our platform handles everything from hosting videos to processing
                                 payments so you can focus on teaching.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                              monitoring
                           </span>
                           <div>
                              <h4 className="font-bold text-gray-800">Performance Dashboard</h4>
                              <p className="text-gray-600">
                                 Track your course performance, student engagement, and revenue with
                                 our intuitive instructor dashboard.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                              forum
                           </span>
                           <div>
                              <h4 className="font-bold text-gray-800">Instructor Community</h4>
                              <p className="text-gray-600">
                                 Join our community of instructors to share best practices and get
                                 support on your teaching journey.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-gray-100 p-8 flex items-center justify-center">
                     <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Instructor Success</h3>

                        <div className="space-y-4 mb-6">
                           <div>
                              <div className="flex justify-between mb-1">
                                 <span className="text-sm font-medium text-gray-700">
                                    Top instructors earn
                                 </span>
                                 <span className="text-sm font-bold text-primary-600">
                                    $100,000+ / year
                                 </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                 <div
                                    className="bg-primary-500 h-2 rounded-full"
                                    style={{ width: "85%" }}
                                 ></div>
                              </div>
                           </div>

                           <div>
                              <div className="flex justify-between mb-1">
                                 <span className="text-sm font-medium text-gray-700">
                                    Average course creation time
                                 </span>
                                 <span className="text-sm font-bold text-primary-600">
                                    4-6 weeks
                                 </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                 <div
                                    className="bg-primary-500 h-2 rounded-full"
                                    style={{ width: "60%" }}
                                 ></div>
                              </div>
                           </div>

                           <div>
                              <div className="flex justify-between mb-1">
                                 <span className="text-sm font-medium text-gray-700">
                                    Student satisfaction rate
                                 </span>
                                 <span className="text-sm font-bold text-primary-600">96%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                 <div
                                    className="bg-primary-500 h-2 rounded-full"
                                    style={{ width: "96%" }}
                                 ></div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                           <div className="flex items-start">
                              <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                 lightbulb
                              </span>
                              <p className="text-sm text-gray-700">
                                 &quot;I never thought I could make a living teaching online, but
                                 EduLearn Academy made it possible. Now I reach students worldwide
                                 and earn more than my previous job.&quot;
                              </p>
                           </div>
                           <div className="mt-3 ml-9 text-sm font-medium">
                              - Sarah Johnson, Web Development Instructor
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mb-16">
               <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
                  Frequently Asked Questions
               </h2>

               <div className="max-w-3xl mx-auto space-y-4">
                  <details className="bg-white p-4 rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all">
                     <summary className="font-bold text-gray-800 flex items-center justify-between">
                        What qualifications do I need to become an instructor?
                        <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                           expand_more
                        </span>
                     </summary>
                     <div className="mt-3 text-gray-600">
                        You don&apos;t need formal teaching qualifications. What matters most is
                        your expertise in your subject area and your ability to communicate concepts
                        clearly. We provide resources to help you create engaging courses regardless
                        of your teaching experience.
                     </div>
                  </details>

                  <details className="bg-white p-4 rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all">
                     <summary className="font-bold text-gray-800 flex items-center justify-between">
                        How much can I earn teaching on EduLearn Academy?
                        <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                           expand_more
                        </span>
                     </summary>
                     <div className="mt-3 text-gray-600">
                        Earnings vary widely based on course topic, quality, and your marketing
                        efforts. Our revenue share model gives you 70% of all course sales. Some
                        instructors earn a few hundred dollars monthly, while top instructors can
                        earn six figures annually.
                     </div>
                  </details>

                  <details className="bg-white p-4 rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all">
                     <summary className="font-bold text-gray-800 flex items-center justify-between">
                        What equipment do I need to create my course?
                        <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                           expand_more
                        </span>
                     </summary>
                     <div className="mt-3 text-gray-600">
                        At minimum, you&apos;ll need a computer with a reliable internet connection,
                        a good quality microphone, and video recording capability. While
                        professional equipment can enhance quality, many successful instructors
                        start with basic setups and upgrade over time.
                     </div>
                  </details>

                  <details className="bg-white p-4 rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all">
                     <summary className="font-bold text-gray-800 flex items-center justify-between">
                        How long does it take to create a course?
                        <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                           expand_more
                        </span>
                     </summary>
                     <div className="mt-3 text-gray-600">
                        Course creation typically takes 4-6 weeks for a comprehensive course, but
                        this varies based on course length, complexity, and your available time. We
                        recommend setting aside dedicated time each week for planning, recording,
                        and editing your content.
                     </div>
                  </details>

                  <details className="bg-white p-4 rounded-lg shadow-sm group cursor-pointer hover:shadow-md transition-all">
                     <summary className="font-bold text-gray-800 flex items-center justify-between">
                        How do I get my course approved?
                        <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                           expand_more
                        </span>
                     </summary>
                     <div className="mt-3 text-gray-600">
                        All courses go through a quality review process before publication. We check
                        for technical quality, educational value, and compliance with our content
                        policies. We provide detailed feedback if improvements are needed to meet
                        our standards.
                     </div>
                  </details>
               </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 text-center mb-10">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Ready to Start Your Teaching Journey?
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Join our community of instructors today and start sharing your knowledge with
                  eager students around the world.
               </p>
               <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  Create Your First Course
               </button>
               <div className="mt-4 text-sm text-gray-500">
                  Need help getting started?{" "}
                  <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                     Contact our instructor support team
                  </a>
               </div>
            </div>

            <div className="border-t border-gray-200 pt-8 pb-4">
               <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Featured Instructor Resources
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a
                     href="#"
                     className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <span className="material-symbols-outlined text-primary-500 text-2xl mb-3 group-hover:text-primary-600 transition-colors">
                        play_circle
                     </span>
                     <h4 className="font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                        Course Creation Masterclass
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Learn how to plan, film, and edit your course videos for maximum engagement.
                     </p>
                  </a>

                  <a
                     href="#"
                     className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <span className="material-symbols-outlined text-primary-500 text-2xl mb-3 group-hover:text-primary-600 transition-colors">
                        trending_up
                     </span>
                     <h4 className="font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                        Marketing Your Course
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Discover effective strategies to promote your course and attract more
                        students.
                     </p>
                  </a>

                  <a
                     href="#"
                     className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <span className="material-symbols-outlined text-primary-500 text-2xl mb-3 group-hover:text-primary-600 transition-colors">
                        groups
                     </span>
                     <h4 className="font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                        Building Student Community
                     </h4>
                     <p className="text-gray-600 text-sm">
                        Create an engaged learning community to enhance student satisfaction and
                        outcomes.
                     </p>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
