import Image from "next/image";
import React from "react";
import logo1 from "@/assets/logo-1.png";
import {
   CircleDollarSign,
   ClipboardList,
   Globe,
   Handshake,
   LayoutTemplate,
   Shapes,
   SquareActivity,
   TrendingUp,
   Users,
   Video,
} from "lucide-react";
import FAQ from "@/components/contactPage/FAQ";
import Link from "next/link";

export default function TeachingIntroductionPage() {
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl overflow-hidden mb-8">
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

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-3 text-gray-800">
                     How to Become an Instructor
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                     Join thousands of instructors who are sharing their knowledge and earning
                     income by teaching students worldwide on our platform.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                     <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <ClipboardList className="text-primary-600" />
                     </div>
                     <h3 className="text-xl font-bold text-center mb-3">Plan Your Course</h3>
                     <p className="text-gray-600 text-center">
                        Choose a topic you&apos;re knowledgeable about and plan your curriculum
                        based on student needs.
                     </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                     <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Video className="text-primary-600" />
                     </div>
                     <h3 className="text-xl font-bold text-center mb-3">Create Your Content</h3>
                     <p className="text-gray-600 text-center">
                        Record high-quality video lectures and develop engaging assignments,
                        quizzes, and resources.
                     </p>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                     <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <CircleDollarSign className="text-primary-600" />
                     </div>
                     <h3 className="text-xl font-bold text-center mb-3">Earn Revenue</h3>
                     <p className="text-gray-600 text-center">
                        Get paid for your expertise with our revenue sharing model. Earn money each
                        time a student enrolls in your course.
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                     <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Why Teach on Learn You Way?
                     </h2>

                     <div className="space-y-6">
                        <div className="flex items-start">
                           <Globe className="text-primary-600 mr-3 mt-1" />
                           <div>
                              <h4 className="font-bold text-gray-800">Global Reach</h4>
                              <p className="text-gray-600">
                                 Reach millions of students around the world who are eager to learn
                                 from your expertise.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <LayoutTemplate className="text-primary-600 mr-3 mt-1" />
                           <div>
                              <h4 className="font-bold text-gray-800">Comprehensive Platform</h4>
                              <p className="text-gray-600">
                                 Our platform handles everything from hosting videos to processing
                                 payments so you can focus on teaching.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <SquareActivity className="text-primary-600 mr-3 mt-1" />
                           <div>
                              <h4 className="font-bold text-gray-800">Performance Dashboard</h4>
                              <p className="text-gray-600">
                                 Track your course performance, student engagement, and revenue with
                                 our intuitive instructor dashboard.
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <Handshake className="text-primary-600 mr-3 mt-1" />
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

                  <div className="bg-gray-100 p-2 flex items-center justify-center">
                     <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Instructor Success</h3>

                        <div className="space-y-4 mb-6">
                           <div>
                              <div className="flex justify-between mb-1">
                                 <span className="text-sm font-medium text-gray-700">
                                    Top instructors earn
                                 </span>
                                 <span className="text-sm font-bold text-primary-600">
                                    $10,000+ / year
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

            <FAQ />

            <div className="bg-white rounded-xl p-8 text-center mb-8">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Ready to Start Your Teaching Journey?
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Join our community of instructors today and start sharing your knowledge with
                  eager students around the world.
               </p>
               <Link
                  href="#"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
               >
                  Create Your First Course
               </Link>
               <div className="mt-4 text-sm text-gray-500">
                  Need help getting started?{" "}
                  <Link href="#" className="text-primary-600 hover:text-primary-700 underline">
                     Contact our instructor support team
                  </Link>
               </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
               <h3 className="text-3xl font-bold mb-6 text-gray-800">
                  Featured Instructor Resources
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link
                     href="#"
                     className="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <Shapes className="text-primary-500 mb-3 group-hover:text-primary-600 transition-colors" />
                     <h4 className="font-bold text-gray-800 mb-2">Course Creation Masterclass</h4>
                     <p className="text-gray-600 text-sm">
                        Learn how to plan, film, and edit your course videos for maximum engagement.
                     </p>
                  </Link>

                  <Link
                     href="#"
                     className="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <TrendingUp className="text-primary-500 mb-3 group-hover:text-primary-600 transition-colors" />
                     <h4 className="font-bold text-gray-800 mb-2">Marketing Your Course</h4>
                     <p className="text-gray-600 text-sm">
                        Discover effective strategies to promote your course and attract more
                        students.
                     </p>
                  </Link>

                  <Link
                     href="#"
                     className="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-all block group"
                  >
                     <Users className="text-primary-500 mb-3 group-hover:text-primary-600 transition-colors" />
                     <h4 className="font-bold text-gray-800 mb-2">Building Student Community</h4>
                     <p className="text-gray-600 text-sm">
                        Create an engaged learning community to enhance student satisfaction and
                        outcomes.
                     </p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
