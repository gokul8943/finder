import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Generate from "./pages/Generate";
import "@/styles/animation.css";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </div>
  );
};

export default App;
