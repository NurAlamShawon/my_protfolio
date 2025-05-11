import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-200 text-base-content rounded p-10 mt-20 pb-15">
      <nav className="grid grid-flow-col gap-4">
        <a href="#home" className="text-black link link-hover">
          Home
        </a>
        <a href="#about" className="text-black link link-hover">
          About
        </a>
        <a href="#education" className="text-black link link-hover">
          Education
        </a>
        <a href="#skills" className="text-black link link-hover">
          Skiils
        </a>

        <a href="#portfolio" className="text-black link link-hover">
          Portfolio
        </a>
        <a href="#contact" className="text-black link link-hover">
          Contact
        </a>
      </nav>
      <nav>
        <div className="flex space-x-4">
          {/* Discord */}
          <a
            href="https://github.com/NurAlamShawon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.218.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* Gmail */}
          <a href="mailto:nuralamshawon9992@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.386 4.924a1 1 0 001.228 0L20 8.489V18H4z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nur-alam-shawon-9477a9228/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
              className="fill-current"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.5C24.3 107.5 0 83.2 0 54.3 0 25.4 24.3 1.1 53.84 1.1c29.54 0 53.84 24.3 53.84 53.2 0 28.9-24.3 53.2-53.84 53.2zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.6-2.9 13.4-2.9 21.3V448h-92.68s1.2-241.1 0-266.1h92.68v37.7c12.3-19 34.3-46.1 83.4-46.1 60.9 0 106.6 39.8 106.6 125.3V448z" />
            </svg>
          </a>
          {/* Phone */}
          <a href="tel:+08801608969992">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
              className="fill-current"
            >
              <path d="M493.4 24.6l-104-24c-11.7-2.7-23.6 3.3-28.7 14.2l-48 104c-4.7 10.2-2.3 22.2 6 30.1l60.6 60.6c-36.4 68.1-94.4 126.1-162.5 162.5l-60.6-60.6c-7.9-7.9-19.9-10.3-30.1-6l-104 48c-10.9 5-16.9 17-14.2 28.7l24 104c2.6 11.6 13 19.9 24.8 19.9 256.4 0 464-207.6 464-464 0-11.8-8.3-22.2-19.9-24.8z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Nur Alam Shawon's Portfolio
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
