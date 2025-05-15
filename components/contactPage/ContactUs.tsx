import React from "react";
import SendMessage from "./SendMessage";
// import GetInTouch from "./GetInTouch";

const ContactUs = () => {
   return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
         <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <div className="max-w-4xl">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  {/* Get in touch */}
                  {/* <GetInTouch /> */}

                  {/* Send Message */}
                  <SendMessage />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
