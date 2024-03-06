import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-blue-500 to-fuchsia-500 ">
      <nav className="flex items-center justify-between p-4  ">
        <div>
          <Link to="/">
            <p className="ml-5 text-white text-xl font-myFont">Shiksha Sutra</p>
          </Link>
        </div>
        <input
          className="outline-none border-2 px-2 py-1 w-[400px] rounded-2xl"
          type="search"
          placeholder="Search for anything"
        />
        <div>
          <ul className="flex ">
            <Link to="/categories">
              <li className="mr-10  transition-all duration-100 ease-in-out  hover:border-b-4  text-white hover:border-white">
                Categories
              </li>
            </Link>
            <Link to="/about">
              <li className="mr-10   duration-100 transition-all ease-in-out   hover:border-b-4  text-white hover:border-white">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="mr-10 duration-100 transition-all ease-in-out    hover:border-b-4  text-white hover:border-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <button className=" p-1 bg-blue-600 font-bold text-white mr-5 rounded-md w-[100px]">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
