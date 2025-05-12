import React from "react";
import Hero from "@/components/aboutPage/Hero";
import OurMisstion from "@/components/aboutPage/OurMisstion";
import OurValues from "@/components/aboutPage/OurValues";
import StartLearning from "@/components/aboutPage/StartLearning";
// import OurTeam from "@/components/aboutPage/OurTeam";

export default function AboutUsPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Hero Section */}
            <Hero />

            {/* Our Mission */}
            <OurMisstion />

            {/* Our Team */}
            {/* <OurTeam /> */}

            {/* Our Values */}
            <OurValues />

            {/* Start Learning */}
            <StartLearning />
         </div>
      </div>
   );
}
