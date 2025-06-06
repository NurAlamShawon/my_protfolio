
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Protfolio = () => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    const fetchimages = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      setprojects(data);
    };
    fetchimages();
  }, []);

  console.log(projects);

  return (
    <div className="max-w-screen-xl mx-auto pt-30" id="portfolio"
     data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
    >
      <h1 className="text-black font-bold text-5xl text-center pb-8 oswald">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <div className="relative group mx-auto w-80 h-140 overflow-hidden rounded-xl shadow-lg border-2 border-gray-400 mt-10"
             data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
            >
              <img
                src={project.image}
                alt="Project"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className=" absolute inset-0 bg-blue-500/15 backdrop-blur-sm bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-bold mb-2 text-center px-2 text-black">
                  {project.name}
                </h3>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black px-4 py-2 rounded font-semibold text-sm btn btn-soft btn-info"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Protfolio;
