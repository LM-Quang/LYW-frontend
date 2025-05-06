"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/img-1.jpg";
import avatar from "@/assets/avatar.jpg";
import {
   GraduationCap,
   Search,
   Star,
   ArrowRight,
   Code,
   Database,
   PenTool,
   Video,
   Award,
   Infinity,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/Context";

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
// Interface for a Course
interface Course {
   id: string;
   title: string;
   instructor: string;
   category: string;
   level: string;
   price: number;
   rating: number;
   description: string;
   thumbnail: string;
   students: number;
}

// Interface for a Cart Item
// interface CartItem {
//    id: string;
//    title: string;
//    instructor: string;
//    price: number;
//    thumbnail: string;
//    quantity: number;
// }
// Sample course data (same as in Search Results page)
const coursesData: Course[] = [
   {
      id: "1",
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      category: "Web Development",
      level: "All Levels",
      price: 49.99,
      rating: 4.8,
      description:
         "Learn JavaScript from scratch and build real-world projects in this comprehensive course.",
      thumbnail:
         "https://images.unsplash.com/photo-1633356122544-f1348a13f899?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 12000,
   },
   {
      id: "2",
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      category: "Data Science",
      level: "Intermediate",
      price: 79.99,
      rating: 4.6,
      description:
         "Master Python for data science, including pandas, numpy, and machine learning basics.",
      thumbnail:
         "https://images.unsplash.com/photo-1551288049-b1f3a0a1c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 8500,
   },
   {
      id: "3",
      title: "Introduction to Web Development",
      instructor: "Michael Brown",
      category: "Web Development",
      level: "Beginner",
      price: 0,
      rating: 4.2,
      description: "A beginner-friendly course covering HTML, CSS, and basic JavaScript.",
      thumbnail:
         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 15000,
   },
];
// Sample data for multiple courses (for demonstration)
const featuredCourses = [
   {
      title: "Complete JavaScript Course 2023",
      description:
         "Master JavaScript with the most comprehensive course available, taught by John Smith.",
      image: img1,
      rating: 4.8,
      ratingsCount: 42297,
      price: 89.99,
      isBestSeller: true,
      updated: "July 2023",
      link: "/course/complete-javascript-2023",
   },
   {
      title: "Python for Data Science",
      description:
         "Learn Python and data analysis techniques with hands-on projects, taught by Jane Doe.",
      image: img1, // Placeholder; replace with actual image
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/python-data-science",
   },
   {
      title: "Typescript for Front End",
      description:
         "Learn Python and data analysis techniques with hands-on projects, taught by Jane Doe.",
      image: img1, // Placeholder; replace with actual image
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/python-data-science",
   },
   {
      title: "Spring Boot 3",
      description:
         "Learn Python and data analysis techniques with hands-on projects, taught by Jane Doe.",
      image: img1, // Placeholder; replace with actual image
      rating: 4.7,
      ratingsCount: 30500,
      price: 79.99,
      isBestSeller: false,
      updated: "August 2023",
      link: "/course/python-data-science",
   },
];

const categories = [
   {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and more.",
      icon: <Code className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#web-development",
   },
   {
      title: "Data Science",
      description: "Master Python, R, and data analysis.",
      icon: <Database className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#data-science",
   },
   {
      title: "Design",
      description: "Explore UI/UX, graphic design, and more.",
      icon: <PenTool className="w-8 h-8 text-primary-500 mr-4" />,
      link: "#design",
   },
];

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

const testimonials = [
   {
      rating: 5.0,
      text: "The Complete JavaScript Course was a game-changer! John Smith's teaching style is engaging, and the projects helped me build a strong portfolio.",
      author: "Sarah L., Web Developer",
   },
   {
      rating: 4.5,
      text: "I learned so much from this course. The real-world applications and downloadable resources were incredibly helpful.",
      author: "Michael T., Software Engineer",
   },
   {
      rating: 4.0,
      text: "I learned so much from this course. The real-world applications and downloadable resources were incredibly helpful.",
      author: "Michael T., Software Engineer",
   },
];

export default function HomePage() {
   const [user, setUser] = useState<User | null>(USER);
   // Function to render rating stars dynamically
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
   const searchParams = useSearchParams();
   const query = searchParams.get("q") || "";
   const router = useRouter();
   // const [cart, setCart] = useState<CartItem[]>([]);
   // Add a course to the cart
   // const addToCart = (course: Course) => {
   //    const newCartItem: CartItem = {
   //       id: course.id,
   //       title: course.title,
   //       instructor: course.instructor,
   //       price: course.price,
   //       thumbnail: course.thumbnail,
   //       quantity: 1,
   //    };

   //    // Check if the course is already in the cart
   //    const existingItem = cart.find((item) => item.id === course.id);
   //    if (existingItem) {
   //       setCart(
   //          cart.map((item) =>
   //             item.id === course.id
   //                ? { ...item, quantity: item.quantity + 1 }
   //                : item
   //          )
   //       );
   //    } else {
   //       setCart([...cart, newCartItem]);
   //    }

   //    // Redirect to cart page
   //    router.push("/cart");
   // };
   const { addToCart } = useCart();
   const handleAddToCart = (course: Course) => {
      addToCart({
         id: course.id,
         title: course.title,
         instructor: course.instructor,
         price: course.price,
         thumbnail: course.thumbnail,
      });
      alert(`${course.title} has been added to your cart!`); // Replace with a toast library like react-toastify
      router.push("/cart");
   };

   return (
      <>
         {/* Header (unchanged) */}
         <header className="bg-white p-4">
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
                        defaultValue={query}
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              window.location.href = `/search?q=${e.currentTarget.value}`;
                           }
                        }}
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
                           <Image
                              className="rounded-full"
                              src={user.avatar || "/default-avatar.png"} // Fallback to a default avatar if none exists
                              alt={user.username || "User avatar"}
                              width={40}
                              height={40}
                           />

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

         {/* Main Content */}
         <div className="w-full min-h-screen bg-gray-100 font-sans">
            <main className="container mx-auto px-4 md:px-5 py-10">
               {/* Hero Section (unchanged, not a carousel) */}
               <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                     <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Learn from Experts, Anytime, Anywhere
                     </h1>
                     <p className="text-lg mb-6">
                        Discover thousands of online courses in programming, design, business, and
                        more with EduLearn Academy.
                     </p>
                     <Link
                        href="#courses"
                        className="inline-flex items-center bg-white text-primary-500 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Explore Courses"
                     >
                        Explore Courses
                        <ArrowRight className="ml-2" />
                     </Link>
                  </div>
                  <div className="md:w-1/2">
                     <Image
                        src={img1}
                        alt="Online learning illustration"
                        className="w-full h-64 object-cover rounded-lg"
                        width={img1.width}
                        height={img1.height}
                     />
                  </div>
               </section>

               {/* Featured Course Carousel */}
               <section className="mb-12">
                  <h2 className="p-2 rounded-lg text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-3 shadow-md">
                     Featured Courses
                  </h2>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={20}
                     slidesPerView={4}
                     navigation={{
                        prevEl: ".featured-course-prev",
                        nextEl: ".featured-course-next",
                     }}
                     pagination={{ clickable: true }}
                     className="relative"
                  >
                     {featuredCourses.map((course, index) => (
                        <SwiperSlide key={index}>
                           <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-col">
                              <Image
                                 src={course.image}
                                 alt={course.title}
                                 className="w-full h-48 object-cover"
                                 width={360}
                                 height={190}
                              />
                              <div className="p-6 flex-1">
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
                                 <h3 className="text-2xl font-bold text-gray-800 mb-2 h-16">
                                    {course.title}
                                 </h3>
                                 <p className="text-gray-600 mb-4">{course.description}</p>
                                 <div className="flex items-center mb-4">
                                    <span className="text-sm text-gray-600 mr-2">
                                       {course.rating}
                                    </span>
                                    <div className="flex">{renderRatingStars(course.rating)}</div>
                                    <span className="text-sm text-gray-600 ml-2">
                                       ({course.ratingsCount.toLocaleString()} ratings)
                                    </span>
                                 </div>
                                 <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-primary-500">
                                       ${course.price.toFixed(2)}
                                    </span>
                                    <Link
                                       href={course.link}
                                       className="inline-flex items-center bg-primary-500 text-white font-medium py-2 px-4 rounded-full hover:bg-primary-600 transition-colors"
                                       aria-label={`Enroll in ${course.title}`}
                                    >
                                       Enroll Now
                                       <ArrowRight className="ml-2" />
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                     <button
                        className="featured-course-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Previous course"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        className="featured-course-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Next course"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </Swiper>
               </section>

               {/* Featured Courses 2 */}
               <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Courses</h2>
                  <div className="space-y-6">
                     {coursesData.map((course) => (
                        <div
                           key={course.id}
                           className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
                        >
                           {/* Thumbnail */}
                           <div className="md:w-1/4">
                              <Image
                                 src={img1}
                                 alt={course.title}
                                 className="w-full h-32 object-cover rounded-lg"
                                 width={128}
                                 height={128}
                              />
                           </div>

                           {/* Course Details */}
                           <Link href={`/course-detail/${course.id}`} className="block">
                              <h2 className="text-lg font-semibold text-gray-800">
                                 {course.title}
                              </h2>
                              <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>
                              <div className="flex items-center mb-2">
                                 <span className="text-sm font-medium text-yellow-500 mr-1">
                                    {course.rating}
                                 </span>
                                 <span className="text-yellow-500">★</span>
                                 <span className="text-sm text-gray-600 ml-2">
                                    ({course.students.toLocaleString()} students)
                                 </span>
                              </div>
                              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                 {course.description}
                              </p>
                              <div className="flex items-center justify-between">
                                 <span className="text-sm text-gray-700">
                                    {course.level} • {course.category}
                                 </span>
                                 <div className="flex items-center gap-2">
                                    <span className="text-lg font-semibold text-gray-800">
                                       {course.price === 0 ? "Free" : `$${course.price}`}
                                    </span>
                                    <button
                                       onClick={() => handleAddToCart(course)}
                                       className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                    >
                                       Add to Cart
                                    </button>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </div>
               </section>
               {/* Popular Categories Carousel */}
               <section className="mb-12">
                  <h2 className="p-2 rounded-lg text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-3 shadow-md">
                     Popular Categories
                  </h2>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={20}
                     slidesPerView={3}
                     navigation={{
                        prevEl: ".categories-prev",
                        nextEl: ".categories-next",
                     }}
                     pagination={{ clickable: true }}
                     className="relative"
                  >
                     {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                           <Link
                              href={category.link}
                              className="bg-white shadow-md rounded-lg p-6 flex items-center hover:shadow-lg transition-shadow"
                              aria-label={`${category.title} Courses`}
                           >
                              {category.icon}
                              <div>
                                 <h3 className="text-lg font-semibold text-gray-800">
                                    {category.title}
                                 </h3>
                                 <p className="text-sm text-gray-600">{category.description}</p>
                              </div>
                           </Link>
                        </SwiperSlide>
                     ))}
                     <button
                        className="categories-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Previous category"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        className="categories-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Next category"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </Swiper>
               </section>

               {/* Why Choose Us Carousel */}
               <section className="mb-12">
                  <h2 className="p-2 rounded-lg text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-3 shadow-md">
                     Why Choose EduLearn Academy?
                  </h2>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={20}
                     slidesPerView={3}
                     navigation={{
                        prevEl: ".why-choose-prev",
                        nextEl: ".why-choose-next",
                     }}
                     pagination={{ clickable: true }}
                     className="relative"
                  >
                     {whyChooseItems.map((item, index) => (
                        <SwiperSlide key={index}>
                           <div className="bg-white shadow-md rounded-lg p-6 text-center">
                              {item.icon}
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                 {item.title}
                              </h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                           </div>
                        </SwiperSlide>
                     ))}
                     <button
                        className="why-choose-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Previous benefit"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        className="why-choose-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Next benefit"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </Swiper>
               </section>

               {/* Testimonials Carousel */}
               <section className="mb-12">
                  <h2 className="p-2 rounded-lg text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-white mb-3 shadow-md">
                     What Our Students Say
                  </h2>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={20}
                     slidesPerView={3}
                     navigation={{
                        prevEl: ".testimonials-prev",
                        nextEl: ".testimonials-next",
                     }}
                     pagination={{ clickable: true }}
                     className="relative"
                  >
                     {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                           <div className="bg-white shadow-md rounded-lg p-6">
                              <div className="flex items-center mb-4">
                                 <div className="flex">{renderRatingStars(testimonial.rating)}</div>
                                 <span className="text-sm text-gray-600 ml-2">
                                    {testimonial.rating}
                                 </span>
                              </div>
                              <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                              <p className="text-sm font-semibold text-gray-800">
                                 {testimonial.author}
                              </p>
                           </div>
                        </SwiperSlide>
                     ))}
                     <button
                        className="testimonials-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Previous testimonial"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        className="testimonials-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                        aria-label="Next testimonial"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </Swiper>
               </section>
            </main>
         </div>
         {/* Footer (unchanged) */}
         <footer className="bg-white py-10">
            <div className="container mx-auto px-4 md:px-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Information */}
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                           <GraduationCap aria-label="EduLearn Academy Logo" />
                        </div>
                        <div className="text-xl font-bold">EduLearn Academy</div>
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
                              href="#"
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
                  <div>
                     &copy; {new Date().getFullYear()} EduLearn Academy. All rights reserved.
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}
