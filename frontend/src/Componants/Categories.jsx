import React from "react";

const Categories = () => {
  return (
    <div id="categories">
      <h1 className="text-4xl ml-5 font-medium mt-4 p-5">
        A broad selection of courses
      </h1>
      <nav className="p-5 ml-5">
        <ul className="flex ">
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Web Development
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            IT Certification
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Leadership
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Data Science
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Excel
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Amazon Ews
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Drawing
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Communication
          </li>
          <li className="mr-10 hover:border-b hover:border-black cursor-pointer">
            Communication
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
