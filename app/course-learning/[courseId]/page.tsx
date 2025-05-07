"use client";

import React, { useState } from "react";
import { Play, CheckCircle } from "lucide-react";

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
   const [course, setCourse] = useState<Course>(COURSEDATA);
   const [currentVideo, setCurrentVideo] = useState<Video>(course.videos[0]); // Start with the first video
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

   return (
      <div className="w-full min-h-screen bg-gray-50 font-sans">
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

                  <div className="mb-8">
                     <h2 className="text-xl font-semibold text-gray-800">Video Description</h2>

                     <p className="text-gray-600 mb-4">
                        In this module, we dive deep into advanced CSS techniques that can elevate
                        your web development skills. Learn about CSS Grid, Flexbox mastery,
                        animations, and responsive design principles that will make your websites
                        stand out.
                     </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                     <h2 className="text-xl font-semibold text-gray-800 mb-4">Course Details</h2>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                 schedule
                              </span>
                              <div>
                                 <h3 className="font-medium text-gray-800">Course Duration</h3>
                                 <p className="text-gray-600">12 weeks (36 hours of content)</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                 person
                              </span>
                              <div>
                                 <h3 className="font-medium text-gray-800">Instructor</h3>
                                 <p className="text-gray-600">Prof. Sarah Johnson, PhD</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                 school
                              </span>
                              <div>
                                 <h3 className="font-medium text-gray-800">Prerequisites</h3>
                                 <p className="text-gray-600">Basic HTML & CSS knowledge</p>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                           <div className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-3 text-2xl">
                                 workspace_premium
                              </span>
                              <div>
                                 <h3 className="font-medium text-gray-800">Certificate</h3>
                                 <p className="text-gray-600">Earn upon completion</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="border-t border-gray-200 pt-6 mt-6">
                        <h3 className="font-semibold text-gray-800 mb-4">What You&apos;ll Learn</h3>
                        <ul className="space-y-3">
                           <li className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-gray-600">
                                 Master advanced CSS layout techniques with Grid and Flexbox
                              </span>
                           </li>
                           <li className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-gray-600">
                                 Create smooth, professional animations and transitions
                              </span>
                           </li>
                           <li className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-gray-600">
                                 Implement responsive design strategies for all devices
                              </span>
                           </li>
                           <li className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-gray-600">
                                 Optimize website performance with CSS best practices
                              </span>
                           </li>
                           <li className="flex items-start">
                              <span className="material-symbols-outlined text-primary-500 mr-2">
                                 check_circle
                              </span>
                              <span className="text-gray-600">
                                 Build a responsive portfolio website from scratch
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Sidebar: Video List */}
            <div className="lg:w-1/4">
               <div className="bg-white rounded-lg shadow-md p-6 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Content</h2>
                  <div className="mb-4">
                     <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>25% complete</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                           className="bg-primary-500 h-2.5 rounded-full"
                           style={{ width: "25%" }}
                        ></div>
                     </div>
                  </div>
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
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </main>
      </div>
   );
}
