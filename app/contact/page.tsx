import React from "react";
import ContactUs from "@/components/contactPage/ContactUs";
import FAQ from "@/components/contactPage/FAQ";
import Feedback from "@/components/contactPage/Feedback";
// import OfficeLocation from "@/components/contactPage/OfficeLocation";

export default function ContactPage() {
   return (
      <div className="w-full min-h-screen font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Contact Us */}
            <ContactUs />

            {/* Office Location */}
            {/* <OfficeLocation /> */}

            {/* FAQ */}
            <FAQ />

            {/* Feedback */}
            <Feedback />
         </div>
      </div>
   );
}
