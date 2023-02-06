import React from 'react';
import SocialLinks from './SocialLinks';

const Bio = () => (
  <div className="text-center p-10 py-10">
    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
      Kevin La
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
      Frontend Developer.
    </h3>
    <SocialLinks />
    <p className="text-left text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      I am a frontend developer with proficiency in HTML, CSS, and JavaScript. I have hands-on experience using the React framework and have a solid understanding of Node.js for back-end development. <br /><br />Driven by my expertise in web development and my passion for creating intuitive and engaging applications, I bring a unique perspective to every project I undertake.
    </p>

  </div>
);

export default Bio;