import Navbar from "./components/Navbar"
import Home from "./pages/Home"


const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex bg-white/10 items-start justify-start pt-16">
      <Home />
    

      </div>
    </>
  )
}

export default App
