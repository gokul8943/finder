import heroImg from "@/assets/Home/herosecWeb.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-screen h-dvh overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-6">
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
          Smarter Decisions
        </h1>

        <div className="hero-line h-px w-24 bg-linear-to-r from-transparent via-cyan-300 to-transparent" />

        <p className="hero-subtitle text-sm sm:text-base md:text-lg text-cyan-800">
          Smart Picks
        </p>
      </div>
    </div>
  );
};

export default HeroSection;