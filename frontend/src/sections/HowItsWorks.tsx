import { motion } from 'framer-motion';

const HowItsWorks = () => {
  const steps = [
    { title: "Select your budget", desc: "Tailor the search to your financial comfort zone." },
    { title: "Choose your priority", desc: "Performance, design, or battery life? You decide." },
    { title: "Get AI recommendations", desc: "Our neural engine finds your perfect match instantly." }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-bl from-white/60 via-cyan-300/10 to-cyan-400/20 flex items-center justify-center p-6">
      
      {/* Animated Clip-Path Background Element */}
      <div 
        className="absolute inset-0 bg-cyan-500/5 z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-5xl md:text-6xl font-black tracking-tight text-cyan-950 mb-16"
        >
          How It <span className="text-cyan-600">Works</span>
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl shadow-cyan-900/5 hover:bg-white/60 transition-all"
            >
              <div className="text-cyan-600 font-mono text-sm mb-4">0{index + 1}</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-cyan-800/70 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Floating Shape */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default HowItsWorks;