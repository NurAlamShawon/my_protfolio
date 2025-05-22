import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Skills = () => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    const fetchimages = async () => {
      const res = await fetch("/images.json");
      const data = await res.json();
      setimages(data);
    };
    fetchimages();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen((prev) => !prev);
  }
    return (
      <div id="skills" className="mt-20 mb-38 pt-10"
      data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
      >
        <h1 className="text-black font-bold text-5xl text-center pt-10 pb-28 oswald">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6"
         data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
          {images.map((logo) => {
            return (
              <div
                key={logo.name}
                className="relative group mx-auto pt-4 sm:pt-8 w-[170px] sm:w-[200px] h-40 bg-gray-300 overflow-hidden rounded-xl shadow-lg border-2 border-gray-400 mt-6 sm:mt-10"
                onClick={toggleOverlay} // Handles tap/click
               
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="w-24 h-24 object-contain mx-auto pointer-events-none"
                   data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                />
                <div
                  className={`
          absolute inset-0 bg-blue-500/15 backdrop-blur-sm bg-opacity-60
          flex flex-col items-center justify-center text-white
          transition-opacity duration-500
          ${isOpen ? "opacity-100" : "opacity-0"}
          sm:opacity-0 sm:group-hover:opacity-100
        `}
                >
                  <h3 className="text-lg font-bold mb-2 text-center px-2 text-black">
                    {logo.name}
                  </h3>
                  <progress
                    className="progress progress-primary w-40"
                    value={logo.skillLevel}
                    max="100"
                  ></progress>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Skills;

