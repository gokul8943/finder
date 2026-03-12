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
        id:"03",
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

const FeatureRow = ({
    feature
}: {
    feature: (typeof features)[0];
    index: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: feature.delay, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-3"
        >
            <div
                className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-5 rounded-2xl overflow-hidden cursor-default transition-all duration-500"
                style={{
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: "0 4px 24px rgba(6,182,212,0.07), 0 1px 2px rgba(255,255,255,0.9) inset",
                }}
            >
                {/* Hover tint */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: "linear-gradient(135deg, rgba(207,250,254,0.55) 0%, rgba(186,230,255,0.35) 100%)",
                    }}
                />

                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 flex-wrap relative z-10">
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "110%" }}
                            animate={inView ? { y: "0%" } : {}}
                            transition={{ duration: 0.65, delay: feature.delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`inline-block font-black text-2xl md:text-3xl lg:text-4xl bg-linear-to-r ${feature.color} bg-clip-text text-transparent leading-tight tracking-tight`}
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            {feature.bold}
                        </motion.span>
                    </div>

                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: "110%", opacity: 0 }}
                            animate={inView ? { y: "0%", opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: feature.delay + 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block font-light text-lg md:text-xl lg:text-2xl text-cyan-700/55 group-hover:text-cyan-600/80 transition-colors duration-500 leading-tight"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            {feature.rest}
                        </motion.span>
                    </div>
                </div>

                {/* Arrow */}
                <span className="hidden sm:block text-cyan-400/40 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300 text-lg relative z-10">
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
        <section className="relative min-h-screen overflow-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

            {/* Background gradient mesh */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(145deg, #e0f7fa 0%, #f0fffe 30%, #e8f4fd 55%, #cffafe 80%, #f0fdff 100%)",
                }}
            />

            {/* Soft blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(103,232,249,0.28)" }} />
                <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(14,165,233,0.16)" }} />
                <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: "rgba(6,182,212,0.2)" }} />
                <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full blur-2xl" style={{ background: "rgba(186,230,255,0.45)" }} />
            </div>

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.14) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-10 lg:px-16 py-15 sm:py-18">

                {/* Header glass card */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl px-8 py-10 mb-6 overflow-hidden"
                    style={{
                        background: "rgba(255,255,255,0.62)",
                        backdropFilter: "blur(32px)",
                        WebkitBackdropFilter: "blur(32px)",
                        border: "1px solid rgba(255,255,255,0.88)",
                        boxShadow: "0 8px 40px rgba(6,182,212,0.10), 0 2px 4px rgba(255,255,255,0.95) inset",
                    }}
                >
                    {/* Inner glow accent */}
                    <div
                        className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(103,232,249,0.28) 0%, transparent 70%)" }}
                    />

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        className="flex items-center gap-3 mb-5"
                    >
                        <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #67e8f9, #06b6d4)", boxShadow: "0 2px 8px rgba(6,182,212,0.35)" }}
                        >
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                <path d="M6 1L7.5 4.5L11 5.5L8.5 8L9 11.5L6 10L3 11.5L3.5 8L1 5.5L4.5 4.5L6 1Z" fill="white" />
                            </svg>
                        </div>
                        <span
                            className="text-xs font-mono tracking-[0.22em] uppercase text-cyan-600/90"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Why this works
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            initial={{ y: "100%" }}
                            animate={titleInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate-800"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Stop drowning in{" "}
                            <span className="bg-linear-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
                                research.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
                        className="text-base sm:text-lg text-slate-500 max-w-lg font-light leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        We built the tool we always wished existed — one that cuts through the noise
                        and tells you exactly what to buy.
                    </motion.p>
                </motion.div>

                {/* Feature rows */}
                <div>
                    {features.map((feature, index) => (
                        <FeatureRow key={feature.id} feature={feature} index={index} />
                    ))}
                </div>

                {/* CTA glass row */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-5"
                >
                    <button
                        className="relative group px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white overflow-hidden transition-transform duration-200 active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                            boxShadow: "0 4px 20px rgba(6,182,212,0.4), 0 1px 2px rgba(255,255,255,0.25) inset",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Try it free
                            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                        </span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyThis;