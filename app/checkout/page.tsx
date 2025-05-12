"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CourseContext";
import Link from "next/link";
import logo1 from "@/assets/logo-1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = () => {
   const router = useRouter();
   const stripe = useStripe();
   const elements = useElements();
   const { cart, clearCart } = useCart();
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
      if (result.error) {
         setError(result.error.message!);
      } else if (result.paymentIntent?.status === "succeeded") {
         setSucceeded(true);
         // Clear the cart
         clearCart();
         // You can redirect to a success page or show a confirmation message
         router.push("/my-courses");
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
            className="border border-gray-300 rounded-lg"
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
            // disabled={!stripe || processing || succeeded}
            className="w-full px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
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
         {/* Main Content: Checkout */}
         <div className="container mx-auto px-4 md:px-6 py-8">
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
         </div>
      </div>
   );
}
