import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Education = () => {




  return (
    <div
      id="education"
      data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
      className="mt-10 transition-all duration-700 ease-out transform space-y-8 p-10 pt-30 max-w-screen-xl mx-auto bg-stone-300 rounded-2xl mb-16" 
    >
      <h1 className="text-black font-bold text-5xl text-center pb-8 oswald" >
        Education
      </h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li
          data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        
        >
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">
              Secondary School Certificate (SSC)
            </div>
             <span className="text-xl font-normal">National Ideal School</span><br></br>
            <span className="text-xl font-normal">Science</span>
          </div>
          <hr />
        </li>
        <li
        data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2018-2020</time>
            <div className="text-lg font-black">
              Higher Secondary Certificate (HSC)
            </div>
            <span className="text-xl font-normal">Dhaka Imperial College</span><br></br>
            <span className="text-xl font-normal">Science</span>
          </div>
          <hr />
        </li>
        <li
        data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2021-2024</time>
            <div className="text-lg font-black">
              Bachelor in Computer Science And Engineering
            </div>
            <span className="text-xl font-normal">East West University</span><br></br>
           
            <span className="text-xl font-normal">
              Department of Computer Science and Engineering
            </span>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
