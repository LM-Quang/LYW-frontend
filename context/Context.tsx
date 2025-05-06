"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
   id: string;
   title: string;
   instructor: string;
   price: number;
   thumbnail: string;
   quantity: number;
}

interface CartContextType {
   cart: CartItem[];
   addToCart: (course: Omit<CartItem, "quantity">) => void;
   removeFromCart: (id: string) => void;
   updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cart, setCart] = useState<CartItem[]>([]);

   const addToCart = (course: Omit<CartItem, "quantity">) => {
      const existingItem = cart.find((item) => item.id === course.id);
      if (existingItem) {
         setCart(
            cart.map((item) =>
               item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
            )
         );
      } else {
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
   const removeFromCart = (id: string) => {
      setCart(cart.filter((item) => item.id !== id));
   };

   const updateQuantity = (id: string, quantity: number) => {
      if (quantity < 1) return;
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
         {children}
      </CartContext.Provider>
   );
}

export function useCart() {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error("useCart must be used within a CartProvider");
   }
   return context;
}
