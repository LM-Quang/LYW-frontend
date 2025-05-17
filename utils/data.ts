import img1 from "@/assets/img-1.jpg";
import { CartItemProps, Course, Lecture, Role, Section, Student, Teacher, User } from "./dataTypes";

export const lectures: Lecture[] = [
   // Lectures for Frontend Foundations (Section ID: "1-1", Course ID: "1")
   {
      id: "1-1-1",
      title: "HTML and CSS Basics",
      fileType: "video",
      fileUrl: "/videos/html-css-basics.mp4",
      durationMinute: 15,
      isWatched: false,
      sectionId: "1-1",
      courseId: "1",
   },
   {
      id: "1-1-2",
      title: "JavaScript Essentials",
      fileType: "video",
      fileUrl: "/videos/js-essentials.mp4",
      durationMinute: 20,
      isWatched: false,
      sectionId: "1-1",
      courseId: "1",
   },
   {
      id: "1-1-3",
      title: "Responsive Design with CSS",
      fileType: "pdf",
      fileUrl: "/docs/responsive-design.pdf",
      isWatched: false,
      sectionId: "1-1",
      courseId: "1",
   },
   {
      id: "1-1-4",
      title: "Introduction to React",
      fileType: "video",
      fileUrl: "/videos/react-intro.mp4",
      durationMinute: 25,
      isWatched: false,
      sectionId: "1-1",
      courseId: "1",
   },
   // Lectures for Backend with Node.js (Section ID: "1-2", Course ID: "1")
   {
      id: "1-2-1",
      title: "Node.js Setup and Basics",
      fileType: "video",
      fileUrl: "/videos/node-setup.mp4",
      durationMinute: 18,
      isWatched: false,
      sectionId: "1-2",
      courseId: "1",
   },
   {
      id: "1-2-2",
      title: "Express.js Routing",
      fileType: "video",
      fileUrl: "/videos/express-routing.mp4",
      durationMinute: 22,
      isWatched: false,
      sectionId: "1-2",
      courseId: "1",
   },
   {
      id: "1-2-3",
      title: "Connecting to MongoDB",
      fileType: "pdf",
      fileUrl: "/docs/mongodb-guide.pdf",
      isWatched: false,
      sectionId: "1-2",
      courseId: "1",
   },
   // Lectures for Building Full-Stack Apps (Section ID: "1-3", Course ID: "1")
   {
      id: "1-3-1",
      title: "REST API Development",
      fileType: "video",
      fileUrl: "/videos/rest-api.mp4",
      durationMinute: 30,
      isWatched: false,
      sectionId: "1-3",
      courseId: "1",
   },
   {
      id: "1-3-2",
      title: "Frontend-Backend Integration",
      fileType: "video",
      fileUrl: "/videos/fullstack-integration.mp4",
      durationMinute: 28,
      isWatched: false,
      sectionId: "1-3",
      courseId: "1",
   },
   {
      id: "1-3-3",
      title: "Project: E-Commerce App",
      fileType: "video",
      fileUrl: "/videos/ecommerce-project.mp4",
      durationMinute: 35,
      isWatched: false,
      sectionId: "1-3",
      courseId: "1",
   },
   // Lectures for Python for Data Analysis (Section ID: "2-1", Course ID: "2")
   {
      id: "2-1-1",
      title: "Python Basics for Data Science",
      fileType: "video",
      fileUrl: "/videos/python-data-basics.mp4",
      durationMinute: 15,
      isWatched: false,
      sectionId: "2-1",
      courseId: "2",
   },
   {
      id: "2-1-2",
      title: "Pandas for Data Manipulation",
      fileType: "video",
      fileUrl: "/videos/pandas-intro.mp4",
      durationMinute: 20,
      isWatched: false,
      sectionId: "2-1",
      courseId: "2",
   },
   {
      id: "2-1-3",
      title: "Data Visualization with Matplotlib",
      fileType: "pdf",
      fileUrl: "/docs/matplotlib-guide.pdf",
      isWatched: false,
      sectionId: "2-1",
      courseId: "2",
   },
   // Lectures for Machine Learning Basics (Section ID: "2-2", Course ID: "2")
   {
      id: "2-2-1",
      title: "Introduction to Machine Learning",
      fileType: "video",
      fileUrl: "/videos/ml-intro.mp4",
      durationMinute: 18,
      isWatched: false,
      sectionId: "2-2",
      courseId: "2",
   },
   {
      id: "2-2-2",
      title: "Scikit-Learn for ML Models",
      fileType: "video",
      fileUrl: "/videos/scikit-learn.mp4",
      durationMinute: 22,
      isWatched: false,
      sectionId: "2-2",
      courseId: "2",
   },
   {
      id: "2-2-3",
      title: "Project: Predictive Modeling",
      fileType: "video",
      fileUrl: "/videos/predictive-modeling.mp4",
      durationMinute: 30,
      isWatched: false,
      sectionId: "2-2",
      courseId: "2",
   },
   // Lectures for Unity Fundamentals (Section ID: "3-1", Course ID: "3")
   {
      id: "3-1-1",
      title: "Getting Started with Unity",
      fileType: "video",
      fileUrl: "/videos/unity-intro.mp4",
      durationMinute: 12,
      isWatched: false,
      sectionId: "3-1",
      courseId: "3",
   },
   {
      id: "3-1-2",
      title: "Unity Interface Overview",
      fileType: "pdf",
      fileUrl: "/docs/unity-interface.pdf",
      isWatched: false,
      sectionId: "3-1",
      courseId: "3",
   },
   {
      id: "3-1-3",
      title: "C# Basics for Unity",
      fileType: "video",
      fileUrl: "/videos/csharp-unity.mp4",
      durationMinute: 18,
      isWatched: false,
      sectionId: "3-1",
      courseId: "3",
   },
   {
      id: "3-1-4",
      title: "Creating Your First Scene",
      fileType: "video",
      fileUrl: "/videos/unity-first-scene.mp4",
      durationMinute: 20,
      isWatched: false,
      sectionId: "3-1",
      courseId: "3",
   },
   // Lectures for Game Mechanics and C# (Section ID: "3-2", Course ID: "3")
   {
      id: "3-2-1",
      title: "Player Movement Mechanics",
      fileType: "video",
      fileUrl: "/videos/player-movement.mp4",
      durationMinute: 22,
      isWatched: false,
      sectionId: "3-2",
      courseId: "3",
   },
   {
      id: "3-2-2",
      title: "Collision Detection",
      fileType: "video",
      fileUrl: "/videos/collision-detection.mp4",
      durationMinute: 18,
      isWatched: false,
      sectionId: "3-2",
      courseId: "3",
   },
   {
      id: "3-2-3",
      title: "Project: 2D Platformer Game",
      fileType: "video",
      fileUrl: "/videos/2d-platformer.mp4",
      durationMinute: 30,
      isWatched: false,
      sectionId: "3-2",
      courseId: "3",
   },
];

