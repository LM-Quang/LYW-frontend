import { useUser } from "@/context/UserContext";
import Link from "next/link";
import React from "react";

const TOKEN = process.env.NEXT_TOKEN_NAME || "";

const AdminNavbar = () => {
   const { updateUser, updateUserInfo } = useUser();

   const handleLogout = async () => {
      updateUser(null);
      updateUserInfo(null);
      localStorage.removeItem(TOKEN);
      window.location.href = "/";
   };
   return (
      <>
         <li>
            <Link
               href="/admin"
               className="px-3 py-2 font-medium rounded-lg hover:bg-primary-500 text-white transition-colors"
            >
               Dashboard
            </Link>
         </li>
         <li>
            <button
               onClick={handleLogout}
               className="cursor-pointer px-3 py-2 font-medium rounded-lg hover:bg-primary-500 text-white transition-colors"
            >
               Logout
            </button>
         </li>
      </>
   );
};

export default AdminNavbar;
