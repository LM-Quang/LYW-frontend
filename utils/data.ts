import {
   User,
   Student,
   Teacher,
   Cart,
   Section,
   Lecture,
   Comment,
   Role,
   SubscriptionTier,
   BillingCycle,
   PaymentMethod,
   CourseRelatedStatus,
   PricingType,
   Currency,
   DescriptionType,
   StudentCourseEnrollment,
   Team,
   PricingRule,
   CartItem,
} from "./types";

export enum Category {
   AI = "AI",
   DATA_SCIENCE = "Data Science",
   SOFTWARE_DEVELOPMENT = "Software Development",
   WEB_DEVELOPMENT = "Web Development",
   MOBILE_DEVELOPMENT = "Mobile Development",
   GAME_DEVELOPMENT = "Game Development",
   DATABASE = "Database",
   CLOUD = "Cloud",
   CYBERSECURITY = "Cybersecurity",
   UI_UX_DESIGN = "UI/UX Design",
   DEVOPS = "Dev Ops",
   MARKETING = "Marketing",
   FINANCE = "Finance",
   PROGRAMMING = "Programming",
}

export enum SubCategory {
   // AI
   MACHINE_LEARNING = "Machine Learning",
   DEEP_LEARNING = "Deep Learning",
   NATURAL_LANGUAGE_PROCESSING = "Natural Language Processing",
   COMPUTER_VISION = "Computer Vision",
   REINFORCEMENT_LEARNING = "Reinforcement Learning",
   GENERATIVE_AI = "Generative AI",
   // Data Science
   DATA_ENGINEER = "Data Engineer",
   DATA_ANALYSIS = "Data Analysis",
   DATA_VISUALIZATION = "Data Visualization",
   // Software Development
   EMBEDDED_SYSTEMS = "Embedded Systems",
   // Web Development
   FRONTEND_DEVELOPMENT = "Frontend Development",
   BACKEND_DEVELOPMENT = "Backend Development",
   // Mobile Development
   IOS_DEVELOPMENT = "iOS Development",
   ANDROID_DEVELOPMENT = "Andriod Development",
   // Cloud
   CLOUD_COMPUTING = "Cloud Computing",
   // Cybersecurity
   NETWORK_SECURITY = "Network Security",
   ETHICAL_HACKING = "Ethical Hacking",
   // UI/UX Design
   USER_EXPERIENCE = "User Experience",
   USER_INTERFACE = "User Interface",
   // DevOps
   CI_CD = "CI/CD",
   INFRASTRUCTURE_AS_CODE = "Infrastructure as Code",
   // Marketing
   DIGITAL_MARKETING = "Digital Marketing",
   SEO = "SEO",
   // Finance
   FINANCIAL_ANALYSIS = "Financial Analysis",
   FINTECH = "FinTech",
}

export enum LanguageSubCategory {
   BASH = "Bash",
   C = "C",
   CPP = "C++",
   CSHARP = "C#",
   JAVA = "Java",
   PYTHON = "Python",
   JAVASCRIPT = "JavaScript",
   TYPESCRIPT = "TypeScript",
   RUST = "Rust",
   SQL = "SQL",
   R = "R",
   SWIFT = "Swift",
   KOTLIN = "Kotlin",
   GO = "Go",
}

export enum FrameworkSubCategory {
   // Web Development
   REACT = "React",
   ANGULAR = "Angular",
   VUE = "Vue",
   SPRING_BOOT = "Spring Boot",
   ASP_NET = "ASP.NET",
   // Mobile Development
   FLUTTER = "Flutter",
   REACT_NATIVE = "React Native",
   SWIFTUI = "SwiftUI",
   // Game Development
   UNITY = "Unity",
   UNREAL_ENGINE = "Unreal Engine",
   // Cloud/DevOps
   AWS = "AWS",
   AZURE = "Azure",
   KUBERNETES = "Kubernetes",
   DOCKER = "Docker",
   // AI/Machine Learning
   TENSORFLOW = "TensorFlow",
   PYTORCH = "PyTorch",
}

export enum DatabaseSubCategory {
   DBMS = "DBMS",
   RELATIONAL_DATABASES = "Relational Databases",
   NOSQL_DATABASES = "NoSQL Databases",
   MYSQL = "MySQL",
   POSTGRESQL = "PostgreSQL",
   MONGODB = "MongoDB",
   ORACLE = "Oracle",
}

// Mapping type to associate categories with subcategories, languages, and frameworks
// type CategoryMapping = {
//    category: Category;
//    subcategory: SubCategory | LanguageSubCategory | FrameworkSubCategory;
// };

