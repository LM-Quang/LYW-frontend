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