export const sections: Section[] = [
   // Sections for Full-Stack Web Development Bootcamp (Course ID: "1")
   {
      id: "1-1",
      title: "Frontend Foundations",
      price: 20,
      courseId: "1",
   },
   {
      id: "1-2",
      title: "Backend with Node.js",
      price: 25,
      courseId: "1",
   },
   {
      id: "1-3",
      title: "Building Full-Stack Apps",
      price: 30,
      courseId: "1",
   },
   // Sections for Data Science with Python (Course ID: "2")
   {
      id: "2-1",
      title: "Python for Data Analysis",
      price: 15,
      courseId: "2",
   },
   {
      id: "2-2",
      title: "Machine Learning Basics",
      price: 20,
      courseId: "2",
   },
   // Sections for Introduction to Game Development with Unity (Course ID: "3")
   {
      id: "3-1",
      title: "Unity Fundamentals",
      price: 15,
      courseId: "3",
   },
   {
      id: "3-2",
      title: "Game Mechanics and C#",
      price: 20,
      courseId: "3",
   },
];

export const courses: Course[] = [
   {
      id: "1",
      title: "Full-Stack Web Development Bootcamp",
      instructor: "Anna Thompson",
      description:
         "Master full-stack web development with HTML, CSS, JavaScript, React, and Node.js.",
      category: { id: "cat1", name: "Web Development" },
      totalPrice: 99.99,
      thumbnail: img1.src,
      rating: 4.8,
      ratingsCount: 32500,
      isBestSeller: true,
      updated: "April 2025",
      progress: 0,
   },
   {
      id: "2",
      title: "Data Science with Python",
      instructor: "Dr. Liam Carter",
      description:
         "Learn data analysis, visualization, and machine learning using Python and its libraries.",
      category: { id: "cat2", name: "Data Science" },
      totalPrice: 79.99,
      thumbnail: img1.src,
      rating: 4.6,
      ratingsCount: 18200,
      isBestSeller: false,
      updated: "March 2025",
      progress: 0,
   },
   {
      id: "3",
      title: "Introduction to Game Development with Unity",
      instructor: "Sophie Nguyen",
      description: "Build 2D and 3D games using Unity and C# in this beginner-friendly course.",
      category: { id: "cat3", name: "Game Development" },
      totalPrice: 69.99,
      thumbnail: img1.src,
      rating: 4.7,
      ratingsCount: 9500,
      isBestSeller: true,
      updated: "February 2025",
      progress: 0,
   },
];

