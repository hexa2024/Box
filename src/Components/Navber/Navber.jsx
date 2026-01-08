import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const menuItems = (
    <>
      {/* Home Link */}
      <li>
        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
      </li>
      
      {/* Original Box Link */}
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Box
        </NavLink>
      </li>

      <li>
        <NavLink to="/complaints">Add Complaints</NavLink>
      </li>
      <li>
        <NavLink to="/notice">Notice</NavLink>
      </li>
      <li>
        <NavLink to="/profile">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      
      {/* LEFT SECTION: Logo and Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Mobile dropdown content */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl">
          UniBox
        </NavLink>
      </div>

      {/* CENTER SECTION: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

      {/* RIGHT SECTION: Action Buttons */}
      <div className="navbar-end gap-2">
        <NavLink to="/login" className="btn btn-primary">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;