import { CATEGORY_PARAMS, KEYWORD_PARAMS, TAG_PARAMS } from "./constant";

// Get Default Name from name (Ex: "John Doe" -> "JD")
export const getDefaultName = (name: string) => {
   const names = name.trim().split(" ");
   const defaultName = names
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2); // Limit to 2 characters
   return defaultName;
};

// Convert string from abcdef -> abc.. (maxLength = 5)
export default function truncateText(text: string, maxLength: number): string {
   if (text.length <= maxLength) {
      return text;
   }
   return text.slice(0, maxLength - 2) + "..";
}

export const percentageCalculate = (part: number, total: number) => {
   if (total === 0) return 0; // Avoid division by zero
   const percentage = (part / total) * 100;
   return Math.ceil(percentage);
};

export const formatDuration = (seconds: number): string => {
   const hours = Math.floor(seconds / 3600);
   const minutes = Math.floor((seconds % 3600) / 60);

   const hourStr = hours > 0 ? `${hours}h` : "";
   const minuteStr = minutes > 0 ? `${minutes}m` : "";

   return `${hourStr} ${minuteStr}` || "0m";
};

export const timeFromNow = (input: Date | string): string => {
   const now = new Date();
   const past = new Date(input);
   const diffMs = now.getTime() - past.getTime();

   const seconds = Math.floor(diffMs / 1000);
   const minutes = Math.floor(seconds / 60);
   const hours = Math.floor(minutes / 60);
   const days = Math.floor(hours / 24);
   const months = Math.floor(days / 30);
   const years = Math.floor(days / 365);

   if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
   if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
   if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
   if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
   if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
   if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;

   return "just now";
};

// Search URL: /courses?search="Search_Keyword"&category="Category"&tag="Tag"
// Search_Keyword: user input keyword, pre-defined link keyword,...
// Topic: Category, Framework, Language
// Tag: Trend, Bestseller, New
export const createSearchUrl = (
   keyword: string | null,
   category: string | null,
   tag: string | null
) => {
   return `/courses?${KEYWORD_PARAMS}=${keyword}&${CATEGORY_PARAMS}=${category}&${TAG_PARAMS}=${tag}`;
};
