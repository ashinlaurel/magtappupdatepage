import React from "react";
import NavLogo from "../assets/Logo_Rect.png";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-xl border  bg-white mb-3">
        <div className="container  mx-auto sm:mx-0 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              className=" inline-block pt-3 w-20 sm:w-40 sm:ml-5 whitespace-no-wrap "
              href="#pablo"
              src={NavLogo}
            />
            <div className="sm:hidden pt-1">
              <button className="text-xs py-1 px-2 sm:hidden ml-40  rounded-full bg-blue-500">
                Whats's New
              </button>
            </div>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center ml-10 " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl  navbuttoncolor leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl  navbuttoncolor leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Why Magtapp?</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl  navbuttoncolor leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Our Team</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl  navbuttoncolor leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
