export interface User {
   avatar: string;
   username: string;
   email: string;
}

export interface Course {
   id: string;
   title: string;
   instructor: string;
   category: string;
   level: string;
   price: number;
   rating: number;
   description: string;
   thumbnail: string;
   ratingsCount: number;
   isBestSeller: boolean;
   updated: string;
}

export interface CartItem {
   id: string;
   title: string;
   instructor: string;
   price: number;
   thumbnail: string;
   quantity: number;
}
