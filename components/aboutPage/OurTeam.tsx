import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-1.png";

// Placeholder team member images (replace with real images in a real app)

const OurTeam = () => {
   return (
      <section className="mb-12">
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Meet Our Team
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
               <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center">
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
   );
};

export default OurTeam;
