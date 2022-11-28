import React from "react";

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

          <div className="flex items-center">
            <input
              type="search"
              className="rounded-3xl border-2 p-3 bg-gray-120 focus:bg-black"
              placeholder="Search 399+ projects here..."
            />
            <div className="cursor-pointer mx-2">Projects</div>
            <div className="cursor-pointer mx-2">Profile</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
