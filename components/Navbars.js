import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = ({ setDarkMode, darkMode }) => (
  <nav className="pt-10 pb-5 flex justify-between dark:text-white">
    <h1 className="font-burtons text-xl whitespace-nowrap">Personal Portfolio</h1>
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-2xl"
        />
      </li>
      <li >
        <a
          className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 whitespace-nowrap"
          href="https://www.cakeresume.com/kevinla"
        >
          中文履歷
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;