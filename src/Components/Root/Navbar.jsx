import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./active.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="shadow-md sticky top-0 z-20 bg-white">
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center py-3 relative">
        <h3 className="text-2xl md:text-3xl font-bold">Book Vibe</h3>
        <div
          className={`flex flex-col md:flex-row gap-3 md:items-center justify-between absolute right-0 md:bg-transparent bg-yellow-100 p-5 md:p-0  rounded-xl md:static  duration-300 ${
            open ? "top-14" : " -top-64"
          }`}
        >
          <nav className="flex gap-3 md:gap-5 flex-col md:flex-row ">
            <NavLink className={"hover:text-primary"} to="/">
              Home
            </NavLink>
            <NavLink className={"hover:text-primary"} to="/listed-books">
              Listed Books
            </NavLink>
            <NavLink className={"hover:text-primary"} to="/pages-to-read">
              Pages to Read
            </NavLink>
          </nav>
          <div className="space-x-3 text-white ">
            <button className="btn btn-sm md:btn-md bg-primary text-white border-none">
              Sign in
            </button>
            <button className="btn btn-sm md:btn-md bg-secondary text-white border-none">
              Sign Up
            </button>
          </div>
        </div>
        <div onClick={handleMenu} className="md:hidden">
          {open ? (
            <IoCloseSharp className="text-2xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </div>
      </div>
    </div>
  );
}
