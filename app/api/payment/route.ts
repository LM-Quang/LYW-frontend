// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//    apiVersion: "2024-04-10",
// });

// export async function POST(request: Request) {
//    try {
//       const { amount } = await request.json();

//       const paymentIntent = await stripe.paymentIntents.create({
//          amount, // Amount in cents
//          currency: "usd",
//          automatic_payment_methods: {
//             enabled: true,
//          },
//       });

//       return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//    } catch (error: any) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//    }
// }