export const faqs = [
   {
      question: "How do I enroll in a course?",
      answer:
         "To enroll in a course, simply browse our catalog, select the course you're interested in, and click the Enroll button. If the course requires payment, you'll be guided through our secure checkout process.",
   },
   {
      question: "How can I become an instructor?",
      answer:
         "To become an instructor, click on the Teaching link in the navigation menu and follow the registration process. You'll need to provide information about your expertise, the courses you plan to teach, and submit samples of your teaching materials.",
   },
   {
      question: "What payment methods do you accept?",
      answer:
         "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and in some regions, we also support bank transfers and mobile payment options. All transactions are secure and encrypted.",
   },
   {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
         "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment, provided you haven't completed more than 30% of the course content.",
   },
   {
      question: "How do I access my courses after purchase?",
      answer:
         "After purchasing a course, you can access it by logging into your account and navigating to My Learning in the top navigation menu. All your enrolled courses will be listed there, and you can continue from where you left off.",
   },
];

export const ADMIN: User = {
   id: "admin-1",
   email: "admin@gmail.com",
   username: "Admin M",
   role: Role.ADMIN,
};

export const STUDENT: User = {
   id: "student-1",
   email: "student@gmail.com",
   username: "Student D",
   role: Role.STUDENT,
};

export const TEACHER: User = {
   id: "teacher-1",
   email: "teacher@gmail.com",
   username: "Teacher C",
   role: Role.TEACHER,
};

export const STUDENT_INFO: Student = {
   id: "student",
   userId: "student-1",
   myCourses: courses,
};

export const TEACHER_INFO: Teacher = {
   id: "teacher",
   userId: "teacher-1",
   paymentInfo: "1234-1244-1241 SMBC Bank",
   courses: courses,
};

// ========================= Interface for a Course =========================
interface Course_A {
   id: string;
   title: string;
   instructor: string;
   category: string;
   level: string;
   price: number;
   rating: number;
   description: string;
   thumbnail: string;
   students: number;
}

