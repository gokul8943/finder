import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "01",
    bold: "No more watching 10 YouTube videos",
    rest: "just to buy a blender.",
    color: "from-cyan-600 to-cyan-500",
    delay: 0.1,
  },
  {
    id: "02",
    bold: "Unbiased recommendations",
    rest: "from real data, not sponsors.",
    color: "from-cyan-500 to-sky-500",
    delay: 0.22,
  },
  {
    id: "03",
    bold: "AI-powered analysis",
    rest: "that reads 1000 reviews instantly.",
    color: "from-sky-500 to-cyan-600",
    delay: 0.34,
  },
  {
    id: "04",
    bold: "Simple & fast",
    rest: "decisions you can actually trust.",
    color: "from-cyan-600 to-cyan-400",
    delay: 0.46,
  },
];

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.58)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.82)",
  boxShadow:
    "0 4px 32px rgba(6,182,212,0.09), 0 1.5px 3px rgba(255,255,255,0.92) inset",
};

const FeatureRow = ({ feature }: { feature: (typeof features)[0] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: feature.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative mb-2.5"
    >
      <div
        className="relative flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5 rounded-xl sm:rounded-2xl overflow-hidden cursor-default"
        style={glassCard}
      >
        {/* Hover tint */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl sm:rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(207,250,254,0.5) 0%, rgba(186,230,255,0.3) 100%)",
          }}
        />

        {/* Number badge */}
        <div
          className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold text-white z-10"
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
            boxShadow: "0 2px 10px rgba(6,182,212,0.38)",
          }}
        >
          {feature.id}
        </div>

        {/* Text block */}
        <div className="flex-1 min-w-0 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 z-10">
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{
                duration: 0.6,
                delay: feature.delay + 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block font-black text-lg sm:text-xl md:text-2xl lg:text-[2rem] bg-gradient-to-r ${feature.color} bg-clip-text text-transparent leading-tight tracking-tight`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {feature.bold}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: feature.delay + 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block font-light text-sm sm:text-base md:text-lg text-cyan-700/50 group-hover:text-cyan-600/75 transition-colors duration-400 leading-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {feature.rest}
            </motion.span>
          </div>
        </div>

        {/* Arrow — only md+ */}
        <span className="hidden md:block shrink-0 text-cyan-400/35 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300 text-base z-10 ml-2">
          →
        </span>
      </div>
    </motion.div>
  );
};

const WhyThis = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="why-this" className="relative w-full min-h-screen overflow-x-hidden">
      {/* ── Background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #e0f7fa 0%, #f0fffe 28%, #e8f4fd 55%, #cffafe 80%, #f0fdff 100%)",
        }}
      />

      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ background: "rgba(103,232,249,0.26)" }}
        />
        <div
          className="absolute top-1/3 -right-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl"
          style={{ background: "rgba(14,165,233,0.15)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-52 h-52 sm:w-72 sm:h-72 rounded-full blur-3xl"
          style={{ background: "rgba(6,182,212,0.18)" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-36 h-36 sm:w-48 sm:h-48 rounded-full blur-2xl"
          style={{ background: "rgba(186,230,255,0.42)" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(6,182,212,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-20 lg:py-28">
        {/* Header card */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl px-5 py-7 sm:px-8 sm:py-10 mb-5 sm:mb-6 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow:
              "0 8px 40px rgba(6,182,212,0.10), 0 2px 4px rgba(255,255,255,0.95) inset",
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-8 -right-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(103,232,249,0.3) 0%, transparent 70%)",
            }}
          />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #67e8f9, #06b6d4)",
                boxShadow: "0 2px 8px rgba(6,182,212,0.35)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1L7.5 4.5L11 5.5L8.5 8L9 11.5L6 10L3 11.5L3.5 8L1 5.5L4.5 4.5L6 1Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-cyan-600/90"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Why this works
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3 sm:mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={titleInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Stop drowning in{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                research.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-lg font-light leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We built the tool we always wished existed — one that cuts through
            the noise and tells you exactly what to buy.
          </motion.p>
        </motion.div>

        {/* Feature rows */}
        <div>
          {features.map((feature) => (
            <FeatureRow key={feature.id} feature={feature} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl px-4 py-4 sm:px-6 sm:py-5"
          style={glassCard}
        >
          <p
            className="text-sm text-slate-500 font-light flex-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to save hours of research time?
          </p>
          <button
            className="relative group w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm tracking-wide text-white overflow-hidden transition-transform duration-200 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              boxShadow: "0 4px 18px rgba(6,182,212,0.38)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Try it free
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
              }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThis;