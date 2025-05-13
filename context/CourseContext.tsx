"use client";

import { CartItemProps } from "@/types/Types";
import { createContext, useContext, useState } from "react";

const initialCart: CartItemProps[] = [
   {
      id: 1,
      title: "Complete JavaScript Bootcamp: From Zero to Hero",
      instructor: "John Smith",
      price: 49.99,
      thumbnail:
         "https://images.unsplash.com/photo-1633356122544-f1348a13f899?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 1,
   },
   {
      id: 2,
      title: "Python for Data Science and Machine Learning",
      instructor: "Sarah Johnson",
      price: 79.99,
      thumbnail:
         "https://images.unsplash.com/photo-1551288049-b1f3a0a1c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quantity: 1,
   },
];
interface CartContextType {
   cart: CartItemProps[];
   addToCart: (course: Omit<CartItemProps, "quantity">) => void;
   removeFromCart: (id: number) => void;
   updateQuantity: (id: number, quantity: number) => void;
   clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cart, setCart] = useState<CartItemProps[]>(initialCart);

   const addToCart = (course: Omit<CartItemProps, "quantity">) => {
      console.log("Add to cart");
      const existingItem = cart.find((item) => item.id === course.id);
      if (existingItem) {
         console.log("item already existing");
         setCart(
            cart.map((item) =>
               item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
            )
         );
      } else {
         console.log("item not existing");
         setCart([...cart, { ...course, quantity: 1 }]);
      }

      // Store the cart in a backend database (e.g., tied to a user account)
      // await fetch("/api/cart/add", {
      //    method: "POST",
      //    headers: { "Content-Type": "application/json" },
      //    body: JSON.stringify({ courseId: course.id, quantity: 1 }),
      // });
   };

   // Fetch cart
   // useEffect(() => {
   //    const fetchCart = async () => {
   //       const response = await fetch("/api/cart");
   //       const data = await response.json();
   //       setCart(data);
   //    };
   //    fetchCart();
   // }, []);
   const removeFromCart = (id: number) => {
      setCart(cart.filter((item) => item.id !== id));
   };

   const updateQuantity = (id: number, quantity: number) => {
      if (quantity < 1) return;
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
   };

   const clearCart = () => {
      setCart([]);
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
         {children}
      </CartContext.Provider>
   );
}

export function useCart() {
   const context = useContext(CartContext);
   if (context === undefined) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
}
