"use client";

import { useUser } from "@/context/UserContext";
import { TOKEN } from "@/utils/constant";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OAuth2RedirectPage() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const token = searchParams.get("token");
   const { setUserInfo } = useUser();

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
            setUserInfo(response.data);
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
   }, [router, setUserInfo, token]);

   return <p>Redirecting...</p>;
}
