import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch(`/logout`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setUser(null);
  }
  return (
    <div className="bg-black font-sans text-white">
      <nav className="flex justify-between items-center p-6">
        <button
          className="font-extrabold text-3xl"
          onClick={() => navigate("/")}
        >
          Filter.
        </button>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="hover:bg-white hover:text-black p-2 rounded-xl"
          >
            Logout
          </button>
        ) : null}
      </nav>
    </div>
  );
}

export default NavBar;
