import React from "react";
import Footer from "../Footer/Footer";
 import bg from '../../../src/assets/bg2.PNG';

import Herosection from "../Herosection/Herosection";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Education from "../Education/Education";
import Protfolio from "../Protfolio/Protfolio";
import Contact from "../Contact/Contact";



const Homepage = () => {
  return (
    <div className="roboto">
      <header className="bg-cover h-screen bg-center"
      style={{
          backgroundImage: `url(${bg})`
        }}>
        <Navbar></Navbar>
        <Herosection></Herosection>
      </header>
      <main>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Protfolio></Protfolio>
      </main>
      <footer>
        <Contact></Contact>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Homepage;
