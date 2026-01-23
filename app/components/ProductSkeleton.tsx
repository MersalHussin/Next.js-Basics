export default function ProductSkeleton() {
  // Create an array of 6 items to simulate a list
  const items = Array.from({ length: 6 });

  return (
    <div className="w-full max-w-md  p-4 space-y-6">
      {items.map((_, index) => (
        <div key={index} className="animate-pulse flex flex-col gap-2">
          {/* Title Line (Longer) */}
          <div className="h-5 bg-gray-800 rounded w-3/4"></div>
          
          {/* Subtitle/Description Line (Medium) */}
          <div className="h-4 bg-gray-800 rounded w-full"></div>
          
          {/* Price/Meta Line (Short) */}
          <div className="h-4 bg-gray-800rounded w-1/3"></div>
          
          {/* Separator Line (Optional, creates the list feel) */}
          <div className="h-px bg-gray-800 mt-2"></div>
        </div>
      ))}
    </div>
  );
}