import { MapPin } from "lucide-react";
import React from "react";

const OfficeLocation = () => {
   return (
      <div className="bg-white rounded-xl p-6 mb-10">
         <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Global Offices</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition transform hover:-translate-y-1">
               <div className="flex items-center mb-4">
                  <MapPin className="text-2xl text-primary-500 mr-3" />
                  <h3 className="font-bold text-gray-800">North America</h3>
               </div>
               <p className="text-gray-600 mb-3">
                  123 Education Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Tel:</span> +1 (555) 123-4567
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Email:</span> na@edulearn.com
               </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition transform hover:-translate-y-1">
               <div className="flex items-center mb-4">
                  <MapPin className="text-2xl text-primary-500 mr-3" />
                  <h3 className="font-bold text-gray-800">Europe</h3>
               </div>
               <p className="text-gray-600 mb-3">
                  45 Learning Street
                  <br />
                  London, EC1A 1BB
                  <br />
                  United Kingdom
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Tel:</span> +44 20 7123 4567
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Email:</span> eu@edulearn.com
               </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition transform hover:-translate-y-1">
               <div className="flex items-center mb-4">
                  <MapPin className="text-2xl text-primary-500 mr-3" />
                  <h3 className="font-bold text-gray-800">Asia Pacific</h3>
               </div>
               <p className="text-gray-600 mb-3">
                  88 Knowledge Tower
                  <br />
                  Singapore, 018956
                  <br />
                  Singapore
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Tel:</span> +65 6123 4567
               </p>
               <p className="text-gray-600">
                  <span className="font-medium">Email:</span> apac@edulearn.com
               </p>
            </div>
         </div>
      </div>
   );
};

export default OfficeLocation;
