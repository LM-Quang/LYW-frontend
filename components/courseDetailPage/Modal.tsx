import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { SectionOverview } from "@/utils/data";

interface CourseModalProps {
   isClicked: boolean;
   setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
   sections: SectionOverview[];
   handleAddToCart: (price: number) => void;
}

const Modal: React.FC<CourseModalProps> = ({
   isClicked,
   setIsClicked,
   sections,
   handleAddToCart,
}) => {
   const [totalPrice, setTotalPrice] = useState(0);
   const [allSelected, setAllSelected] = useState(false);
   const [selectedSections, setSelectedSections] = useState<string[]>([]);

   const handleToggleAll = () => {
      if (allSelected) {
         setSelectedSections([]);
         setTotalPrice(0);
      } else {
         const allIds = sections.map((section) => section.id);
         const total = sections.reduce((sum, section) => sum + section.basePrice, 0);
         setSelectedSections(allIds);
         setTotalPrice(total);
      }
      setAllSelected(!allSelected);
   };

   const toggleSection = (id: string, price: number): void => {
      if (selectedSections.includes(id)) {
         setSelectedSections((prev) => prev.filter((sectionId) => sectionId !== id));
         setTotalPrice((prevPrice) => prevPrice - price);
      } else {
         setSelectedSections((prev) => [...prev, id]);
         setTotalPrice((prevPrice) => prevPrice + price);
      }
   };

   const addToCart = () => {
      handleAddToCart(totalPrice);
      setSelectedSections([]);
      setTotalPrice(0);
   };

   return (
      <div
         className={`fixed inset-0 z-40 items-center justify-center ${
            isClicked ? "flex" : "hidden"
         }`}
         id="courseModal"
      >
         <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-80"
            onClick={() => setIsClicked(false)}
         />

         <div className="bg-white z-50 rounded-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto p-6 m-4">
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-xl font-bold text-gray-800">Customize Your Course Purchase</h3>
               <X
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                  onClick={() => setIsClicked(false)}
               />
            </div>

            <p className="text-gray-600 mb-4">
               Select the sections you want to purchase. Price adjusts based on your selection.
            </p>

            {/* Course Sections */}
            <div className="border-t border-gray-200 py-4">
               <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">Course Sections</div>
                  <div
                     className="text-sm text-primary-600 cursor-pointer hover:text-primary-700"
                     onClick={handleToggleAll}
                  >
                     {allSelected ? "Remove All" : "Select All"}
                  </div>
               </div>

               <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2">
                  {sections.map((section) => (
                     <label
                        key={section.id}
                        className="flex items-start py-2 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                     >
                        <input
                           type="checkbox"
                           className="mt-1 h-4 w-4 text-primary-500 rounded border-gray-300 focus:ring-primary-500"
                           checked={selectedSections.includes(section.id)}
                           onChange={() => toggleSection(section.id, section.basePrice)}
                        />
                        <div className="ml-3">
                           <div className="font-medium">
                              Section {section.id}: {section.title}
                           </div>
                           <div className="text-sm text-gray-500">17 hours</div>
                        </div>
                        <div className="ml-auto text-gray-700">${section.basePrice.toFixed(2)}</div>
                     </label>
                  ))}
               </div>
            </div>

            {/* Price */}
            <div className="border-t border-gray-200 pt-4 mt-4">
               <div className="flex justify-between items-center mb-2">
                  <div className="text-gray-600">Original Price:</div>
                  <div className="text-gray-600 line-through">$199.99</div>
               </div>
               <div className="flex justify-between items-center mb-2">
                  <div className="text-gray-600">Discount:</div>
                  <div className="text-green-600">-$105.00</div>
               </div>
               <div className="flex justify-between items-center text-lg font-bold">
                  <div>Total Price:</div>
                  <div>${totalPrice.toFixed(2)}</div>
               </div>
               <div className="text-xs text-red-600 mt-1">53% off - 2 days left at this price!</div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 mt-6">
               <button
                  className="flex-1 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 flex items-center justify-center cursor-pointer transition-colors"
                  onClick={addToCart}
               >
                  <ShoppingCart className="mr-2" />
                  Add to Cart
               </button>
               <button
                  className="py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => setIsClicked(false)}
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
