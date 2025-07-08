"use client";

import Link from "next/link";
import React, { useState } from "react";

// Sample data from previous steps (in a real app, this would come from state or a backend)
const personalInfo = {
   firstName: "John",
   lastName: "Doe",
   headline: "Web Developer with 5+ years experience",
   biography:
      "I’m a passionate web developer with over 5 years of experience in building responsive and scalable web applications. I specialize in JavaScript, React, and Node.js, and I’m excited to share my knowledge with students worldwide.",
   website: "https://johndoe.com",
   primaryCategory: "Web Development",
   secondaryCategories: ["JavaScript", "React"],
   experience: "5-10 years",
   teachingExperience: "Yes",
   teachingDetails:
      "I’ve mentored junior developers at my company and conducted workshops on React.",
};

const courseDetails = {
   courseTitle: "Complete JavaScript Bootcamp: From Zero to Hero",
   courseDescription:
      "This course covers JavaScript from the basics to advanced concepts, including ES6+, asynchronous programming, and building real-world projects.",
   learningObjectives:
      "1. Understand JavaScript fundamentals\n2. Build interactive web applications\n3. Master asynchronous programming with Promises and async/await\n4. Create a portfolio project",
   targetAudience:
      "Beginners with no prior coding experience and intermediate developers looking to deepen their JavaScript skills.",
   courseLevel: "All Levels",
   estimatedDuration: "10-15 hours",
   coursePrice: 49.99,
   prerequisites: "No prior coding experience required, but familiarity with HTML/CSS is helpful.",
   materials: "A computer with a modern web browser and a code editor (e.g., VS Code).",
};

