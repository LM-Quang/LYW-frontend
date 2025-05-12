import React from "react";
import { PersonStanding, Star, Users } from "lucide-react";

// Core values
const values = [
   {
      title: "Accessibility",
      description: "We believe education should be available to everyone, everywhere.",
      icon: <PersonStanding className="text-primary-500 mx-auto w-8 h-8" />,
   },
   {
      title: "Quality",
      description: "Our courses are designed by experts to ensure top-notch learning experiences.",
      icon: <Star className="text-primary-500 mx-auto w-8 h-8" />,
   },
   {
      title: "Community",
      description:
         "Join a global community of learners and educators to share knowledge and grow together.",
      icon: <Users className="text-primary-500 mx-auto w-8 h-8" />,
   },
];

const OurValues = () => {
   return (
      <section className="mb-12">
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Values
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
               <div key={value.title} className="bg-white rounded-lg shadow-md p-6 text-center">
                  {value.icon}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default OurValues;
