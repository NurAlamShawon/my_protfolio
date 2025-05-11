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
      <h1 className="text-black font-bold text-5xl text-center pt-10 pb-28 oswald">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        {images.map((logo) => {
          return (
            <div
              key={logo.name}
              className=" relative group mx-auto pt-8 xl:w-50 w-43 h-40 bg-gray-300 overflow-hidden rounded-xl shadow-lg border-2 border-gray-400 mt-10"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="w-24 h-24 object-contain mx-auto"
              />
              <div className=" absolute inset-0 bg-blue-500/15 backdrop-blur-sm bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-bold mb-2 text-center px-2 text-black">
                  {logo.name}
                </h3>
                <progress
                  className="progress progress-primary w-40 "
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
