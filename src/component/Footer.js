import React, { useEffect } from "react";

function Footer() {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <a href="#" className="flex flex-col text-left py-4 px-2">
              <span className="font-semibold text-primary text-5xl  mt-2">
                <span className="text-black ">The</span>Hom
              </span>
                <p className="text-base text-gray-400 max-w-sm mt-3">it is a long established fact that a reader will be distractedable
              content of a page.</p>
            </a>
          </div>
          <div>
            <a href="#" className="flex flex-col text-left py-4 px-2">
              <span className="font-semibold text-black text-2xl mt-3 mb-2">
                Quick Start
              </span>
                <ul className="text-base text-gray-400 mt-2 flex flex-col gap-2 ml-1">
                    <a className="hover:text-primary" href="#">Home</a>
                    <a className="hover:text-primary" href="#">About</a>
                    <a className="hover:text-primary" href="#">Blog</a>
                    <a className="hover:text-primary" href="#">Services</a>
                    <a className="hover:text-primary" href="#">Contact</a>
                </ul>
            </a>
          </div>
          <div>
            <a href="#" className="flex flex-col text-left py-4 px-2">
              <span className="font-semibold text-black text-2xl mt-3 mb-2">
                Services
              </span>
                <ul className="text-base text-gray-400 mt-2 flex flex-col gap-2 ml-1">
                    <a className="hover:text-primary" href="#">About us</a>
                    <a className="hover:text-primary" href="#">Blog &amp; Articles</a>
                    <a className="hover:text-primary" href="#">Terms and Conditions</a>
                    <a className="hover:text-primary" href="#">Privacy Policy</a>
                    <a className="hover:text-primary" href="#">Contact Us</a>
                </ul>
            </a>
          </div>
          <div>
            <a href="#" className="flex flex-col text-left py-4 px-2">
              <span className="font-semibold text-black text-2xl mt-3 mb-2">
                Contact
              </span>
                <ul className="text-base text-gray-400 flex mt-2 flex-col gap-2 ml-1">
                    <a className="hover:text-primary" href="#">Address : Jonggol Bogor 002</a>
                    <a className="hover:text-primary" href="#">Indonesia, 16830</a>
                    <a className="hover:text-primary" href="#">Phone : 081807591434</a>
                    <a className="hover:text-primary" href="#">Email : grandlesuscr@gmail.com</a>
                </ul>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
