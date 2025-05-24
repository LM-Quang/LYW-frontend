// Function to render rating stars dynamically
const renderStars = (rating: number) => {
   const fullStars = Math.floor(rating);
   const hasHalfStar = rating % 1 >= 0.5;
   const stars = [];

   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <i
            key={`star-${i}`}
            className="fa-solid fa-star text-yellow-400 w-4 h-4"
            aria-label="Full star"
         />
      );
   }

   if (hasHalfStar) {
      stars.push(
         <i
            key="star-half"
            className="fa-solid fa-star-half-stroke text-yellow-400 w-4 h-4"
            aria-label="Half star"
         />
      );
   }

   return stars;
};

export default renderStars;
