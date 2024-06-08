import React, { useState } from "react";
import { Link } from "react-router-dom";
import bookshelf from "../assets/bookshelf.png";
import { TiArrowLeft } from "react-icons/ti";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="flex flex-row  items-center w-[100%] mr-auto ml-auto md:mt-8 mt-4 f">
      <Link to="/">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wider">
          Books<span className="text-red-600">.</span>
        </h1>
      </Link>
      <div className="text-2xl md:text-4xl ml-auto hover:cursor-pointer">
        {toggle ? (
          <Link to="/bookshelf">
            {" "}
            <img
              src={bookshelf}
              className="w-[50px] md:w-[100px]"
              onClick={() => setToggle((prev) => !prev)}
            />
          </Link>
        ) : (
          <Link to="/">
            <div className="" onClick={() => setToggle((prev) => !prev)}>
              <TiArrowLeft size={38} />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
