import { Link } from "react-router-dom";
import heroImg from "@/assets/Home/herosecWeb.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-dvh overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero section"
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Decorative floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-16 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl float-element"
          style={{ background: "rgba(6, 182, 212, 0.12)" }}
        />
        <div
          className="absolute bottom-1/4 -right-16 w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-3xl float-element"
          style={{ background: "rgba(14, 165, 233, 0.10)", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 gap-5 sm:gap-6">
        {/* Eyebrow tag */}
        <div
          className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-widest uppercase text-cyan-200 border border-cyan-400/20"
          style={{
            background: "rgba(6, 182, 212, 0.08)",
            backdropFilter: "blur(12px)",
            animationDelay: "0.2s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-glow" />
          AI-Powered Recommendations
        </div>

        <h1 className="hero-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl">
          Smarter Decisions
        </h1>

        <div className="hero-line h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

        <p className="hero-subtitle text-xs xs:text-sm sm:text-base md:text-lg text-cyan-200/90">
          Smart Picks
        </p>

        <p
          className="fade-in max-w-md sm:max-w-lg text-sm sm:text-base text-white/60 font-light leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: "1.8s" }}
        >
          Stop watching hours of reviews. Let AI analyze thousands of data points and find your perfect device in seconds.
        </p>

        {/* CTA Button */}
        <div className="hero-cta flex flex-col xs:flex-row items-center gap-3 sm:gap-4 mt-2">
          <Link
            to="/products"
            className="group relative px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-white overflow-hidden transition-transform duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              boxShadow: "0 8px 32px rgba(6,182,212,0.4)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Now
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                →
              </span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            />
          </Link>

          <a
            href="#how-it-works"
            className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl text-sm font-medium text-white/80 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 tracking-widest uppercase font-light">
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-white/30"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate
              attributeName="cy"
              values="8;14;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;