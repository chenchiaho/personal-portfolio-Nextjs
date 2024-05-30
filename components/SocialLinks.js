import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

const SocialLinks = () => (
  <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400">
    <a
      href="https://github.com/chenchiaho"
      target='_blank'
      rel="noopener noreferrer"
    >
      <BsGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/chenchiaho"
      target='_blank'
      rel="noopener noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="mailto:chenchiaho@gmail.com">
      <TfiEmail />
    </a>
  </div>
)

export default SocialLinks