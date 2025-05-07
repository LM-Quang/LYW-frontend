"use client";

import { User } from "@/types/Types";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
   user: User | null;
   setUserInfo: (user: User | null) => void;
   getUserInfo: () => User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const setUserInfo = (user: User | null) => {
      localStorage.setItem("LYW", JSON.stringify(user));
      setUser(user);
   };
   const getUserInfo = () => {
      return user;
   };
   useEffect(() => {
      const fetchUser = () => {
         const data = localStorage.getItem("LYW");
         if (data) {
            setUser(JSON.parse(data));
         }
      };
      fetchUser();
   }, []);
   return (
      <UserContext.Provider value={{ user, getUserInfo, setUserInfo }}>
         {children}
      </UserContext.Provider>
   );
}

export function useUser() {
   const context = useContext(UserContext);
   if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
   }
   return context;
}
