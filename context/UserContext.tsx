"use client";

import { Student, Teacher, User } from "@/utils/dataTypes";
import { createContext, useContext, useState } from "react";

interface UserContextType {
   user: User | null;
   userInfo: Student | Teacher | null;
   updateUser: (user: User | null) => void;
   updateUserInfo: (info: Student | Teacher | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [userInfo, setUserInfo] = useState<Student | Teacher | null>(null);

   const updateUser = (user: User | null) => {
      setUser(user);
   };

   const updateUserInfo = (info: Student | Teacher | null) => {
      setUserInfo(info);
   };

   return (
      <UserContext.Provider value={{ user, userInfo, updateUser, updateUserInfo }}>
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
