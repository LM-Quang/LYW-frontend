"use client";

import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const TOKEN = process.env.NEXT_TOKEN_NAME || "";

export default function OAuth2RedirectPage() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const token = searchParams.get("token");
   const { updateUserInfo } = useUser();

   useEffect(() => {
      async function fetchData() {
         if (!token) return;
         localStorage.setItem(TOKEN, token);
         try {
            const response = await axios.get(
               `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-info`,
               {
                  withCredentials: true,
               }
            );
            updateUserInfo(response.data);
            router.push("/");
         } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
               alert(err.message);
            } else {
               alert("Unknown Error");
            }
         }
      }

      fetchData();
   }, [router, updateUserInfo, token]);

   return <p className="text-xl p-5">Redirecting...</p>;
}
