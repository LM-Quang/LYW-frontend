import React from "react";

const socialMedias = [
   {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      tag: <i className="fa-brands fa-linkedin text-2xl" />,
   },
   {
      name: "Facebook",
      href: "https://www.facebook.com",
      tag: <i className="fa-brands fa-facebook-f text-2xl" />,
   },
   {
      name: "Instagram",
      href: "https://www.instagram.com",
      tag: <i className="fa-brands fa-square-instagram text-2xl" />,
   },
   { name: "X", href: "https://www.x.com", tag: <i className="fa-brands fa-x-twitter text-2xl" /> },
   {
      name: "TikTok",
      href: "https://www.tiktok.com",
      tag: <i className="fa-brands fa-tiktok text-2xl" />,
   },
];

const SocialMedias = () => {
   return (
      <div className="mt-4 flex space-x-4">
         {socialMedias.map((media) => {
            return (
               <a
                  key={media.name}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={media.name}
                  className="hover:text-primary-500 transition-colors"
               >
                  {media.tag}
               </a>
            );
         })}
      </div>
   );
};

export default SocialMedias;
