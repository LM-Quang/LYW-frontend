"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const SendMessage = () => {
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = {
         name: formData.get("name"),
         email: formData.get("email"),
         subject: formData.get("subject"),
         message: formData.get("message"),
         privacy: formData.get("privacy") === "on",
      };

      try {
         await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, { data });
         toast.success("Message sent successfully!");
         e.currentTarget.reset(); // Clear the form
      } catch (err: unknown) {
         if (axios.isAxiosError(err)) {
            toast.error(err.message);
         } else {
            toast.error("Unknown Error.");
         }
      }
   };

   return (
      <div id="sendMessage" className="p-6 border border-gray-200 rounded-lg shadow-sm">
         <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
         <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
               </label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Enter your full name"
                  required
               />
            </div>

            <div>
               <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Enter your email address"
                  required
               />
            </div>

            <div className="relative">
               <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
               </label>
               <select
                  id="subject"
                  name="subject"
                  className="w-full appearance-none p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  required
               >
                  <option>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="courses">Course Information</option>
                  <option value="instructor">Becoming an Instructor</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="other">Other</option>
               </select>

               {/* Custom dropdown icon */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="h-7 w-7 ml-1 absolute top-9 right-2.5 text-gray-500"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
               </svg>
            </div>

            <div>
               <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
               </label>
               <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Type your message here..."
                  required
               ></textarea>
            </div>

            <div className="flex items-start">
               <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  required
               />
               <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-primary-600 hover:underline">
                     Privacy Policy
                  </a>{" "}
                  and consent to EduLearn Academy processing my data.
               </label>
            </div>

            <button
               type="submit"
               className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg cursor-pointer"
            >
               Send Message
            </button>
         </form>
      </div>
   );
};

export default SendMessage;
