import React from 'react'
import SocialLinks from './SocialLinks'

const Bio = () => (
  <div className="p-10 py-10 text-center">
    <h2 className="py-2 text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
      Kevin La
    </h2>
    <h3 className="py-2 text-2xl dark:text-white md:text-3xl">
      Frontend Developer.
    </h3>
    <SocialLinks />
    <p className="max-w-xl py-5 mx-auto leading-8 text-left text-gray-800 text-md dark:text-gray-200 md:text-xl">
      I am a frontend developer with proficiency in React and Next.js frameworks, as well as React Native for cross platform app development. I have hands-on experience with JavaScript, TypeScript and have a solid understanding of Node.js for back-end development. <br /><br />Driven by my expertise in web development and my passion for creating intuitive and engaging applications, I bring a unique perspective to every project I undertake.
    </p>

  </div>
)

export default Bio