// Sample course data (same as previous components)
export const coursesData: Course_A[] = [
   {
      id: "1",
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      category: "Web Development",
      level: "All Levels",
      price: 49.99,
      rating: 4.8,
      description:
         "Learn JavaScript from scratch and build real-world projects in this comprehensive course.",
      thumbnail:
         "https://images.unsplash.com/photo-1633356122544-f1348a13f899?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 12000,
   },
   {
      id: "2",
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      category: "Data Science",
      level: "Intermediate",
      price: 79.99,
      rating: 4.6,
      description:
         "Master Python for data science, including pandas, numpy, and machine learning basics.",
      thumbnail:
         "https://images.unsplash.com/photo-1551288049-b1f3a0a1c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 8500,
   },
   {
      id: "3",
      title: "Introduction to Web Development",
      instructor: "Michael Brown",
      category: "Web Development",
      level: "Beginner",
      price: 0,
      rating: 4.2,
      description: "A beginner-friendly course covering HTML, CSS, and basic JavaScript.",
      thumbnail:
         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 15000,
   },
   {
      id: "4",
      title: "Advanced React and Redux",
      instructor: "Emily Davis",
      category: "Web Development",
      level: "Advanced",
      price: 99.99,
      rating: 4.9,
      description: "Deep dive into React and Redux for building scalable web applications.",
      thumbnail:
         "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 4500,
   },
   {
      id: "5",
      title: "Digital Marketing Masterclass",
      instructor: "Lisa Green",
      category: "Marketing",
      level: "All Levels",
      price: 59.99,
      rating: 4.5,
      description:
         "Learn SEO, social media marketing, and email marketing in this all-in-one course.",
      thumbnail:
         "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      students: 9500,
   },
];

// Interface for a Course
interface Course_B {
   id: string;
   title: string;
   instructor: string;
   category: string;
   level: string;
   price: number; // 0 for free courses
   rating: number; // Out of 5
   description: string;
   thumbnail: string;
   students: number; // Number of enrolled students
}

// Sample course data (replace with API data in a real app)
export const coursesData_A: Course_B[] = [
   {
      id: "1",
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      category: "Web Development",
      level: "All Levels",
      price: 49.99,
      rating: 4.8,
      description:
         "Learn JavaScript from scratch and build real-world projects in this comprehensive course.",
      thumbnail: "/assets/img-1.jpg",
      students: 12000,
   },
   {
      id: "2",
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      category: "Data Science",
      level: "Intermediate",
      price: 79.99,
      rating: 4.6,
      description:
         "Master Python for data science, including pandas, numpy, and machine learning basics.",
      thumbnail: "/assets/img-1.jpg",
      students: 8500,
   },
   {
      id: "3",
      title: "Introduction to Web Development",
      instructor: "Michael Brown",
      category: "Web Development",
      level: "Beginner",
      price: 0,
      rating: 4.2,
      description: "A beginner-friendly course covering HTML, CSS, and basic JavaScript.",
      thumbnail: "/assets/img-1.jpg",
      students: 15000,
   },
   {
      id: "4",
      title: "Advanced React and Redux",
      instructor: "Emily Davis",
      category: "Web Development",
      level: "Advanced",
      price: 99.99,
      rating: 4.9,
      description: "Deep dive into React and Redux for building scalable web applications.",
      thumbnail: "/assets/img-1.jpg",
      students: 4500,
   },
   {
      id: "5",
      title: "Digital Marketing Masterclass",
      instructor: "Lisa Green",
      category: "Marketing",
      level: "All Levels",
      price: 59.99,
      rating: 4.5,
      description:
         "Learn SEO, social media marketing, and email marketing in this all-in-one course.",
      thumbnail: "/assets/img-1.jpg",
      students: 9500,
   },
];

export const initialCart: CartItemProps[] = [
   {
      id: 1,
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      price: 49.99,
      thumbnail:
         "https://images.unsplash.com/photo-1633356122544-f1348a13f899?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      isBestseller: true,
   },
   {
      id: 2,
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      price: 79.99,
      thumbnail:
         "https://images.unsplash.com/photo-1551288049-b1f3a0a1c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      isBestseller: false,
   },
];
