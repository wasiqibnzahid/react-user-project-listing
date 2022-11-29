import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="border px-3 border-b-3 border-r-0 border-l-0 border-t-0">
        <div className="flex justify-between  items-center  py-3 text-grey-darkest">
          <div className="text-sm flex">
            <span className="font-semibold text-sm tracking-tight">
              Luke Bennett
            </span>
          </div>
          <div className="flex mr-auto items-center">
            <Link to="/projects">
              <div className="cursor-pointer mx-2">Projects</div>
            </Link>
            <Link to="/">
              <div className="cursor-pointer mx-2">Profile</div>
            </Link>
          </div>
          <div className="w-[30%] min-w-[150px] max-w-[300px]">
            <input
              type="search"
              className="rounded-3xl w-full border-2 p-3 bg-gray-120 focus:bg-black"
              placeholder="Search 399+ projects here..."
            />
          </div>
     
        </div>
      </nav>
    </>
  );
};

export default Header;
