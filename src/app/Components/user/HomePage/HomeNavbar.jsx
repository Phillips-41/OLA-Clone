"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HomeNavbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container max-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg"
                alt="Logo"
              />
            </div>
            <div>
              <ul className="flex items-center ml-5">
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    ola S1
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    ola electric
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    ola futureFactory
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3">
              Book an Ola cab
            </button>
            <button className="bg-white text-gray hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5">
              Free S1 test ride
            </button>
            <MenuIcon className="ml-5 text-white text-3xl" fontS></MenuIcon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
