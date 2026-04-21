import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { recommendedPhones } from "../lib/types";
import { useLocation } from "react-router-dom";


// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-16 py-8 text-center">
      <p className="text-xs text-slate-400">
        Prices sourced from Flipkart · Recommendations are AI-generated based on your preferences
      </p>
    </footer>
  );
}

// ─── ProductView ──────────────────────────────────────────────────────────────

const ProductView = () => {
  const location = useLocation();
  const displayPhones = location.state?.data || recommendedPhones;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, #d1fae530 0%, transparent 70%), #f8fafc",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <main className="flex-1 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-10">

          {/* ── Page header ── */}
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

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {displayPhones.map((phone: any, index: number) => {
              const safePhone = {
                ...phone,
                badgeColor: phone.badgeColor || ["emerald", "sky", "amber", "violet"][index % 4],
                badge: phone.badge || (index === 0 ? "Best Match" : index === 1 ? "Top Alternate" : "Great Value")
              };
              return <ProductCard key={phone.rank || index} phone={safePhone} index={index} />;
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductView;