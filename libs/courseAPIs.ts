// import { COURSES, USERS } from "@/utils/data";
import {
   Category,
   CourseRelatedStatus,
   Currency,
   LectureFileType,
   PricingRule,
} from "@/utils/types";

export interface CourseList {
   courseId: string;
   courseThumbnail: string;
   courseTitle: string;
   instructorName: string;
   isBestseller: boolean;
   courseUpdatedAt: string;
   courseRating: number;
   courseReviewCounts: number;
   courseTotalPrice: number;
}

// const getTeacherNameById = (id: string) => {
//    const index = USERS.findIndex((user) => user.id === id);
//    if (index === -1) return "Quang";
//    return USERS[index].username;
// };

export const getCoursesAPI = async () => {
   // To simulate API calling time
   await new Promise((resolve) => setTimeout(resolve, 1000));
   // const courses: CourseList[] = [];
   // COURSES.map((course) => {
   //    courses.push({
   //       courseId: course.id,
   //       courseThumbnail: course.thumbnail,
   //       courseTitle: course.title,
   //       instructorName: getTeacherNameById(course.instructorId),
   //       isBestseller: course.isBestSeller,
   //       courseUpdatedAt: course.updatedAt,
   //       courseRating: course.rating,
   //       courseReviewCounts: course.reviewsCount,
   //       courseTotalPrice: course.totalPrice,
   //    });
   // });
   return courses;
};

export const getCategoriesAPI = async () => {
   // To simulate API calling time
   await new Promise((resolve) => setTimeout(resolve, 1000));
   return categories;
};

export interface CategoryList {
   id: number;
   name: string;
}
export const categories: CategoryList[] = [
   {
      id: 1,
      name: "Cloud Computing",
   },
   {
      id: 2,
      name: "Cybersecurity",
   },
   {
      id: 3,
      name: "UI/UX Design",
   },
   {
      id: 4,
      name: "Database Management",
   },
   {
      id: 5,
      name: "Machine Learning",
   },
   {
      id: 6,
      name: "Graphic Design",
   },
   {
      id: 7,
      name: "Programming",
   },
   {
      id: 8,
      name: "Data Science",
   },
   {
      id: 9,
      name: "Web Development",
   },
   {
      id: 10,
      name: "Marketing",
   },
   {
      id: 11,
      name: "Game Development",
   },
];
const courses = [
   {
      courseId: "course_001",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Introduction to Python",
      instructorName: "janesmith",
      isBestseller: true,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.5,
      courseReviewCounts: 12044,
      courseTotalPrice: 69.98,
   },
   {
      courseId: "course_002",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Data Science with R",
      instructorName: "janesmith",
      isBestseller: false,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.2,
      courseReviewCounts: 80,
      courseTotalPrice: 60,
   },
   {
      courseId: "course_003",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Web Development Bootcamp",
      instructorName: "michaelbrown",
      isBestseller: true,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.8,
      courseReviewCounts: 200,
      courseTotalPrice: 109.98,
   },
   {
      courseId: "course_004",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Advanced JavaScript",
      instructorName: "michaelbrown",
      isBestseller: false,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.3,
      courseReviewCounts: 90,
      courseTotalPrice: 39.99,
   },
   {
      courseId: "course_005",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Intro to Machine Learning",
      instructorName: "michaelbrown",
      isBestseller: true,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.6,
      courseReviewCounts: 150,
      courseTotalPrice: 179.99,
   },
   {
      courseId: "course_006",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "AWS Cloud Practitioner Essentials",
      instructorName: "michaelbrown",
      isBestseller: true,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.7,
      courseReviewCounts: 180,
      courseTotalPrice: 89.98,
   },
   {
      courseId: "course_007",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "Cybersecurity Fundamentals",
      instructorName: "janesmith",
      isBestseller: false,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.4,
      courseReviewCounts: 110,
      courseTotalPrice: 109.98,
   },
   {
      courseId: "course_008",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "UI/UX Design with Figma",
      instructorName: "michaelbrown",
      isBestseller: true,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.6,
      courseReviewCounts: 95,
      courseTotalPrice: 29.99,
   },
   {
      courseId: "course_009",
      courseThumbnail: "/assets/img-1.jpg",
      courseTitle: "SQL for Beginners",
      instructorName: "janesmith",
      isBestseller: false,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.3,
      courseReviewCounts: 75,
      courseTotalPrice: 29.99,
   },
   {
      courseId: "course_010",
      courseThumbnail: "assets/img-1.jpg",
      courseTitle: "Advanced Cloud Architecture",
      instructorName: "michaelbrown",
      isBestseller: false,
      courseUpdatedAt: "2025-05-10",
      courseRating: 4.9,
      courseReviewCounts: 50,
      courseTotalPrice: 69.99,
   },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCourseByIdAPI = async (id: string) => {
   // To simulate API calling time
   await new Promise((resolve) => setTimeout(resolve, 1000));
   // const index = COURSES.findIndex((course) => course.id === id);
   // if (index === -1) return null;
   // return COURSES[index];
   return courseDetails;
};

export interface LectureDetail {
   id: string;
   createdAt: string;
   updatedAt: string;
   title: string;
   fileType: LectureFileType;
   fileUrl: string;
   duration: number; // Time unit: seconds
   status: CourseRelatedStatus;
   size?: number;
}

export interface SectionDetail {
   id: string;
   createdAt: string;
   updatedAt: string;
   title: string;
   basePrice: number; // Base price before demand adjustments
   demandFactor: number; // e.g., 1.2 for 20% increase
   activePromotions: PricingRule[]; // Current time-based offers
   finalPrice: number; // basePrice * demandFactor after promotions
   order: number;
   status: CourseRelatedStatus;
   lectures: LectureDetail[];
}

export interface CommentDetail {
   id: string;
   createdAt: string;
   updatedAt: string;
   username: string;
   userAvatar?: string;
   rating: 1 | 2 | 3 | 4 | 5;
   content: string;
}
export interface SummaryDetail {
   name: string;
}
const lecturesDetail1: LectureDetail[] = [
   {
      id: "lecture_001",
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
      id: "lecture_002",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "CSS Basics",
      fileType: LectureFileType.VIDEO,
      fileUrl: "https://example.com/videos/js_basics.mp4",
      duration: 1500, // 25m
      status: CourseRelatedStatus.PUBLISHED,
      size: 250,
   },
   {
      id: "lecture_003",
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
      id: "lecture_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "jQuery",
      fileType: LectureFileType.PDF,
      fileUrl: "/public/pdfs/Important+Links.pdf",
      duration: 60, // 1m
      status: CourseRelatedStatus.PUBLISHED,
      size: 250,
   },
   {
      id: "lecture_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      title: "jQuery",
      fileType: LectureFileType.QUIZ,
      fileUrl: "/public/pdfs/Important+Links.pdf",
      duration: 300, // 5m
      status: CourseRelatedStatus.PUBLISHED,
      size: 250,
   },
];
const lecturesDetail2: LectureDetail[] = [
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
];

const sectionsDetail3: SectionDetail = {
   id: "section_009",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "JavaScript Essentials",
   basePrice: 69.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 69.99,
   order: 3,
   lectures: lecturesDetail2,
   status: CourseRelatedStatus.PUBLISHED,
};
const sectionsDetail4: SectionDetail = {
   id: "section_010",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "JavaScript Essentials",
   basePrice: 79.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 79.99,
   order: 4,
   lectures: lecturesDetail2,
   status: CourseRelatedStatus.PUBLISHED,
};
const sectionsDetail5: SectionDetail = {
   id: "section_011",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "JavaScript Essentials",
   basePrice: 89.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 89.99,
   order: 5,
   lectures: lecturesDetail2,
   status: CourseRelatedStatus.PUBLISHED,
};
const sectionsDetail6: SectionDetail = {
   id: "section_012",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "JavaScript Essentials",
   basePrice: 99.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 99.99,
   order: 6,
   lectures: lecturesDetail2,
   status: CourseRelatedStatus.PUBLISHED,
};
const sectionsDetail2: SectionDetail = {
   id: "section_008",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "JavaScript Essentials",
   basePrice: 59.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 59.99,
   order: 2,
   lectures: lecturesDetail2,
   status: CourseRelatedStatus.PUBLISHED,
};

const sectionsDetails1: SectionDetail = {
   id: "section_007",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "HTML & CSS Fundamentals",
   basePrice: 49.99,
   demandFactor: 1.0,
   activePromotions: [],
   finalPrice: 49.99,
   order: 1,
   lectures: lecturesDetail1,
   status: CourseRelatedStatus.PUBLISHED,
};

export const comentsDetail: CommentDetail[] = [
   {
      id: "comment_003",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      username: "Minh Quang",
      rating: 5,
      content: "Amazing course, learned a lot about web development!",
   },
   {
      id: "comment_004",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      username: "Ngoc Cam",
      rating: 4,
      content: "The JavaScript section was very detailed, thanks!",
   },
   {
      id: "comment_005",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      username: "Quang Cam",
      rating: 4,
      content: "Could use more examples in the advanced section.",
   },
   {
      id: "comment_006",
      createdAt: "2025-03-01",
      updatedAt: "2025-05-10",
      username: "Le Ngoc",
      rating: 5,
      content: "Amazing course, learned a lot about web development!",
   },
];

const summarysDetail: SummaryDetail[] = [
   { name: "Build responsive websites with HTML, CSS and JavaScript" },
   { name: "Create backends with Node.js, Express and MongoDB" },
   { name: "Develop modern React applications with hooks" },
   { name: "Deploy applications to cloud platforms" },
   { name: "Implement authentication and authorization" },
   { name: "Work with RESTful and GraphQL APIs" },
];
export interface RequirementDetail {
   name: string;
}
const requirementsDetail: RequirementDetail[] = [
   { name: "Basic computer knowledge and familiarity with using the internet" },
   { name: "No prior programming experience required - we will start from the basics" },
   { name: "A computer with at least 8GB RAM and 10GB free disk space (Windows, Mac, or Linux)" },
];

export interface TeacherDetail {
   id: string;
   username: string;
   avatar?: string;
   bio?: string;
   rating?: number;
   studentsCount?: number;
   coursesCount?: number;
}

const teacherDetail: TeacherDetail = {
   id: "teacher_003",
   username: "michaelbrown",
   avatar: "/assets/avatar-square.jpg",
   bio: "Expert in web development and cloud computing",
   rating: 4.8,
   studentsCount: 123456,
   coursesCount: 158,
};
export interface CourseDetailProps {
   id: string;
   createdAt: string;
   updatedAt: string;
   title: string;
   instructor: TeacherDetail;
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
   sections: SectionDetail[];
   comments: CommentDetail[];
   summary: SummaryDetail[];
   requirements: RequirementDetail[];
   fiveStarsCount: number;
   fourStarsCount: number;
   threeStarsCount: number;
   twoStarsCount: number;
   oneStarsCount: number;
}
export const courseDetails: CourseDetailProps = {
   id: "course_003",
   createdAt: "2025-03-01",
   updatedAt: "2025-05-10",
   title: "Web Development Bootcamp",
   instructor: teacherDetail,
   description: "Build modern web applications with HTML, CSS, and JavaScript.",
   duration: 10800,
   category: Category.WEB_DEV,
   totalPrice: 109.98,
   currency: Currency.USD,
   thumbnail: "/assets/img-1.jpg",
   rating: 4.8,
   reviewsCount: 200,
   enrolledStudents: 150,
   isBestSeller: true,
   status: CourseRelatedStatus.PUBLISHED,
   sections: [
      sectionsDetails1,
      sectionsDetail2,
      sectionsDetail3,
      sectionsDetail4,
      sectionsDetail5,
      sectionsDetail6,
   ],
   comments: comentsDetail,
   summary: summarysDetail,
   requirements: requirementsDetail,
   fiveStarsCount: 120,
   fourStarsCount: 40,
   threeStarsCount: 30,
   twoStarsCount: 10,
   oneStarsCount: 0,
};
