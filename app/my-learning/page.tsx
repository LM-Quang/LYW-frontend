"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import avatar from "@/assets/avatar.jpg";
import img1 from "@/assets/img-1.jpg";

// Hard-coded user data (same as in the source code)
// interface User {
//    avatar: string;
//    username: string;
//    email: string;
// }

// const USER: User = {
//    avatar: avatar.src,
//    username: "Quang",
//    email: "quang@gmail.com",
// };

// Interface for a course
interface Course {
   id: number;
   title: string;
   description: string;
   image: string;
   rating: number;
   ratingsCount: number;
   price: number;
   progress?: number; // For enrolled courses
   isBestSeller?: boolean;
   updated: string;
   link: string;
}

// Hard-coded enrolled and liked courses (replace with API data in a real app)
const ENROLLEDCOURSES: Course[] = [
   {
      id: 1,
      title: "Complete JavaScript Course 2023",
      description: "Master JavaScript with the most comprehensive course available.",
      image: img1.src,
      rating: 4.8,
      ratingsCount: 42297,
      price: 89.99,
      progress: 65, // 65% complete
      isBestSeller: true,
      updated: "July 2023",
      link: "/course/complete-javascript-2023",
   },
   {
      id: 2,
      title: "Python for Data Science",
      description: "Learn Python and data analysis techniques with hands-on projects.",
      image: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      progress: 20, // 20% complete
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/python-data-science",
   },
];

const LIKEDCOURSES: Course[] = [
   {
      id: 3,
      title: "Typescript for Front End",
      description: "Learn TypeScript for modern front-end development.",
      image: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/typescript-front-end",
   },
   {
      id: 4,
      title: "Spring Boot 3",
      description: "Build powerful backend applications with Spring Boot 3.",
      image: img1.src,
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/spring-boot-3",
   },
];

export default function MyCoursesPage() {
   // const [user, setUser] = useState<User | null>(USER);
   const [favorites, setFavorites] = useState<Course[]>(LIKEDCOURSES);
   // const router = useRouter();
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [enrolledCourses, setEnrolledCourses] = useState<Course[]>(ENROLLEDCOURSES);

   // API calls to fetch user-specific data
   // useEffect(() => {
   // Fetch enrolled courses
   // fetch("/api/user/enrolled-courses")
   //    .then((res) => res.json())
   //    .then((data) => setEnrolledCourses(data));

   // Fetch liked courses
   // fetch("/api/user/liked-courses")
   //    .then((res) => res.json())
   //    .then((data) => setFavorites(data));
   // }, []);

   // Function to unlike a course
   const handleUnlike = (courseLink: string) => {
      setFavorites((prev) => prev.filter((course) => course.link !== courseLink));
   };

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
         {/* Main Content: My Courses Page */}
         <main className="container mx-auto px-4 md:px-5 py-10">
            {/* Courses I'm Learning Section */}
            <section className="mb-12">
               <h2 className="text-3xl font-bold text-gray-800 mb-6">Courses I&apos;m Learning</h2>
               {enrolledCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {enrolledCourses.map((course, index) => (
                        <div
                           key={index}
                           className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                           <div className="p-6">
                              <div className="flex items-center mb-2 h-7">
                                 <span className="text-sm text-gray-500">
                                    Updated {course.updated}
                                 </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">
                                 {course.title}
                              </h3>
                              <p className="text-gray-600 mb-4">{course.description}</p>
                              {/* Progress Bar */}
                              {course.progress !== undefined && (
                                 <div className="mb-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                       <div
                                          className="bg-primary-500 h-2.5 rounded-full"
                                          style={{ width: `${course.progress}%` }}
                                       />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                       {course.progress}% Complete
                                    </p>
                                 </div>
                              )}
                              <div className="flex items-center justify-between">
                                 <Link
                                    href={`/course/${course.id}`}
                                    className="inline-flex items-center bg-primary-500 text-white font-medium py-2 px-4 rounded-full hover:bg-primary-600 transition-colors"
                                    aria-label={`Continue learning ${course.title}`}
                                 >
                                    Continue Learning
                                    <ArrowRight className="ml-2" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <p className="text-gray-600 text-center">
                     You haven&apos;t enrolled in any courses yet.{" "}
                     <Link href="/" className="text-primary-500 hover:underline">
                        Explore courses
                     </Link>
                     .
                  </p>
               )}
            </section>

            {/* Liked Courses Section */}
            <section className="mb-12">
               <h2 className="text-3xl font-bold text-gray-800 mb-6">Liked Courses</h2>
               {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {favorites.map((course, index) => (
                        <div
                           key={index}
                           className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                           <div className="p-6">
                              <div className="flex items-center mb-2 h-7">
                                 {course.isBestSeller && (
                                    <span className="bg-primary-500 text-white p-1 mr-2 rounded-lg text-sm font-medium">
                                       Best Seller
                                    </span>
                                 )}
                                 <span className="text-sm text-gray-500">
                                    Updated {course.updated}
                                 </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">
                                 {course.title}
                              </h3>
                              <p className="text-gray-600 mb-4">{course.description}</p>
                              <div className="flex items-center justify-between">
                                 <span className="text-lg font-semibold text-primary-500">
                                    ${course.price.toFixed(2)}
                                 </span>
                                 <div className="flex gap-2">
                                    <Link
                                       href={course.link}
                                       className="inline-flex items-center bg-primary-500 text-white font-medium py-2 px-4 rounded-full hover:bg-primary-600 transition-colors"
                                       aria-label={`Enroll in ${course.title}`}
                                    >
                                       Enroll Now
                                       <ArrowRight className="ml-2" />
                                    </Link>
                                    <button
                                       onClick={() => handleUnlike(course.link)}
                                       className="text-red-500 hover:text-red-600 transition-colors"
                                       aria-label={`Unlike ${course.title}`}
                                    >
                                       Unlike
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <p className="text-gray-600 text-center">
                     You haven&apos;t liked any courses yet.{" "}
                     <Link href="/" className="text-primary-500 hover:underline">
                        Explore courses
                     </Link>
                     .
                  </p>
               )}
            </section>
         </main>
      </div>
   );
}
