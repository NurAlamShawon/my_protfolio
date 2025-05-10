
import React, { useEffect, useState } from "react";

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

  console.log(images);
  return (
    <div id="skills" className="mt-20 mb-48">
      <h1 className="text-black font-bold text-5xl text-center pt-10 pb-28">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6"
      >
        {images.map((logo) => {
          return (
            <div
              key={logo.name}
              className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="w-24 h-24 object-contain mx-auto"
              />
              <p className="text-center mt-4 font-semibold text-gray-800 dark:text-gray-200">
                {logo.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
