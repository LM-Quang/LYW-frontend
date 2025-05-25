import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-1.png";
import { PersonStanding, Star, Users } from "lucide-react";
const teamMembers = [
   {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "John has over 15 years of experience in education technology and is passionate about making learning accessible to everyone.",
      image: logo,
   },
   {
      name: "Sarah Johnson",
      role: "Head of Education",
      bio: "Sarah is an expert in curriculum design and has worked with top universities to develop online learning programs.",
      image: logo,
   },
   {
      name: "Michael Brown",
      role: "Lead Developer",
      bio: "Michael leads the tech team at EduLearn Academy, ensuring a seamless and engaging user experience for all learners.",
      image: logo,
   },
];
const values = [
   {
      title: "Accessibility",
      description: "We believe education should be available to everyone, everywhere.",
      icon: <PersonStanding className="text-primary-500 mx-auto w-8 h-8" />,
   },
   {
      title: "Quality",
      description: "Our courses are designed by experts to ensure top-notch learning experiences.",
      icon: <Star className="text-primary-500 mx-auto w-8 h-8" />,
   },
   {
      title: "Community",
      description:
         "Join a global community of learners and educators to share knowledge and grow together.",
      icon: <Users className="text-primary-500 mx-auto w-8 h-8" />,
   },
];
export default function AboutUsPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Hero Section */}
            <section className="bg-primary-50 rounded-xl p-8 mb-8 text-center">
               <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  At Learn Your Way, we are on a mission to make high-quality education accessible
                  to everyone, everywhere. Join us in transforming the way the world learns.
               </p>
               <Link
                  href="/courses"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
               >
                  Explore Courses
               </Link>
            </section>

            {/* Our Mission */}
            <section className="mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                  Our Mission
               </h2>
               <p className="text-gray-600 max-w-3xl mx-auto text-center">
                  Learn Your Way was founded with a simple yet powerful vision: to empower
                  individuals through education. We believe that learning should be a lifelong
                  journey, and we are here to provide the tools, resources, and community to make
                  that journey accessible, engaging, and impactful.
               </p>
            </section>

            {/* Our Team */}
            <section className="mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Meet Our Team
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamMembers.map((member) => (
                     <div
                        key={member.name}
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                     >
                        <Image
                           src={member.image}
                           alt={member.name}
                           className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                           width={96}
                           height={96}
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Our Values */}
            <section className="mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Our Values
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((value) => (
                     <div
                        key={value.title}
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                     >
                        {value.icon}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Start Learning */}
            <section className="bg-primary-50 rounded-xl p-8 text-center">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Ready to Start Learning?
               </h2>
               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of learners worldwide and take the first step towards achieving
                  your goals with EduLearn Academy.
               </p>
               <div className="flex justify-center gap-4">
                  <Link
                     href="/courses"
                     className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                     Explore Courses
                  </Link>
                  <Link
                     href="/contact"
                     className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                     Contact Us
                  </Link>
               </div>
            </section>
         </div>
      </div>
   );
}
