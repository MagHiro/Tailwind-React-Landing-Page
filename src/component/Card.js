import React, { useState, useEffect } from "react";
import LocLogo from "./../assets/geo-alt.svg";
import House from "./../assets/house-door.svg";
import PriceTag from "./../assets/tag.svg";

const locationDump = [
  {
    location: "Jakarta",
  },
  {
    location: "Bandung",
  },
  {
    location: "Bali",
  },
  {
    location: "Semarang",
  },
];

const propertyType = [
  {
    location: "House",
  },
  {
    location: "Condominium",
  },
  {
    location: "Apartement",
  },
  {
    location: "Rented House",
  },
];

const maxPrice = [
  {
    location: "800.000 - 1.200.000",
  },
  {
    location: "800.000 - 1.200.000",
  },
  {
    location: "800.000 - 1.200.000",
  },
  {
    location: "800.000 - 1.200.000",
  },
];

export default function Card() {
  return (
    <div className="bg-white relative px-5 w-[95%] lg:w-[740px] mx-auto lg:flex flex-column rounded-3xl shadow-lg border-y-2">
      <div className="py-5 lg:space-x-8 flex flex-col lg:flex-row lg:mx-auto">
        <div className="lg:mt-1 group inline-block relative lg:after:content-['|'] lg:after:ml-0.5 lg:after:text-gray-400 lg:after:text-2xl ">
          <button className=" text-gray-700 font-semibold mb-4 lg:mb-0 py-2 px-4 gap-4 rounded w-full justify-between flex items-center lg:inline-flex lg:w-fit">
            <img src={LocLogo} />
            <span className="mr-1 ">Location</span>
            <svg
              className="fill-primary h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="absolute hidden max-w-[300px] lg:max-w-[130px] w-full text-gray-700 right-8 pt-1 z-50 group-hover:block">
            {locationDump.map((location) => (
                <a
                  className=" bg-white shadow-lg drop-shadow-lg hover:bg-secondary py-2 px-4 block whitespace-no-wrap last:rounded-b-xl transition duration-300 "
                  href="#"
                >
                  {location.location}
                </a>
            ))}
          </ul>
        </div>
        <div className="lg:mt-1 group inline-block relative lg:after:content-['|'] lg:after:ml-0.5 lg:after:text-gray-400 lg:after:text-2xl">
          <button className=" text-gray-700 font-semibold mb-4 lg:mb-0 gap-2 py-2 px-4 rounded w-full justify-between flex items-center lg:inline-flex lg:w-fit">
            <img src={House} />
            <span className="mr-1">Property</span>
            <svg
              className="fill-primary h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <div className="absolute hidden max-w-[300px] lg:max-w-[130px] w-full text-gray-700 right-8 z-50 pt-1  group-hover:block">
            {propertyType.map((location) => (
                <a
                  className=" bg-white shadow-lg drop-shadow-lg hover:bg-secondary py-2 px-4 block whitespace-no-wrap last:rounded-b-xl transition duration-300"
                  href="#"
                >
                  {location.location}
                </a>
            ))}
          </div>
        </div>
        <div className="lg:mt-1 group inline-block relative">
          <button className=" text-gray-700 font-semibold mb-4 lg:mb-0 gap-2 py-2 px-4 rounded w-full justify-between flex items-center lg:inline-flex lg:w-fit">
            <img src={PriceTag} />
            <span className="mr-1">Max Price</span>
            <svg
              className="fill-primary h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="absolute hidden max-w-[300px] lg:max-w-[130px] w-full text-gray-700 right-8 z-50 lg:pt-1 group-hover:block">
            {maxPrice.map((location) => (
                <a
                  className=" bg-white shadow-lg drop-shadow-lg hover:bg-secondary py-2 px-4 block whitespace-no-wrap last:rounded-b-xl transition duration-300"
                  href="#"
                >
                  {location.location}
                </a>
            ))}
          </ul>
        </div>
        <button className="py-3 items-center px-9 text-white bg-primary rounded-full hover:opacity-80">
          Search
        </button>
      </div>
    </div>
  );
}
