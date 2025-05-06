"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GraduationCap, Search, ChevronDown, Play, CheckCircle } from "lucide-react";
import Link from "next/link";
import avatar from "@/assets/avatar.jpg";

// Hard-coded user data (same as in the source code)
interface User {
   avatar: string;
   username: string;
   email: string;
}

const USER: User = {
   avatar: avatar.src,
   username: "Quang",
   email: "quang@gmail.com",
};

// Interface for a video
interface Video {
   id: string;
   title: string;
   duration: string; // e.g., "12:34"
   url: string; // URL to the video file
   isWatched: boolean; // Whether the user has watched this video
}

// Interface for the course
interface Course {
   id: string;
   title: string;
   description: string;
   progress: number; // Percentage of completion
   videos: Video[];
}

// Hard-coded course data (replace with API data in a real app)
const COURSEDATA: Course = {
   id: "complete-javascript-2023",
   title: "Complete JavaScript Course 2023",
   description:
      "Master JavaScript with the most comprehensive course available, taught by John Smith.",
   progress: 65, // 65% complete
   videos: [
      {
         id: "1",
         title: "Introduction to JavaScript",
         duration: "10:15",
         url: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL (replace with your own)
         isWatched: true,
      },
      {
         id: "2",
         title: "Variables and Data Types",
         duration: "15:30",
         url: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
         isWatched: true,
      },
      {
         id: "3",
         title: "Functions and Scope",
         duration: "20:45",
         url: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
         isWatched: false,
      },
      {
         id: "4",
         title: "Arrays and Loops",
         duration: "18:20",
         url: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
         isWatched: false,
      },
      {
         id: "5",
         title: "DOM Manipulation",
         duration: "22:10",
         url: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
         isWatched: false,
      },
   ],
};

