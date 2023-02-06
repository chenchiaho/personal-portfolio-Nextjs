import React from 'react';
import Image from "next/image";

const Project = ({ image, title, description, link }) => (
  <div className="text-left shadow-lg rounded-xl my-10; dark:bg-white flex-1 ">
    <a href={link} className="color">
      <Image src={image} width={250} height={250} className="m-auto pt-5" alt='Project' />
    </a>
    <h3 className="text-lg font-medium pt-8 pb-2 px-5">
      <a href={link} className="color">{title}</a>
    </h3>
    <p className="p-5">
      {description}
    </p>

  </div>
);

export default Project;