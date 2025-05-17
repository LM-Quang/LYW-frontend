import { useUser } from "@/context/UserContext";
import { TOKEN } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo-1.png";
import { useRouter } from "next/navigation";
import DefaultAvatar from "./DefaultAvatar";

const StudentNavbar = () => {
   const { user, updateUser } = useUser();
   const router = useRouter();

   const handleLogout = async () => {
      updateUser(null);
      localStorage.removeItem(TOKEN);
      window.location.href = "/";
   };

   if (!user) {
      router.push("/");
      return;
   }

   return (
      <>
         <li>
            <Link
               href="/my-learning"
               className="px-3 py-1 font-medium rounded-full hover:bg-primary-500 hover:text-white transition-colors"
            >
               My Learning
            </Link>
         </li>
         <li className="ml-2 relative group">
            {user.avatar ? (
               <Image
                  className="rounded-full"
                  src={logo}
                  alt={user.username}
                  width={50}
                  height={50}
               />
            ) : (
               <DefaultAvatar width={50} height={50} fontSize={20} name={user.username} />
            )}
            <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg z-20 transition-opacity duration-200 hidden group-hover:block group-focus-within:block">
               <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">{user.username}</p>
                  <p className="text-xs text-gray-600 truncate">{user.email}</p>
               </div>
               <div className="py-1">
                  <Link
                     href="/profile"
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                     Profile
                  </Link>
                  <Link
                     href="/my-learning"
                     className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                     My Learning
                  </Link>
                  <button
                     onClick={handleLogout}
                     className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                     Logout
                  </button>
               </div>
            </div>
         </li>
      </>
   );
};

export default StudentNavbar;
