import React from 'react'
import Image from "next/image"

const Project = ({ image, title, description, link }) => (
  <div className="flex-1 my-10 text-left shadow-lg rounded-xl dark:bg-white ">
    <a
      href={link}
      target='_blank'
    >
      <Image
        className="object-contain h-48 pt-5 m-auto"
        src={image}
        width={250}
        height={180}
        alt='Project' />
    </a>
    <h3 className="px-5 pt-8 pb-2 text-lg font-medium">
      <a
        href={link}
        target='_blank'
      >{title}</a>
    </h3>
    <p className="p-5">
      {description}
    </p>

  </div>
)

export default Project