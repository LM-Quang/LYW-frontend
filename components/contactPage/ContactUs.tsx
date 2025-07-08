import React from "react";
import SendMessage from "./SendMessage";
import GetInTouch from "./GetInTouch";

const ContactUs = () => {
   return (
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
         <h2 className="text-4xl font-bold mb-5">Contact Us</h2>
         <div>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
               {/* Get in touch */}
               <GetInTouch />

               {/* Send Message */}
               <SendMessage />
            </div>
         </div>
      </section>
   );
};

export default ContactUs;
