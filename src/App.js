import HeaderSocials from "./components/HeaderSocials";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="text-white font-montserrat">
      <Navbar />
      <HeaderSocials />
      <div className="h-screen ">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
    </ParallaxProvider>
    
  );
}

export default App;
