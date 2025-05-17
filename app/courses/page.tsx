"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logo1 from "@/assets/logo-1.png";
import renderStars from "@/components/RenderStars";
import Link from "next/link";
import { QUERY_PARAMS } from "@/utils/constant";

// Interface for a Course
interface Course {
   id: string;
   title: string;
   instructor: string;
   category: string;
   level: string;
   price: number; // 0 for free courses
   rating: number; // Out of 5
   description: string;
   thumbnail: string;
   students: number; // Number of enrolled students
}

// Sample course data (replace with API data in a real app)
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
      thumbnail: "/assets/img-1.jpg",
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
      thumbnail: "/assets/img-1.jpg",
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
      thumbnail: "/assets/img-1.jpg",
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
      thumbnail: "/assets/img-1.jpg",
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
      thumbnail: "/assets/img-1.jpg",
      students: 9500,
   },
];

export default function CoursesPage() {
   const searchParams = useSearchParams();
   const query = searchParams.get(QUERY_PARAMS) || "";

   // State for filters
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
   const [priceFilter, setPriceFilter] = useState<string>("all");
   const [minRating, setMinRating] = useState<number>(0);
   const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle

   // Filter courses based on selected filters
   useEffect(() => {
      let filtered = coursesData.filter(
         (course) =>
            course.title.toLowerCase().includes(query.toLowerCase()) ||
            course.description.toLowerCase().includes(query.toLowerCase()) ||
            course.category.toLowerCase().includes(query.toLowerCase())
      );

      // Apply category filter
      if (selectedCategories.length > 0) {
         filtered = filtered.filter((course) => selectedCategories.includes(course.category));
      }

      // Apply level filter
      if (selectedLevels.length > 0) {
         filtered = filtered.filter((course) => selectedLevels.includes(course.level));
      }

      // Apply price filter
      if (priceFilter === "free") {
         filtered = filtered.filter((course) => course.price === 0);
      } else if (priceFilter === "paid") {
         filtered = filtered.filter((course) => course.price > 0);
      }

      // Apply rating filter
      filtered = filtered.filter((course) => course.rating >= minRating);

      setFilteredCourses(filtered);
   }, [query, selectedCategories, selectedLevels, priceFilter, minRating]);

   // Clear all filters
   const clearFilters = () => {
      setSelectedCategories([]);
      setSelectedLevels([]);
      setPriceFilter("all");
      setMinRating(0);
   };

   // Categories and levels for filter options
   const categories = ["Web Development", "Data Science", "Marketing", "Design"];
   const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

   // Replace the hard-coded coursesData with an API call to fetch courses based on the search query and filters
   // useEffect(() => {
   //    const fetchCourses = async () => {
   //       const response = await fetch(
   //          `/api/courses?query=${query}&categories=${selectedCategories.join(",")}&levels=${selectedLevels.join(",")}&price=${priceFilter}&minRating=${minRating}`
   //       );
   //       const data = await response.json();
   //       setFilteredCourses(data);
   //    };
   //    fetchCourses();
   // }, [query, selectedCategories, selectedLevels, priceFilter, minRating]);

   // Implement proper pagination instead of a "Load More" button
   const [page, setPage] = useState(1);
   const coursesPerPage = 5;
   const paginatedCourses = filteredCourses.slice(0, page * coursesPerPage);

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <main className="container mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar: Filters */}
            <div className={`lg:w-1/4 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
               <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
                     <button
                        onClick={clearFilters}
                        className="text-primary-600 hover:text-primary-700 text-sm"
                     >
                        Clear All
                     </button>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                     <div className="space-y-2">
                        {categories.map((category) => (
                           <div key={category} className="flex items-center">
                              <input
                                 type="checkbox"
                                 id={`category-${category}`}
                                 checked={selectedCategories.includes(category)}
                                 onChange={() => {
                                    setSelectedCategories((prev) =>
                                       prev.includes(category)
                                          ? prev.filter((c) => c !== category)
                                          : [...prev, category]
                                    );
                                 }}
                                 className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                              />
                              <label
                                 htmlFor={`category-${category}`}
                                 className="ml-2 text-sm text-gray-700"
                              >
                                 {category}
                              </label>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Level Filter */}
                  <div className="mb-6">
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Level</h3>
                     <div className="space-y-2">
                        {levels.map((level) => (
                           <div key={level} className="flex items-center">
                              <input
                                 type="checkbox"
                                 id={`level-${level}`}
                                 checked={selectedLevels.includes(level)}
                                 onChange={() => {
                                    setSelectedLevels((prev) =>
                                       prev.includes(level)
                                          ? prev.filter((l) => l !== level)
                                          : [...prev, level]
                                    );
                                 }}
                                 className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                              />
                              <label
                                 htmlFor={`level-${level}`}
                                 className="ml-2 text-sm text-gray-700"
                              >
                                 {level}
                              </label>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Price Filter */}
                  <div className="mb-6">
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Price</h3>
                     <div className="space-y-2">
                        <div className="flex items-center">
                           <input
                              type="radio"
                              id="price-all"
                              name="price"
                              value="all"
                              checked={priceFilter === "all"}
                              onChange={() => setPriceFilter("all")}
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                           />
                           <label htmlFor="price-all" className="ml-2 text-sm text-gray-700">
                              All
                           </label>
                        </div>
                        <div className="flex items-center">
                           <input
                              type="radio"
                              id="price-free"
                              name="price"
                              value="free"
                              checked={priceFilter === "free"}
                              onChange={() => setPriceFilter("free")}
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                           />
                           <label htmlFor="price-free" className="ml-2 text-sm text-gray-700">
                              Free
                           </label>
                        </div>
                        <div className="flex items-center">
                           <input
                              type="radio"
                              id="price-paid"
                              name="price"
                              value="paid"
                              checked={priceFilter === "paid"}
                              onChange={() => setPriceFilter("paid")}
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                           />
                           <label htmlFor="price-paid" className="ml-2 text-sm text-gray-700">
                              Paid
                           </label>
                        </div>
                     </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Minimum Rating</h3>
                     <div className="flex items-center space-x-2">
                        <input
                           type="range"
                           min="0"
                           max="5"
                           step="0.5"
                           value={minRating}
                           onChange={(e) => setMinRating(Number(e.target.value))}
                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">{minRating} stars</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Content: Course List */}
            <div className="lg:w-3/4">
               {/* Toggle Button for Sidebar on Mobile */}
               <button
                  className="lg:hidden mb-4 p-2 bg-primary-500 text-white rounded-lg flex items-center"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
               >
                  <span className="material-symbols-outlined mr-2">filter_list</span>
                  {isSidebarOpen ? "Hide Filters" : "Show Filters"}
               </button>

               {/* Search Results Header */}
               <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-800">
                     Results for &quot;{query || "All Courses"}&quot;
                  </h1>
                  <p className="text-gray-600">{filteredCourses.length} courses found</p>
               </div>

               {/* Course List */}
               {filteredCourses.length > 0 ? (
                  <div className="space-y-6">
                     {filteredCourses.map((course) => (
                        <div
                           key={course.id}
                           className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition-shadow"
                        >
                           {/* Thumbnail */}
                           <div className="md:w-1/4 relative">
                              <Image
                                 src={logo1}
                                 alt={course.title}
                                 className="w-full h-32 object-cover rounded-lg"
                                 width={128}
                                 height={128}
                              />
                              <p className="absolute left-0 top-0 p-1 rounded-lg bg-primary-500 text-white">
                                 Bestseller
                              </p>
                           </div>

                           {/* Course Details */}
                           <div className="flex-1">
                              <div className="flex items-center justify-between">
                                 <h2 className="text-lg font-semibold text-gray-800">
                                    {course.title}
                                 </h2>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>
                              <div className="flex items-center mb-2">
                                 <span className="text-sm font-medium text-yellow-500 mr-1">
                                    {course.rating}
                                 </span>
                                 {renderStars(course.rating)}
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
                                 <div>
                                    <span className="text-lg font-semibold text-gray-800">
                                       {course.price === 0 ? "Free" : `$${course.price}`}
                                    </span>
                                    <Link
                                       className="ml-3 p-2 bg-primary-500 text-white rounded-lg"
                                       href={`/course-detail/${course.id}`}
                                    >
                                       Add to Cart
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="text-center py-10">
                     <h2 className="text-xl font-semibold text-gray-800">No courses found</h2>
                     <p className="text-gray-600">Try adjusting your search query or filters.</p>
                  </div>
               )}

               {/* Pagination (Simplified) */}
               {filteredCourses.length > 0 && (
                  <div className="mt-8 flex justify-center space-x-2">
                     <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                     >
                        Previous
                     </button>
                     <span className="px-4 py-2">Page {page}</span>
                     <button
                        onClick={() => setPage((p) => p + 1)}
                        disabled={paginatedCourses.length >= filteredCourses.length}
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50"
                     >
                        Next
                     </button>
                  </div>
               )}
            </div>
         </main>
      </div>
   );
}
