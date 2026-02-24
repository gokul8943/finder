import HeroSection from "@/sections/HeroSection"
import HowItsWorks from "@/sections/HowItsWorks"
import WhyThis from "@/sections/WhyThis"


const Home = () => {
  return (
    <div className="min-h-screen w-full">
       <HeroSection />
       <HowItsWorks />
       <WhyThis />
    </div>
  )
}

export default Home
