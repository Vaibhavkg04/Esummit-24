import React, { useState } from "react";
import NavElem from "./navElement";
import logo from "../assets/esummit2.png";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav class="   opacity-800  min-[768px]:bg-black min-[768px]:bg-opacity-40 min-[768px]:backdrop-blur-lg min-[768px]:rounded min-[768px]:drop-shadow-lg px-2 sm:px-4 py-2  fixed w-full z-20 top-0 left-0 ">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://edcbitmesra.in/" class="flex items-center">
            <img
              src="https://raw.githubusercontent.com/EDC-BITM/EDC-BITM/master/image/favicon/android-chrome-192x192.png"
              class="mr-11 ml-5 h-6 sm:h-9"
              alt=""
            ></img>
            <span class="self-center text-sm font-bold whitespace-nowrap text-white"></span>
          </a>
          <div class="flex md:order-2">
            <img
              src={logo}
              className=" h-16 mt-2 ml-10 mr-[-2] flex	items-center  bg-none text-black  justify-right"
              alt=""
            ></img>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-black dark:text-gray-400 dark:hover:bg-black dark:focus:ring-black"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span class="sr-only">Open main menu</span>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-sky-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`justify-between md:shadow-transparent opacity-800 items-center w-full md:flex md:w-auto md:h-full md:order-1 ${
              navbar ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 ml-5 mt-4 font-bold max-[767px]:bg-black max-[767px]:bg-opacity-40 max-[767px]:backdrop-blur-lg max-[767px]:rounded max-[767px]:drop-shadow-lg items-center border border-sky-400 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 dark:border-white sm:font-bold shadow-transparent max-[767px]:text-2xl max-[767px]:gap-4  ">
              <NavElem title="Home" href="/" />
              <NavElem title="About" href="/#abouts" />
              <NavElem title="Events" href="Events" />
              <NavElem title="Speakers" href="Speakers" />
              <NavElem title="Sponsors" href="Sponsors" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
