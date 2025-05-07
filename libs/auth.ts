import { User } from "@/types/Types";

const NAME = "LYW";

const USER: User = {
   avatar: "abc",
   username: "Quang",
   email: "quang@gmail.com",
};

export const getUserFromLocalStorage = () => {
   const jsonData = localStorage.getItem(NAME);
   if (jsonData) {
      return JSON.parse(jsonData);
   }
   return null;
};

export const login = async () => {
   // Call Login API
   // const response = await fetch("/api/auth/login");
   // const data = await response.json();
   // localStorage.setItem(NAME, JSON.stringify(data))
   return USER;
};

export const logout = async () => {
   // Call Login API
   // const response = await fetch("/api/categories");
   // return response.status===200
   return true;
};
