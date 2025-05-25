"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/avatar.jpg";
import img1 from "@/assets/img-1.jpg";
import { Award, Infinity, ListChecks, ScrollText, Users } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { ALL_COURSES, Category, STUDENTS, Tag, TEACHERS, USERS } from "@/utils/data";
import { useRouter } from "next/navigation";
import { CATEGORY_PARAMS, TAG_PARAMS } from "@/utils/constant";
import CourseCard from "@/components/common/CourseCard";
import RenderStars from "@/components/common/RenderStars";

const whyChooseItems = [
   {
      title: "On-Desire Learning",
      description: "Learning exactly what you want, paying exactly what you learn.",
      icon: <ListChecks className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
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

   const [selectedCategory, setSelectedCategory] = useState(Category.PROGRAMMING);
   const filteredCourses = ALL_COURSES.filter((course) => course.category === selectedCategory);
   const trendingCourse = ALL_COURSES.filter((course) => course.tag?.name === Tag.TREND);

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
            <section className=" bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 pr-2">
                     <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Without Limits</h1>
                     <p className="text-lg mb-4">
                        Expand your skills with our expert-led courses. From programming to design,
                        we have everything you need to succeed.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                           href="/courses"
                           className="inline-flex items-center text-white bg-primary-500 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                           aria-label="Explore Courses"
                        >
                           Explore Courses
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
                        <p className="text-sm text-gray-600">
                           Joined by 2,000+ students this month
                        </p>
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
                  <div className="overflow-x-auto scrollbar-hide border-b border-gray-200 px-1">
                     {Object.entries(Category).map(([key, value]) => {
                        return (
                           <button
                              key={key}
                              onClick={() => setSelectedCategory(value)}
                              className={`px-6 py-3 whitespace-nowrap transition-colors cursor-pointer rounded-t-md ${
                                 selectedCategory === value
                                    ? "text-primary-500 border-b-2 border-primary-500"
                                    : "text-gray-600 border-b-2 border-white hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                              }`}
                           >
                              {value}
                           </button>
                        );
                     })}
                     <Link
                        className="px-6 py-3 transition-colors rounded-t-md text-gray-600 border-b-2 border-white hover:text-primary-600 hover:border-b-2 hover:border-primary-600"
                        href="/courses"
                     >
                        All Category
                     </Link>
                  </div>
               </div>

               {/* Course List */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredCourses.slice(0, 4).map((course) => (
                     <CourseCard key={course.id} course={course} />
                  ))}
               </div>

               {/* Actions */}
               <div className="mt-10 text-center">
                  <button
                     className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors cursor-pointer"
                     onClick={() => router.push(`/courses?${CATEGORY_PARAMS}=${selectedCategory}`)}
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
                  {trendingCourse.slice(0, 4).map((course) => (
                     <CourseCard key={course.id} course={course} />
                  ))}
               </div>

               <div className="mt-10 text-center">
                  <button
                     className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors cursor-pointer"
                     onClick={() => router.push(`/courses?${TAG_PARAMS}=trending`)}
                  >
                     View More Courses
                  </button>
               </div>
               {/* Next: "Add course filters and sorting options" */}
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-8">
                  <h2 className="mb-4 text-4xl font-bold">
                     Why Choose <span className="text-primary-500">Learn Your Way</span>
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Why Choose Us</p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {whyChooseItems.map((item, index) => (
                     <div
                        key={index}
                        className="lg:col-span-1 bg-white rounded-lg p-6 text-center border border-gray-200 shadow-md  transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                     >
                        {item.icon}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Testimonial */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="text-center mb-8">
                  <h2 className="mb-4 text-4xl font-bold">What Our Students Say</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                     Discover how our courses have helped students worldwide achieve their learning
                     goals and advance their careers
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <Image
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                              alt="Student profile"
                              className="w-full h-full object-cover"
                              width={48}
                              height={48}
                           />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-800">Emily Johnson</h4>
                           <p className="text-sm text-gray-500">Frontend Developer</p>
                        </div>
                     </div>
                     <div className="mb-4">
                        <div className="flex text-yellow-500 mb-2">
                           <RenderStars rating={5} />
                        </div>
                        <p className="text-gray-600 italic">
                           &quot;The Advanced JavaScript course completely transformed my
                           understanding of the language. The instructor explained complex concepts
                           in a way that was easy to grasp. Within a month of completing the course,
                           I landed my dream job!&quot;
                        </p>
                     </div>
                     <div className="flex items-center text-xs text-gray-500">
                        <span>Advanced JavaScript Concepts</span>
                     </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <Image
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                              alt="Student profile"
                              className="w-full h-full object-cover"
                              width={48}
                              height={48}
                           />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-800">Michael Rodriguez</h4>
                           <p className="text-sm text-gray-500">Full Stack Developer</p>
                        </div>
                     </div>
                     <div className="mb-4">
                        <div className="flex text-yellow-500 mb-2">
                           <RenderStars rating={5} />
                        </div>
                        <p className="text-gray-600 italic">
                           &quot;The Node.js Developer Course provided an excellent foundation for
                           backend development. The projects were practical and relevant to
                           real-world scenarios. I&apos;ve used what I learned to build my own
                           startup&apos;s backend infrastructure.&quot;
                        </p>
                     </div>
                     <div className="flex items-center text-xs text-gray-500">
                        <span>Complete Node.js Developer Course</span>
                     </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                     <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <Image
                              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                              alt="Student profile"
                              className="w-full h-full object-cover"
                              width={48}
                              height={48}
                           />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-800">Sarah Chang</h4>
                           <p className="text-sm text-gray-500">UX/UI Designer</p>
                        </div>
                     </div>
                     <div className="mb-4">
                        <div className="flex text-yellow-500 mb-2">
                           <RenderStars rating={4} />
                        </div>
                        <p className="text-gray-600 italic">
                           &quot;The Responsive Web Design course was incredibly comprehensive. I
                           especially appreciated the focus on accessibility and modern design
                           principles. The instructor&apos;s feedback on my projects was invaluable
                           to my growth as a designer.&quot;
                        </p>
                     </div>
                     <div className="flex items-center text-xs text-gray-500">
                        <span>Responsive Web Design with HTML5 and CSS3</span>
                     </div>
                  </div>
               </div>
            </section>

            {/* Join Community */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="md:w-1/2 pr-2">
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Join Our Growing Community of Learners
                     </h3>
                     <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center">
                           <Users className="text-primary-500 mr-2" />
                           <span className="font-bold text-gray-800">25K+</span>
                           <span className="ml-1 text-gray-600">Students</span>
                        </div>
                        <div className="flex items-center">
                           <ScrollText className="text-primary-500 mr-2" />
                           <span className="font-bold text-gray-800">200+</span>
                           <span className="ml-1 text-gray-600">Courses</span>
                        </div>
                        <div className="flex items-center">
                           <Award className="text-primary-500 mr-2" />
                           <span className="font-bold text-gray-800">15K+</span>
                           <span className="ml-1 text-gray-600">Certificates</span>
                        </div>
                     </div>
                     <p className="text-gray-600 mb-6">
                        Start your learning journey today and join thousands of students who have
                        transformed their careers through our comprehensive courses.
                     </p>
                     <Link
                        href="/courses"
                        className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium inline-flex items-center"
                     >
                        Explore All Courses
                     </Link>
                  </div>
                  <div className="md:w-1/2 grid grid-cols-2 gap-4">
                     <div className="rounded-lg overflow-hidden aspect-video shadow-sm transition-transform hover:scale-105">
                        <Image
                           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                           alt="Students learning together"
                           className="w-full h-full object-cover"
                           width={100}
                           height={120}
                        />
                     </div>
                     <div className="rounded-lg overflow-hidden aspect-video shadow-sm transition-transform hover:scale-105">
                        <Image
                           src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                           alt="Student coding"
                           className="w-full h-full object-cover"
                           width={100}
                           height={120}
                        />
                     </div>
                     <div className="rounded-lg overflow-hidden aspect-video shadow-sm transition-transform hover:scale-105">
                        <Image
                           src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe"
                           alt="Learning environment"
                           className="w-full h-full object-cover"
                           width={100}
                           height={120}
                        />
                     </div>
                     <div className="rounded-lg overflow-hidden aspect-video shadow-sm transition-transform hover:scale-105">
                        <Image
                           src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                           alt="Online learning"
                           className="w-full h-full object-cover"
                           width={100}
                           height={120}
                        />
                     </div>
                  </div>
               </div>
            </section>

            {/* Get Started */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
               <div className="mx-auto text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                     Ready to Start Your Learning Journey?
                  </h2>
                  <p className="text-gray-600 mb-8">
                     Join thousands of students already learning on EduPlus. Get unlimited access to
                     all courses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link
                        href="/auth/login"
                        className="px-6 py-3 bg-white text-primary-500 rounded-lg border border-primary-500 hover:bg-primary-50 transition-colors transform hover:-translate-y-1 duration-200"
                     >
                        Get Started For Free
                     </Link>
                     <Link
                        href="/courses"
                        className="px-6 py-3 text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors transform hover:-translate-y-1 duration-200"
                     >
                        View All Courses
                     </Link>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}
