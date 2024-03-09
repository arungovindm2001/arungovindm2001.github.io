import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../assets/resume/resume.pdf';

export default function Navbar() {
  return (
    <nav>
      <div class="max-w-screen-xl flex justify-end mx-auto p-4">
        <div class="block w-auto" id="navbar-default">
          <ul class="font-medium flex p-0 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-transform transform md:hover:scale-110 md:p-0 dark:text-white md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-transform transform md:hover:scale-110 md:p-0 dark:text-white md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-transform transform md:hover:scale-110 md:p-0 dark:text-white md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to={Resume}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-transform transform md:hover:scale-110 md:p-0 dark:text-white md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                target="_blank"
                download
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
