import { Sparkles } from "lucide-react";

interface ReviewCardProps {
  title?: string;
  content?: string;
}

const ReviewCard = ({
  title = "AI Analysis Summary",
  content = "Based on analysis of 2,400+ user reviews and 15 expert benchmarks, this device scores exceptionally well in display quality, battery longevity, and daily performance. Minor trade-offs noted in ultra-low-light photography and speaker bass response. Overall, it delivers outstanding value in its price segment.",
}: ReviewCardProps) => {
  return (
    <div
      className="w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.75)",
        boxShadow:
          "0 4px 32px rgba(6,182,212,0.08), 0 1.5px 3px rgba(255,255,255,0.9) inset",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
            boxShadow: "0 3px 12px rgba(6,182,212,0.3)",
          }}
        >
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <h3
            className="text-base sm:text-lg font-bold text-slate-800 leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-[10px] sm:text-xs text-cyan-600/70 font-mono tracking-wide mt-0.5">
            Powered by AI
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px mb-4"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(6,182,212,0.2), transparent)",
        }}
      />

      {/* Content */}
      <p
        className="text-sm sm:text-base text-slate-600 font-light leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {content}
      </p>

      {/* Confidence bar */}
      <div className="mt-4 sm:mt-5 flex items-center gap-3">
        <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase shrink-0">
          Confidence
        </span>
        <div className="flex-1 h-1.5 rounded-full bg-cyan-100/60 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: "92%",
              background: "linear-gradient(90deg, #06b6d4, #0ea5e9)",
            }}
          />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-cyan-600 shrink-0">
          92%
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
