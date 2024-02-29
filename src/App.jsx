import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Bot from "./Components/Bot";
import Certificate from "./Components/Certificates";

function App() {
  return (
    <div>     
      <Navbar />
      <Bot/>
      <Hero />
      <About />
      <Skills />   
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;





