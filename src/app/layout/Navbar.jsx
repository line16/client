"use client";
import React from "react";

const Navbar = () => {
  return (
      <nav className="border-gray-200 bg-green-800 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 m-auto">
          <div>
            <div>
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                     href="/viborghaveservice"
                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >Viborg haveservice
                    </a>
                  </li>
                  <li>
                    <a href="/Admin"   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Ret Viborg haveservice</a>
                  </li>
                  <li>
                    <a
                      href="/Review"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Viborg Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ReviewAdmin"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Review Admin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
  );
};

export default Navbar;
