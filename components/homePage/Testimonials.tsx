import React from "react";
import logo from "@/assets/logo-1.png";
import Image from "next/image";

const testimonials = [
   {
      text: "The Complete JavaScript Course was a game-changer! John Smith's teaching style is engaging, and the projects helped me build a strong portfolio.",
      author: "Sarah Liu",
      jobStatus: "Web Developer",
      avatar: logo.src,
   },
   {
      text: "I learned so much from this course. The real-world applications and downloadable resources were incredibly helpful.",
      author: "Michael Jackson",
      jobStatus: "Software Engineer",
      avatar: logo.src,
   },
   {
      text: "I learned so much from this course. The real-world applications and downloadable resources were incredibly helpful.",
      author: "Minh Quang",
      jobStatus: "System Architect",
      avatar: logo.src,
   },
];

const Testimonials = () => {
   return (
      <section className="mb-12 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            What Our Students Say
         </h2>
         <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
               <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-colors"
               >
                  <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center justify-start gap-1">
                     <Image
                        src={testimonial.avatar}
                        width={50}
                        height={50}
                        alt="Author"
                        className="rounded-full"
                     />
                     <div>
                        <p className="text-sm font-semibold text-gray-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                           <i>{testimonial.jobStatus}</i>
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Testimonials;
