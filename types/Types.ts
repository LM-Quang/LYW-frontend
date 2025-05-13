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
   duration?: string;
   isWatched: boolean;
}

export interface Section {
   id: string;
   title: string;
   price: number;
   lectures: Lecture[];
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
   sections: Section[];
}

export interface CartItemProps {
   id: number;
   title: string;
   instructor: string;
   price: number;
   thumbnail: string;
   quantity: number;
}
