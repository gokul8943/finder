import { Button } from "./ui/button";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 sm:max-w-sm md:max-w-md lg:max-w-lg">

      {/* Product Image Placeholder */}
      <div className="w-full h-48 mb-4 rounded-md flex items-center justify-center">
        <span className="text-gray-400">Product Image</span>
      </div>

      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Premium Product</h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          This is a short description that adapts based on the screen size.
        </p>
        <p className="mt-4 text-lg font-semibold text-slate-800">$99.99</p>
      </div>

      <Button className="mt-6 w-full py-2 transition-colors">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;