"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CourseContext"; // Assuming you’ve set up a CartContext as suggested
import Link from "next/link";
import logo1 from "@/assets/logo-1.png";
import Image from "next/image";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();
   const { cart } = useCart();
   const [error, setError] = useState<string | null>(null);
   const [processing, setProcessing] = useState(false);
   const [succeeded, setSucceeded] = useState(false);

   // Calculate total price (including tax)
   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const tax = subtotal * 0.05; // 5% tax
   const total = subtotal + tax;

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!stripe || !elements) return;

      setProcessing(true);
      const cardElement = elements.getElement(CardElement);

      // Create a payment intent on the server
      const response = await fetch("/api/create-payment-intent", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ amount: Math.round(total * 100) }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: cardElement!,
            billing_details: {
               name: "Student Name", // You can collect this via a form field
            },
         },
      });

      setProcessing(false);

      if (result.error) {
         setError(result.error.message!);
      } else if (result.paymentIntent?.status === "succeeded") {
         setSucceeded(true);
         // Clear the cart (optional)
         // You can redirect to a success page or show a confirmation message
      }
   };

   return (
      <form onSubmit={handleSubmit} className="space-y-4">
         <h2 className="text-xl font-semibold text-gray-800">Payment Details</h2>
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: "16px",
                     color: "#32325d",
                     "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#fa755a" },
               },
            }}
            className="p-3 border border-gray-300 rounded-lg"
         />
         <div className="text-gray-700">
            <p className="flex justify-between">
               <span>Subtotal:</span>
               <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
               <span>Tax (5%):</span>
               <span>${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold">
               <span>Total:</span>
               <span>${total.toFixed(2)}</span>
            </p>
         </div>
         {error && <div className="text-red-500">{error}</div>}
         {succeeded && (
            <div className="text-green-500">Payment succeeded! Thank you for your purchase.</div>
         )}
         <button
            type="submit"
            disabled={!stripe || processing || succeeded}
            className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
         >
            {processing ? "Processing..." : "Pay Now"}
         </button>
      </form>
   );
};

export default function CheckoutPage() {
   const { cart } = useCart();

   return (
      <div id="webcrumbs" className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         {/* Header (same as Cart Details page) */}
         <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="flex items-center">
                  <div className="bg-primary-500 text-white p-2 rounded-full mr-2">
                     <span className="material-symbols-outlined text-lg">school</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-500">EduLearn Academy</div>
               </div>
               <div className="flex-1 max-w-xl mx-auto md:mx-0">
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search courses, topics, instructors..."
                        className="w-full p-2 pl-9 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                        onKeyDown={(e) => {
                           if (e.key === "Enter") {
                              window.location.href = `/search?q=${e.currentTarget.value}`;
                           }
                        }}
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        search
                     </span>
                  </div>
               </div>
               <nav className="w-full md:w-auto">
                  <ul className="flex flex-wrap justify-center gap-2 text-sm">
                     <li>
                        <Link
                           href="/"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <a
                           href="/cart"
                           className="px-3 py-1 font-medium hover:text-primary-600 transition-colors relative"
                        >
                           <span className="material-symbols-outlined">shopping_cart</span>
                           {cart.length > 0 && (
                              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                 {cart.length}
                              </span>
                           )}
                        </a>
                     </li>
                     <li>
                        <a
                           href="#"
                           className="px-3 py-1 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                        >
                           Sign In
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>

         {/* Main Content: Checkout */}
         <main className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Checkout</h1>
            {cart.length > 0 ? (
               <div className="flex flex-col lg:flex-row gap-8">
                  {/* Order Summary */}
                  <div className="lg:w-1/2">
                     <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                        <div className="space-y-4">
                           {cart.map((item) => (
                              <div key={item.id} className="flex items-center gap-4 border-b pb-2">
                                 <Image
                                    src={logo1}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded-lg"
                                    width={64}
                                    height={64}
                                 />
                                 <div className="flex-1">
                                    <h3 className="text-gray-800 font-medium">{item.title}</h3>
                                    <p className="text-sm text-gray-600">By {item.instructor}</p>
                                    <p className="text-gray-800">
                                       ${item.price.toFixed(2)} x {item.quantity}
                                    </p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Payment Form */}
                  <div className="lg:w-1/2">
                     <div className="bg-white rounded-lg shadow-md p-6">
                        <Elements stripe={stripePromise}>
                           <CheckoutForm />
                        </Elements>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="text-center py-10">
                  <h2 className="text-xl font-semibold text-gray-800">Your Cart is Empty</h2>
                  <p className="text-gray-600 mb-4">
                     Add some courses to your cart to proceed to checkout.
                  </p>
                  <Link
                     href="/"
                     className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                     Browse Courses
                  </Link>
               </div>
            )}
         </main>

         {/* Footer (same as Cart Details page) */}
         <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                     <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-full mr-2">
                           <span className="material-symbols-outlined text-primary-500">
                              school
                           </span>
                        </div>
                        <div className="text-xl font-bold">EduLearn Academy</div>
                     </div>
                     <p className="text-gray-300 text-sm">
                        Empowering educators to share knowledge and transform lives through online
                        education.
                     </p>
                  </div>
                  {/* Footer links (same as before) */}
               </div>
               <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-400 text-sm mb-4 md:mb-0">
                     © 2023 EduLearn Academy. All rights reserved.
                  </div>
                  <div className="flex space-x-4">
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">facebook</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">twitter</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">youtube</span>
                     </a>
                     <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">language</span>
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
