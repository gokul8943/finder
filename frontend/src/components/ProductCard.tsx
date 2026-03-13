import { Button } from "./ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";

const ProductCard = () => {
  return (
    <div
      className="relative flex flex-col w-full bg-white/5 max-w-xs sm:max-w-sm overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group"
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.75)",
        boxShadow:
          "0 8px 40px rgba(6,182,212,0.12), 0 1.5px 3px rgba(255,255,255,0.9) inset",
      }}
    >
      {/* ── Image area ── */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-3xl">
        {/* gradient backdrop for image zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #cffafe 0%, #e0f2fe 50%, #bae6fd 100%)",
          }}
        />

        {/* Decorative blobs inside image area */}
        <div
          className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-2xl opacity-60"
          style={{ background: "rgba(34,211,238,0.35)" }}
        />
        <div
          className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-50"
          style={{ background: "rgba(14,165,233,0.3)" }}
        />

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 16px rgba(6,182,212,0.15)",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#img-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="img-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <span className="text-xs text-cyan-700/60 font-light tracking-wide">
            Product Image
          </span>
        </div>

        {/* Wishlist button */}
        <Button
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          <Heart size={14} className="text-cyan-500" />
        </Button>

        {/* Badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide text-white"
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
            boxShadow: "0 2px 10px rgba(6,182,212,0.4)",
          }}
        >
          NEW
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-5 py-5 gap-3">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < 4 ? "text-cyan-400 fill-cyan-400" : "text-cyan-200 fill-cyan-100"}
            />
          ))}
          <span className="ml-1.5 text-[11px] text-slate-400 font-light">4.0 (128)</span>
        </div>

        {/* Name + description */}
        <div>
          <h2
            className="text-lg sm:text-xl font-black tracking-tight text-slate-800 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Premium Product
          </h2>
          <p className="mt-1.5 text-sm text-slate-500 font-light leading-relaxed">
            This is a short description that adapts beautifully across all screen sizes.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(6,182,212,0.2), transparent)",
          }}
        />

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-light line-through">$129.99</span>
            <span
              className="text-2xl font-black bg-linear-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent leading-tight"
            >
              $99.99
            </span>
          </div>

          <Button
            className="relative group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-transform duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              boxShadow: "0 4px 16px rgba(6,182,212,0.38)",
            }}
          >
            <ShoppingCart size={14} />
            <span className="relative z-10">Add to Cart</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            />
          </Button>
        </div>
      </div>

      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 0 1px rgba(6,182,212,0.25) inset",
        }}
      />
    </div>
  );
};

export default ProductCard;