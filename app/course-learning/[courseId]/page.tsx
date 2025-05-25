"use client";

import React, { useState } from "react";
import {
   CheckCircle,
   Check,
   ChevronDown,
   CirclePlay,
   Clock3,
   FileQuestion,
   FileText,
   Folder,
   Users,
   Video,
   ScrollText,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/img-1.jpg";
import RenderStars from "@/components/common/RenderStars";

const COURSEDATA = {
   id: "complete-javascript-2023",
   title: "Complete JavaScript Course 2023",
   instructor: "Le M. Quang",
   description:
      "Master JavaScript with the most comprehensive course available, taught by John Smith.",
   category: { id: "Web Development", name: "Web Development" },
   totalPrice: 100,
   thumbnail: logo.src,
   rating: 4.8,
   ratingsCount: 12.345,
   isBestSeller: true,
   updated: "2025-1-1",
   progress: 65,
   sections: [
      {
         id: "section1",
         title: "Introduction to JavaScript",
         price: 20,
         lectures: [
            {
               id: "1",
               title: "Course Overview",
               fileType: "video",
               fileUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
               duration: "10:15",
               isWatched: true,
            },
            {
               id: "2",
               title: "JavaScript Basics",
               fileType: "pdf",
               fileUrl: "/pdfs/Important+Links.pdf",
               isWatched: true,
            },
         ],
      },
      {
         id: "section2",
         title: "Core Concepts",
         price: 30,
         lectures: [
            {
               id: "3",
               title: "Variables and Data Types",
               fileType: "video",
               fileUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
               duration: "15:30",
               isWatched: false,
            },
            {
               id: "4",
               title: "Functions Guide",
               fileType: "pdf",
               fileUrl: "/pdfs/Important+Links.pdf",
               isWatched: false,
            },
         ],
      },
      {
         id: "section3",
         title: "Advanced Topics",
         price: 50,
         lectures: [
            {
               id: "5",
               title: "DOM Manipulation",
               fileType: "video",
               fileUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
               duration: "22:10",
               isWatched: false,
            },
         ],
      },
   ],
};

export default function CourseLearningPage() {
   const [course, setCourse] = useState(COURSEDATA);
   const [currentLecture, setCurrentLecture] = useState(course.sections[0].lectures[0]); // Start with the first video

   const handleLectureSelect = (
      lecture: React.SetStateAction<
         | {
              id: string;
              title: string;
              fileType: string;
              fileUrl: string;
              duration: string;
              isWatched: boolean;
           }
         | {
              id: string;
              title: string;
              fileType: string;
              fileUrl: string;
              isWatched: boolean;
              duration?: undefined;
           }
      >
   ) => {
      setCurrentLecture(lecture);
   };

   // Persist the "watched" state by sending an API request when a video is marked as watched
   // Update progress when a video is marked as watched
   const handleVideoWatched = async (lectureId: string) => {
      console.log("click", lectureId);
      const updatedSections = course.sections.map((section) => ({
         ...section,
         lectures: section.lectures.map((lecture) =>
            lecture.id === lectureId ? { ...lecture, isWatched: true } : lecture
         ),
      }));

      const totalLectures = updatedSections.reduce(
         (acc, section) => acc + section.lectures.length,
         0
      );
      const watchedCount = updatedSections.reduce(
         (acc, section) => acc + section.lectures.filter((lecture) => lecture.isWatched).length,
         0
      );
      const newProgress = Math.round((watchedCount / totalLectures) * 100);

      setCourse((prev) => ({
         ...prev,
         sections: updatedSections,
         progress: newProgress,
      }));
   };

   const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      if (currentLecture.fileType !== "video") return;
      const video = e.target as HTMLVideoElement;
      const watchPercentage = (video.currentTime / video.duration) * 100;
      if (watchPercentage >= 90 && !currentLecture.isWatched) {
         handleVideoWatched(currentLecture.id);
      }
   };

   // // Mark video as watched when it ends (optional enhancement)
   const handleVideoEnded = () => {
      if (currentLecture.fileType === "video" && !currentLecture.isWatched) {
         handleVideoWatched(currentLecture.id);
      }
   };

   // const params = useParams();
   // const courseId = params.courseId;

   // API call to fetch the course and its videos
   // useEffect(() => {
   //    fetch(`/api/courses/${courseId}`)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          setCourse(data);
   //          setCurrentVideo(data.videos[0]); // Set the first video as default
   //       });
   // }, [courseId]);

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
         {/* Main Content: Course Learning Page */}
         <div className="container mx-auto px-4 md:px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2">
               {/* Video Player */}
               {/* or a more robust video player, consider integrating a library like Video.js or React Player, which offers advanced features (e.g., subtitles, playback speed) */}
               <div className="bg-black rounded-lg overflow-hidden mb-6">
                  {currentLecture.fileType === "video" ? (
                     <video
                        className="w-full"
                        controls
                        src={currentLecture.fileUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnded}
                        onError={() => alert("Failed to load video. Please try another lesson.")}
                        autoPlay
                     >
                        Your browser does not support the video tag.
                     </video>
                  ) : (
                     <div className="p-6 bg-white text-gray-800 max-h-[500px] overflow-y-auto">
                        <h3 className="text-xl font-semibold mb-4">{currentLecture.title}</h3>
                        <iframe
                           src={currentLecture.fileUrl}
                           className="w-full h-[450px] border-0"
                           title={currentLecture.title}
                           onError={() => alert("Failed to load PDF. Please try another lesson.")}
                        />
                        {/* Loading Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-lg transition-opacity duration-300 opacity-0 pointer-events-none">
                           <svg
                              className="animate-spin h-8 w-8 text-primary-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                           >
                              <circle
                                 className="opacity-25"
                                 cx="12"
                                 cy="12"
                                 r="10"
                                 stroke="currentColor"
                                 strokeWidth="4"
                              ></circle>
                              <path
                                 className="opacity-75"
                                 fill="currentColor"
                                 d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                              ></path>
                           </svg>
                        </div>
                        <button
                           className="mt-4 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 cursor-pointer"
                           onClick={() =>
                              !currentLecture.isWatched && handleVideoWatched(currentLecture.id)
                           }
                           disabled={currentLecture.isWatched}
                        >
                           {currentLecture.isWatched ? "Completed" : "Mark as Completed"}
                        </button>
                     </div>
                  )}
               </div>

               {/* Course Information */}
               <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold mb-2">Full-Stack Development Bootcamp</h1>

                  <div className="mb-8">
                     <p className="mb-4">
                        Master modern web development with this comprehensive bootcamp. Learn
                        front-end, back-end, databases, and deployment - everything you need to
                        become a professional developer.
                     </p>
                  </div>

                  <div className="flex items-center mb-6">
                     <div className="flex items-center mr-6">
                        <span className="mr-2">
                           <i
                              className="fa-solid fa-star text-yellow-400 w-4 h-4"
                              aria-label="Full star"
                           ></i>
                        </span>
                        <span className="font-semibold">4.8</span>
                        <span className="text-gray-500 ml-1">(3,245 reviews)</span>
                     </div>
                     <div className="flex items-center mr-6">
                        <Users className="mr-1 text-gray-600" />
                        <span className="text-gray-600">12,879 students</span>
                     </div>
                     <div className="flex items-center">
                        <Clock3 className="mr-1 text-gray-600" />
                        <span className="text-gray-600">Last updated: Oct 2023</span>
                     </div>
                  </div>
                  {/* What will you learn */}
                  <div className="border-t border-gray-200 pt-6">
                     <h3 className="text-xl font-semibold mb-4">What You will Learn</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              Build responsive websites with HTML, CSS and JavaScript
                           </p>
                        </div>
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              Create backends with Node.js, Express and MongoDB
                           </p>
                        </div>
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              Develop modern React applications with hooks
                           </p>
                        </div>
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">Deploy applications to cloud platforms</p>
                        </div>
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              Implement authentication and authorization
                           </p>
                        </div>
                        <div className="flex items-start">
                           <Check className="text-green-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">Work with RESTful and GraphQL APIs</p>
                        </div>
                     </div>
                  </div>

                  {/* Course Content */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                     <h3 className="text-3xl font-semibold mb-4">Course Content</h3>
                     <div className="space-y-3">
                        {/* Section 1 */}
                        <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                           <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                              <div className="flex items-center">
                                 <Folder className="mr-2" />
                                 Section 1: Introduction to Web Development
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                 <span>5 lectures • 1.5 hours</span>
                                 <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                              </div>
                           </summary>
                           <div className="px-4 py-2 border-t border-gray-200">
                              <ul className="divide-y divide-gray-100">
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>Course Overview and Setup</span>
                                    </div>
                                    <span className="text-sm text-gray-500">15:20</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>HTML Fundamentals</span>
                                    </div>
                                    <span className="text-sm text-gray-500">22:45</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>CSS Basics and Styling</span>
                                    </div>
                                    <span className="text-sm text-gray-500">28:10</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <FileText className="mr-2 text-primary-500" />
                                       <span>Assignment: Build Your First Webpage</span>
                                    </div>
                                    <span className="text-sm text-gray-500">Practice</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <FileQuestion className="mr-2 text-primary-500" />
                                       <span>Section Quiz</span>
                                    </div>
                                    <span className="text-sm text-gray-500">10 questions</span>
                                 </li>
                              </ul>
                           </div>
                        </details>

                        {/* Section 2 */}
                        <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                           <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                              <div className="flex items-center">
                                 <Folder className="mr-2" />
                                 Section 2: JavaScript Fundamentals
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                 <span>8 lectures • 3.2 hours</span>
                                 <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                              </div>
                           </summary>
                           <div className="px-4 py-2 border-t border-gray-200">
                              <ul className="divide-y divide-gray-100">
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>JavaScript Basics and Syntax</span>
                                    </div>
                                    <span className="text-sm text-gray-500">28:15</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>Variables, Data Types, and Operators</span>
                                    </div>
                                    <span className="text-sm text-gray-500">24:30</span>
                                 </li>
                                 <li className="py-2 flex justify-between items-center">
                                    <div className="flex items-center">
                                       <CirclePlay className="mr-2 text-primary-500" />
                                       <span>Control Flow: Conditions and Loops</span>
                                    </div>
                                    <span className="text-sm text-gray-500">31:45</span>
                                 </li>
                              </ul>
                           </div>
                        </details>

                        {/* Section 3 */}
                        <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                           <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                              <div className="flex items-center">
                                 <Folder className="mr-2" />
                                 Section 3: Building the Front-end with React
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                 <span>12 lectures • 5.8 hours</span>
                                 <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                              </div>
                           </summary>
                        </details>

                        {/* Section 4 */}
                        <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md group">
                           <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                              <div className="flex items-center">
                                 <Folder className="mr-2" />
                                 Section 4: Node.js and Express Back-end
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                 <span>10 lectures • 4.5 hours</span>
                                 <ChevronDown className="ml-2 group-open:rotate-180 transition-transform" />
                              </div>
                           </summary>
                        </details>

                        {/* <div> */}
                        <button className="p-3 text-primary-500 font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer hover:text-primary-600">
                           <span>Show all 12 sections</span>
                           <ChevronDown className="ml-1" />
                        </button>
                        {/* </div> */}
                     </div>
                  </div>

                  {/* Requirements */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                     <h3 className="text-3xl font-semibold mb-4">Requirements</h3>
                     <ul className="space-y-2">
                        <li className="flex items-start">
                           <Check className="text-primary-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              Basic computer knowledge and familiarity with using the internet
                           </p>
                        </li>
                        <li className="flex items-start">
                           <Check className="text-primary-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              No prior programming experience required - we will start from the
                              basics
                           </p>
                        </li>
                        <li className="flex items-start">
                           <Check className="text-primary-500 mr-2 mt-0.5" />
                           <p className="text-gray-700">
                              A computer with at least 8GB RAM and 10GB free disk space (Windows,
                              Mac, or Linux)
                           </p>
                        </li>
                     </ul>
                  </div>

                  {/* About Instructor */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                     <h3 className="text-3xl font-semibold mb-4">About the Instructor</h3>
                     <div className="flex items-start">
                        <div className="mr-4">
                           <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500">
                              <Image
                                 src={logo}
                                 alt="Instructor profile"
                                 className="w-full h-full object-cover"
                                 width={80}
                                 height={80}
                              />
                           </div>
                        </div>
                        <div>
                           <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                           <p className="text-gray-600 text-sm mb-2">
                              Senior Software Engineer & Educator
                           </p>
                           <div className="flex items-center mb-2">
                              <span className="mr-2">
                                 <i
                                    className="fa-solid fa-star text-yellow-400 w-4 h-4"
                                    aria-label="Full star"
                                 ></i>
                              </span>
                              <span className="text-sm ml-1">4.9 Instructor Rating</span>
                              <span className="mx-2 text-gray-300">|</span>
                              <Users className="text-gray-500 text-sm" />
                              <span className="text-sm ml-1">43,120 Students</span>
                              <span className="mx-2 text-gray-300">|</span>
                              <ScrollText className="text-gray-500 text-sm" />
                              <span className="text-sm ml-1">15 Courses</span>
                           </div>
                           <p className="text-gray-700">
                              Full-stack developer with 10+ years of experience in building web
                              applications. I have worked with companies like Google and Amazon, and
                              I am passionate about teaching programming in a practical,
                              project-based way.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Feedback */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                     <h3 className="text-3xl font-semibold mb-4">Student Feedback</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Ratings */}
                        <div className="md:col-span-1">
                           <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                              <div className="text-5xl font-bold text-primary-500">4.8</div>
                              <div className="flex items-center my-2 space-x-1">
                                 <RenderStars rating={4.8} />
                              </div>
                              <div className="text-gray-600">Course Rating</div>
                              <div className="text-sm text-gray-500 mt-1">3,245 Reviews</div>
                           </div>
                        </div>

                        {/* Stars count */}
                        <div className="md:col-span-2">
                           <div className="space-y-2">
                              <div className="flex items-center">
                                 <div className="w-20 text-right pr-3">5 stars</div>
                                 <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                       className="bg-primary-500 h-full rounded-full"
                                       style={{ width: "78%" }}
                                    ></div>
                                 </div>
                                 <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                    78%
                                 </div>
                              </div>
                              <div className="flex items-center">
                                 <div className="w-20 text-right pr-3">4 stars</div>
                                 <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                       className="bg-primary-500 h-full rounded-full"
                                       style={{ width: "15%" }}
                                    ></div>
                                 </div>
                                 <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                    15%
                                 </div>
                              </div>
                              <div className="flex items-center">
                                 <div className="w-20 text-right pr-3">3 stars</div>
                                 <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                       className="bg-primary-500 h-full rounded-full"
                                       style={{ width: "5%" }}
                                    ></div>
                                 </div>
                                 <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                    5%
                                 </div>
                              </div>
                              <div className="flex items-center">
                                 <div className="w-20 text-right pr-3">2 stars</div>
                                 <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                       className="bg-primary-500 h-full rounded-full"
                                       style={{ width: "1%" }}
                                    ></div>
                                 </div>
                                 <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                    1%
                                 </div>
                              </div>
                              <div className="flex items-center">
                                 <div className="w-20 text-right pr-3">1 star</div>
                                 <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                       className="bg-primary-500 h-full rounded-full"
                                       style={{ width: "1%" }}
                                    ></div>
                                 </div>
                                 <div className="w-10 text-right pl-3 text-sm text-gray-500">
                                    1%
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Comment */}
                     <div className="mt-6 space-y-4">
                        {/* Comment 1 */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">
                                 MJ
                              </div>
                              <div className="flex-1">
                                 <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">Michael Johnson</h4>
                                    <span className="text-gray-500 text-sm">2 weeks ago</span>
                                 </div>
                                 <RenderStars rating={5} />
                                 <p className="text-gray-700">
                                    This course exceeded my expectations. The instructor explains
                                    complex concepts clearly and the projects are practical and
                                    engaging. I went from knowing nothing about web development to
                                    building full-stack applications. Highly recommended!
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Comment 2 */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">
                                 AP
                              </div>
                              <div className="flex-1">
                                 <div className="flex items-center justify-between">
                                    <h4 className="font-semibold">Amanda Peterson</h4>
                                    <span className="text-gray-500 text-sm">1 month ago</span>
                                 </div>
                                 <RenderStars rating={4.5} />
                                 <p className="text-gray-700">
                                    Great course with a lot of valuable content. My only suggestion
                                    would be to update some of the Node.js sections as a few
                                    packages are now deprecated. Otherwise, this was exactly what I
                                    needed to transition into web development.
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Show more */}
                        <button className="p-3 text-primary-500 font-medium flex items-center justify-center mx-auto transition-colors cursor-pointer hover:text-primary-600">
                           <span>See all 3,245 reviews</span>
                           <ChevronDown className="ml-1" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Sidebar: Section List with Dropdowns */}
            <div className="lg:col-span-1">
               <div className="bg-white rounded-lg shadow-md p-6 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Content</h2>
                  <div className="mb-4">
                     <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}% complete</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                           className="bg-primary-500 h-2.5 rounded-full"
                           style={{ width: `${course.progress}%` }}
                        ></div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     {course.sections.map((section) => (
                        <details
                           key={section.id}
                           className="bg-gray-50 rounded-lg border border-gray-200 group"
                        >
                           <summary className="px-4 py-3 cursor-pointer flex justify-between items-center font-medium hover:bg-gray-100 transition-colors">
                              <div className="flex items-center">
                                 <Folder className="mr-2 w-5 h-5" />
                                 <span>{section.title}</span>
                              </div>
                              <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                           </summary>
                           <ul className="px-4 py-2 border-t border-gray-200 space-y-2">
                              {section.lectures.map((lecture) => (
                                 <li
                                    key={lecture.id}
                                    className={`p-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                                       lecture.id === currentLecture.id
                                          ? "bg-primary-100 text-primary-600"
                                          : "hover:bg-gray-100"
                                    }`}
                                    onClick={() => handleLectureSelect(lecture)}
                                 >
                                    <div className="flex items-center gap-2">
                                       {lecture.fileType === "video" ? (
                                          <Video className="w-4 h-4" />
                                       ) : (
                                          <FileText className="w-4 h-4" /> // Could use a PDF-specific icon if available
                                       )}
                                       <div>
                                          <p className="text-sm font-medium">{lecture.title}</p>
                                          {lecture.fileType === "video" && lecture.duration && (
                                             <p className="text-xs text-gray-500">
                                                {lecture.duration}
                                             </p>
                                          )}
                                       </div>
                                    </div>
                                    {lecture.isWatched && (
                                       <CheckCircle className="w-5 h-5 text-green-500" />
                                    )}
                                 </li>
                              ))}
                           </ul>
                        </details>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
