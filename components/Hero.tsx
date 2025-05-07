import React from "react";
import img1 from "@/assets/img-1.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
   return (
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center">
         <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
               Learn from Experts, Anytime, Anywhere
            </h1>
            <p className="text-lg mb-6">
               Discover thousands of online courses in programming, design, business, and more with
               EduLearn Academy.
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
   );
};

export default Hero;