export default function Step2RegistrationPage() {
   const [isTermsAgreed, setIsTermsAgreed] = useState(false);
   // const [personalInfo, setPersonalInfo] = useState(null);
   // const [courseDetails, setCourseDetails] = useState(null);

   // // Fetch the personal and course data from your backend or state management system instead of hard-coding it
   // useEffect(() => {
   //    // Fetch data from API
   //    fetch("/api/instructor-registration")
   //       .then((res) => res.json())
   //       .then((data) => {
   //          setPersonalInfo(data.personalInfo);
   //          setCourseDetails(data.courseDetails);
   //       });
   // }, []);

   // Handle file uploads by integrating with a backend service (e.g., AWS S3, Firebase Storage)
   // const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
   //    const file = e.target.files?.[0];
   //    if (file) {
   //       const formData = new FormData();
   //       formData.append("file", file);
   //       await fetch("/api/upload", {
   //          method: "POST",
   //          body: formData,
   //       });
   //    }
   // };

   // On form submission, send the entire application to the backend for review
   // const handleSubmit = async (e: React.FormEvent) => {
   //    e.preventDefault();
   //    await fetch("/api/instructor-registration/submit", {
   //       method: "POST",
   //       headers: { "Content-Type": "application/json" },
   //       body: JSON.stringify({ personalInfo, courseDetails }),
   //    });
   //    // Redirect to a confirmation page
   //    window.location.href = "/teaching-registration/confirmation";
   // };

   // Add a preview for uploaded files (e.g., display the video thumbnail or file name after upload)
   const [videoPreview, setVideoPreview] = useState<string | null>(null);
   const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         // Add validation for file uploads (e.g., check file size and type before uploading)
         if (file.size > 100 * 1024 * 1024) {
            // 100MB limit
            alert("File size exceeds 100MB limit.");
            return;
         }
         if (!file.type.startsWith("video/")) {
            alert("Please upload a valid video file (MP4, MOV).");
            return;
         }
         const url = URL.createObjectURL(file);
         setVideoPreview(url);
      }
   };

   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {/* Main Content: Step 3 */}
         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
               <div className="p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                     Register to Become an Instructor
                  </h1>

                  <div className="max-w-4xl mx-auto">
                     {/* Progress Indicator */}
                     <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center">
                           <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                              <span className="material-symbols-outlined text-lg">check</span>
                           </div>
                           <div className="h-1 w-20 bg-primary-500"></div>
                           <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                              <span className="material-symbols-outlined text-lg">check</span>
                           </div>
                           <div className="h-1 w-20 bg-primary-500"></div>
                           <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                              <span className="text-lg font-bold">3</span>
                           </div>
                        </div>
                        <div className="text-sm text-gray-500">Step 3 of 3</div>
                     </div>

                     {/* Handle Form Submit */}
                     {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
                     <form className="space-y-6">
                        {/* Review Personal Information */}
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Review Your Information
                           </h2>
                           <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                              <div>
                                 <h3 className="text-sm font-medium text-gray-700">
                                    Personal Information
                                 </h3>
                                 <Link
                                    href="/teaching-registration/step-1"
                                    className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                                 >
                                    <span className="material-symbols-outlined mr-1">edit</span>
                                    Edit
                                 </Link>
                                 <p className="text-gray-600">
                                    <strong>Name:</strong> {personalInfo.firstName}{" "}
                                    {personalInfo.lastName}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Professional Headline:</strong> {personalInfo.headline}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Biography:</strong> {personalInfo.biography}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Website:</strong>{" "}
                                    {personalInfo.website || "Not provided"}
                                 </p>
                              </div>
                              <div>
                                 <h3 className="text-sm font-medium text-gray-700">
                                    Teaching Categories
                                 </h3>
                                 <p className="text-gray-600">
                                    <strong>Primary Category:</strong>{" "}
                                    {personalInfo.primaryCategory}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Secondary Categories:</strong>{" "}
                                    {personalInfo.secondaryCategories.join(", ") || "None"}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Experience:</strong> {personalInfo.experience}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Teaching Experience:</strong>{" "}
                                    {personalInfo.teachingExperience}
                                 </p>
                                 {personalInfo.teachingDetails && (
                                    <p className="text-gray-600">
                                       <strong>Teaching Details:</strong>{" "}
                                       {personalInfo.teachingDetails}
                                    </p>
                                 )}
                              </div>
                           </div>
                        </div>

                        {/* Review Course Details */}
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Review Course Details
                           </h2>
                           <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                              <div>
                                 <h3 className="text-sm font-medium text-gray-700">
                                    Course Information
                                 </h3>
                                 <p className="text-gray-600">
                                    <strong>Title:</strong> {courseDetails.courseTitle}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Description:</strong> {courseDetails.courseDescription}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Learning Objectives:</strong>
                                 </p>
                                 <ul className="list-disc list-inside text-gray-600">
                                    {courseDetails.learningObjectives
                                       .split("\n")
                                       .map((objective, index) => (
                                          <li key={index}>{objective}</li>
                                       ))}
                                 </ul>
                                 <p className="text-gray-600">
                                    <strong>Target Audience:</strong> {courseDetails.targetAudience}
                                 </p>
                              </div>
                              <div>
                                 <h3 className="text-sm font-medium text-gray-700">
                                    Course Structure
                                 </h3>
                                 <p className="text-gray-600">
                                    <strong>Level:</strong> {courseDetails.courseLevel}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Estimated Duration:</strong>{" "}
                                    {courseDetails.estimatedDuration}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Price:</strong> ${courseDetails.coursePrice}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Prerequisites:</strong>{" "}
                                    {courseDetails.prerequisites || "None"}
                                 </p>
                                 <p className="text-gray-600">
                                    <strong>Materials:</strong> {courseDetails.materials || "None"}
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Content Upload */}
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Upload Introductory Content
                           </h2>
                           <div className="space-y-4">
                              <div>
                                 <label
                                    htmlFor="introVideo"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Introductory Video (Optional)
                                 </label>
                                 <div className="flex items-center space-x-4">
                                    <div className="w-36 h-24 rounded-lg bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                       {videoPreview ? (
                                          <video
                                             src={videoPreview}
                                             className="w-full h-full object-cover"
                                          />
                                       ) : (
                                          <span className="material-symbols-outlined text-gray-400 text-3xl">
                                             videocam
                                          </span>
                                       )}
                                    </div>
                                    <div className="flex-1">
                                       <input
                                          type="file"
                                          id="introVideo"
                                          name="introVideo"
                                          accept="video/*"
                                          className="hidden"
                                          onChange={handleVideoUpload}
                                       />
                                       <button
                                          type="button"
                                          className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
                                          onClick={() =>
                                             document.getElementById("introVideo")?.click()
                                          }
                                       >
                                          Upload Video
                                       </button>
                                       <p className="text-xs text-gray-500 mt-1">
                                          MP4 or MOV, max 100MB. Introduce yourself and give a
                                          preview of your course.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <label
                                    htmlFor="sampleMaterials"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                 >
                                    Sample Course Materials (Optional)
                                 </label>
                                 <div className="flex items-center space-x-4">
                                    <div className="w-36 h-24 rounded-lg bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                                       <span className="material-symbols-outlined text-gray-400 text-3xl">
                                          description
                                       </span>
                                    </div>
                                    <div className="flex-1">
                                       <input
                                          type="file"
                                          id="sampleMaterials"
                                          name="sampleMaterials"
                                          accept=".pdf,.doc,.docx"
                                          className="hidden"
                                       />
                                       <button
                                          type="button"
                                          className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
                                          onClick={() =>
                                             document.getElementById("sampleMaterials")?.click()
                                          }
                                       >
                                          Upload Materials
                                       </button>
                                       <p className="text-xs text-gray-500 mt-1">
                                          PDF, DOC, or DOCX, max 10MB. Upload a sample lecture,
                                          worksheet, or resource.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                 <div className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                       lightbulb
                                    </span>
                                    <p className="text-sm text-gray-700">
                                       An introductory video helps students connect with you and
                                       increases enrollment. Sample materials give a preview of your
                                       teaching style.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Terms and Agreement */}
                        <div>
                           <h2 className="text-xl font-semibold mb-4 text-gray-800">
                              Terms and Agreement
                           </h2>
                           <div className="flex items-center space-x-2">
                              <input
                                 type="checkbox"
                                 id="terms"
                                 name="terms"
                                 className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                                 checked={isTermsAgreed}
                                 onChange={(e) => setIsTermsAgreed(e.target.checked)}
                                 required
                              />
                              <label htmlFor="terms" className="text-sm text-gray-700 flex-1">
                                 I agree to the{" "}
                                 <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-700 underline"
                                 >
                                    Terms of Service
                                 </a>{" "}
                                 and{" "}
                                 <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-700 underline"
                                 >
                                    Instructor Agreement
                                 </a>
                                 . I confirm that all information provided is accurate and my own
                                 work.
                              </label>
                           </div>
                        </div>

                        {/* Submission Buttons */}
                        <div className="pt-6 border-t border-gray-200">
                           <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                              <a
                                 href="#"
                                 className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                              >
                                 <span className="material-symbols-outlined mr-1">arrow_back</span>
                                 Back to Step 2
                              </a>
                              <div className="flex gap-4">
                                 <button
                                    type="button"
                                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                 >
                                    Save as Draft
                                 </button>
                                 <button
                                    type="submit"
                                    disabled={!isTermsAgreed}
                                    className={`px-6 py-3 rounded-lg transition-colors transform hover:-translate-y-1 shadow-md hover:shadow-lg ${
                                       isTermsAgreed
                                          ? "bg-primary-600 text-white hover:bg-primary-700"
                                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                 >
                                    Submit Application
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-10">
               <h2 className="text-xl font-bold mb-4 text-gray-800">What Happens Next?</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors opacity-40">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">edit_document</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Step 2: Course Planning</h3>
                     <p className="text-gray-600 text-center text-sm">
                        You&apos;ll define your course structure, objectives, and target audience
                     </p>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors opacity-40">
                     <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">videocam</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Step 3: Content Creation</h3>
                     <p className="text-gray-600 text-center text-sm">
                        Set up your recording equipment and create your course content
                     </p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-primary-50 border border-primary-100 rounded-lg transition-colors">
                     <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined">rocket_launch</span>
                     </div>
                     <h3 className="font-bold text-gray-800 mb-2">Launch Your Course</h3>
                     <p className="text-gray-600 text-center text-sm">
                        Your application will be reviewed within 3-5 business days. Once approved,
                        you can start uploading your course content and publish to our global
                        audience.
                     </p>
                  </div>
               </div>
            </div>

            {/* Support Section */}
            <div className="bg-primary-50 rounded-xl p-6 mb-10">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                     <h2 className="text-xl font-bold mb-3 text-gray-800">
                        Need Help Getting Started?
                     </h2>
                     <p className="text-gray-600 mb-4">
                        Our instructor support team is here to answer your questions and guide you
                        through the process.
                     </p>
                     <a
                        href="#"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
                     >
                        View Instructor Resources
                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                     </a>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                     <div className="bg-white p-5 rounded-lg shadow-sm max-w-md w-full">
                        <h3 className="font-bold text-gray-800 mb-3">Have Questions?</h3>
                        <div className="space-y-4">
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 chat
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">Live Chat Support</div>
                                 <div className="text-sm text-gray-500">
                                    Available Mon-Fri, 9AM-5PM
                                 </div>
                              </div>
                           </a>
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 email
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">Email Us</div>
                                 <div className="text-sm text-gray-500">
                                    instructors@edulearn.com
                                 </div>
                              </div>
                           </a>
                           <a
                              href="#"
                              className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                           >
                              <span className="material-symbols-outlined text-primary-600 mr-3">
                                 forum
                              </span>
                              <div>
                                 <div className="font-medium text-gray-800">
                                    Instructor Community
                                 </div>
                                 <div className="text-sm text-gray-500">
                                    Connect with other instructors
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
