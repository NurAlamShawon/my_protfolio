import React from "react";

const Navbar = () => {
  return (
    <div className="  sticky top-0 z-50">
      <div className="navbar shadow-sm  bg-base-100 xl:px-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
              <a href="#home" className="text-black">Home</a>
            </li>
            <li>
              <a href="#about" className="text-black">About</a>
            </li>
            <li>
              <a href="#education" className="text-black">Education</a>
            </li>
            <li>
              <a href="#skills" className="text-black">Skills</a>
            </li>
            <li>
              <a href="#portfolio" className="text-black">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-black">Contact</a>
            </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-black">Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li>
              <a href="#home" className="text-black">Home</a>
            </li>
            <li>
              <a href="#about" className="text-black">About</a>
            </li>
            <li>
              <a href="#education" className="text-black">Education</a>
            </li>
            <li>
              <a href="#skills" className="text-black">Skills</a>
            </li>
            <li>
              <a href="#portfolio" className="text-black">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-black">Contact</a>
            </li>
    </ul>
  </div>
  <div className="navbar-end">
     <button className="btn  btn-info ml-10 ">Hire Me</button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