export default function CourseLearningPage() {
   const [user, setUser] = useState<User | null>(USER);
   const [course, setCourse] = useState<Course>(COURSEDATA);
   const [currentVideo, setCurrentVideo] = useState<Video>(course.videos[0]); // Start with the first video
   const router = useRouter();
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

   // Persist the "watched" state by sending an API request when a video is marked as watched
   // Update progress when a video is marked as watched
   const handleVideoWatched = async (videoId: string) => {
      // Persist the "watched" state by sending an API request when a video is marked as watched
      // await fetch(`/api/courses/${courseId}/mark-watched`, {
      //    method: "POST",
      //    headers: { "Content-Type": "application/json" },
      //    body: JSON.stringify({ videoId }),
      // });
      const updatedVideos = course.videos.map((video) =>
         video.id === videoId ? { ...video, isWatched: true } : video
      );
      const watchedCount = updatedVideos.filter((video) => video.isWatched).length;
      const newProgress = Math.round((watchedCount / updatedVideos.length) * 100);

      setCourse((prev) => ({
         ...prev,
         videos: updatedVideos,
         progress: newProgress,
      }));
   };

   // Handle video selection from the sidebar
   const handleVideoSelect = (video: Video) => {
      setCurrentVideo(video);
   };

   // Mark video as watched when it ends (optional enhancement)
   const handleVideoEnded = () => {
      if (!currentVideo.isWatched) {
         handleVideoWatched(currentVideo.id);
      }
   };

   const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = e.target as HTMLVideoElement;
      const watchPercentage = (video.currentTime / video.duration) * 100;
      if (watchPercentage >= 90 && !currentVideo.isWatched) {
         handleVideoWatched(currentVideo.id);
      }
   };

   const handleNextLesson = () => {
      const currentIndex = course.videos.findIndex((video) => video.id === currentVideo.id);
      if (currentIndex < course.videos.length - 1) {
         setCurrentVideo(course.videos[currentIndex + 1]);
      }
   };

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
         {/* Header (same as in HomePage with hover dropdown) */}
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               {/* Logo */}
               <div className="flex items-center">
                  <div className="mr-2">
                     <Image
                        className="rounded-full"
                        src={avatar}
                        alt="Logo"
                        width={65}
                        height={65}
                     />
                  </div>
                  <div className="text-2xl font-bold text-primary-500">
                     Learn <br /> Your Way
                  </div>
               </div>

               {/* Search bar */}
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-3 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        aria-label="Search courses"
                     />
                     <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                        aria-hidden="true"
                     />
                  </div>
               </div>

               {/* Navbar */}
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center items-center gap-2 text-sm">
                     <li>
                        <Link
                           href="/"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Courses
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Categories
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        >
                           Teaching
                        </Link>
                     </li>
                     {user ? (
                        <li className="relative group">
                           <div className="flex items-center cursor-pointer">
                              <Image
                                 className="rounded-full"
                                 src={user.avatar || "/default-avatar.png"}
                                 alt={user.username || "User avatar"}
                                 width={40}
                                 height={40}
                              />
                              <ChevronDown className="ml-1 w-4 h-4 text-gray-600 transition-transform group-hover:rotate-180" />
                           </div>

                           {/* Dropdown Menu */}
                           <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg z-20 transition-opacity duration-200 hidden group-hover:block group-focus-within:block">
                              <div className="p-4 border-b border-gray-200">
                                 <p className="text-sm font-semibold text-gray-800">
                                    {user.username || "User"}
                                 </p>
                                 <p className="text-xs text-gray-600 truncate">
                                    {user.email || "user@example.com"}
                                 </p>
                              </div>
                              <div className="py-1">
                                 <Link
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Profile
                                 </Link>
                                 <Link
                                    href="/my-courses"
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    My Courses
                                 </Link>
                                 <button
                                    onClick={() => {
                                       setUser(null);
                                       router.push("/"); // Redirect to homepage after logout
                                    }}
                                    className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                 >
                                    Logout
                                 </button>
                              </div>
                           </div>
                        </li>
                     ) : (
                        <>
                           <li>
                              <Link
                                 href="/auth/login"
                                 className="px-3 py-1 rounded-full border border-primary-500 text-primary-600 hover:bg-primary-100 transition-colors"
                                 aria-label="Sign In"
                              >
                                 Log In
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="/auth/signup"
                                 className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                              >
                                 Sign Up
                              </Link>
                           </li>
                        </>
                     )}
                  </ul>
               </nav>
            </div>
         </header>

         {/* Main Content: Course Learning Page */}
         <main className="container mx-auto px-4 md:px-5 py-10 flex flex-col lg:flex-row gap-8">
            {/* Main Content: Video Player and Course Info */}
            <div className="lg:w-3/4">
               {/* Video Player */}
               {/* or a more robust video player, consider integrating a library like Video.js or React Player, which offers advanced features (e.g., subtitles, playback speed) */}
               <div className="bg-black rounded-lg overflow-hidden mb-6">
                  <video
                     className="w-full"
                     controls
                     src={currentVideo.url}
                     onTimeUpdate={handleTimeUpdate}
                     onEnded={handleVideoEnded}
                     onError={() => alert("Failed to load video. Please try another lesson.")}
                     autoPlay
                  >
                     Your browser does not support the video tag.
                  </video>
               </div>

               {/* Course Information */}
               <div className="bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="mb-4">
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                           className="bg-primary-500 h-2.5 rounded-full"
                           style={{ width: `${course.progress}%` }}
                        />
                     </div>
                     <p className="text-sm text-gray-600 mt-1">{course.progress}% Complete</p>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                     Current Lesson: {currentVideo.title}
                  </h2>
               </div>
            </div>

            {/* Right Sidebar: Video List */}
            <div className="lg:w-1/4">
               <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Course Content</h2>
                  <ul className="space-y-2">
                     {course.videos.map((video) => (
                        <li
                           key={video.id}
                           className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                              video.id === currentVideo.id
                                 ? "bg-primary-100 text-primary-600"
                                 : "hover:bg-gray-100"
                           }`}
                           onClick={() => handleVideoSelect(video)}
                        >
                           <div className="flex items-center gap-2">
                              <Play className="w-4 h-4" />
                              <div>
                                 <p className="text-sm font-medium">{video.title}</p>
                                 <p className="text-xs text-gray-500">{video.duration}</p>
                              </div>
                           </div>
                           {video.isWatched && <CheckCircle className="w-5 h-5 text-green-500" />}
                           <button
                              onClick={() => handleVideoWatched(video.id)}
                              className="text-primary-500 hover:text-primary-600 text-sm"
                              aria-label={`Mark ${video.title} as watched`}
                           >
                              Mark as Watched
                           </button>
                           <button
                              onClick={handleNextLesson}
                              className="mt-4 bg-primary-500 text-white font-medium py-2 px-4 rounded-full hover:bg-primary-600 transition-colors"
                           >
                              Next Lesson
                           </button>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </main>

         {/* Footer (same as in HomePage) */}
         <footer className="bg-white top-shadow py-10">
            <div className="container mx-auto px-4 md:px-5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Information */}
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                           <GraduationCap aria-label="Learn Your Way Logo" />
                        </div>
                        <div className="text-xl font-bold">Learn Your Way</div>
                     </div>
                     <p className="text-sm">
                        Empowering learners worldwide with high-quality online courses in
                        programming, design, business, and more.
                     </p>
                  </div>

                  {/* Navigation Links */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                     <ul className="space-y-2 text-sm">
                        <li>
                           <Link
                              href="/"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Home page"
                           >
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Courses page"
                           >
                              Courses
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Categories page"
                           >
                              Categories
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Teaching page"
                           >
                              Teaching
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="About page"
                           >
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="#"
                              className="hover:text-primary-400 transition-colors"
                              aria-label="Contact page"
                           >
                              Contact
                           </Link>
                        </li>
                     </ul>
                  </div>

                  {/* Contact and Social Media */}
                  <div>
                     <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                     <div className="mt-4 flex space-x-4">
                        <a
                           href="https://twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Twitter"
                        >
                           <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </a>
                        <a
                           href="https://facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Facebook"
                        >
                           <i className="fa-brands fa-facebook-f text-2xl"></i>
                        </a>
                        <a
                           href="https://instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on Instagram"
                        >
                           <i className="fa-brands fa-square-instagram text-2xl"></i>
                        </a>
                        <a
                           href="https://linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Follow us on LinkedIn"
                        >
                           <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                  <div className="mb-4 md:mb-0">
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors mr-4"
                        aria-label="Privacy Policy"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="hover:text-primary-400 transition-colors"
                        aria-label="Terms of Service"
                     >
                        Terms of Service
                     </a>
                  </div>
                  <div>© {new Date().getFullYear()} Learn Your Way. All rights reserved.</div>
               </div>
            </div>
         </footer>
      </div>
   );
}
