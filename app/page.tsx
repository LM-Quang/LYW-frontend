"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/avatar.jpg";
import img1 from "@/assets/img-1.jpg";
import { ArrowRight, Award, Video, Infinity } from "lucide-react";
import truncateText from "@/utils/utils";
import Testimonials from "@/components/homePage/Testimonials";
import { useUser } from "@/context/UserContext";
import { STUDENTS, TEACHERS, USERS } from "@/utils/data";
import { useRouter } from "next/navigation";
import { QUERY_PARAMS } from "@/utils/constant";

const whyChooseItems = [
   {
      title: "On-Demand Learning",
      description: "Access 67+ hours of video content anytime, anywhere.",
      icon: <Video className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Earn Certificates",
      description: "Get a certificate of completion for every course.",
      icon: <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Lifetime Access",
      description: "Learn at your own pace with full lifetime access.",
      icon: <Infinity className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
];

const categories = [
   "Programming",
   "Design",
   "Data Science",
   "Languages",
   "Business",
   "Marketing",
   "DevOps",
   "AI & ML",
   "Cybersecurity",
   "Finance",
];

const allCourses = [
   {
      id: 1,
      category: "Programming",
      title: "JavaScript Fundamentals",
      description:
         "Master JavaScript from scratch with practical exercises and real-world projects",
      instructor: "James Wilson",
      price: "$49.99",
      tag: "Hot & New",
      duration: "10 weeks • 24 lessons",
      level: "Beginner Friendly",
   },
   {
      id: 2,
      category: "Design",
      title: "Figma for UI Designers",
      description: "Learn to create beautiful interfaces and prototypes with Figma",
      instructor: "Emily Chen",
      price: "$59.99",
      tag: "Bestseller",
      duration: "8 weeks • 18 lessons",
      level: "Intermediate",
   },
   {
      id: 3,
      category: "Data Science",
      title: "Python for Data Analysis",
      description: "Learn to analyze and visualize data using Python, Pandas and NumPy",
      instructor: "Robert Kim",
      price: "$69.99",
      duration: "12 weeks • 30 lessons",
      level: "Advanced",
   },
   {
      id: 4,
      category: "Languages",
      title: "Spanish for Beginners",
      description: "Start speaking Spanish in just 8 weeks with our proven method",
      instructor: "Maria Lopez",
      price: "$39.99",
      tag: "New",
      duration: "8 weeks • 16 lessons",
      level: "Beginner Friendly",
   },
];

export default function HomePage() {
   const { updateUser, updateUserInfo } = useUser();
   const router = useRouter();
   const handleClickAdmin = () => {
      updateUser(USERS[0]);
      updateUserInfo(null);
      router.push("/admin/dashboard");
   };
   const handleClickStudent = () => {
      updateUser(USERS[3]);
      updateUserInfo(STUDENTS[1]);
      router.push("/");
   };
   const handleClickTeacher = () => {
      updateUser(USERS[6]);
      updateUserInfo(TEACHERS[1]);
      router.push("/teaching/dashboard");
   };

   const [selectedCategory, setSelectedCategory] = useState("Programming");
   const filteredCourses =
      selectedCategory === "Programming"
         ? allCourses
         : allCourses.filter((course) => course.category === selectedCategory);

   return (
      <div className="w-full min-h-screen font-sans">
         <div className="my-5 space-x-2">
            <button onClick={handleClickAdmin} className="p-4 bg-black text-white cursor-pointer">
               Admin
            </button>
            <button onClick={handleClickStudent} className="p-4 bg-black text-white cursor-pointer">
               Student
            </button>
            <button onClick={handleClickTeacher} className="p-4 bg-black text-white cursor-pointer">
               Teacher
            </button>
         </div>
         <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Hero */}
            <section className=" bg-white rounded-lg shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 mb-6 md:mb-0 pr-2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Without Limits</h1>
                  <p className="text-lg mb-4">
                     Expand your skills with our expert-led courses. From programming to design, we
                     have everything you need to succeed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link
                        href="/courses"
                        className="inline-flex items-center text-white bg-primary-500 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                        aria-label="Explore Courses"
                     >
                        Explore Courses
                        <ArrowRight className="ml-2" />
                     </Link>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                     <div className="flex -space-x-3">
                        <Image
                           width={40}
                           height={40}
                           src={img}
                           alt="User"
                           className="rounded-full border-2 border-white"
                        />

                        <Image
                           width={40}
                           height={40}
                           src={img}
                           alt="User"
                           className="rounded-full border-2 border-white"
                        />

                        <Image
                           width={40}
                           height={40}
                           src={img}
                           alt="User"
                           className="rounded-full border-2 border-white"
                        />

                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium border-2 border-white">
                           +2K
                        </div>
                     </div>
                     <p className="text-sm text-gray-600">Joined by 2,000+ students this month</p>
                  </div>
               </div>

               <div className="md:w-1/2">
                  <div className="relative">
                     <Image
                        src={img1}
                        alt="E-learning"
                        className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                        width={img1.width}
                        height={img1.height}
                     />
                     <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md flex items-center gap-3 animate-bounce">
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        />
                        <div>
                           <p className="font-bold">4.9/5 Rating</p>
                           <p className="text-sm text-gray-600">From 10k+ reviews</p>
                        </div>
                     </div>
                  </div>
                  {/* Next: "Add image gallery slider" */}
               </div>
            </section>

            {/* Explore Courses */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">Learn by Category</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                     Browse our wide range of courses across different categories to find your
                     perfect match
                  </p>
               </div>

               {/* Nav List */}
               <div className="relative mb-8">
                  <div className="inline-flex gap-2 border-b border-gray-200 min-w-max px-1">
                     {categories.map((category) => (
                        <button
                           key={category}
                           onClick={() => setSelectedCategory(category)}
                           className={`px-6 py-3 whitespace-nowrap transition-colors cursor-pointer rounded-t-md ${
                              selectedCategory === category
                                 ? "text-primary-500 border-b-2 border-primary-500"
                                 : "text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                           }`}
                        >
                           {category}
                        </button>
                     ))}
                     <button
                        onClick={() => router.push("/courses")}
                        className="flex px-6 py-3 whitespace-nowrap transition-colors cursor-pointer rounded-t-md
                                 text-gray-600 hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                     >
                        All
                        <ArrowRight className="ml-1" />
                     </button>
                  </div>
               </div>

               {/* Course List */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                     <div
                        key={course.id}
                        className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg cursor-pointer"
                     >
                        <div className="flex justify-between items-center mb-3 h-6">
                           <span className="text-sm text-gray-500">{course.category}</span>
                           {course.tag && (
                              <div className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                 {course.tag}
                              </div>
                           )}
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-4">{truncateText(course.description, 75)}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                           <div className="flex justify-between items-center">
                              <span className="font-medium text-primary-600 mr-auto">
                                 {course.duration}
                              </span>
                              <i className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1" />
                              <span className="text-sm font-medium">4.8 / 5</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                           <Image
                              src={img}
                              alt="Instructor"
                              className="rounded-full"
                              width={32}
                              height={32}
                           />
                           <span className="text-sm">{course.instructor}</span>
                           <span className="font-bold text-lg ml-auto">{course.price}</span>
                        </div>
                        <Link
                           href={`/course-detail/${course.id}`}
                           className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                        >
                           <span>View Details</span>
                           <ArrowRight />
                        </Link>
                     </div>
                  ))}
               </div>

               {/* Actions */}
               <div className="mt-10 text-center">
                  <button
                     className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors cursor-pointer"
                     onClick={() => router.push(`/courses?${QUERY_PARAMS}=${selectedCategory}`)}
                  >
                     View More Courses
                  </button>
               </div>
            </section>

            {/* Trending */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">Trending Courses</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                     Hand-picked courses by our expert team to jumpstart your learning journey
                  </p>
               </div>

               {/* Course List */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">Programming</span>
                        <div className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                           Hot & New
                        </div>
                     </div>
                     <h3 className="text-2xl font-semibold mb-2 transition-colors">
                        JavaScript Fundamentals
                     </h3>
                     <p className="text-gray-600 mb-4">
                        {truncateText(
                           "Master JavaScript from scratch with practical exercises and real-world projects",
                           75
                        )}
                     </p>
                     <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                           <span className="font-medium text-primary-600 mr-auto">
                              10 weeks • 24 lessons
                           </span>
                           <i
                              className="fa-solid fa-star text-yellow-400 w-4 h-4 mr-1"
                              aria-label="Full star"
                           />
                           <span className="text-sm font-medium">4.8 / 5</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 mt-4">
                        <Image
                           src={img}
                           alt="Instructor"
                           className="rounded-full"
                           width={32}
                           height={32}
                        />
                        <span className="text-sm">James Wilson</span>
                        <span className="font-bold text-lg ml-auto">$49.99</span>
                     </div>
                     <Link
                        href={`/course-detail/${1}`}
                        className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                     >
                        <span>View Details</span>
                        <ArrowRight />
                     </Link>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">Design</span>
                        <div className="flex items-center gap-1">
                           <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                              Bestseller
                           </div>
                        </div>
                     </div>
                     <h3 className="text-2xl font-semibold mb-2">Figma for UI Designers</h3>
                     <p className="text-gray-600 mb-4">
                        Learn to create beautiful interfaces and prototypes with Figma
                     </p>
                     <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                           <span className="font-medium text-primary-600">
                              8 weeks • 18 lessons
                           </span>
                           <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                              Intermediate
                           </span>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 mt-4">
                        <Image
                           src={img}
                           alt="Instructor"
                           className="rounded-full"
                           width={32}
                           height={32}
                        />
                        <span className="text-sm">Emily Chen</span>
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        />
                        <span className="text-sm font-medium">4.8 / 5</span>
                        <span className="font-bold text-lg ml-auto">$59.99</span>
                     </div>
                     <Link
                        href={`/course-detail/${1}`}
                        className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                     >
                        <span>View Details</span>
                        <ArrowRight />
                     </Link>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">Data Science</span>
                     </div>
                     <h3 className="text-2xl font-semibold mb-2">Python for Data Analysis</h3>
                     <p className="text-gray-600 mb-4">
                        Learn to analyze and visualize data using Python, Pandas and NumPy
                     </p>
                     <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                           <span className="font-medium text-primary-600">
                              12 weeks • 30 lessons
                           </span>
                           <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                              Advanced
                           </span>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 mt-4">
                        <Image
                           src={img}
                           alt="Instructor"
                           className="rounded-full"
                           width={32}
                           height={32}
                        />
                        <span className="text-sm">Robert Kim</span>
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        />
                        <span className="text-sm font-medium">4.8 / 5</span>
                        <span className="font-bold text-lg ml-auto">$69.99</span>
                     </div>
                     <Link
                        href={`/course-detail/${1}`}
                        className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                     >
                        <span>View Details</span>
                        <ArrowRight />
                     </Link>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 shadow-lg">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">Languages</span>
                        <div className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                           New
                        </div>
                     </div>
                     <h3 className="text-2xl font-semibold mb-2">Spanish for Beginners</h3>
                     <p className="text-gray-600 mb-4">
                        Start speaking Spanish in just 8 weeks with our proven method
                     </p>
                     <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                           <span className="font-medium text-primary-600">
                              8 weeks • 16 lessons
                           </span>
                           <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                              Beginner Friendly
                           </span>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 mt-4">
                        <Image
                           src={img}
                           alt="Instructor"
                           className="rounded-full"
                           width={32}
                           height={32}
                        />
                        <span className="text-sm">Maria Lopez</span>
                        <i
                           className="fa-solid fa-star text-yellow-400 w-4 h-4"
                           aria-label="Full star"
                        />
                        <span className="text-sm font-medium">4.8 / 5</span>
                        <span className="font-bold text-lg ml-auto">$39.99</span>
                     </div>
                     <Link
                        href={`/course-detail/${1}`}
                        className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex gap-2 justify-center"
                     >
                        <span>View Details</span>
                        <ArrowRight />
                     </Link>
                  </div>
               </div>

               <div className="mt-10 text-center">
                  <button className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors cursor-pointer">
                     View More Courses
                  </button>
               </div>
               {/* Next: "Add course filters and sorting options" */}
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">
                     Why Choose <span className="text-primary-500">Learn Your Way</span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {whyChooseItems.map((item, index) => (
                     <div
                        key={index}
                        className="lg:col-span-1 bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:shadow-md"
                     >
                        {/* <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:shadow-md"> */}
                        {item.icon}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        {/* </div> */}
                     </div>
                  ))}
               </div>
            </section>

            {/* Testimonial */}
            <Testimonials />

            {/* Get Started */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
                  <p className="text-gray-500 mb-8">
                     Join thousands of students already learning on EduPlus. Get unlimited access to
                     all courses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link
                        href="#"
                        className="px-6 py-3 bg-white text-primary-500 rounded-lg border border-primary-500 hover:bg-primary-50 transition-colors transform hover:-translate-y-1 duration-200"
                     >
                        Get Started For Free
                     </Link>
                     <Link
                        href="#"
                        className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors transform hover:-translate-y-1 duration-200"
                     >
                        View All Courses
                     </Link>
                  </div>
               </div>
               {/* Next: "Add countdown timer for special offer" */}
            </section>
         </div>
      </div>
   );
}
