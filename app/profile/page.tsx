"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import { Camera, Pencil, ShieldCheck } from "lucide-react";
import DefaultAvatar from "@/components/DefaultAvatar";
import { useUser } from "@/context/UserContext";

const ProfilePage = () => {
   const { user } = useUser();

   return (
      <div className="container mx-auto px-4 md:px-6 py-8">
         <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
            <div className="p-6 md:p-8">
               <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  User Profile Information
               </h1>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                     <div className="mb-6 flex flex-col items-center">
                        <div className="rounded-full overflow-hidden mb-2">
                           {user ? (
                              <Image
                                 className=" inset-0 object-cover"
                                 src={avatar}
                                 alt="Profile"
                                 width={120}
                                 height={120}
                              />
                           ) : (
                              <DefaultAvatar
                                 width={120}
                                 height={120}
                                 fontSize={40}
                                 name="Le Minh Quang"
                              />
                           )}
                        </div>
                        <button className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors transform duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer">
                           <Camera className="mr-2" />
                           Edit Profile Photo
                        </button>
                     </div>

                     <div className="bg-gray-50 rounded-lg p-5 mt-4">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
                           <ShieldCheck className="w-8 text-primary-500" />
                           Account Status
                        </h3>
                        <div className="space-y-3">
                           <div className="flex items-center justify-between">
                              <span className="text-gray-600">Email Verified</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                 Verified
                              </span>
                           </div>
                           {/* <div className="flex items-center justify-between">
                              <span className="text-gray-600">Phone Number</span>
                              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                                 Pending
                              </span>
                           </div> */}
                           <div className="flex items-center justify-between">
                              <span className="text-gray-600">ID Verification</span>
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                 Not Started
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-2">
                     <div className="bg-white border border-gray-200 rounded-lg mb-6">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                           <h3 className="font-semibold text-lg text-gray-800">
                              Personal Information
                           </h3>
                           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                              <Pencil />
                           </button>
                        </div>
                        <div className="p-4 space-y-4">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                 <p className="text-sm text-gray-500">Full Name</p>
                                 <p className="font-medium">John Smith</p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500">Email Address</p>
                                 <p className="font-medium">john.smith@example.com</p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500">Phone Number</p>
                                 <p className="font-medium">+1 (555) 123-4567</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-white border border-gray-200 rounded-lg mb-6">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                           <h3 className="font-semibold text-gray-800">Educational Background</h3>
                           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                              <Pencil />
                           </button>
                        </div>
                        <div className="p-4 space-y-4">
                           <div className="border-l-4 border-primary-500 pl-4 py-2">
                              <p className="font-medium">Bachelor of Science in Computer Science</p>
                              <p className="text-sm text-gray-600">Stanford University</p>
                           </div>
                           <div className="border-l-4 border-primary-500 pl-4 py-2">
                              <p className="font-medium">Master&apos;s in Web Development</p>
                              <p className="text-sm text-gray-600">MIT</p>
                           </div>
                           <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm flex items-center transition-colors">
                              + Add Another Education
                           </button>
                        </div>
                     </div>

                     <div className="bg-white border border-gray-200 rounded-lg mb-6">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                           <h3 className="font-semibold text-gray-800">Experience</h3>
                           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                              <Pencil />
                           </button>
                        </div>
                        <div className="p-4 space-y-4">
                           <div className="border-l-4 border-primary-500 pl-4 py-2">
                              <p className="font-medium">Senior Web Developer</p>
                              <p className="text-sm text-gray-600">
                                 10 years working at Google as Web Developer
                              </p>
                           </div>
                           <div className="border-l-4 border-primary-500 pl-4 py-2">
                              <p className="font-medium">Frontend Developer</p>
                              <p className="text-sm text-gray-600">
                                 5 years working at Facebook as Frontend Developer with React
                              </p>
                           </div>
                           <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm flex items-center transition-colors">
                              + Add Another Experience
                           </button>
                        </div>
                     </div>

                     <div className="flex gap-4 mt-6">
                        <button className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                           Save Changes
                        </button>
                        <button className="flex-1 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                           Cancel
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfilePage;
