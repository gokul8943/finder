
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImg from "../../../assets/Home/HeroImg.png";

const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.8, delay },
    }),
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] flex items-center">
            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-10 -left-40 h-150 w-150 rounded-full bg-cyan-500/5 blur-[120px]" />
                <div className="absolute top-1/2 right-0 h-175 w-125 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
                <div className="absolute -bottom-10 left-1/3 h-75 w-100 rounded-full bg-green-600/5 blur-[100px]" />

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.10] bg-repeat"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(63, 129, 154,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(63, 129, 154,0.7) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-400"
                        style={{
                            width: `${4 + (i % 3) * 3}px`,
                            height: `${4 + (i % 3) * 3}px`,
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 4) * 18}%`,
                        }}
                        animate={{
                            y: [0, -20 - i * 4, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>

            {/* ── Main content ── */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 lg:px-10">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">

                    {/* ─── LEFT: Text content ─── */}
                    <div className="flex flex-1 flex-col items-start text-left">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                        >
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            className="mb-6 text-3xl font-bold leading-[1.08] tracking-tight text-black sm:text-6xl lg:text-7xl"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                        >
                            Smart Pick
                            <br />
                            <span className="relative">
                                <span className="bg-linear-to-r from-black via-cyan-400 to-cyan-600 bg-clip-text text-transparent italic">
                                    Imagination
                                </span>
                                {/* Underline accent */}
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.35}
                            className="mb-10 max-w-120 text-lg leading-relaxed text-black/70"
                        >
                            Craft breathtaking digital experiences with a platform that puts
                            creative power in your hands — fast, flexible, and built for
                            visionaries.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.55}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                size="lg"
                                className="group relative overflow-hidden rounded-full bg-linear-to-r from-black-400 to-cyan-500 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>

                        </motion.div>
                    </div>

                    {/* ─── RIGHT: Image / Visual ─── */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="relative flex flex-1 items-center justify-center"
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/20 via-cyan-300/10 to-transparent blur-3xl" />

                        {/* Floating image card */}
                        <motion.div
                            animate={{ y: [2, -14, 3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full max-w-130"
                        >
                            {/* Outer ring */}
                            <div className="">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={HeroImg}
                                        alt="Hero Visual"
                                        className="aspect-4/3 w-full object-cover"
                                    />
                                    {/* Image overlay gradient */}
                                    <div className="absolute inset-0" />
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;