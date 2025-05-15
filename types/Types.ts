export interface Student {
   email: string;
   username: string;
}

export interface User {
   avatar: string;
   username: string;
   email: string;
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

export interface CartItemProps {
   id: number;
   title: string;
   instructor: string;
   price: number;
   thumbnail: string;
   quantity: number;
}
