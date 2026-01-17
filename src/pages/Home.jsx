import React from "react";
import Hero from "../section/Hero";
import About from "../section/About";
import Experience from "../section/Experience";
import Marque from "../section/Marque";
import Projects from "../section/Projects";

function Home() {

  
  return (
    <>
      <div>
        
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Marque />
      </div>
    </>
  );
}

export default Home;
