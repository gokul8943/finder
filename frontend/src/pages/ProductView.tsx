import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { recommendedPhones } from "../lib/types";

function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-16 py-8 text-center">
      <p className="text-xs text-slate-400">
        Prices sourced from Flipkart · Recommendations are AI-generated based on your preferences
      </p>
    </footer>
  );
}

const badgeDefaults = ["emerald", "sky", "amber", "violet"];
const badgeLabelDefaults = ["Best Match", "Top Alternate", "Great Value", "Hidden Gem"];

const ProductView = () => {
  const location  = useLocation();
  const navigate  = useNavigate();
  const displayPhones = location.state?.data ?? recommendedPhones;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, #d1fae530 0%, transparent 70%), #f8fafc",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <main className="flex-1 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-10">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-14"
          >
            <h1
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] mb-3"
              style={{ fontFamily: "'Sora', Georgia, serif" }}
            >
              Your perfect
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-cyan-500">
                phone match
              </span>
            </h1>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              Ranked by gaming performance, battery life, and value for money. Tap{" "}
              <span className="text-slate-700 font-semibold">"Why this phone?"</span>{" "}
              on any card to read the AI reasoning.
            </p>
          </motion.div>

          {/* Empty state */}
          {displayPhones.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-32 gap-4"
            >
              <p className="text-slate-500 text-lg font-medium">No phones found for your preferences.</p>
              <button
                onClick={() => navigate("/generate")}
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors"
              >
                Try again
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
              {displayPhones.map((phone: any, index: number) => {
                const safePhone = {
                  ...phone,
                  badgeColor: phone.badgeColor ?? badgeDefaults[index % badgeDefaults.length],
                  badge:      phone.badge      ?? badgeLabelDefaults[index % badgeLabelDefaults.length],
                };
                return <ProductCard key={phone.rank ?? index} phone={safePhone} index={index} />;
              })}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductView;