import Link from "next/link";

export default function ConfirmationPage() {
   return (
      <div className="container mx-auto px-4 md:px-6 py-8 text-center">
         <h1 className="text-3xl font-bold mb-4 text-gray-800">Application Submitted!</h1>
         <p className="text-gray-600 mb-6">
            Thank you for applying to become an instructor. We’ll review your application within 3-5
            business days and notify you via email.
         </p>
         <Link
            href="/"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
         >
            Return to Home
         </Link>
      </div>
   );
}
