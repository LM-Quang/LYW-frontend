"use client";

import { CART_ITEMS } from "@/utils/data";
import { CartItem } from "@/utils/types";
import { createContext, useContext, useState } from "react";

interface CartContextType {
   cart: CartItem[];
   addToCart: (course: CartItem) => void;
   removeFromCart: (id: string) => void;
   clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cart, setCart] = useState<CartItem[]>(CART_ITEMS);

   const addToCart = (course: CartItem) => {
      const existingItem = cart.find((item) => item.id === course.id);
      if (existingItem) {
         setCart(cart.map((item) => (item.id === course.id ? { ...item } : item)));
      } else {
         setCart([...cart, { ...course }]);
      }
   };

   const removeFromCart = (id: string) => {
      setCart(cart.filter((item) => item.id !== id));
   };

   const clearCart = () => {
      setCart([]);
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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
