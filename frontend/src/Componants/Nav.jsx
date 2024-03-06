import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 ">
        <div>
          <Link to="/">
            <p className="ml-5 font-bold">Shiksha Sutra</p>
          </Link>
        </div>
        <div>
          <ul className="flex ">
            <Link to="/">
              {" "}
              <li className="mr-10  hover:border-b hover:border-black">
                Profile
              </li>
            </Link>
            <Link to="/about">
              {" "}
              <li className="mr-10  hover:border-b hover:border-black">
                My Learning
              </li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="mr-10  hover:border-b hover:border-black">
                Wishlist
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <input
            className="outline-none border-2 border-black p-2 w-[500px] rounded-md"
            type="search"
            placeholder="Search for anything"
          />
        </div>

        <div>
          <button className="border-2 p-1 border-black mr-5 rounded-md w-[100px]">
            <Link to="/">Log out</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
