export default function ProductDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Title */}
      <div className="h-8 bg-gray-800 rounded w-3/4"></div>
      
      {/* Image */}
      <div className="h-96 w-96 bg-gray-800 rounded"></div>
      
      {/* Button */}
      <div className="h-10 bg-gray-800 rounded w-32"></div>
    </div>
  );
}