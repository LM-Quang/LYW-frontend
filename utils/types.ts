// Base entity shared by all, this interface will not be stored in DB so updatedBy is uneccessay
export interface BaseEntity {
   id: string;
   createdAt: string;
   updatedAt: string;
}

export enum DescriptionType {
   EDUCATION,
   WORK,
   CERTIFICATION,
}
// Reusable description block
export interface DescriptionBlock {
   title: string;
   description: string;
   type: DescriptionType;
   startDate?: string; // Runtime validation, Must be before endDate
   endDate?: string; // Runtime validation. Must be after startDate
}

export enum Role {
   STUDENT,
   TEACHER,
   ADMIN,
}

export enum SubscriptionTier {
   FREE = "FREE",
   PREMIUM_INDIVIDUAL = "PREMIUM_INDIVIDUAL",
   PAY_PER_SECTION = "PAY_PER_SECTION",
   TEAM_BASIC = "TEAM_BASIC",
   TEAM_PRO = "TEAM_PRO",
   BUSINESS_STANDARD = "BUSINESS_STANDARD",
   BUSINESS_ENTERPRISE = "BUSINESS_ENTERPRISE",
}

export enum BillingCycle {
   MONTHLY,
   YEARLY,
}

export interface Team extends BaseEntity {
   name: string;
   adminId: string;
   memberIds: string[];
   subscriptionTier: SubscriptionTier;
   seatLimit: number;
   analytics?: {
      completionRate: number;
      activeMembers: number;
      roiMetrics?: Record<string, number>; // For Business Enterprise
   };
   customBranding?: {
      logoUrl: string;
      theme: string;
   }; // For Business Enterprise
   ssoEnabled?: boolean; // For Business Standard+
}

export interface User extends BaseEntity {
   email: string; // // RFC 5322 compliant, validated at runtime
   username: string;
   avatar?: string;
   roles: Role[];
   phoneNumber?: string; // E.164, e.g., "+12025550123", validated at runtime
   subscriptionTier?: SubscriptionTier | SubscriptionTier.FREE; // For pricing adjustments, Defaults to FREE if undefined
   region?: string; // For regional pricing
   subscriptionStatus?: {
      active: boolean;
      billingCycle: BillingCycle;
      renewalDate?: string;
   };
   teamIds?: string[]; // References Team.id
}

export interface Student extends BaseEntity {
   userId: string;
   enrollmentIds: string[]; // References StudentCourseEnrollment.id
}

export enum PaymentMethod {
   BANK,
   PAYPAL,
   STRIPE,
}
export interface PaymentInfo {
   method: PaymentMethod;
   details: string; // IBAN for BANK, email for PAYPAL, account ID for STRIPE
}

export interface Teacher extends BaseEntity {
   userId: string;
   bio?: string;
   paymentInfo: PaymentInfo;
   courseIds?: string[];
   background?: DescriptionBlock[];
   experience?: DescriptionBlock[];
}

// export enum CategoryGroup {
//    TECHNOLOGY = "Technology",
//    DESIGN = "Design",
// }

// Keep it this way for simplicity
export enum Category {
   CLOUD = "Cloud Computing",
   CYBERSECURITY = "Cybersecurity",
   UI_UX = "UI/UX Design",
   DATABASE = "Database Management",
   MACHINE_LEARNING = "Machine Learning",
   GRAPHIC = "Graphic Design",
   PROGRAMMING = "Programming",
   DATA_SCIENCE = "Data Science",
   WEB_DEV = "Web Development",
   MARKETING = "Marketing",
   GAME_DEV = "Game Development",
}

export enum LectureFileType {
   VIDEO,
   PDF,
   QUIZ,
   PRACTICE,
}

export enum CourseRelatedStatus {
   DRAFT,
   PUBLISHED,
}

export enum PricingType {
   BUNDLE,
   PROMO,
   USER_SPECIFIC,
   TIME_BASED,
   DEMAND_BASED,
}

export interface PricingRule {
   id: string;
   type: PricingType;
   condition: {
      minSections?: number; // Bundle: e.g., 3+ sections
      promoCode?: string; // Promo: e.g., "SAVE20"
      userRoles?: Role[]; // User-specific: e.g., [STUDENT]
      subscriptionTier?: SubscriptionTier; // e.g., PREMIUM_INDIVIDUAL
      teamSize?: number; // e.g., 5+ members
      isEnterprise?: boolean; // For BUSINESS_ENTERPRISE discounts
      startDate?: string; // Promotion start date
      validUntil?: string; // Time-based: e.g., expires May 30, 2025
      enrollmentThreshold?: number; // Demand-based: e.g., 100 students
   };
   discount: {
      percentage: number; // e.g., 10 for 10%
      fixedAmount?: number; // e.g., $5 off
   };
   maxApplications?: number; // e.g., 1 for one-time use
}

export interface Lecture extends BaseEntity {
   title: string;
   fileType: LectureFileType;
   fileUrl: string;
   duration: number; // Time unit: seconds
   status: CourseRelatedStatus;
   size?: number;
}

export interface Section extends BaseEntity {
   title: string;
   basePrice: number; // Base price before demand adjustments
   demandFactor: number; // e.g., 1.2 for 20% increase
   activePromotions: PricingRule[]; // Current time-based offers
   finalPrice: number; // basePrice * demandFactor after promotions
   order: number;
   lectureIds: string[];
   status: CourseRelatedStatus;
}

export interface Comment extends BaseEntity {
   // App does not intend to use Threded comments or reply
   userId: string;
   rating: 1 | 2 | 3 | 4 | 5;
   content: string;
}

export enum Currency {
   USD,
   YEN,
}

export interface Course extends BaseEntity {
   title: string;
   instructorId: string;
   description: string;
   duration: number; // Total seconds
   category: Category;
   thumbnail: string;
   totalPrice: number; // Sum of Section.finalPrice for all sections
   currency: Currency; // e.g., "USD"
   rating: number; // Average of Comment.rating / reviewsCount, keep it this way
   reviewsCount: number;
   enrolledStudents: number;
   isBestSeller: boolean;
   status: CourseRelatedStatus;
   sectionIds: string[];
   commentIds: string[];
   publishedAt?: string;
}

export interface StudentCourseEnrollment extends BaseEntity {
   studentId: string;
   courseId: string;
   sectionIds: string[]; // Enrolled sections
   pricePaid: number; // Actual price paid after discounts
   appliedRules: PricingRule[]; // Rules applied at enrollment
   enrolledAt: string;
   subscriptionTierAtEnrollment: SubscriptionTier; // Tier at time of enrollment
}

export interface StudentCourseProgress extends BaseEntity {
   studentId: string;
   courseId: string;
   sectionIds: string[]; // Progress applies to these sections
   progress: number; // Percentage (0-100)
}

export interface StudentLectureProgress extends BaseEntity {
   studentId: string;
   lectureId: string;
   isWatched: boolean;
}
export interface CartItem {
   id: string;
   name: string;
   instructorName: string;
   rating: number;
   student: number;
   duration: number;
   courseId: string;
   sectionIds: string[]; // Selected sections for enrollment
   basePrice: number; // Sum of Section.price for sectionIds
   appliedRules: PricingRule[]; // Applied discounts
   finalPrice: number; // Price after discounts
   currency: Currency; // Matches Course.currency
   subscriptionBenefitApplied: boolean; // True if subscription discount used
}

export interface Cart extends BaseEntity {
   userId: string;
   items: CartItem[];
   totalPrice: number; // Sum of CartItem.finalPrice
}
