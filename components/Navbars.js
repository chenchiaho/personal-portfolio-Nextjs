import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Navbar = ({ setDarkMode, darkMode }) => (
  <nav className="flex justify-between pt-10 pb-5 dark:text-white">
    <h1 className="text-xl font-burtons whitespace-nowrap">Personal Portfolio</h1>
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl cursor-pointer "
        />
      </li>
      <li >
        <a
          className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 whitespace-nowrap"
          href="https://www.cakeresume.com/kevinla"
          target='_blank'
          rel="noopener noreferrer"
        >
          中文履歷
        </a>
      </li>
    </ul>
  </nav>
)

export default Navbar