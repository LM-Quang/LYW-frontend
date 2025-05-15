"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CourseContext"; // Assuming CartContext is set up
import { useRouter } from "next/navigation";
import logo1 from "@/assets/logo-1.png";
import Link from "next/link";
import Image from "next/image";

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

// Sample course data (same as previous components)
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
   {
      id: "4",
      title: "Advanced React and Redux",
      instructor: "Emily Davis",
      category: "Web Development",
      level: "Advanced",
      price: 99.99,
      rating: 4.9,
      description: "Deep dive into React and Redux for building scalable web applications.",
      thumbnail:
         "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 4500,
   },
   {
      id: "5",
      title: "Digital Marketing Masterclass",
      instructor: "Lisa Green",
      category: "Marketing",
      level: "All Levels",
      price: 59.99,
      rating: 4.5,
      description:
         "Learn SEO, social media marketing, and email marketing in this all-in-one course.",
      thumbnail:
         "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 9500,
   },
];

export default function CoursesPage() {
   //    const [categories, setCategories] = useState<string[]>([]);
   // const [courses, setCourses] = useState<Course[]>(coursesData);

   // useEffect(() => {
   //    const fetchData = async () => {
   //       // Fetch Courses Data API
   //       const categoriesRes = await fetch("/api/categories");
   //       const categoriesData = await categoriesRes.json();
   //       setCategories(categoriesData);

   //       const coursesRes = await fetch("/api/courses");
   //       const coursesData = await coursesRes.json();
   //       setCourses(coursesData);
   //    };
   //    fetchData();
   // }, []);

   // const filteredCourses = courses.filter(
   //    (course) => course.category === selectedCategory
   // );

   const { cart, addToCart } = useCart();
   const router = useRouter();

   // List of categories (derived from course data)
   const categories = Array.from(new Set(coursesData.map((course) => course.category)));

   // State for selected category
   const [selectedCategory, setSelectedCategory] = useState(categories[0] || "Web Development");

   // Filter courses by selected category
   const filteredCourses = coursesData.filter((course) => course.category === selectedCategory);

   // Handle adding to cart
   const handleAddToCart = (course: Course) => {
      addToCart({
         // id: course.id,
         id: 1,
         title: course.title,
         instructor: course.instructor,
         price: course.price,
         thumbnail: course.thumbnail,
      });
      router.push("/cart");
   };

   const [page, setPage] = useState(1);
   const coursesPerPage = 2;
   const paginatedCourses = filteredCourses.slice(
      (page - 1) * coursesPerPage,
      page * coursesPerPage
   );

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {/* Header */}
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
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              window.location.href = `/search?q=${e.currentTarget.value}`;
                           }
                        }}
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        search
                     </span>
                  </div>
               </div>
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center gap-2 text-sm">
                     <li>
                        <Link
                           href="/"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <a
                           href="/search"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Courses
                        </a>
                     </li>
                     <li>
                        <a
                           href="/categories"
                           className="px-3 py-1 font-medium bg-primary-50 text-primary-600 rounded hover:bg-primary-100 transition-colors"
                        >
                           Categories
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
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
                           href="/cart"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors relative"
                        >
                           <span className="material-symbols-outlined">shopping_cart</span>
                           {cart.length > 0 && (
                              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                 {cart.length}
                              </span>
                           )}
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

         {/* Main Content: Categories and Courses */}
         <main className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
               Browse by Category
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
               {/* Category Sidebar */}
               <div className="lg:w-1/4">
                  <div className="hidden lg:block bg-white rounded-lg shadow-md p-6 sticky top-24">
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
                     <ul className="space-y-2">
                        {categories.map((category) => (
                           <li key={category}>
                              <button
                                 onClick={() => setSelectedCategory(category)}
                                 className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    selectedCategory === category
                                       ? "bg-primary-50 text-primary-600"
                                       : "text-gray-700 hover:bg-gray-100"
                                 }`}
                              >
                                 {category}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Courses List */}
               <div className="lg:w-3/4">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                     {selectedCategory} Courses
                  </h2>
                  {filteredCourses.length > 0 ? (
                     <div className="space-y-6">
                        {filteredCourses.map((course) => (
                           <div
                              key={course.id}
                              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
                           >
                              {/* Thumbnail */}
                              <div className="md:w-1/4">
                                 <Image
                                    src={logo1}
                                    alt={course.title}
                                    className="w-full h-32 object-cover rounded-lg"
                                    width={128}
                                    height={128}
                                 />
                              </div>

                              {/* Course Details */}
                              <div className="flex-1">
                                 <h2 className="text-lg font-semibold text-gray-800">
                                    {course.title}
                                 </h2>
                                 <p className="text-sm text-gray-600 mb-2">
                                    By {course.instructor}
                                 </p>
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
                              </div>
                           </div>
                        ))}
                        <div className="mt-8 flex justify-center space-x-2">
                           <button
                              onClick={() => setPage((p) => Math.max(1, p - 1))}
                              disabled={page === 1}
                              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                           >
                              Prev
                           </button>
                           <span className="px-4 py-2">Page {page}</span>
                           <button
                              onClick={() => setPage((p) => p + 1)}
                              disabled={paginatedCourses.length < coursesPerPage}
                              className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50"
                           >
                              Next
                           </button>
                        </div>
                     </div>
                  ) : (
                     <div className="text-center py-10">
                        <h2 className="text-xl font-semibold text-gray-800">
                           No Courses Available
                        </h2>
                        <p className="text-gray-600">
                           There are currently no courses in this category.
                        </p>
                     </div>
                  )}
               </div>
            </div>
         </main>

         {/* Footer */}
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
                     <div className="flex">
                        <input
                           type="email"
                           placeholder="Your email"
                           className="px-3 py-2 rounded-l-lg text-gray-800 w-full text-sm focus:outline-none"
                        />
                        <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors text-sm">
                           Subscribe
                        </button>
                     </div>
                  </div>
               </div>

               <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-400 text-sm mb-4 md:mb-0">
                     © 2023 EduLearn Academy. All rights reserved.
                  </div>
                  <div className="flex space-x-4">
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">facebook</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">twitter</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">youtube</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">language</span>
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
