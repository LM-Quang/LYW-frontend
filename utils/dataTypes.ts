interface Description {
   name: string;
   description: string;
}

type BackgroundDesciption = Description;
type ExperienceDescription = Description;

export enum Role {
   STUDENT,
   TEACHER,
   ADMIN,
}

export interface User {
   id: string;
   email: string;
   avatar?: string;
   username: string;
   role: Role;
   phoneNumber?: string;
}

export interface Student {
   id: string;
   userId: string;
   myCourses: Course[];
}

export interface Teacher {
   id: string;
   userId: string;
   paymentInfo: string;
   courses: Course[];
   background?: BackgroundDesciption[];
   experience?: ExperienceDescription[];
}

export interface Lecture {
   id: string;
   title: string;
   fileType: "video" | "pdf";
   fileUrl: string;
   durationMinute?: number;
   durationSecond?: number;
   isWatched: boolean;
   sectionId: string;
   courseId: string;
}

export interface Section {
   id: string;
   title: string;
   price: number;
   courseId: string;
}

export interface Category {
   id: string;
   name: string;
}

export interface Course {
   id: string;
   title: string;
   instructor: string;
   description: string;
   category: Category;
   totalPrice: number;
   thumbnail: string;
   rating: number;
   ratingsCount: number;
   isBestSeller: boolean;
   updated: string;
   progress: number;
}

export interface Comment {
   id: string;
   content: string;
   userId: string;
   courseId: string;
}

export interface CartItemProps {
   id: number;
   title: string;
   instructor: string;
   price: number;
   thumbnail: string;
   isBestseller: boolean;
}
