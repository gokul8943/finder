import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import ProductView from "./pages/ProductView"
import '@/styles/animation.css';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex bg-white/10 items-start justify-start">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductView />} />
          </Routes >
        </>


      </div>
      <Footer />
    </>
  )
}

export default App
