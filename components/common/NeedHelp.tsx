import { ArrowLeftRight, CircleHelp, Headset } from "lucide-react";
import Link from "next/link";
import React from "react";

const NeedHelp = () => {
   return (
      <div className="pt-5 border-t border-gray-200">
         <h4 className="text-gray-700 text-lg mb-2">Need Help?</h4>
         <div className="flex flex-col gap-2 text-sm">
            <Link href="#" className="text-gray-700 flex items-center">
               <CircleHelp className="mr-1 w-5 h-5" />
               Help Center
            </Link>
            <Link href="#" className="text-gray-700 flex items-center">
               <ArrowLeftRight className="mr-1 w-5 h-5" />
               Refund Policy
            </Link>
            <Link href="#" className="text-gray-700 flex items-center">
               <Headset className="mr-1 w-5 h-5" />
               Contact Support
            </Link>
         </div>
      </div>
   );
};

export default NeedHelp;
