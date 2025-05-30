"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { KEYWORD_PARAMS, CATEGORY_PARAMS, TAG_PARAMS } from "@/utils/constant";
import { ALL_COURSES, Category, CourseLevel, CourseOverviewCard } from "@/utils/data";
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
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar: Filters */}
            <div className="lg:w-1/4 block">
               <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>
                     <button
                        onClick={clearFilters}
                        className="text-primary-600 hover:text-primary-700 text-sm cursor-pointer"
                     >
                        Clear All
                     </button>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                     <div className="space-y-2">
                        {Object.values(Category).map((value, index) => {
                           return (
                              <div key={index} className="flex items-center">
                                 <input
                                    type="checkbox"
                                    id={`category-${value}`}
                                    checked={selectedCategories.includes(value)}
                                    onChange={() => {
                                       setSelectedCategories((prev) =>
                                          prev.includes(value)
                                             ? prev.filter((c) => c !== value)
                                             : [...prev, value]
                                       );
                                    }}
                                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 cursor-pointer"
                                 />
                                 <label
                                    htmlFor={`category-${value}`}
                                    className="ml-2 text-sm text-gray-700"
                                 >
                                    {value}
                                 </label>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  {/* Level Filter */}
                  <div className="mb-6">
                     <h3 className="text-sm font-medium text-gray-700 mb-3">Level</h3>
                     <div className="space-y-2">
                        {Object.values(CourseLevel).map((value, index) => {
                           return (
                              <div key={index} className="flex items-center">
                                 <input
                                    type="checkbox"
                                    id={`level-${value}`}
                                    checked={selectedLevels.includes(value)}
                                    onChange={() => {
                                       setSelectedLevels((prev) =>
                                          prev.includes(value)
                                             ? prev.filter((l) => l !== value)
                                             : [...prev, value]
                                       );
                                    }}
                                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500 cursor-pointer"
                                 />
                                 <label
                                    htmlFor={`level-${value}`}
                                    className="ml-2 text-sm text-gray-700"
                                 >
                                    {value}
                                 </label>
                              </div>
                           );
                        })}
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
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500 cursor-pointer"
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
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500 cursor-pointer"
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
                              className="w-4 h-4 text-primary-600 focus:ring-primary-500 cursor-pointer"
                           />
                           <label htmlFor="price-paid" className="ml-2 text-sm text-gray-700">
                              Paid
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Content: Course List */}
            <div className="lg:w-3/4">
               <div className="bg-white rounded-lg shadow-md p-6">
                  {/* Search Results Header */}
                  <div className="mb-5">
                     <div className="flex items-center gap-5">
                        <h2 className="text-2xl font-bold text-gray-800">Results for</h2>
                        {keyword && (
                           <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                              Keyword: {keyword}
                           </span>
                        )}
                        {category && (
                           <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                              Category: {category}
                           </span>
                        )}
                        {tag && (
                           <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                              Tag: {tag}
                           </span>
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
      </div>
   );
}
