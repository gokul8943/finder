
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

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
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050810] flex items-center">
            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -left-40 h-150 w-150 rounded-full bg-amber-500/10 blur-[120px]" />
                <div className="absolute top-1/2 right-0 h-175 w-125 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
                <div className="absolute -bottom-20 left-1/3 h-75 w-100 rounded-full bg-violet-600/10 blur-[100px]" />

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-amber-400/30"
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
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">

                    {/* ─── LEFT: Text content ─── */}
                    <div className="flex flex-1 flex-col items-start text-left">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                        >
                            <Badge
                                variant="outline"
                                className="mb-8 gap-2 border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-amber-300 backdrop-blur-sm"
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                Introducing v2.0 — Now Live
                            </Badge>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                            className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                        >
                            Design Beyond
                            <br />
                            <span className="relative">
                                <span className="bg-linear-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent italic">
                                    Imagination
                                </span>
                                {/* Underline accent */}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-linear-to-r from-amber-400 to-rose-400"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.35}
                            className="mb-10 max-w-120 text-lg leading-relaxed text-white/50"
                        >
                            Craft breathtaking digital experiences with a platform that puts
                            creative power in your hands — fast, flexible, and built for
                            visionaries.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.45}
                            className="mb-10 flex gap-8"
                        >
                            {[
                                { value: "50K+", label: "Creators" },
                                { value: "99.9%", label: "Uptime" },
                                { value: "4.9★", label: "Rating" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    <span className="text-sm text-white/40">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>

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
                                className="group relative overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-8 py-6 text-base font-semibold text-black shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-500/40 hover:scale-105"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>

                            <Button
                                size="lg"
                                variant="ghost"
                                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all group-hover:bg-white/20">
                                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                                </span>
                                Watch Demo
                            </Button>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            custom={0.8}
                            className="mt-10 flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                {["bg-rose-400", "bg-cyan-400", "bg-amber-400", "bg-violet-400"].map(
                                    (color, i) => (
                                        <div
                                            key={i}
                                            className={`h-8 w-8 rounded-full border-2 border-[#050810] ${color} flex items-center justify-center text-xs font-bold text-black`}
                                        >
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                    )
                                )}
                            </div>
                            <p className="text-sm text-white/40">
                                Trusted by{" "}
                                <span className="font-semibold text-white/70">50,000+</span> creators worldwide
                            </p>
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
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-amber-500/20 via-orange-500/10 to-transparent blur-3xl" />

                        {/* Floating image card */}
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full max-w-130"
                        >
                            {/* Outer ring */}
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                                        alt="Hero Visual"
                                        className="aspect-4/3 w-full object-cover"
                                    />
                                    {/* Image overlay gradient */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-amber-400/10" />
                                </div>
                            </div>

                            {/* Floating tag — top left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="absolute -left-6 -top-4 rounded-2xl border border-white/10 bg-[#0e1220]/90 px-4 py-3 shadow-xl backdrop-blur-md"
                            >
                                <p className="text-xs text-white/50">Live Users</p>
                                <p className="text-lg font-bold text-white">12,842</p>
                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs text-emerald-400">Active now</span>
                                </div>
                            </motion.div>

                            {/* Floating tag — bottom right */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1, duration: 0.6 }}
                                className="absolute -bottom-4 -right-6 rounded-2xl border border-white/10 bg-[#0e1220]/90 px-4 py-3 shadow-xl backdrop-blur-md"
                            >
                                <p className="text-xs text-white/50">Performance</p>
                                <div className="mt-1 flex items-center gap-2">
                                    <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            className="h-full rounded-full bg-linear-to-r from-amber-400 to-orange-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: "92%" }}
                                            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                    <span className="text-sm font-bold text-white">92%</span>
                                </div>
                            </motion.div>

                            {/* Decorative dot grid */}
                            <div className="absolute -right-2 top-1/2 h-24 w-24 -translate-y-1/2">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute h-1.5 w-1.5 rounded-full bg-amber-400/30"
                                        style={{
                                            left: `${(i % 3) * 36}%`,
                                            top: `${Math.floor(i / 3) * 36}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;