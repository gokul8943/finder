import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-cyan-900/5 border-b border-white/60"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-1 group">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-600 transition-colors duration-300 group-hover:text-cyan-500">
            sMart
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-300 transition-colors duration-300 group-hover:text-cyan-400">
            Pick
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-600 bg-cyan-50/80"
                    : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/products"
            className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-transform duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              boxShadow: "0 4px 16px rgba(6,182,212,0.3)",
            }}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get Started
              <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                →
              </span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)" }}
            />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-cyan-50/60 active:scale-90"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <div className="relative w-5 h-5">
            <Menu
              size={20}
              className={`absolute inset-0 text-slate-700 transition-all duration-300 ${
                isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              size={20}
              className={`absolute inset-0 text-slate-700 transition-all duration-300 ${
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/60 shadow-xl shadow-cyan-900/10 transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-3 px-4">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-600 bg-cyan-50/80"
                    : "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/50"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 px-4 pb-2">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-transform duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                boxShadow: "0 4px 16px rgba(6,182,212,0.3)",
              }}
            >
              Get Started
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