// // Updated mapping for filtering
// const categoryMappings: CategoryMapping[] = [
//    // Technology mappings
//    { category: Category.AI_ML, subcategory: SubCategory.AI },
//    { category: Category.AI_ML, subcategory: SubCategory.MACHINE_LEARNING },
//    { category: Category.AI_ML, subcategory: SubCategory.DEEP_LEARNING },
//    { category: Category.AI_ML, subcategory: SubCategory.NATURAL_LANGUAGE_PROCESSING },
//    { category: Category.AI_ML, subcategory: SubCategory.COMPUTER_VISION },
//    { category: Category.AI_ML, subcategory: SubCategory.REINFORCEMENT_LEARNING },
//    { category: Category.AI_ML, subcategory: SubCategory.GENERATIVE_AI },
//    { category: Category.EMBEDDED_SYSTEMS, subcategory: SubCategory.EMBEDDED_SYSTEMS },
//    // Cloud mappings
//    { category: Category.CLOUD, subcategory: SubCategory.CLOUD_COMPUTING },
//    { category: Category.CLOUD, subcategory: FrameworkSubCategory.AWS },
//    { category: Category.CLOUD, subcategory: FrameworkSubCategory.AZURE },
//    { category: Category.CLOUD, subcategory: FrameworkSubCategory.KUBERNETES },
//    { category: Category.CLOUD, subcategory: FrameworkSubCategory.DOCKER },
//    { category: Category.CLOUD, subcategory: LanguageSubCategory.PYTHON },
//    { category: Category.CLOUD, subcategory: LanguageSubCategory.BASH },
//    // Cybersecurity mappings
//    { category: Category.CYBERSECURITY, subcategory: SubCategory.NETWORK_SECURITY },
//    { category: Category.CYBERSECURITY, subcategory: SubCategory.ETHICAL_HACKING },
//    { category: Category.CYBERSECURITY, subcategory: LanguageSubCategory.PYTHON },
//    { category: Category.CYBERSECURITY, subcategory: LanguageSubCategory.BASH },
//    // UI/UX Design mappings
//    { category: Category.UI_UX_DESIGN, subcategory: SubCategory.USER_EXPERIENCE },
//    { category: Category.UI_UX_DESIGN, subcategory: SubCategory.USER_INTERFACE },
//    { category: Category.UI_UX_DESIGN, subcategory: LanguageSubCategory.JAVASCRIPT },
//    { category: Category.UI_UX_DESIGN, subcategory: FrameworkSubCategory.REACT },
//    // DevOps mappings
//    { category: Category.DEVOPS, subcategory: SubCategory.CI_CD },
//    { category: Category.DEVOPS, subcategory: SubCategory.INFRASTRUCTURE_AS_CODE },
//    { category: Category.DEVOPS, subcategory: FrameworkSubCategory.KUBERNETES },
//    { category: Category.DEVOPS, subcategory: FrameworkSubCategory.DOCKER },
//    { category: Category.DEVOPS, subcategory: LanguageSubCategory.PYTHON },
//    { category: Category.DEVOPS, subcategory: LanguageSubCategory.BASH },
//    // Marketing mappings
//    { category: Category.MARKETING, subcategory: SubCategory.DIGITAL_MARKETING },
//    { category: Category.MARKETING, subcategory: SubCategory.SEO },
//    // Finance mappings
//    { category: Category.FINANCE, subcategory: SubCategory.FINANCIAL_ANALYSIS },
//    { category: Category.FINANCE, subcategory: SubCategory.FINTECH },
//    { category: Category.FINANCE, subcategory: LanguageSubCategory.PYTHON },
//    // Database mappings
//    { category: Category.DATABASE, subcategory: SubCategory.DBMS },
//    { category: Category.DATABASE, subcategory: SubCategory.RELATIONAL_DATABASES },
//    { category: Category.DATABASE, subcategory: SubCategory.NOSQL_DATABASES },
//    { category: Category.DATABASE, subcategory: LanguageSubCategory.SQL },
//    { category: Category.DATABASE, subcategory: FrameworkSubCategory.MYSQL },
//    { category: Category.DATABASE, subcategory: FrameworkSubCategory.POSTGRESQL },
//    { category: Category.DATABASE, subcategory: FrameworkSubCategory.MONGODB },
//    { category: Category.DATABASE, subcategory: FrameworkSubCategory.ORACLE },
// ];

// // Filtering utility functions for learning platform
// // Get all categories
// export function getAllCategories(): Category[] {
//    return Object.values(Category);
// }

// // Get all subcategories (including languages and frameworks) for a category
// export function getSubCategoriesForCategory(
//    category: Category
// ): (SubCategory | LanguageSubCategory | FrameworkSubCategory)[] {
//    return categoryMappings
//       .filter((mapping) => mapping.category === category)
//       .map((mapping) => mapping.subcategory);
// }

// // Get only non-language, non-framework subcategories
// export function getNonLanguageSubCategories(category: Category): SubCategory[] {
//    return categoryMappings
//       .filter(
//          (mapping) =>
//             mapping.category === category &&
//             Object.values(SubCategory).includes(mapping.subcategory as SubCategory)
//       )
//       .map((mapping) => mapping.subcategory as SubCategory);
// }

// // Get only language subcategories
// export function getLanguageSubCategories(category: Category): LanguageSubCategory[] {
//    return categoryMappings
//       .filter(
//          (mapping) =>
//             mapping.category === category &&
//             Object.values(LanguageSubCategory).includes(mapping.subcategory as LanguageSubCategory)
//       )
//       .map((mapping) => mapping.subcategory as LanguageSubCategory);
// }

// // Get only framework subcategories
// export function getFrameworkSubCategories(category: Category): FrameworkSubCategory[] {
//    return categoryMappings
//       .filter(
//          (mapping) =>
//             mapping.category === category &&
//             Object.values(FrameworkSubCategory).includes(
//                mapping.subcategory as FrameworkSubCategory
//             )
//       )
//       .map((mapping) => mapping.subcategory as FrameworkSubCategory);
// }

// // Example: Course type and sample data for learning platform
// type Course = {
//    title: string;
//    category: Category;
//    subcategory: SubCategory | LanguageSubCategory | FrameworkSubCategory;
// };

