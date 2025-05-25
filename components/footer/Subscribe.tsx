import React from "react";

const Subscribe = () => {
   return (
      <div>
         <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
         <p className="mb-4">Get the latest news and updates</p>
         <div className="flex">
            <input
               type="email"
               placeholder="Your email"
               className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button className="border bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 transition-colors">
               <span className="material-symbols-outlined">Send</span>
            </button>
         </div>
      </div>
   );
};

export default Subscribe;
