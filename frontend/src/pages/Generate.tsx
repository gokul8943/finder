import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Gamepad2,
  Camera,
  Battery,
  Smartphone,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,
  Cpu,
  Zap,
} from "lucide-react";

const useCases = [
  { id: "gaming", label: "Gaming Pro", icon: Gamepad2, desc: "High performance & refresh rate" },
  { id: "camera", label: "Photography", icon: Camera, desc: "Best-in-class camera system" },
  { id: "battery", label: "Battery Monster", icon: Battery, desc: "Multi-day battery life" },
  { id: "balanced", label: "Everyday Balance", icon: Smartphone, desc: "Great all-around value" },
];

const budgets = [
  { id: "budget", label: "Budget", range: "Under 15000", color: "from-emerald-400 to-emerald-500" },
  { id: "mid", label: "Mid-Range", range: "15000 - 30000", color: "from-blue-400 to-blue-500" },
  { id: "premium", label: "Premium", range: "30000 - 45000", color: "from-indigo-400 to-indigo-500" },
  { id: "ultra", label: "Ultra", range: "Over 45000", color: "from-purple-400 to-purple-500" },
];

const brands = [
  { id: "realme", label: "Realme" },
  { id: "samsung", label: "Samsung" },
  { id: "vivo", label: "Vivo" },
  { id: "oneplus", label: "OnePlus" },
  { id: "any", label: "Surprise Me (Any)" },
];

