import { Mail, MapPin, PhoneIncoming } from "lucide-react";
import React from "react";
import SocialMedias from "../common/SocialMedias";

const GetInTouch = () => {
   return (
      <div className="col-span-1">
         <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
         <p className="text-gray-600 mb-6">
            Have questions about our courses or becoming an instructor? We&apos;re here to help!
            Fill out the form or use one of our direct contact methods below.
         </p>

         <div className="space-y-6">
            <div className="flex items-start">
               <MapPin className="text-primary-500 mr-3" />
               <div>
                  <h3 className="font-medium text-gray-800">Our Location</h3>
                  <p className="text-gray-600">
                     123 Education Avenue, Suite 400
                     <br />
                     Learning City, LE 10001
                  </p>
               </div>
            </div>

            <div className="flex items-start">
               <PhoneIncoming className="text-primary-500 mr-3" />
               <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Monday-Friday, 9:00 AM - 5:00 PM EST</p>
               </div>
            </div>

            <div className="flex items-start">
               <Mail className="text-primary-500 mr-3" />
               <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">support@edulearn.com</p>
                  <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
               </div>
            </div>
         </div>

         <div className="mt-8">
            <h3 className="font-medium text-gray-800 mb-3">Connect With Us</h3>
            <SocialMedias />
         </div>
      </div>
   );
};

export default GetInTouch;
