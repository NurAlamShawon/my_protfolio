import React from "react";
import Footer from "../Footer/Footer";
import bg from '../../../src/assets/bg3.jpg';

import Herosection from "../Herosection/Herosection";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";


const Homepage = () => {
  return (
    <div  >
     
      <header className="bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${bg})` }}>
        <Navbar></Navbar>
        <Herosection></Herosection>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Homepage;
