"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GraduationCap, Search, ChevronDown, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import avatar from "@/assets/avatar.jpg";
import img1 from "@/assets/img-1.jpg";

// Hard-coded user data (same as in the source code)
interface User {
   avatar: string;
   username: string;
   email: string;
}

const USER: User = {
   avatar: avatar.src,
   username: "Quang",
   email: "quang@gmail.com",
};

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
   const [user, setUser] = useState<User | null>(USER);
   const [favorites, setFavorites] = useState<Course[]>(LIKEDCOURSES);
   const router = useRouter();
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

   // Function to render rating stars (reused from the source code)
   const renderRatingStars = (rating: number) => {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const stars = [];

      for (let i = 0; i < fullStars; i++) {
         stars.push(
            <Star key={`star-${i}`} className="text-yellow-400 w-4 h-4" aria-label="Full star" />
         );
      }

      if (hasHalfStar) {
         stars.push(
            <Star
               key="star-half"
               className="text-yellow-400 w-4 h-4"
               fill="currentColor"
               stroke="none"
               aria-label="Half star"
            />
         );
      }

      return stars;
   };

   // Function to unlike a course
   const handleUnlike = (courseLink: string) => {
      setFavorites((prev) => prev.filter((course) => course.link !== courseLink));
   };

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
         {/* Header (same as in HomePage with hover dropdown) */}
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Logo */}
               <div className="flex items-center">
                  <div className="mr-2">
                     <Image
                        className="rounded-full"
                        src={avatar}
                        alt="Logo"
                        width={65}
                        height={65}
                     />
                  </div>
                  <div className="text-2xl font-bold text-primary-500">
                     Learn <br /> Your Way
                  </div>
               </div>

               {/* Search bar */}
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        aria-label="Search courses"
                     />
                     <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        aria-hidden="true"
                     />
                  </div>
               </div>

               {/* Navbar */}
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center items-center gap-2 text-sm">
                     <li>
                        <Link
                           href="/"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Courses
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Categories
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Teaching
                        </Link>
                     </li>
                     {user ? (
                        <li className="relative group">
                           <div className="flex items-center cursor-pointer">
                              <Image
                                 className="rounded-full"
                                 src={user.avatar || "/default-avatar.png"}
                                 alt={user.username || "User avatar"}
                                 width={40}
                                 height={40}
                              />
                              <ChevronDown className="ml-1 w-4 h-4 text-gray-600 transition-transform group-hover:rotate-180" />
                           </div>

                           {/* Dropdown Menu */}
                           <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg z-20 transition-opacity duration-200 hidden group-hover:block group-focus-within:block">
                              <div className="p-4 border-b border-gray-200">
                                 <p className="text-sm font-semibold text-gray-800">
                                    {user.username || "User"}
                                 </p>
                                 <p className="text-xs text-gray-600 truncate">
                                    {user.email || "user@example.com"}
                                 </p>
                              </div>
                              <div className="py-1">
                                 <Link
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Profile
                                 </Link>
                                 <Link
                                    href="/my-courses"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    My Courses
                                 </Link>
                                 <button
                                    onClick={() => {
                                       setUser(null);
                                       router.push("/"); // Redirect to homepage after logout
                                    }}
                                    className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Logout
                                 </button>
                              </div>
                           </div>
                        </li>
                     ) : (
                        <>
                           <li>
                              <Link
                                 href="/auth/login"
                                 className="px-3 py-1 rounded-full border border-primary-500 text-primary-600 hover:bg-primary-100 transition-colors"
                                 aria-label="Sign In"
                              >
                                 Log In
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="/auth/signup"
                                 className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                              >
                                 Sign Up
                              </Link>
                           </li>
                        </>
                     )}
                  </ul>
               </nav>
            </div>
         </header>

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
                           <Image
                              src={course.image}
                              alt={course.title}
                              className="w-full h-48 object-cover"
                              width={360}
                              height={190}
                           />
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
                              <div className="flex items-center mb-4">
                                 <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
                                 <div className="flex">{renderRatingStars(course.rating)}</div>
                                 <span className="text-sm text-gray-600 ml-2">
                                    ({course.ratingsCount.toLocaleString()} ratings)
                                 </span>
                              </div>
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
                                 <span className="text-lg font-semibold text-primary-500">
                                    ${course.price.toFixed(2)}
                                 </span>
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
                           <Image
                              src={course.image}
                              alt={course.title}
                              className="w-full h-48 object-cover"
                              width={360}
                              height={190}
                           />
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
                              <div className="flex items-center mb-4">
                                 <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
                                 <div className="flex">{renderRatingStars(course.rating)}</div>
                                 <span className="text-sm text-gray-600 ml-2">
                                    ({course.ratingsCount.toLocaleString()} ratings)
                                 </span>
                              </div>
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

         {/* Footer (same as in HomePage) */}
         <footer className="bg-white top-shadow py-10">
            <div className="container mx-auto px-4 md:px-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Information */}
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                           <GraduationCap aria-label="Learn Your Way Logo" />
                        </div>
                        <div className="text-xl font-bold">Learn Your Way</div>
                     </div>
                     <p className="text-sm">
                        Empowering learners worldwide with high-quality online courses in
                        programming, design, business, and more.
                     </p>
                  </div>

                  {/* Navigation Links */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                     <ul className="space-y-2 text-sm">
                        <li>
                           <Link
                              href="/"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Home page"
                           >
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Courses page"
                           >
                              Courses
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Categories page"
                           >
                              Categories
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Teaching page"
                           >
                              Teaching
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="About page"
                           >
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Contact page"
                           >
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>

                  {/* Contact and Social Media */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                     <div className="mt-4 flex space-x-4">
                        <a
                           href="https://twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Twitter"
                        >
                           <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </a>
                        <a
                           href="https://facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook"
                        >
                           <i className="fa-brands fa-facebook-f text-2xl"></i>
                        </a>
                        <a
                           href="https://instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram"
                        >
                           <i className="fa-brands fa-square-instagram text-2xl"></i>
                        </a>
                        <a
                           href="https://linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on LinkedIn"
                        >
                           <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                  <div className="mb-4 md:mb-0">
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors mr-4"
                        aria-label="Privacy Policy"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors"
                        aria-label="Terms of Service"
                     >
                        Terms of Service
                     </a>
                  </div>
                  <div>© {new Date().getFullYear()} Learn Your Way. All rights reserved.</div>
               </div>
            </div>
         </footer>
      </div>
   );
}
