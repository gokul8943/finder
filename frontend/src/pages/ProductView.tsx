import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";

const sampleProducts = [
  {
    title: "Galaxy Ultra Pro",
    description: "Flagship performance with AI-powered camera system and all-day battery.",
    price: "$99.99",
    originalPrice: "$129.99",
    rating: 4,
    reviewCount: 128,
    badge: "NEW",
  },
  {
    title: "Pixel Quantum 8",
    description: "Pure Android experience with computational photography excellence.",
    price: "$89.99",
    originalPrice: "$109.99",
    rating: 5,
    reviewCount: 256,
    badge: "TOP PICK",
  },
  {
    title: "OnePlus Dash X",
    description: "Blazing fast charging and silky 120Hz AMOLED in a sleek design.",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4,
    reviewCount: 89,
    badge: "SALE",
  },
  {
    title: "iPhone Aura 17",
    description: "Seamless ecosystem integration with class-leading video capabilities.",
    price: "$119.99",
    originalPrice: "$149.99",
    rating: 5,
    reviewCount: 412,
    badge: "POPULAR",
  },
];

const ProductView = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="flex-1 pt-20 sm:pt-24"
        style={{
          background:
            "linear-gradient(145deg, #f0fdff 0%, #ecfeff 30%, #e0f7fa 60%, #f0fdff 100%)",
        }}
      >
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-widest uppercase text-cyan-600/80 border border-cyan-200/60 bg-white/50 backdrop-blur-sm mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Curated for you
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-cyan-950 leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our <span className="text-cyan-600">Products</span>
            </h1>
            <p
              className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-light max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              AI-analyzed, expert-verified devices handpicked for every budget.
            </p>
          </motion.div>

          {/* Products grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          {/* AI Review section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 sm:mt-14 max-w-3xl mx-auto"
          >
            <h2
              className="text-xl sm:text-2xl font-bold text-cyan-950 mb-4 sm:mb-5 text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              AI Insights
            </h2>
            <ReviewCard />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductView;
