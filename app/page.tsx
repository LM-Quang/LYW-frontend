import React from "react";
import Hero from "@/components/Hero";
import FeaturedCourse from "@/components/FeaturedCourse";
import PopularCategory from "@/components/PopularCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
   return (
      <div className="w-full min-h-screen font-sans bg-gray-50">
         <div className="px-4 md:px-5 py-10">
            {/* Hero Section */}
            <Hero />

            {/* Featured Course Carousel */}
            <FeaturedCourse />

            {/* Popular Categories Carousel */}
            <PopularCategory />

            {/* Why Choose Us Carousel */}
            <WhyChooseUs />

            {/* Testimonials Carousel */}
            <Testimonials />

            {/* Price Plans Section (For Future)*/}
         </div>
      </div>
   );
}
