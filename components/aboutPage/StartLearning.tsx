import Link from "next/link";
import React from "react";

const StartLearning = () => {
   return (
      <section className="bg-primary-50 rounded-xl p-8 text-center">
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Learning?
         </h2>
         <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of learners worldwide and take the first step towards achieving your
            goals with EduLearn Academy.
         </p>
         <div className="flex justify-center gap-4">
            <Link
               href="/courses"
               className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
               Explore Courses
            </Link>
            <Link
               href="/contact"
               className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-100 transition-colors"
            >
               Contact Us
            </Link>
         </div>
      </section>
   );
};

export default StartLearning;