export default function Generate() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  
  const [loadingText, setLoadingText] = useState("Analyzing your preferences...");

  // Handle Brand Toggle
  const toggleBrand = (id: string) => {
    if (id === "any") {
      setSelectedBrands(["any"]);
      return;
    }
    const newSelection = selectedBrands.includes(id)
      ? selectedBrands.filter((b) => b !== id)
      : [...selectedBrands.filter((b) => b !== "any"), id];
    setSelectedBrands(newSelection);
  };

  const handleNext = () => setStep((p) => p + 1);
  const handleBack = () => setStep((p) => p - 1);

  // Loading Sequence
  useEffect(() => {
    if (step === 4) {
      let isCancelled = false;
      const timers = [
        setTimeout(() => { if (!isCancelled) setLoadingText("Scanning market database...")}, 1200),
        setTimeout(() => { if (!isCancelled) setLoadingText("Matching specs & reviews...")}, 2400),
        setTimeout(() => { if (!isCancelled) setLoadingText("Curating top choices...")}, 3600),
      ];

      const fetchPreferences = async () => {
        try {
          const params = new URLSearchParams();
          if (selectedUseCase) {
            let uc = selectedUseCase;
            if (uc === "camera") uc = "photography";
            if (uc === "balanced") uc = "balance";
            params.append("useCase", uc);
          }
          
          if (selectedBudget) {
            let budgetRange = "0-999999";
            if (selectedBudget === "budget") budgetRange = "0-15000";
            if (selectedBudget === "mid") budgetRange = "15000-30000";
            if (selectedBudget === "premium") budgetRange = "30000-45000";
            if (selectedBudget === "ultra") budgetRange = "45000-500000";
            params.append("budget", budgetRange);
          }

          if (selectedBrands.length > 0 && !selectedBrands.includes("any")) {
            params.append("brand", selectedBrands.join(","));
          }

          const response = await fetch(`/api/v1/products/preference?${params.toString()}`);
          if (!response.ok) {
             throw new Error("HTTP error " + response.status);
          }
          const result = await response.json();
          
          let phonesArray = [];
          if (Array.isArray(result.data)) {
            phonesArray = result.data;
          } else if (result.data?.recommendedPhones) {
            phonesArray = result.data.recommendedPhones;
          }

          if (!isCancelled) {
            if (phonesArray.length > 0) {
              navigate("/products", { state: { data: phonesArray } });
            } else {
              navigate("/products"); // fallback
            }
          }
        } catch (error) {
          console.error("Error fetching preferences:", error);
          if (!isCancelled) {
            navigate("/products"); // fallback
          }
        }
      };

      fetchPreferences();

      return () => {
        isCancelled = true;
        timers.forEach(clearTimeout);
      };
    }
  }, [step, navigate, selectedUseCase, selectedBudget, selectedBrands]);

  const canProceed = () => {
    if (step === 1) return !!selectedUseCase;
    if (step === 2) return !!selectedBudget;
    if (step === 3) return selectedBrands.length > 0;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-300/30 blur-[120px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/30 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="flex-1 flex items-center justify-center relative z-10 px-4 pt-20 pb-12">
        <div className="w-full max-w-2xl">
          {/* Header Progress */}
          {step < 4 && (
            <div className="mb-10 sm:mb-14 text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase text-cyan-600 bg-cyan-100/50 backdrop-blur-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>AI Generator</span>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step === 1 && "What matters most?"}
                {step === 2 && "Set your budget"}
                {step === 3 && "Brand loyalties?"}
              </h1>
              
              {/* Progress Bar */}
              <div className="w-full max-w-xs mx-auto flex items-center gap-2 mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-full bg-slate-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: step >= i ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cards Area */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {useCases.map((uc) => (
                    <button
                      key={uc.id}
                      onClick={() => setSelectedUseCase(uc.id)}
                      className={`relative p-6 rounded-3xl text-left transition-all duration-300 border-2 overflow-hidden group ${
                        selectedUseCase === uc.id
                          ? "border-cyan-500 bg-white shadow-xl shadow-cyan-500/20"
                          : "border-slate-100 bg-white/60 hover:bg-white hover:border-cyan-200 hover:shadow-lg"
                      }`}
                    >
                      {selectedUseCase === uc.id && (
                        <div className="absolute top-4 right-4 text-cyan-500">
                          <Check className="w-6 h-6" />
                        </div>
                      )}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                        selectedUseCase === uc.id ? "bg-cyan-100 text-cyan-600" : "bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-500"
                      }`}>
                        <uc.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{uc.label}</h3>
                      <p className="text-sm text-slate-500">{uc.desc}</p>
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {budgets.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBudget(b.id)}
                      className={`relative p-6 sm:p-8 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                        selectedBudget === b.id
                          ? "shadow-2xl scale-100"
                          : "scale-95 opacity-80 hover:scale-100 hover:opacity-100 shadow-md"
                      }`}
                    >
                      <div className={`absolute inset-0 bg-linear-to-br ${b.color} opacity-10`} />
                      {selectedBudget === b.id && (
                        <motion.div 
                          layoutId="budget-outline"
                          className="absolute inset-0 border-4 border-cyan-500 rounded-3xl z-10"
                        />
                      )}
                      <div className="relative z-20 mb-8 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                         <span className="font-bold text-slate-700">$</span>
                      </div>
                      <div className="relative z-20">
                        <h3 className="text-2xl font-black text-slate-800 mb-1">{b.label}</h3>
                        <p className="text-slate-600 font-medium">{b.range}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-wrap gap-3 sm:gap-4 justify-center"
                >
                  {brands.map((b) => {
                    const isSelected = selectedBrands.includes(b.id);
                    return (
                      <button
                        key={b.id}
                        onClick={() => toggleBrand(b.id)}
                        className={`px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                          isSelected
                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
                            : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50"
                        }`}
                      >
                        {b.label}
                        {isSelected && <Check className="w-5 h-5" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="relative w-32 h-32 mx-auto mb-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-t-4 border-cyan-500 border-opacity-30 border-r-4"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border-b-4 border-blue-500 border-opacity-40 border-l-4"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-cyan-600 animate-pulse" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">AI at work</h2>
                  <p className="text-lg text-slate-500 font-medium h-8 transition-all duration-300">
                    {loadingText}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {step < 4 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-12 sm:mt-16 flex items-center justify-between"
            >
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 text-slate-500 hover:text-slate-800 font-semibold transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
              ) : (
                <div /> // Spacer
              )}

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`relative group px-8 py-4 rounded-2xl text-white font-bold inline-flex items-center gap-3 transition-all duration-300 ${
                  canProceed() 
                    ? "bg-linear-to-r from-cyan-500 to-blue-500 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95 cursor-pointer"
                    : "bg-slate-300 cursor-not-allowed opacity-50"
                }`}
              >
                {step === 3 ? "Generate Matches" : "Continue"}
                {step === 3 ? <Zap className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
