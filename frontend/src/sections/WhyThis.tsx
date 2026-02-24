import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        id: "01",
        bold: "No more watching 10 YouTube videos",
        color: "from-cyan-400 to-teal-400",
        delay: 0.2,
    },
    {
        id: "02",
        bold: "Unbiased recommendations",
        color: "from-teal-400 to-cyan-500",
        delay: 0.4,
    },
    {
        id: "03",
        bold: "AI-powered analysis",
        rest: "",
        color: "from-cyan-500 to-sky-400",
        delay: 0.6,
    },
    {
        id: "04",
        bold: "Simple & fast decision making",
        rest: "",
        color: "from-cyan-400 to-teal-300",
        delay: 0.8,
    },
];

const FeatureRow = ({ feature, }: { feature: typeof features[0]; index: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: feature.delay, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-baseline gap-5 py-5 cursor-default"
        >
            {/* Divider line that grows on view */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: feature.delay, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute top-0 left-0 h-px w-full bg-linear-to-r ${feature.color} opacity-20 origin-left`}
            />

            {/* Bold keyword — slides up, gradient */}
            <div className="overflow-hidden">
                <motion.span
                    initial={{ y: "100%" }}
                    animate={inView ? { y: "0%" } : {}}
                    transition={{ duration: 0.6, delay: feature.delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-linear-to-r ${feature.color} bg-clip-text text-transparent leading-tight tracking-tight`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {feature.bold}
                </motion.span>
            </div>

            {/* Rest text — fades in slightly after */}
            <div className="overflow-hidden">
                <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={inView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: feature.delay + 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block font-light text-3xl md:text-4xl lg:text-5xl text-cyan-300 group-hover:text-cyan-500 transition-colors duration-500 leading-tight tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {feature.rest}
                </motion.span>
            </div>

            {/* Hover accent line under text */}
            <motion.div
                className={`absolute bottom-0 left-6 h-px bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                style={{ width: "calc(100% - 24px)" }}
            />
        </motion.div>
    );
};

const WhyThis = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    return (
        <div className="min-h-screen w-full bg-linear-to-b from-cyan-700/10 via-transparent to-cyan-500/20 relative overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
            `}</style>

            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Ambient orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-1/3 w-125 h-125 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.15, 0.07] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-teal-400/15 blur-[80px] pointer-events-none"
            />

            {/* Header */}
            <div ref={titleRef} className="relative px-8 md:px-16 lg:px-24 pt-24 pb-12">
                {/* Overline */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={titleInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="h-px w-8 bg-cyan-400/60" />
                </motion.div>

                {/* Main Title */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        initial={{ y: "100%", opacity: 0 }}
                        animate={titleInView ? { y: "0%", opacity: 1 } : {}}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black text-4xl md:text-8xl lg:text-7xl leading-none tracking-tighter text-cyan-200"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Why{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
                            This App?
                        </span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-white/35 text-base md:text-lg font-light mt-4 max-w-sm"
                >
                    Pick the perfect phone — without the noise.
                </motion.p>
            </div>

            {/* Feature List */}
            <div className="relative px-8 md:px-16 lg:px-24 pb-20 flex flex-col">
                {features.map((feature, index) => (
                    <FeatureRow key={feature.id} feature={feature} index={index} />
                ))}

                {/* Bottom line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px w-full bg-linear-to-r from-cyan-400/20 via-teal-300/20 to-transparent origin-left mt-5"
                />

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 flex items-center gap-3"
                >
                </motion.div>
            </div>
        </div>
    );
};

export default WhyThis;