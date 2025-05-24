import { Check } from "lucide-react";
import React from "react";

// Hasn't been decided where to put
const PricePlan = () => {
   return (
      <section className="mb-16 container mx-auto">
         <h2 className=" flex items-center justify-center p-2 rounded-lg text-4xl font-bold gradient-to-r mb-3">
            Pricing Plans
         </h2>
         <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Choose the plan that best fits your teaching goals. Whether you&apos;re an individual
            instructor or a business, we have options to support your success.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Individual Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200">
               <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Individual Instructor
               </h3>
               <p className="text-gray-600 text-center mb-6">
                  Perfect for solo educators looking to share their expertise.
               </p>
               <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary-600">$29</span>
                  <span className="text-gray-500">/month</span>
               </div>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Unlimited course creation</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">70% revenue share on sales</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Access to instructor dashboard</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Community support</span>
                  </li>
               </ul>
               <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  Get Started
               </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200">
               <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Business & Teams
               </h3>
               <p className="text-gray-600 text-center mb-6">
                  Ideal for organizations and teams creating multiple courses.
               </p>
               <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary-600">$99</span>
                  <span className="text-gray-500">/month</span>
               </div>
               <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Everything in Individual Plan</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Team accounts (up to 5 users)</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                     <Check className="text-primary-600 mr-3" />
                     <span className="text-gray-600">Priority support</span>
                  </li>
               </ul>
               <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                  Get Started
               </button>
            </div>
         </div>
      </section>
   );
};

export default PricePlan;
