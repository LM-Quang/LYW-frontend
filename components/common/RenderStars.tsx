const RenderStars = ({ rating }: { rating: number }) => {
   return (
      <>
         {Array.from({ length: rating }, (_, index) => (
            <i
               key={index}
               className="fa-solid fa-star text-yellow-400 w-4 h-4"
               aria-label="Full star"
            />
         ))}
      </>
   );
};

export default RenderStars;
