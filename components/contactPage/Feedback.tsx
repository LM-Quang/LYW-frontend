import Link from "next/link";
import React from "react";

const Feedback = () => {
   return (
      <div className="bg-white rounded-xl p-6 shadow-md mb-10">
         <h2 className="text-4xl font-bold mb-5 text-center">We&apos;d Love to Hear From You</h2>
         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you have a question about courses, pricing, or anything else, our team is ready
            to answer all your questions.
         </p>

         <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
               href="#sendMessage"
               className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center"
            >
               Send Us a Message
            </Link>
            {/* Start Live Chat */}
            {/* Schedule a Call */}
            {/* Visit Help Center */}
         </div>
      </div>
   );
};

export default Feedback;
