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

// Pricing Engine
// function calculateCartItemPrice(item: CartItem, user: User, sections: Section[]): CartItem {
//   const basePrice = item.sectionIds.reduce((sum, id) => {
//     const section = sections.find(s => s.id === id);
//     return sum + (section?.finalPrice || 0);
//   }, 0);
//   const appliedRules = determineApplicableRules(item, user, sections);
//   const subscriptionBenefitApplied = appliedRules.some(rule =>
//     rule.condition.subscriptionTier === user.subscriptionTier
//   );
//   const finalPrice = applyRules(basePrice, appliedRules);
//   return { ...item, basePrice, appliedRules, finalPrice, subscriptionBenefitApplied };
// }

// Use Zod for runtime validation
// import { z } from "zod";
// const PricingRuleSchema = z.object({
//   id: z.string().uuid(),
//   type: z.enum(["BUNDLE", "PROMO", "USER_SPECIFIC", "TIME_BASED", "DEMAND_BASED"]),
//   condition: z.object({
//     subscriptionTier: z.enum([
//       "FREE", "PREMIUM_INDIVIDUAL", "PAY_PER_SECTION",
//       "TEAM_BASIC", "TEAM_PRO", "BUSINESS_STANDARD", "BUSINESS_ENTERPRISE",
//     ]).optional(),
//     // ...
//   }),
//   discount: z.object({
//     percentage: z.number().min(0).max(100),
//     fixedAmount: z.number().nonnegative().optional(),
//   }),
//   maxApplications: z.number().int().positive().optional(),
//   version: z.number().int().nonnegative(),
// });
