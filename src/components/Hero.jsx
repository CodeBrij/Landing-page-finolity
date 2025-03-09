import React from "react";
import group from "/group1.jpg";
import logo from "/logo.png";
import { FaStar } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          className="w-screen h-screen object-cover"
          src={group}
          alt="Our Team"
        />
        <div className="absolute inset-0 bg-indigo-900/60"></div>{" "}
        {/* Dark Overlay */}
      </div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {[
                "Home",
                "Services",
                "Industries",
                "Market Research",
                "Company",
                "Brands",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-[#d40000] hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-[#d40000] md:p-0 dark:text-white md:dark:hover:text-[#d40000] dark:hover:bg-[#d40000] dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center px-4">
            <button className="w-full bg-[#d40000] px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-[#b00000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d40000]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 w-[90%] m-auto"></div>
      </nav>

      <div className="pt-60 lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center text-white">
        <div class="w-full flex flex-col z-10">
          <h4 class="text-sm font-semibold text-white xl:text-xl">
            We manage your IT,
          </h4>
          <h4 class="text-sm font-semibold text-white xl:text-xl">
            so you can manage your business.
          </h4>
          <h1 class="2xl:text-5xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-6">
            We are
          </h1>
          <h1 class="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif">
            Intellion
          </h1>

          <p class="lg:w-[70%] w-full text-white text-md mt-4 md:text-lg 2xl:text-2xl">
            Take charge of your business continuity with innovative IT solutions
          </p>

          <div>
            <button class="bg-[#d40000] mt-5 px-4 py-2 rounded-md text-white text-sm font-medium hover:bg-[#b00000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d40000]">
              Schedule a Free Consultation
            </button>
          </div>
          <div className="flex items-center space-x-3 xl:mt-5 sm:mt-10">
            {/* Text & Stars Section */}
            <div className="flex flex-col">
              <span className="text-white text-xs font-semibold uppercase">
                Reviewed on
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-[#d40000] text-sm" />
                ))}
              </div>
            </div>

            {/* Clutch & Review Count Section */}
            <div>
              <span className="text-3xl font-bold text-black">Clutch</span>
              <p className="text-white text-sm font-medium">2K+ REVIEWS</p>
            </div>
          </div>
        </div>

        <div class="w-full flex sm:flex-col justify-center mt-10 sm:mt-0 sm:gap-8 gap-2 bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10 ">
          <div class="flex flex-col sm:items-end items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold">
                08{" "}
              </h2>
              <h2 class=" text-rose-500 xl:mt-3 xl:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold">
                Years
              </h2>
            </div>
            <h4 class="text-sm sm:text-md xl:text-2xl text-center">
              Proven Track Record
            </h4>
          </div>
          <div class="flex flex-col sm:items-end items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold">
                98
              </h2>
              <h2 class="text-rose-500 mt-3 xl:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold">
                %
              </h2>
            </div>
            <h4 class="text-sm sm:text-md xl:text-2xl text-center">
              Customer Satisfaction
            </h4>
          </div>
          <div class="flex flex-col sm:items-end items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold">
                470
              </h2>
              <h2 class="text-rose-500 mt-3 xl:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold">
                +Projects
              </h2>
            </div>
            <h4 class="text-sm sm:text-md xl:text-2xl text-center">
              We Have Completed
            </h4>
          </div>
          <div class="flex flex-col sm:items-end items-center">
            <div class="inline-flex gap-1 items-center">
              <h2 class="xl:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold">
                3
              </h2>
              <h2 class="text-rose-500 mt-3 xl:text-4xl md:text-3xl sm:text-2xl text-xl font-extrabold">
                Mins
              </h2>
            </div>
            <h4 class="text-sm sm:text-md xl:text-2xl text-center">
              Average Answer Time
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
