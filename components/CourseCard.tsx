import { Course } from "@/utils/dataTypes";
import truncateText from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import renderStars from "./RenderStars";

const CourseCard = ({ course }: { course: Course }) => {
   return (
      <Link
         href={`/course-detail/${course.id}`}
         className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-col border border-gray-200 hover:opacity-90"
      >
         <Image
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover"
            width={360}
            height={190}
         />
         <div className="p-4 flex-1 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 h-14">
               {truncateText(course.title, 45)}
            </h3>
            <p className="text-gray-600 mb-2 text-sm">By {course.instructor}</p>
            <div className="flex items-center mb-2 h-7">
               {course.isBestSeller && (
                  <span className="bg-primary-500 text-white p-1 mr-2 rounded-lg text-sm font-medium">
                     Best Seller
                  </span>
               )}
               <span className="text-sm text-gray-500">Updated {course.updated}</span>
            </div>
            <div className="flex items-center mb-4">
               <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
               <div className="flex space-x-0.5">{renderStars(course.rating)}</div>
               <span className="text-sm text-gray-600 ml-2">
                  ({course.ratingsCount.toLocaleString()} ratings)
               </span>
            </div>
            <span className="text-lg font-semibold">
               {course.totalPrice === 0 ? "Free" : `$${course.totalPrice.toFixed(2)}`}
            </span>
         </div>
      </Link>
   );
};

export default CourseCard;
