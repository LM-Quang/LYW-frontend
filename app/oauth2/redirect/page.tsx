"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OAuth2RedirectPage() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const token = searchParams.get("token");

   useEffect(() => {
      if (token) {
         localStorage.setItem("token", token);
         router.push("/");
      }
   }, [router, token]);

   return <p>Redirecting...</p>;
}
