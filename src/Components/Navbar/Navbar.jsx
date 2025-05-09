import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#3c393b]  shadow-sm  rounded-xl" >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white" >Protfolio</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3">
            <li>
              <a href="#home" className="text-white">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white">About</a>
            </li>
            <li>
              <a href="#projects" className="text-white">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-white">Contact</a>
            </li>
            <button className="btn  btn-info ml-10 ">Hire Me</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
