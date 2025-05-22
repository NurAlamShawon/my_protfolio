import React  from "react";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  const ref = useRef();
  const imgRef = useRef(null);


  return (
    <div
      id="about"
      ref={ref}
      className="mb-48 transition-all duration-700 ease-out transform  max-w-screen-xl mx-auto pt-28  space-y-8 p-10"
      
    >
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between ">
        <div className="xl:w-4/6 x:p-0 p-2 "
        data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
          <h1 className="text-black font-bold text-5xl  text-center pb-8 oswald">
            About Me
          </h1>
          <p className="text-black font-regular xl:text-xl text-base text-center p-2">
            I am a dedicated Computer Science and Engineering student at East
            West University with a deep passion for technology, programming, and
            continuous learning. Over the years, I have gained hands-on
            experience in frontend web development, building responsive and
            interactive user interfaces using HTML, CSS, JavaScript, React, and
            Tailwind CSS. I enjoy transforming creative ideas into functional,
            user-friendly websites and applications that provide real value. In
            addition to my development skills, I have experience in project
            coordination and academic tutoring, which has enhanced my ability to
            communicate effectively, manage time efficiently, and collaborate
            within a team. I am always eager to take on new challenges, explore
            emerging technologies, and contribute to impactful projects that
            solve real-world problems.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 pb-10">
            <div className="space-y-5">
              <h1 className="font-bold text-2xl text-black text-center">
                Phone
              </h1>
              <p className="font-regular text-xl text-black text-center">
                01608969992
              </p>
            </div>
            <div className="space-y-5">
              <h1 className="font-bold text-2xl text-black text-center">
                Email
              </h1>
              <p className="font-regular text-xl text-black text-center">
                nuralamshawon9992@gmail.com
              </p>
            </div>

            <div className="space-y-5">
              <h1 className="font-bold text-2xl text-black text-center">
                From
              </h1>
              <p className="font-regular text-xl text-black text-center">
                Dhaka,Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div
          ref={imgRef}
          className="xl:w-2/6 mb-15 p-10 transition-opacity duration-1000"
          data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
          <img src="https://i.postimg.cc/WzRHvwRn/Photoroom-20250512-212812.png" alt="me"/>
        </div>
      </div>
    </div>
  );
};

export default About;
