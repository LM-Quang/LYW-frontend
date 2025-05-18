import React from "react";
import { Award, Video, Infinity } from "lucide-react";

const whyChooseItems = [
   {
      title: "On-Demand Learning",
      description: "Access 67+ hours of video content anytime, anywhere.",
      icon: <Video className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Earn Certificates",
      description: "Get a certificate of completion for every course.",
      icon: <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
   {
      title: "Lifetime Access",
      description: "Learn at your own pace with full lifetime access.",
      icon: <Infinity className="w-12 h-12 text-primary-500 mx-auto mb-4" />,
   },
];

const WhyChooseUs = () => {
   return (
      <section className="mb-12 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Why Choose EduLearn Academy?
         </h2>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
               <div key={index} className="lg:col-span-1">
                  <div className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-colors">
                     {item.icon}
                     <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default WhyChooseUs;
