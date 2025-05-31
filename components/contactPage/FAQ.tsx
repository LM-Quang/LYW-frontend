import React from "react";

export const FAQS = [
   {
      question: "How do I enroll in a course?",
      answer:
         "To enroll in a course, simply browse our catalog, select the course you're interested in, and click the Enroll button. If the course requires payment, you'll be guided through our secure checkout process.",
   },
   {
      question: "How can I become an instructor?",
      answer:
         "To become an instructor, click on the Teaching link in the navigation menu and follow the registration process. You'll need to provide information about your expertise, the courses you plan to teach, and submit samples of your teaching materials.",
   },
   {
      question: "What payment methods do you accept?",
      answer:
         "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and in some regions, we also support bank transfers and mobile payment options. All transactions are secure and encrypted.",
   },
   {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
         "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment, provided you haven't completed more than 30% of the course content.",
   },
   {
      question: "How do I access my courses after purchase?",
      answer:
         "After purchasing a course, you can access it by logging into your account and navigating to My Learning in the top navigation menu. All your enrolled courses will be listed there, and you can continue from where you left off.",
   },
];

const FAQ = () => {
   return (
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
         <h2 className="text-4xl font-semibold mb-5">Frequently Asked Questions</h2>

         <div className="space-y-4">
            {FAQS.map((faq, index) => {
               return (
                  <details
                     key={index}
                     className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                     <summary className="font-medium text-gray-800 cursor-pointer">
                        {faq.question}
                     </summary>
                     <div className="mt-3 text-gray-600">
                        <p>{faq.answer}</p>
                     </div>
                  </details>
               );
            })}
         </div>
      </section>
   );
};

export default FAQ;
