import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black font-sans text-white">
      <nav className="flex justify-between items-center p-6">
        <h1 className="font-extrabold text-3xl">Filter.</h1>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
