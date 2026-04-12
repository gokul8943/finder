import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-xl shadow-cyan-900/5 border-b border-white/60"
          : "bg-transparent py-2"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-18 sm:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-3 group">
          {/* <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/30 flex items-center justify-center bg-white border border-cyan-100 transition-transform duration-500 group-hover:shadow-cyan-500/50 group-hover:-translate-y-0.5 group-hover:scale-105">
            <img 
              src={logoImg} 
              alt="sMart Pick Logo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div> */}
          <div className="flex flex-col justify-center">
            <span 
              className="text-2xl sm:text-[28px] font-black tracking-tighter leading-none flex items-baseline"
              style={{ fontFamily: "'Outfit', 'DM Sans', sans-serif" }}
            >
              <span className="text-slate-800 transition-colors duration-300 group-hover:text-slate-900 drop-shadow-sm">
                sMart
              </span>
              <span className="bg-gradient-to-r from-cyan-900 to-sky-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-400 group-hover:to-sky-400 drop-shadow-sm">
                Pick
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 ml-1 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 group-hover:text-cyan-600 transition-colors duration-300 uppercase tracking-[0.25em] pl-0.5 mt-1.5">
              AI Device Finder
            </span>
          </div>
        </Link>

        {/* CTA Button */}
        <Link
          to="/generate"
          className="relative group px-6 py-3 sm:px-8 sm:py-3.5 rounded-2xl text-sm sm:text-base font-bold text-white overflow-hidden transition-all duration-300 active:scale-95 hover:shadow-xl hover:shadow-cyan-500/40"
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
              →
            </span>
          </span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

