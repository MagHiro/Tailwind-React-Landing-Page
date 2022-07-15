import React from "react";

export default function Feature() {
  return (
    <div className="Container py-20 flex flex-col max-w-8xl mx-auto">
      <div className="text-center py-4">
        <span className="text-lg font-semibold text-primary">WHAT WE DO</span>
        <h1 className="text-4xl font-bold mt-2">OUR MAIN FOCUS</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 ">
        <div className="bg-white relative px-5 w-[95%] lg:w-full mx-auto text-center rounded-3xl shadow-lg border-y-2 content">
          <div className="items-center flex flex-col py-8 px-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 rounded-md border-2 border-primary box-border p-2 hover:bg-primary hover:text-white hover:stroke-white transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4373af"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h2 className="font-bold mt-6 text-xl">Buy a Home</h2>
            <p className="mt-4 text-lg text-gray-500">
              it is a long established fact that a reader will be distractedable
              content of a page
            </p>
            <button className="mt-4 py-3 px-7 rounded-3xl border border-primary text-primary hover:bg-primary hover:text-white transition duration-300">
              More
            </button>
          </div>
        </div>
        <div className=" bg-white relative px-5 w-[95%] lg:w-full mx-auto text-center rounded-3xl shadow-lg border-y-2 content">
          <div className="items-center flex flex-col py-8  px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 rounded-md border-2 border-primary box-border p-2 hover:bg-primary hover:text-white hover:stroke-white transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4373af"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="font-bold mt-6 text-xl">Rent a Home</h2>
            <p className="mt-4 text-lg text-gray-500">
              it is a long established fact that a reader will be distractedable
              content of a page
            </p>
            <button className="mt-4 py-3 px-7 rounded-3xl border border-primary text-primary hover:bg-primary hover:text-white transition duration-300">
              More
            </button>
          </div>
        </div>
        <div className=" bg-white relative px-5 w-[95%] lg:w-full mx-auto text-center rounded-3xl shadow-lg border-y-2 content">
          <div className="items-center flex flex-col py-8  px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 rounded-md border-2 border-primary box-border p-2 hover:bg-primary hover:text-white hover:stroke-white transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4373af"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h2 className="font-bold mt-6 text-xl">Sell a Home</h2>
            <p className="mt-4 text-lg text-gray-500">
              it is a long established fact that a reader will be distractedable
              content of a page
            </p>
            <button className="mt-4 py-3 px-7 rounded-3xl border border-primary text-primary hover:bg-primary hover:text-white transition duration-300">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
