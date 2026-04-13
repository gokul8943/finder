import { motion } from "framer-motion";
import { Wallet, Target, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Choose your priority",
    desc: "Performance, design, or battery life? You decide.",
    icon: Target,
  },
  {
    title: "Select your budget",
    desc: "Tailor the search to your financial comfort zone.",
    icon: Wallet,
  },
  {
    title: "Get AI recommendations",
    desc: "Our neural engine finds your perfect match instantly.",
    icon: Sparkles,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(145deg, #f0fdff 0%, #ecfeff 30%, #e0f7fa 60%, #cffafe 100%)",
      }}
    >
      {/* Animated Clip-Path Background Element */}
      <div
        className="absolute inset-0 bg-cyan-500/5 z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(6,182,212,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-widest uppercase text-cyan-600/80 border border-cyan-200/60 bg-white/50 backdrop-blur-sm mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Simple process
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-cyan-950 leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            How It <span className="text-cyan-600">Works</span>
          </h2>
          <p
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-500 max-w-lg mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Three simple steps to find the perfect device — no research needed.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 relative">
          {/* Connecting line — visible on md+ */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative z-10"
              >
                <div
                  className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow:
                      "0 4px 24px rgba(6,182,212,0.06), 0 1.5px 3px rgba(255,255,255,0.9) inset",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(207,250,254,0.5) 0%, rgba(186,230,255,0.3) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: "0 8px 40px rgba(6,182,212,0.15)" }}
                  />

                  {/* Icon container */}
                  <div
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                      boxShadow: "0 4px 16px rgba(6,182,212,0.35)",
                    }}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Step number */}
                  <div
                    className="relative z-10 text-cyan-600/70 font-mono text-xs sm:text-sm mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3
                    className="relative z-10 text-lg sm:text-xl font-bold text-cyan-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="relative z-10 text-cyan-800/60 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-40 h-40 sm:w-56 sm:h-56 bg-sky-400/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default HowItWorks;