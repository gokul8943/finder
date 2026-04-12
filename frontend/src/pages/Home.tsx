import HeroSection from "@/sections/HeroSection";
import HowItWorks from "@/sections/HowItsWorks";
import WhyThis from "@/sections/WhyThis";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <HowItWorks />
      <WhyThis />
      <Footer />
    </main>
  );
};

export default Home;
