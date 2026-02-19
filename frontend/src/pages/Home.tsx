import ProductCard from "@/components/ProductCard"
import ReviewCard from "@/components/ReviewCard"

const Home = () => {
  return (
    <div className="h-full p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full p-4 gap-4 flex flex-col items-start justify-start">
        <ReviewCard />
      </div>
    </div>
  )
}

export default Home
