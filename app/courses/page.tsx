"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { KEYWORD_PARAMS, CATEGORY_PARAMS, TAG_PARAMS } from "@/utils/constant";
import { ALL_COURSES, CourseOverviewCard } from "@/utils/data";
import { X } from "lucide-react";
import CourseCard from "@/components/common/CourseCard";

export default function CoursesPage() {
   const searchParams = useSearchParams();
   const keyword = searchParams.get(KEYWORD_PARAMS) || "";
   const category = searchParams.get(CATEGORY_PARAMS) || "";
   const tag = searchParams.get(TAG_PARAMS) || "";

   // State for filters
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
   const [priceFilter, setPriceFilter] = useState<string>("all");
   const [minRating, setMinRating] = useState<number>(0);
   const [filteredCourses, setFilteredCourses] = useState<CourseOverviewCard[]>(ALL_COURSES);

   // Filter courses based on selected filters
   useEffect(() => {
      let filtered = ALL_COURSES.filter(
         (course) =>
            course.title.toLowerCase().includes(keyword.toLowerCase()) ||
            course.description.toLowerCase().includes(keyword.toLowerCase()) ||
            course.category.toLowerCase().includes(keyword.toLowerCase()) ||
            course.category.toLowerCase().includes(category) ||
            course.tag?.name.toLowerCase().includes(tag)
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
   }, [selectedCategories, selectedLevels, priceFilter, minRating, keyword, category, tag]);

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
   const coursesPerPage = 9;
   const [page, setPage] = useState(1);
   const paginatedCourses = filteredCourses.slice(
      (page - 1) * coursesPerPage,
      page * coursesPerPage
   );

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <p>Keyword: {keyword}</p>
         <p>Category: {category}</p>
         <p>Tag: {tag}</p>
         <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar: Filters */}
            <div className="lg:w-1/4 block">
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
               {/* Search Results Header */}
               <div className="mb-6">
                  <div className="flex items-center">
                     <h2 className="text-2xl font-bold text-gray-800">Results for</h2>
                     {keyword && (
                        <div className=" ml-2 flex items-center bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                           <span className="mr-1">Keyword: {keyword}</span>
                           <button className="cursor-pointer">
                              <X className="ml-1 w-4 h-4" />
                           </button>
                        </div>
                     )}
                     {category && (
                        <div className=" ml-2 flex items-center bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                           <span className="mr-1">Category: {category}</span>
                           <button className="cursor-pointer">
                              <X className="ml-1 w-4 h-4" />
                           </button>
                        </div>
                     )}
                     {tag && (
                        <div className=" ml-2 flex items-center bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                           <span className="mr-1">Tag: {tag}</span>
                           <button className="cursor-pointer">
                              <X className="ml-1 w-4 h-4" />
                           </button>
                        </div>
                     )}
                  </div>
                  <p className="text-gray-600">{filteredCourses.length} courses found</p>
               </div>

               {/* Course List */}
               {paginatedCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {paginatedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
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
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 disabled:hover:bg-gray-200 cursor-pointer"
                     >
                        Previous
                     </button>
                     <span className="px-4 py-2">Page {page}</span>
                     <button
                        onClick={() => setPage((p) => p + 1)}
                        disabled={page * coursesPerPage >= filteredCourses.length}
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:hover:bg-primary-500 cursor-pointer"
                     >
                        Next
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