// const courses: Course[] = [
//    // Technology
//    { title: "Introduction to AI", category: Category.TECHNOLOGY, subcategory: SubCategory.AI },
//    { title: "Machine Learning with Python", category: Category.TECHNOLOGY, subcategory: LanguageSubCategory.PYTHON },
//    { title: "Deep Learning with TensorFlow", category: Category.TECHNOLOGY, subcategory: FrameworkSubCategory.TENSORFLOW },
//    { title: "Natural Language Processing Basics", category: Category.TECHNOLOGY, subcategory: SubCategory.NATURAL_LANGUAGE_PROCESSING },
//    { title: "Computer Vision with PyTorch", category: Category.TECHNOLOGY, subcategory: FrameworkSubCategory.PYTORCH },
//    { title: "Reinforcement Learning Fundamentals", category: Category.TECHNOLOGY, subcategory: SubCategory.REINFORCEMENT_LEARNING },
//    { title: "Generative AI with GANs", category: Category.TECHNOLOGY, subcategory: SubCategory.GENERATIVE_AI },
//    { title: "Embedded Systems with C", category: Category.TECHNOLOGY, subcategory: LanguageSubCategory.C },
//    // Data
//    { title: "Python for Data Science", category: Category.DATA, subcategory: LanguageSubCategory.PYTHON },
//    // Software
//    { title: "Web Development with JavaScript", category: Category.SOFTWARE, subcategory: LanguageSubCategory.JAVASCRIPT },
//    { title: "React for Beginners", category: Category.SOFTWARE, subcategory: FrameworkSubCategory.REACT },
//    { title: "Building APIs with Spring Boot", category: Category.SOFTWARE, subcategory: FrameworkSubCategory.SPRING_BOOT },
//    { title: "Full-Stack Web Development", category: Category.SOFTWARE, subcategory: SubCategory.WEB_DEVELOPMENT },
//    { title: "Mobile App Development with Flutter", category: Category.SOFTWARE, subcategory: FrameworkSubCategory.FLUTTER },
//    { title: "iOS Development with Swift", category: Category.SOFTWARE, subcategory: LanguageSubCategory.SWIFT },
//    { title: "Android Development with Kotlin", category: Category.SOFTWARE, subcategory: LanguageSubCategory.KOTLIN },
//    { title: "Cross-Platform Mobile Apps", category: Category.SOFTWARE, subcategory: SubCategory.MOBILE_DEVELOPMENT },
//    { title: "Game Development with Unity", category: Category.SOFTWARE, subcategory: FrameworkSubCategory.UNITY },
//    { title: "Unreal Engine Basics", category: Category.SOFTWARE, subcategory: FrameworkSubCategory.UNREAL_ENGINE },
//    { title: "Introduction to Game Development", category: Category.SOFTWARE, subcategory: SubCategory.GAME_DEVELOPMENT },
//    // Cloud
//    { title: "AWS Cloud Practitioner", category: Category.CLOUD, subcategory: FrameworkSubCategory.AWS },
//    { title: "Cloud Computing Fundamentals", category: Category.CLOUD, subcategory: SubCategory.CLOUD_COMPUTING },
//    // Cybersecurity
//    { title: "Ethical Hacking Basics", category: Category.CYBERSECURITY, subcategory: SubCategory.ETHICAL_HACKING },
//    { title: "Network Security with Python", category: Category.CYBERSECURITY, subcategory: LanguageSubCategory.PYTHON },
//    // UI/UX Design
//    { title: "User Experience Design", category: Category.UI_UX_DESIGN, subcategory: SubCategory.USER_EXPERIENCE },
//    { title: "Building UI with React", category: Category.UI_UX_DESIGN, subcategory: FrameworkSubCategory.REACT },
//    // DevOps
//    { title: "CI/CD with Jenkins", category: Category.DEVOPS, subcategory: SubCategory.CI_CD },
//    { title: "Kubernetes for DevOps", category: Category.DEVOPS, subcategory: FrameworkSubCategory.KUBERNETES },
//    // Marketing
//    { title: "Digital Marketing Strategy", category: Category.MARKETING, subcategory: SubCategory.DIGITAL_MARKETING },
//    { title: "SEO Fundamentals", category: Category.MARKETING, subcategory: SubCategory.SEO },
//    // Finance
//    { title: "Financial Analysis with Python", category: Category.FINANCE, subcategory: LanguageSubCategory.PYTHON },
//    { title: "Introduction to FinTech", category: Category.FINANCE, subcategory: SubCategory.FINTECH },
//    // Database
//    { title: "Introduction to DBMS", category: Category.DATABASE, subcategory: SubCategory.DBMS },
//    { title: "SQL for Relational Databases", category: Category.DATABASE, subcategory: LanguageSubCategory.SQL },
//    { title: "MySQL Database Administration", category: Category.DATABASE, subcategory: FrameworkSubCategory.MYSQL },
//    { title: "MongoDB for NoSQL Databases", category: Category.DATABASE, subcategory: FrameworkSubCategory.MONGODB },
//    { title: "Relational Database Design", category: Category.DATABASE, subcategory: SubCategory.RELATIONAL_DATABASES },
//    { title: "NoSQL Database Fundamentals", category: Category.DATABASE, subcategory: SubCategory.NOSQL_DATABASES }
// ];

// Filter courses by category
// export function filterCoursesByCategory(category: Category): Course[] {
//    return courses.filter(course => course.category === category);
// }

// Filter courses by subcategory, language, or framework
// export function filterCoursesBySubCategory(subcategory: SubCategory | LanguageSubCategory | FrameworkSubCategory): Course[] {
//    return courses.filter(course => course.subcategory === subcategory);
// }

// Test the filtering
// console.log(getAllCategories());
// Output: ["Technology", "Data", "Software", "Cloud", "Cybersecurity", "UI/UX Design", "DevOps", "Marketing", "Finance", "Database"]

// console.log(getSubCategoriesForCategory(Category.DATABASE));
// Output: ["DBMS", "Relational Databases", "NoSQL Databases", "SQL", "MySQL", "PostgreSQL", "MongoDB", "Oracle"]

// console.log(getNonLanguageSubCategories(Category.DATABASE));
// Output: ["DBMS", "Relational Databases", "NoSQL Databases"]

// console.log(getFrameworkSubCategories(Category.DATABASE));
// Output: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]

// console.log(filterCoursesByCategory(Category.DATABASE));
// Output: [
//   { title: "Introduction to DBMS", category: "Database", subcategory: "DBMS" },
//   { title: "SQL for Relational Databases", category: "Database", subcategory: "SQL" },
//   { title: "MySQL Database Administration", category: "Database", subcategory: "MySQL" },
//   { title: "MongoDB for NoSQL Databases", category: "Database", subcategory: "MongoDB" },
//   { title: "Relational Database Design", category: "Database", subcategory: "Relational Databases" },
//   { title: "NoSQL Database Fundamentals", category: "Database", subcategory: "NoSQL Databases" }
// ]

// console.log(filterCoursesBySubCategory(SubCategory.DBMS));
// Output: [{ title: "Introduction to DBMS", category: "Database", subcategory: "DBMS" }]

// console.log(filterCoursesBySubCategory(FrameworkSubCategory.MYSQL));
// Output: [{ title: "MySQL Database Administration", category: "Database", subcategory: "MySQL" }]

export enum CourseLevel {
   BEGINNER = "Beginner Frendly",
   INTERMEDIATE = "Intermediate",
   ADVANCED = "Advanced",
}

