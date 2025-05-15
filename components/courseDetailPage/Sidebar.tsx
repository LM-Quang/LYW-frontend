import React from "react";
import {
   Download,
   FileText,
   Heart,
   Infinity,
   Share,
   ShoppingCart,
   SquareTerminal,
   Video,
} from "lucide-react";

const Sidebar = ({
   setIsClicked,
}: {
   setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
   return (
      <div className="lg:col-span-1">
         <div className="sticky top-2.5">
            {/* Course Price */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
               <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                     <div className="text-3xl font-bold">$94.99</div>
                     <div className="text-sm text-gray-500 line-through">$199.99</div>
                  </div>
                  <div className="text-sm text-red-600 font-medium mb-4">
                     53% off - 2 days left at this price!
                  </div>

                  <div
                     className="w-full py-3 bg-primary-500 text-white rounded-lg mb-3 font-medium hover:bg-primary-600 transition-colors transform hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                     onClick={() => {
                        setIsClicked(true);
                     }}
                  >
                     <ShoppingCart className="mr-2" />
                     Add to Cart
                  </div>

                  <div className="text-center text-sm text-gray-500 mb-4">
                     30-Day Money-Back Guarantee
                  </div>

                  <div className="mb-2">
                     <h4 className="font-semibold">This course includes:</h4>
                     <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                           <Video className="text-gray-500 mr-2" />
                           <span>42 hours on-demand video</span>
                        </li>
                        <li className="flex items-center text-sm">
                           <FileText className="text-gray-500 mr-2" />
                           <span>85 articles</span>
                        </li>
                        <li className="flex items-center text-sm">
                           <Download className="text-gray-500 mr-2" />
                           <span>120 downloadable resources</span>
                        </li>
                        <li className="flex items-center text-sm">
                           <SquareTerminal className="text-gray-500 mr-2" />
                           <span>25 coding exercises</span>
                        </li>
                        <li className="flex items-center text-sm">
                           <Infinity className="text-gray-500 mr-2" />
                           <span>Full lifetime access</span>
                        </li>
                     </ul>
                  </div>

                  {/* Coupon */}
                  <div>
                     <h4 className="font-semibold mb-2">Coupon:</h4>
                     <div className="flex">
                        <input
                           type="text"
                           placeholder="Enter Coupon"
                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm mr-2"
                           aria-label="Search courses"
                        />
                        <button className="p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer">
                           Apply
                        </button>
                     </div>
                  </div>

                  {/* Share */}
                  <div className="flex justify-center mt-6 space-x-4">
                     <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                        <Heart className="mr-1" />
                        Like
                     </button>
                     <button className="text-gray-500 hover:text-primary-500 transition-colors text-sm flex items-center cursor-pointer">
                        <Share className="mr-1" />
                        Share
                     </button>
                  </div>
               </div>
            </div>

            {/* Course Statistics */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
               <div className="p-5">
                  <h3 className="font-semibold text-lg mb-3">Course Statistics</h3>
                  <div className="space-y-3">
                     <div className="flex items-center justify-between">
                        <span className="text-gray-600">Enrollment Status</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                           Active
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-600">Last Updated</span>
                        <span className="text-gray-700">October 15, 2023</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-600">Language</span>
                        <span className="text-gray-700">English</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-600">Skill Level</span>
                        <span className="text-gray-700">All Levels</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-600">Students</span>
                        <span className="text-gray-700">12,879</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Train 5 or More people */}
            {/* <div className="bg-primary-100 rounded-lg shadow-lg p-5">
                        <h3 className="font-semibold text-lg mb-3">Training 5 or more people?</h3>
                        <p className="text-gray-600 text-sm mb-4">
                           Get your team access to 25,000+ top courses anytime, anywhere.
                        </p>
                     </div> */}
         </div>
      </div>
   );
};

export default Sidebar;
