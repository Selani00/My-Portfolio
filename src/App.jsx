import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Tec from "./Components/Tec";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Bot from "./Components/Bot";

function App() {
  return (
    <div>     
      <Navbar />
      <Bot/>
      <Hero />
      <About />
      <Skills />
      <Tec/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;





