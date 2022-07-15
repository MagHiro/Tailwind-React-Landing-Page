import React, { useEffect } from "react";

function Navbar() {
  const ResponsiveNavbar = () => {
    const btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  };


  useEffect(() => {
    ResponsiveNavbar();
  }, []);

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <span className="font-semibold text-primary text-5xl mt-2">
                <span className="text-black">The</span>Hom
              </span>
            </a>
          </div>
          <div className="hidden lg:flex items-center tracking-wide space-x-8 mt-3">
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Home
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in-out"
            >
              About 
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Services
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Blogs
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold border-b-4 border-transparent hover:border-primary hover:text-secondary transition duration-300 ease-in"
            >
              Contact
            </a>
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
      <div className="hidden mobile-menu items-center">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-primary font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
