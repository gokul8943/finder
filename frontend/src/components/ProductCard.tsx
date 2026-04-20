import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { type Phone, badgeStyles, specLabels } from "../lib/types";

interface ProductCardProps {
  phone: Phone;
  index: number;
}

export function ProductCard({ phone, index }: ProductCardProps) {
  const [insightOpen, setInsightOpen] = useState(false);
  const badge = badgeStyles[phone.badgeColor];
  const isTop = phone.rank === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-xl group ${
        isTop
          ? "border-cyan-400 shadow-lg shadow-cyan-100/60"
          : "border-slate-200 shadow-sm hover:border-slate-300"
      }`}
    >
      {/* Top accent strip for #1 */}
      {isTop && (
        <div className="h-1 w-full bg-linear-to-r from-cyan-400 via-cyan-400 to-cyan-400" />
      )}

      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          {/* Rank circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
              isTop ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-500"
            }`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {phone.rank}
          </div>

          {/* Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wide uppercase ${badge.bg} ${badge.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            {phone.badge}
          </span>
        </div>

        <h3
          className="text-[16px] font-bold text-slate-900 leading-snug mb-0.5"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {phone.name}
        </h3>
        <p className="text-xs text-slate-400 mb-3">{phone.variant}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-semibold text-slate-400">₹</span>
          <span
            className="text-3xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {phone.price}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-slate-100" />

      {/* Specs grid */}
      <div className="px-5 py-4 grid grid-cols-2 gap-2 flex-1">
        {(Object.keys(phone.specs) as Array<keyof typeof specLabels>).map((key) => (
          <div
            key={key}
            className="bg-slate-50 rounded-xl px-3 py-2.5 flex flex-col gap-0.5"
          >
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
              {specLabels[key]}
            </span>
            <span className="text-[11.5px] font-semibold text-slate-700 leading-tight">
              {phone.specs[key]}
            </span>
          </div>
        ))}
      </div>

      {/* AI Insight toggle */}
      <div className="px-5 pb-5">
        <button
          onClick={() => setInsightOpen((o) => !o)}
          className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
            insightOpen
              ? "bg-emerald-50 border-emerald-200"
              : "bg-slate-50 border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black shrink-0 transition-colors ${
                insightOpen ? "bg-emerald-500 text-white" : "bg-slate-300 text-white"
              }`}
            >
              AI
            </span>
            <span
              className={`text-xs font-semibold transition-colors ${
                insightOpen ? "text-emerald-700" : "text-slate-500"
              }`}
            >
              Why this phone?
            </span>
          </div>
          <motion.span
            animate={{ rotate: insightOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={`text-sm leading-none transition-colors ${
              insightOpen ? "text-cyan-600" : "text-slate-400"
            }`}
          >
            ▾
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {insightOpen && (
            <motion.div
              key="insight"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 px-1">
                <p className="text-[12.5px] text-slate-600 leading-relaxed">
                  {phone.reason}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}