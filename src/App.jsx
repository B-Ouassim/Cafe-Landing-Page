import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import JoinSection from "./components/JoinSection";
import InstagramSection from "./components/InstagramSection";


function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] selection:bg-[#8d6e63] selection:text-white">
      <Navbar />
      <Hero />
      <Menu />
      <StorySection />
      <JoinSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}

export default App;