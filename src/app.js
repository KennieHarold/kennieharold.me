import React from "react";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Timeline />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
