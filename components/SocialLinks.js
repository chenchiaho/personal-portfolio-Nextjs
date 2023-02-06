import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const SocialLinks = () => (
  <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
    <a href="https://github.com/chenchiaho">
      <BsGithub />
    </a>
    <a href="https://www.linkedin.com/in/chenchiaho">
      <BsLinkedin />
    </a>
    <a href="mailto:chenchiaho@gmail.com">
      <TfiEmail />
    </a>
  </div>
);

export default SocialLinks;