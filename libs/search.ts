// Create an API route to handle the search query and filters
export async function findCourses(request: Request) {
   const { searchParams } = new URL(request.url);
   const query = searchParams.get("query") || "";
   const categories = searchParams.get("categories")?.split(",") || [];
   const levels = searchParams.get("levels")?.split(",") || [];
   const price = searchParams.get("price") || "all";
   const minRating = Number(searchParams.get("minRating")) || 0;

   // Fetch courses from database and apply filters
   // Return filtered courses as JSON
   console.log(query);
   console.log(categories);
   console.log(levels);
   console.log(price);
   console.log(minRating);
}
