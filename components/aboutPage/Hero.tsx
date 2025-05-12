import Link from "next/link";
import React from "react";

const Hero = () => {
   return (
      <section className="bg-primary-50 rounded-xl p-8 mb-8 text-center">
         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
         <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            At Learn Your Way, we are on a mission to make high-quality education accessible to
            everyone, everywhere. Join us in transforming the way the world learns.
         </p>
         <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
         >
            Explore Courses
         </Link>
      </section>
   );
};

export default Hero;
