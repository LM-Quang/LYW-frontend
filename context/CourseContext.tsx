"use client";

import { CartItemProps } from "@/utils/dataTypes";
import { createContext, useContext, useState } from "react";

interface CartContextType {
   cart: CartItemProps[];
   addToCart: (course: Omit<CartItemProps, "quantity">) => void;
   removeFromCart: (id: number) => void;
   updateQuantity: (id: number, quantity: number) => void;
   clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cart, setCart] = useState<CartItemProps[]>([]);

   const addToCart = (course: Omit<CartItemProps, "quantity">) => {
      const existingItem = cart.find((item) => item.id === course.id);
      if (existingItem) {
         setCart(cart.map((item) => (item.id === course.id ? { ...item } : item)));
      } else {
         console.log("item not existing");
         setCart([...cart, { ...course }]);
      }
   };

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