export enum Tag {
   TREND = "Trending",
   BEST_SELLER = "Bestseller",
   NEW = "New",
}

export enum TagColor {
   GREEN = "bg-primary-500",
   RED = "bg-red-500",
   BLUE = "bg-blue-500",
}

export const TAG_TREND: CourseTag = { name: Tag.TREND, color: TagColor.RED };

export const TAG_BESTSELLER: CourseTag = { name: Tag.BEST_SELLER, color: TagColor.GREEN };

export const TAG_NEW: CourseTag = { name: Tag.NEW, color: TagColor.BLUE };

export enum LectureFileType {
   VIDEO,
   PDF,
   QUIZ,
   PRACTICE,
}
// ======================================== Constatnts ========================================
export const USERS: User[] = [
   {
      id: "user_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "superadmin@example.com",
      username: "superadmin",
      roles: [Role.ADMIN],
      phoneNumber: "+12025550120",
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "admin@example.com",
      username: "admin1",
      roles: [Role.ADMIN],
      phoneNumber: "+12025550121",
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "admin@gmail.com",
      username: "AdminM",
      roles: [Role.ADMIN],
      phoneNumber: "+12025550122",
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "john.doe@example.com",
      username: "johndoe",
      roles: [Role.STUDENT],
      avatar: "/assets/avatar.jpg",
      phoneNumber: "+12025550123",
      subscriptionTier: SubscriptionTier.PREMIUM_INDIVIDUAL,
      subscriptionStatus: {
         active: true,
         billingCycle: BillingCycle.MONTHLY,
         renewalDate: "2025-06-01",
      },
      teamIds: ["team_001"],
   },
   {
      id: "user_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "emma.wilson@example.com",
      username: "emmawilson",
      roles: [Role.STUDENT],
      phoneNumber: "+12025550124",
      subscriptionTier: SubscriptionTier.PAY_PER_SECTION,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: ["team_001"],
   },
   {
      id: "user_006",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "student@gmail.com",
      username: "StudentD",
      roles: [Role.STUDENT],
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_007",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "jane.smith@example.com",
      username: "Jane Smith",
      roles: [Role.TEACHER],
      avatar: "/assets/avatar.jpg",
      phoneNumber: "+12025550125",
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_008",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "michael.brown@example.com",
      username: "Michael Brown",
      roles: [Role.TEACHER],
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
   {
      id: "user_009",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      email: "teacher@gmail.com",
      username: "TeacherC",
      roles: [Role.TEACHER],
      subscriptionTier: SubscriptionTier.FREE,
      subscriptionStatus: { active: false, billingCycle: BillingCycle.MONTHLY },
      teamIds: [],
   },
];

export const TEAMS: Team[] = [
   {
      id: "team_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      name: "LearningSquad",
      adminId: "user_004",
      memberIds: ["user_004", "user_005"],
      subscriptionTier: SubscriptionTier.TEAM_BASIC,
      seatLimit: 5,
      analytics: { completionRate: 60, activeMembers: 2 },
   },
];

export const STUDENTS: Student[] = [
   {
      id: "student_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_006",
      enrollmentIds: [],
   },
   {
      id: "student_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      enrollmentIds: ["enrollment_001"],
   },
   {
      id: "student_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      enrollmentIds: ["enrollment_002"],
   },
];

export const TEACHERS: Teacher[] = [
   {
      id: "teacher_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_009",
      bio: "Experienced educator in programming",
      paymentInfo: { method: PaymentMethod.BANK, details: "IBAN:JP1234567890" },
      courseIds: [],
      background: [
         {
            title: "Education",
            description: "MSc in Computer Science, XYZ University",
            type: DescriptionType.EDUCATION,
            startDate: "2015-09-01",
            endDate: "2017-06-30",
         },
      ],
      experience: [
         {
            title: "Senior Developer",
            description: "Worked at Tech Corp for 5 years",
            type: DescriptionType.WORK,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
      ],
   },
   {
      id: "teacher_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_007",
      bio: "Passionate about teaching Python and data science",
      paymentInfo: { method: PaymentMethod.PAYPAL, details: "jane.smith@paypal.com" },
      courseIds: ["course_001", "course_002", "course_007", "course_009"],
      background: [
         {
            title: "Education",
            description: "MSc in Computer Science, XYZ University",
            type: DescriptionType.EDUCATION,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
      ],
      experience: [
         {
            title: "Senior Developer",
            description: "Worked at Tech Corp for 5 years",
            type: DescriptionType.WORK,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
      ],
   },
   {
      id: "teacher_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_008",
      bio: "Expert in web development and cloud computing",
      paymentInfo: { method: PaymentMethod.STRIPE, details: "stripe:michael.brown@stripe.com" },
      courseIds: [
         "course_003",
         "course_004",
         "course_005",
         "course_006",
         "course_008",
         "course_010",
      ],
      background: [
         {
            title: "Education",
            description: "BSc in Software Engineering, ABC University",
            type: DescriptionType.EDUCATION,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
         {
            title: "Certification",
            description: "Certified JavaScript Developer",
            type: DescriptionType.CERTIFICATION,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
      ],
      experience: [
         {
            title: "Lead Developer",
            description: "Led frontend team at Web Solutions Inc. for 7 years",
            type: DescriptionType.WORK,
            startDate: "2017-07-01",
            endDate: "2022-06-30",
         },
      ],
   },
];

export const PRICING_RULES: PricingRule[] = [
   {
      id: "rule_001",
      type: PricingType.USER_SPECIFIC,
      condition: { subscriptionTier: SubscriptionTier.PREMIUM_INDIVIDUAL },
      discount: { percentage: 15 },
      maxApplications: 1,
   },
   {
      id: "rule_002",
      type: PricingType.TIME_BASED,
      condition: {
         validUntil: "2025-05-10",
         startDate: "2025-05-10",
      },
      discount: { percentage: 10 },
      maxApplications: 1,
   },
];

// export const COURSES: Course[] = [
//    {
//       id: "course_001",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Introduction to Python",
//       instructorId: "user_007",
//       description: "Learn Python programming from scratch.",
//       duration: 3600,
//       category: Category.PROGRAMMING,
//       totalPrice: 69.98,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.5,
//       reviewsCount: 12044,
//       enrolledStudents: 1234,
//       isBestSeller: true,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_001", "section_002"],
//       commentIds: ["comment_001", "comment_002"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_002",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Data Science with R",
//       instructorId: "user_007",
//       description: "Master data analysis with R.",
//       duration: 7200,
//       category: Category.DATA_SCIENCE,
//       totalPrice: 60,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.2,
//       reviewsCount: 80,
//       enrolledStudents: 55,
//       isBestSeller: false,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_003", "section_004", "section_005", "section_006"],
//       commentIds: [],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_003",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Web Development Bootcamp",
//       instructorId: "user_008",
//       description: "Build modern web applications with HTML, CSS, and JavaScript.",
//       duration: 10800,
//       category: Category.WEB_DEVELOPMENT,
//       totalPrice: 109.98,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.8,
//       reviewsCount: 200,
//       enrolledStudents: 150,
//       isBestSeller: true,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_007", "section_008"],
//       commentIds: ["comment_003", "comment_004"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_004",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Advanced JavaScript",
//       instructorId: "user_008",
//       description: "Deep dive into JavaScript frameworks and patterns.",
//       duration: 5400,
//       category: Category.DEVELOPMENT,
//       totalPrice: 39.99,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.3,
//       reviewsCount: 90,
//       enrolledStudents: 80,
//       isBestSeller: false,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_009"],
//       commentIds: [],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_005",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Intro to Machine Learning",
//       instructorId: "user_008",
//       description: "Learn the basics of machine learning with Python.",
//       duration: 9000,
//       category: Category.MACHINE_LEARNING,
//       totalPrice: 179.99,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.6,
//       reviewsCount: 150,
//       enrolledStudents: 100,
//       isBestSeller: true,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: [],
//       commentIds: ["comment_005"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_006",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "AWS Cloud Practitioner Essentials",
//       instructorId: "user_008",
//       description: "Master the fundamentals of AWS cloud services.",
//       duration: 7200,
//       category: Category.CLOUD,
//       totalPrice: 89.98,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.7,
//       reviewsCount: 180,
//       enrolledStudents: 100,
//       isBestSeller: true,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_010", "section_011"],
//       commentIds: ["comment_006", "comment_007"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_007",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Cybersecurity Fundamentals",
//       instructorId: "user_007",
//       description: "Learn to protect systems and data from cyber threats.",
//       duration: 7200,
//       category: Category.CYBERSECURITY,
//       totalPrice: 109.98,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.4,
//       reviewsCount: 110,
//       enrolledStudents: 95,
//       isBestSeller: false,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_012", "section_013"],
//       commentIds: ["comment_008"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_008",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "UI/UX Design with Figma",
//       instructorId: "user_008",
//       description: "Design user-friendly interfaces using Figma.",
//       duration: 5400,
//       category: Category.UI_UX_DESIGN,
//       totalPrice: 29.99,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.6,
//       reviewsCount: 95,
//       enrolledStudents: 80,
//       isBestSeller: true,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_014"],
//       commentIds: ["comment_009"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_009",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "SQL for Beginners",
//       instructorId: "user_007",
//       description: "Learn database management with SQL.",
//       duration: 3600,
//       category: Category.DATABASE,
//       totalPrice: 29.99,
//       currency: Currency.USD,
//       thumbnail: "/assets/img-1.jpg",
//       rating: 4.3,
//       reviewsCount: 75,
//       enrolledStudents: 70,
//       isBestSeller: false,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_015"],
//       commentIds: ["comment_010"],
//       publishedAt: "2025-05-10",
//    },
//    {
//       id: "course_010",
//       createdAt: "2025-03-01",
//       updatedAt: "2025-05-10",
//       title: "Advanced Cloud Architecture",
//       instructorId: "user_008",
//       description: "Design scalable cloud solutions with AWS.",
//       duration: 9000,
//       category: Category.CLOUD,
//       totalPrice: 69.99,
//       currency: Currency.USD,
//       thumbnail: "assets/img-1.jpg",
//       rating: 4.9,
//       reviewsCount: 50,
//       enrolledStudents: 40,
//       isBestSeller: false,
//       status: CourseRelatedStatus.PUBLISHED,
//       sectionIds: ["section_016"],
//       commentIds: ["comment_011"],
//       publishedAt: "2025-05-10",
//    },
//    // Note: Courses 011–015 omitted for brevity; similar structure applies
// ];

export const SECTIONS: Section[] = [
   {
      id: "section_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Python Basics",
      basePrice: 29.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 29.99,
      order: 1,
      lectureIds: ["lecture_001", "lecture_002", "lecture_003", "lecture_004", "lecture_005"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Advanced Python",
      basePrice: 39.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 39.99,
      order: 2,
      lectureIds: ["lecture_006", "lecture_007", "lecture_008"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "K-Nearest Neighbor",
      basePrice: 15,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 15,
      order: 1,
      lectureIds: ["lecture_009", "lecture_010"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Naive Bayes and Bayes Classifiers",
      basePrice: 15,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 15,
      order: 2,
      lectureIds: ["lecture_011", "lecture_012"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Decision Trees",
      basePrice: 15,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 15,
      order: 3,
      lectureIds: ["lecture_013", "lecture_014"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_006",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Perceptrons",
      basePrice: 15,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 15,
      order: 4,
      lectureIds: ["lecture_015", "lecture_016"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_007",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "HTML & CSS Fundamentals",
      basePrice: 49.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 49.99,
      order: 1,
      lectureIds: ["lecture_017"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_008",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "JavaScript Essentials",
      basePrice: 59.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 59.99,
      order: 2,
      lectureIds: ["lecture_018"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_009",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "JavaScript Frameworks",
      basePrice: 39.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 39.99,
      order: 1,
      lectureIds: ["lecture_019"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_010",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Introduction to AWS",
      basePrice: 39.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 39.99,
      order: 1,
      lectureIds: ["lecture_020"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_011",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "AWS Core Services",
      basePrice: 49.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 49.99,
      order: 2,
      lectureIds: ["lecture_021"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_012",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Cybersecurity Basics",
      basePrice: 49.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 49.99,
      order: 1,
      lectureIds: ["lecture_022"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_013",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Network Security",
      basePrice: 59.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 59.99,
      order: 2,
      lectureIds: ["lecture_023"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_014",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Figma Basics",
      basePrice: 29.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 29.99,
      order: 1,
      lectureIds: ["lecture_024"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_015",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "SQL Fundamentals",
      basePrice: 29.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 29.99,
      order: 1,
      lectureIds: ["lecture_025"],
      status: CourseRelatedStatus.PUBLISHED,
   },
   {
      id: "section_016",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Cloud Architecture Patterns",
      basePrice: 69.99,
      demandFactor: 1.0,
      activePromotions: [],
      finalPrice: 69.99,
      order: 1,
      lectureIds: ["lecture_026", "lecture_027"],
      status: CourseRelatedStatus.PUBLISHED,
   },
];

export const LECTURES: Lecture[] = [
   {
      id: "lecture_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Introduction to Variables",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/python_variables.mp4",
      duration: 930, // 15m30s
      status: CourseRelatedStatus.PUBLISHED,
      size: 150,
   },
   {
      id: "lecture_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Data Types",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_datatypes.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Conditional Statements",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_conditionals.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Loops",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_loops.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "OOP",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_oop.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_006",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Web Scraping",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_webscraping.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_007",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Beautiful Soup",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_beautifulsoup.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_008",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Selenium",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/python_selenium.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_009",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "K-Nearest Neighbor Intuition",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/knn_intro.mp4",
      duration: 1215, // 20m15s
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_010",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "KNN in Code with MNIST",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/knn_mnist.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_011",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Naive Bayes",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/naive_bayes.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_012",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Bayes Classifier in Code with MNIST",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/bayes_mnist.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_013",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Decision Tree Basics",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/decision_trees.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_014",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Information Entropy",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/entropy.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_015",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Perceptron Concepts",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/perceptron.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_016",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Perceptron in Code",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/perceptron_code.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_017",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Introduction to HTML",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/html_intro.mp4",
      duration: 1215,
      status: CourseRelatedStatus.PUBLISHED,
      size: 200,
   },
   {
      id: "lecture_018",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "JavaScript Basics",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/js_basics.mp4",
      duration: 1500, // 25m
      status: CourseRelatedStatus.PUBLISHED,
      size: 250,
   },
   {
      id: "lecture_019",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "React Quick Start",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/react_quickstart.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_020",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "What is AWS?",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/aws_intro.mp4",
      duration: 1125, // 18m45s
      status: CourseRelatedStatus.PUBLISHED,
      size: 180,
   },
   {
      id: "lecture_021",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "AWS EC2 Setup",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/aws_ec2.mp4",
      duration: 1330, // 22m10s
      status: CourseRelatedStatus.PUBLISHED,
      size: 220,
   },
   {
      id: "lecture_022",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Introduction to Cybersecurity",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/cybersecurity_intro.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_023",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Firewall Configuration",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/firewall.mp4",
      duration: 1800, // 30m
      status: CourseRelatedStatus.PUBLISHED,
      size: 300,
   },
   {
      id: "lecture_024",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Getting Started with Figma",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/figma_intro.mp4",
      duration: 920, // 15m20s
      status: CourseRelatedStatus.PUBLISHED,
      size: 150,
   },
   {
      id: "lecture_025",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "SQL SELECT Statements",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/sql_select.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
   {
      id: "lecture_026",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Microservices in AWS",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/aws_microservices.mp4",
      duration: 1730, // 28m50s
      status: CourseRelatedStatus.PUBLISHED,
      size: 280,
   },
   {
      id: "lecture_027",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "Serverless Architecture",
      fileType: LectureFileType.PDF,
      fileUrl: "https://example.com/docs/serverless.pdf",
      duration: 300,
      status: CourseRelatedStatus.PUBLISHED,
      size: 5,
   },
];

export const STUDENT_COURSE_ENROLLMENTS: StudentCourseEnrollment[] = [
   {
      id: "enrollment_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      studentId: "student_002",
      courseId: "course_001",
      sectionIds: ["section_001"],
      pricePaid: 25.49, // 15% discount from 29.99
      appliedRules: [
         {
            id: "rule_001",
            type: PricingType.USER_SPECIFIC,
            condition: { subscriptionTier: SubscriptionTier.PREMIUM_INDIVIDUAL },
            discount: { percentage: 15 },
            maxApplications: 1,
         },
      ],
      enrolledAt: "2025-05-10",
      subscriptionTierAtEnrollment: SubscriptionTier.PREMIUM_INDIVIDUAL,
   },
   {
      id: "enrollment_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      studentId: "student_003",
      courseId: "course_003",
      sectionIds: ["section_007", "section_008"],
      pricePaid: 109.98,
      appliedRules: [],
      enrolledAt: "2025-05-02",
      subscriptionTierAtEnrollment: SubscriptionTier.PAY_PER_SECTION,
   },
];

export const CARTS: Cart[] = [
   {
      id: "cart_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      items: [
         {
            id: "cartitem_001",
            name: "Learn Python programming from scratch.",
            instructorName: "Jane Smith",
            rating: 4.2,
            student: 55,
            duration: 7200,
            courseId: "course_002",
            sectionIds: ["section_003"],
            basePrice: 15,
            appliedRules: [],
            finalPrice: 15,
            currency: Currency.USD,
            subscriptionBenefitApplied: false,
         },
      ],
      totalPrice: 15,
   },
   {
      id: "cart_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      items: [
         {
            id: "cartitem_002",
            name: "Learn the basics of machine learning with Python.",
            instructorName: "Michael Brown",
            rating: 4.6,
            student: 100,
            duration: 9000,
            courseId: "course_005",
            sectionIds: [],
            basePrice: 179.99,
            appliedRules: [],
            finalPrice: 179.99,
            currency: Currency.USD,
            subscriptionBenefitApplied: false,
         },
         {
            id: "cartitem_003",
            name: "Deep dive into JavaScript frameworks and patterns.",
            instructorName: "Michael Brown",
            rating: 4.3,
            student: 80,
            duration: 5400,
            courseId: "course_004",
            sectionIds: ["section_009"],
            basePrice: 39.99,
            appliedRules: [],
            finalPrice: 39.99,
            currency: Currency.USD,
            subscriptionBenefitApplied: false,
         },
      ],
      totalPrice: 219.98,
   },
];

export const COMMENTS: Comment[] = [
   {
      id: "comment_001",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      rating: 5,
      content: "Great course, very clear explanations!",
   },
   {
      id: "comment_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      rating: 3,
      content: "Could use more examples in the advanced section.",
   },
   {
      id: "comment_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 5,
      content: "Amazing course, learned a lot about web development!",
   },
   {
      id: "comment_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 4,
      content: "The JavaScript section was very detailed, thanks!",
   },
   {
      id: "comment_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 4,
      content: "Looking forward to more ML content!",
   },
   {
      id: "comment_006",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 5,
      content: "Really helpful course for getting started with AWS!",
   },
   {
      id: "comment_007",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      rating: 4,
      content: "The EC2 section was very well explained.",
   },
   {
      id: "comment_008",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 4,
      content: "Cybersecurity course is great, but I’d love more hands-on labs.",
   },
   {
      id: "comment_009",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      rating: 5,
      content: "Figma course is fantastic for beginners!",
   },
   {
      id: "comment_010",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_005",
      rating: 5,
      content: "SQL course is clear and concise, highly recommend!",
   },
   {
      id: "comment_011",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      userId: "user_004",
      rating: 5,
      content: "Advanced cloud course is challenging but rewarding.",
   },
];

export const CART_ITEMS: CartItem[] = [
   {
      id: "cartitem_001",
      name: "Learn Python programming from scratch.",
      instructorName: "Jane Smith",
      rating: 4.2,
      student: 55,
      duration: 7200,
      courseId: "course_002",
      sectionIds: ["section_003"],
      basePrice: 20,
      appliedRules: [],
      finalPrice: 20,
      currency: Currency.USD,
      subscriptionBenefitApplied: false,
   },
   {
      id: "cartitem_002",
      name: "Learn the basics of machine learning with Python.",
      instructorName: "Michael Brown",
      rating: 4.6,
      student: 100,
      duration: 9000,
      courseId: "course_005",
      sectionIds: [],
      basePrice: 30,
      appliedRules: [],
      finalPrice: 30,
      currency: Currency.USD,
      subscriptionBenefitApplied: false,
   },
   {
      id: "cartitem_003",
      name: "Deep dive into JavaScript frameworks and patterns.",
      instructorName: "Michael Brown",
      rating: 4.3,
      student: 80,
      duration: 5400,
      courseId: "course_004",
      sectionIds: ["section_009"],
      basePrice: 49.99,
      appliedRules: [],
      finalPrice: 49.99,
      currency: Currency.USD,
      subscriptionBenefitApplied: false,
   },
];

// =============== Data Ver 2 ===============

export interface CourseTag {
   name: Tag;
   color: TagColor;
}

export interface CourseOverviewCard {
   id: string;
   category: Category;
   title: string;
   description: string;
   instructor: string;
   instructorImg?: string;
   price: number;
   tag?: CourseTag;
   duration: number;
   rating: number;
   lesson: number;
   level: CourseLevel;
}

export const ALL_COURSES: CourseOverviewCard[] = [
   {
      id: "course-001",
      category: Category.PROGRAMMING,
      title: "JavaScript Fundamentals",
      description:
         "Master JavaScript from scratch with practical exercises and real-world projects",
      instructor: "James Wilson",
      price: 49.99,
      tag: TAG_TREND,
      duration: 33000,
      rating: 4.8,
      lesson: 24,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-002",
      category: Category.UI_UX_DESIGN,
      title: "Figma for UI Designers",
      description: "Learn to create beautiful interfaces and prototypes with Figma",
      instructor: "Emily Chen",
      price: 59.99,
      tag: TAG_BESTSELLER,
      duration: 37200,
      rating: 4.0,
      lesson: 18,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-003",
      category: Category.DATA_SCIENCE,
      title: "Python for Data Analysis",
      description: "Learn to analyze and visualize data using Python, Pandas and NumPy",
      instructor: "Robert Kim",
      price: 69.99,
      duration: 39630,
      rating: 4.2,
      lesson: 30,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-004",
      category: Category.PROGRAMMING,
      title: "Swift for Beginners",
      description: "Swift for iOS app development",
      instructor: "Maria Lopez",
      price: 39.99,
      tag: TAG_NEW,
      duration: 37200,
      rating: 4.5,
      lesson: 16,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-005",
      category: Category.AI,
      title: "Introduction to Artificial Intelligence",
      description: "Explore AI concepts and build your first neural network",
      instructor: "Dr. Sarah Thompson",
      price: 79.99,
      tag: TAG_TREND,
      duration: 43200,
      rating: 4.7,
      lesson: 28,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-006",
      category: Category.CLOUD,
      title: "AWS Cloud Practitioner Essentials",
      description: "Master the fundamentals of AWS cloud services and solutions",
      instructor: "Michael Brown",
      price: 64.99,
      tag: TAG_BESTSELLER,
      duration: 36000,
      rating: 4.4,
      lesson: 20,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-007",
      category: Category.CYBERSECURITY,
      title: "Ethical Hacking Basics",
      description: "Learn penetration testing and cybersecurity fundamentals",
      instructor: "Alex Carter",
      price: 89.99,
      duration: 46800,
      rating: 4.6,
      lesson: 32,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-008",
      category: Category.AI,
      title: "Machine Learning with TensorFlow",
      description: "Build and deploy machine learning models using TensorFlow",
      instructor: "Dr. Priya Sharma",
      price: 74.99,
      tag: TAG_NEW,
      duration: 41400,
      rating: 4.3,
      lesson: 26,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-009",
      category: Category.UI_UX_DESIGN,
      title: "Adobe Photoshop Masterclass",
      description: "Create stunning graphics and photo edits with Photoshop",
      instructor: "Lisa Nguyen",
      price: 54.99,
      tag: TAG_BESTSELLER,
      duration: 34200,
      rating: 4.9,
      lesson: 22,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-010",
      category: Category.WEB_DEVELOPMENT,
      title: "React.js for Web Development",
      description: "Build modern web applications with React and Redux",
      instructor: "David Miller",
      price: 69.99,
      tag: TAG_TREND,
      duration: 39600,
      rating: 4.5,
      lesson: 29,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-011",
      category: Category.CLOUD,
      title: "Docker and Kubernetes Fundamentals",
      description: "Learn containerization and orchestration for modern DevOps",
      instructor: "Sophie Lee",
      price: 79.99,
      duration: 45000,
      rating: 4.3,
      lesson: 31,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-012",
      category: Category.MARKETING,
      title: "Digital Marketing Strategies",
      description: "Master SEO, social media, and content marketing techniques",
      instructor: "Emma Watson",
      price: 49.99,
      tag: TAG_NEW,
      duration: 32400,
      rating: 4.6,
      lesson: 19,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-013",
      category: Category.DATABASE,
      title: "SQL and Database Design",
      description: "Learn to design and query databases with SQL and MySQL",
      instructor: "John Patel",
      price: 59.99,
      tag: TAG_BESTSELLER,
      duration: 37800,
      rating: 4.4,
      lesson: 25,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-014",
      category: Category.GAME_DEVELOPMENT,
      title: "Unity 3D Game Development",
      description: "Build your first 3D game using Unity and C#",
      instructor: "Thomas Reed",
      price: 74.99,
      tag: TAG_TREND,
      duration: 43200,
      rating: 4.7,
      lesson: 27,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-015",
      category: Category.FINANCE,
      title: "Personal Finance and Investing",
      description: "Master budgeting, investing, and financial planning",
      instructor: "Laura Bennett",
      price: 44.99,
      tag: TAG_NEW,
      duration: 30600,
      rating: 4.5,
      lesson: 17,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-016",
      category: Category.PROGRAMMING,
      title: "Advanced Python Programming",
      description: "Dive into advanced Python concepts like decorators and concurrency",
      instructor: "Dr. Anna Kowalski",
      price: 84.99,
      duration: 46800,
      rating: 4.8,
      lesson: 33,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-017",
      category: Category.PROGRAMMING,
      title: "Intermediate Java Programming language",
      description: "Improve your Java skills with Multi threading",
      instructor: "Claire Dubois",
      price: 49.99,
      tag: TAG_BESTSELLER,
      duration: 36000,
      rating: 4.6,
      lesson: 20,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-018",
      category: Category.AI,
      title: "Deep Learning with PyTorch",
      description: "Build advanced neural networks using PyTorch",
      instructor: "Dr. Wei Zhang",
      price: 79.99,
      tag: TAG_BESTSELLER,
      duration: 41400,
      rating: 4.5,
      lesson: 28,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-019",
      category: Category.CLOUD,
      title: "Azure Cloud Fundamentals",
      description: "Learn Microsoft Azure services for cloud computing",
      instructor: "Mark Sullivan",
      price: 64.99,
      tag: TAG_NEW,
      duration: 37200,
      rating: 4.3,
      lesson: 21,
      level: CourseLevel.BEGINNER,
   },
   {
      id: "course-020",
      category: Category.UI_UX_DESIGN,
      title: "Advanced UX Research Techniques",
      description: "Master user research methods for creating user-centered designs",
      instructor: "Rachel Kim",
      price: 69.99,
      duration: 39600,
      rating: 4.4,
      lesson: 26,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-021",
      category: Category.CYBERSECURITY,
      title: "Network Security Essentials",
      description: "Learn to secure networks and prevent cyber threats",
      instructor: "Daniel Ortiz",
      price: 74.99,
      tag: TAG_BESTSELLER,
      duration: 41400,
      rating: 4.6,
      lesson: 29,
      level: CourseLevel.INTERMEDIATE,
   },
   {
      id: "course-022",
      category: Category.MARKETING,
      title: "Advanced Social Media Marketing",
      description: "Develop expert strategies for social media campaigns",
      instructor: "Olivia Grant",
      price: 59.99,
      tag: TAG_TREND,
      duration: 34200,
      rating: 4.5,
      lesson: 23,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-023",
      category: Category.MARKETING,
      title: "Advanced Social Media Marketing",
      description: "Develop expert strategies for social media campaigns",
      instructor: "Olivia Grant",
      price: 59.99,
      tag: TAG_BESTSELLER,
      duration: 34200,
      rating: 4.5,
      lesson: 23,
      level: CourseLevel.ADVANCED,
   },
   {
      id: "course-024",
      category: Category.MARKETING,
      title: "Advanced Social Media Marketing",
      description: "Develop expert strategies for social media campaigns",
      instructor: "Olivia Grant",
      price: 59.99,
      tag: TAG_NEW,
      duration: 34200,
      rating: 4.5,
      lesson: 23,
      level: CourseLevel.ADVANCED,
   },
];

export interface LectureOverview {
   id: string;
   title: string;
   fileType: LectureFileType;
   duration: number;
}

export interface SectionOverview {
   id: string;
   title: string;
   order: number;
   duration: number;
   lectures: LectureOverview[];
}

export interface CourseDetail {
   category: Category[];
   level: CourseLevel;
   title: string;
   description: string;
   tag: Tag;
   whatYouWillLearn: string[];
   section: SectionOverview[];
   rating: number;
   reviewsCount: number;
   enrolledStudents: number;
   updatedAt: string;
   instructorId: string;
   duration: number; // Total seconds
   thumbnail: string;
   totalPrice: number; // Sum of Section.finalPrice for all sections
   currency: Currency; // e.g., "USD"
   status: CourseRelatedStatus;
   sectionIds: string[];
   commentIds: string[];
   publishedAt?: string;
}
