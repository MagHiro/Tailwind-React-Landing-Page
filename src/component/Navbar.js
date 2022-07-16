import React, { useEffect } from "react";

function Navbar() {
  const ResponsiveNavbar = () => {
    const btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  };

  const DarkMode = () => {
    const btnToggler = document.querySelector(".switch");
    const toggler = document.querySelector(".toggler");

    toggler.addEventListener("click", () => {
      if (toggler.checked === true) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
  };

  const TogleDarkModee = () => {
    const btnToggler = document.querySelector(".switch");
    const toggler = document.querySelector(".toggler");

    btnToggler.addEventListener("click", () => {
      if (toggler.checked == true) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
  };

  useEffect(() => {
    ResponsiveNavbar();
    DarkMode();
  }, []);

  return (
    <nav className="bg-white dark:bg-neutral-800 relative dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <span className="font-semibold text-primary text-5xl mt-2">
                <span className="text-black dark:text-white">The</span>Hom
              </span>
            </a>
          </div>
          <div className="hidden mobile-menu flex z-[999] items-center rounded-lg shadow-lg flex-col max-w-xs w-full lg:max-w-none lg:shadow-none lg:w-auto bg-white dark:bg-neutral-800 absolute top-24 right-2 lg:flex lg:top-0 lg:flex-row lg:relative lg:items-center lg:tracking-wide lg:space-x-8 mt-3">
            <a
              href=""
              className="py-4 px-2 text-gray-500 dark:text-white font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Home
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 dark:text-white font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 dark:text-white font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Services
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 dark:text-white font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Blogs
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 dark:text-white font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Contact
            </a>
            <label className="switch  mt-4 mb-4 lg:mb-0 lg:mt-0">
              <input onClick={DarkMode} className="toggler" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="#"
              className="py-3 px-12 mt-3 font-medium text-white bg-primary rounded-full hover:opacity-80 ransition duration-300"
            >
              SIGN
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button className="hamburger outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-primary"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:hidden mobile-menu ">
        <ul className="flex flex-col items-center">
          <li className="active w-full text-center">
            <a
              href="index.html"
              className="block w-full text-sm px-2 py-4 text-white bg-primary font-semibold"
            >
              Home
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              Services
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              About
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              Contact Us
            </a>
          </li>
          <label className="switch">
            <input onClick={DarkMode} className="toggler" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
