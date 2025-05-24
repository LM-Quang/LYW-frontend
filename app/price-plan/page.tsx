import React from "react";

export default function PricePlanPage() {
   return (
      <div className="w-full min-h-screen p-0 bg-gray-50 font-sans">
         <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-3">
               <nav className="flex items-center text-sm">
                  <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                     Home
                  </a>
                  <span className="mx-2 text-gray-400">
                     <span className="material-symbols-outlined text-xs">chevron_right</span>
                  </span>
                  <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                     Courses
                  </a>
                  <span className="mx-2 text-gray-400">
                     <span className="material-symbols-outlined text-xs">chevron_right</span>
                  </span>
                  <span className="text-gray-700 font-medium">Shopping Cart</span>
               </nav>
            </div>
         </div>

         <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="mb-10 text-center">
               <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  EduLearn Academy Pricing Plans
               </h1>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the perfect plan for your learning journey. Unlock premium courses and
                  transform your career with our flexible pricing options.
               </p>
            </div>

            <div className="flex justify-center mb-8">
               <div className="inline-flex bg-gray-100 p-1 rounded-full">
                  <button className="px-4 py-2 rounded-full bg-primary-500 text-white font-medium transition-all">
                     Monthly
                  </button>
                  <button className="px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200 transition-all">
                     Annual <span className="text-xs text-green-600 font-bold">Save 20%</span>
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {/* Individual Plan */}
               <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                     <h2 className="text-xl font-bold text-gray-800 mb-2">Individual</h2>
                     <p className="text-gray-600 text-sm">Perfect for self-paced learners</p>
                     <div className="mt-4 mb-2">
                        <span className="text-3xl font-bold text-primary-600">$14.99</span>
                        <span className="text-gray-500 text-sm">/month</span>
                     </div>
                     <p className="text-xs text-gray-500">Billed monthly</p>
                  </div>
                  <div className="p-6 flex-grow">
                     <ul className="space-y-3 mb-6">
                        {[
                           "Access to 1,000+ courses",
                           "Learn at your own pace",
                           "Mobile and TV access",
                           "Certificate of completion",
                           "30-day money-back guarantee",
                        ].map((feature, i) => (
                           <li key={i} className="flex items-start">
                              <span className="material-symbols-outlined text-green-500 text-sm mr-2 mt-0.5">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-700">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-6 pt-0">
                     <button className="w-full py-3 rounded-lg border border-primary-500 text-primary-500 font-medium hover:bg-primary-50 transition-colors">
                        Get Started
                     </button>
                  </div>
               </div>

               {/* Student Plan */}
               <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                     <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold text-gray-800">Student</h2>
                        <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                           Popular
                        </span>
                     </div>
                     <p className="text-gray-600 text-sm">Special rate for verified students</p>
                     <div className="mt-4 mb-2">
                        <span className="text-3xl font-bold text-primary-600">$6.99</span>
                        <span className="text-gray-500 text-sm">/month</span>
                     </div>
                     <p className="text-xs text-gray-500">Valid student ID required</p>
                  </div>
                  <div className="p-6 flex-grow">
                     <ul className="space-y-3 mb-6">
                        {[
                           "Full Individual plan benefits",
                           "Access to all student-exclusive courses",
                           "Additional practice exercises",
                           "Direct messaging with instructors",
                           "Resume and portfolio review",
                        ].map((feature, i) => (
                           <li key={i} className="flex items-start">
                              <span className="material-symbols-outlined text-green-500 text-sm mr-2 mt-0.5">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-700">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-6 pt-0">
                     <button className="w-full py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors">
                        Verify Student Status
                     </button>
                  </div>
               </div>

               {/* Teams Plan */}
               <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                     <h2 className="text-xl font-bold text-gray-800 mb-2">Teams</h2>
                     <p className="text-gray-600 text-sm">Perfect for small teams & startups</p>
                     <div className="mt-4 mb-2">
                        <span className="text-3xl font-bold text-primary-600">$69.99</span>
                        <span className="text-gray-500 text-sm">/month</span>
                     </div>
                     <p className="text-xs text-gray-500">For up to 5 users</p>
                  </div>
                  <div className="p-6 flex-grow">
                     <ul className="space-y-3 mb-6">
                        {[
                           "All Individual plan features",
                           "Team progress dashboard",
                           "Collaborative learning tools",
                           "Team certification programs",
                           "Assign courses to team members",
                           "Monthly team performance reports",
                        ].map((feature, i) => (
                           <li key={i} className="flex items-start">
                              <span className="material-symbols-outlined text-green-500 text-sm mr-2 mt-0.5">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-700">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-6 pt-0">
                     <button className="w-full py-3 rounded-lg border border-primary-500 text-primary-500 font-medium hover:bg-primary-50 transition-colors">
                        Start Team Trial
                     </button>
                  </div>
               </div>

               {/* Business Plan */}
               <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-primary-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                     Enterprise Ready
                  </div>
                  <div className="p-6 border-b border-gray-100">
                     <h2 className="text-xl font-bold text-gray-800 mb-2">Business</h2>
                     <p className="text-gray-600 text-sm">For organizations & large teams</p>
                     <div className="mt-4 mb-2">
                        <span className="text-3xl font-bold text-primary-600">$299.99</span>
                        <span className="text-gray-500 text-sm">/month</span>
                     </div>
                     <p className="text-xs text-gray-500">For up to 25 users</p>
                  </div>
                  <div className="p-6 flex-grow">
                     <ul className="space-y-3 mb-6">
                        {[
                           "All Teams plan features",
                           "Custom learning paths",
                           "White-label options",
                           "API access for integrations",
                           "Dedicated account manager",
                           "Onboarding & implementation support",
                           "Custom course development",
                        ].map((feature, i) => (
                           <li key={i} className="flex items-start">
                              <span className="material-symbols-outlined text-green-500 text-sm mr-2 mt-0.5">
                                 check_circle
                              </span>
                              <span className="text-sm text-gray-700">{feature}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="p-6 pt-0">
                     <button className="w-full py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors">
                        Contact Sales
                     </button>
                  </div>
               </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-12">
               <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Frequently Asked Questions
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                     {
                        question: "Can I switch between plans?",
                        answer:
                           "Yes, you can upgrade or downgrade your plan at any time. The new rate will be applied to your next billing cycle.",
                     },
                     {
                        question: "Is there a free trial available?",
                        answer:
                           "We offer a 7-day free trial for Individual and Student plans. Teams and Business plans come with a 14-day trial period.",
                     },
                     {
                        question: "What payment methods do you accept?",
                        answer:
                           "We accept major credit cards, PayPal, and bank transfers for Business plans. Some regions also support local payment methods.",
                     },
                     {
                        question: "How does the student verification work?",
                        answer:
                           "We use a trusted third-party service to verify your student status. You'll need to provide your academic email or upload a valid student ID.",
                     },
                  ].map((faq, i) => (
                     <details
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-sm cursor-pointer group"
                     >
                        <summary className="font-medium text-gray-800 flex justify-between items-center">
                           {faq.question}
                           <span className="material-symbols-outlined text-primary-500 group-open:rotate-180 transition-transform">
                              expand_more
                           </span>
                        </summary>
                        <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                     </details>
                  ))}
               </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 text-center">
               <h2 className="text-2xl font-bold text-gray-800 mb-2">Need a custom solution?</h2>
               <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Contact our sales team to discuss custom pricing and features tailored to your
                  organization&apos;s specific learning needs.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
                     Schedule a Demo
                  </button>
                  <button className="px-6 py-3 border border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                     Contact Sales
                  </button>
               </div>
               <div className="mt-8 flex flex-wrap justify-center gap-8">
                  <div className="flex flex-col items-center">
                     <span className="material-symbols-outlined text-primary-500 text-3xl mb-2">
                        support_agent
                     </span>
                     <p className="text-sm font-medium text-gray-800">24/7 Support</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="material-symbols-outlined text-primary-500 text-3xl mb-2">
                        handshake
                     </span>
                     <p className="text-sm font-medium text-gray-800">Custom Contracts</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="material-symbols-outlined text-primary-500 text-3xl mb-2">
                        groups
                     </span>
                     <p className="text-sm font-medium text-gray-800">Team Onboarding</p>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="material-symbols-outlined text-primary-500 text-3xl mb-2">
                        verified
                     </span>
                     <p className="text-sm font-medium text-gray-800">99.9% Uptime</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
