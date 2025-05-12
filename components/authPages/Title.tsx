import { GraduationCap } from "lucide-react";
import React from "react";

const Title = ({ title }: { title: string }) => {
   return (
      <div>
         <div className="flex items-center justify-center">
            <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
               <GraduationCap aria-label="EduLearn Academy Logo" />
            </div>
            <h2 className="text-3xl font-bold text-primary-500">Learn Your Way</h2>
         </div>
         <h3 className="mt-6 text-center text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
   );
};

export default Title;
