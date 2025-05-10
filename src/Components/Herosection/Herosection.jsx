import React, { useEffect, useState } from "react";
import { useRef } from "react";


const Herosection = () => {


  
const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div id="home" ref={ref}
      className={`transition-all duration-700 ease-out transform max-w-screen-xl mx-auto pt-50 rounded-2xl${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
      <div className="space-y-5 ">
        <h1 className="text-white font-bold text-5xl text-center">
          Nur Alam Shawon
        </h1>
        <h1 className="text-white font-bold text-3xl text-center">
          A Professional{" "}
          <span className="text-sky-300">Frontend Developer</span>
        </h1>
        <p className="text-center text-white text-xl">
          Passionate about building responsive web interfaces with modern
          technologies like React, Tailwind CSS, and JavaScript.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
