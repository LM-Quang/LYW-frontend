import React from "react";
import { faqs } from "@/utils/data";

const FAQ = () => {
   return (
      <div className="bg-white rounded-xl p-6 shadow-md mb-10">
         <h2 className="text-3xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>

         <div className="space-y-4">
            {faqs.map((faq, index) => {
               return (
                  <details
                     key={index}
                     className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                     <summary className="font-medium text-gray-800 cursor-pointer">
                        {faq.question}
                     </summary>
                     <div className="mt-3 text-gray-600">
                        <p>{faq.answer}</p>
                     </div>
                  </details>
               );
            })}
         </div>
      </div>
   );
};

export default FAQ;
