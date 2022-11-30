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
    navigate("/");
  }
  return (
    <div className="bg-black font-sans text-white">
      <nav className="flex justify-between items-center p-6">
        <button
          className="font-extrabold text-5xl"
          onClick={() => navigate("/")}
        >
          Filter.
        </button>
        <div className="flex justify-between items-center font-sans font-bold text-xl">
          {user ? (
            <NavLink to="/profile" className="m-6">
              Profile
            </NavLink>
          ) : null}
          <NavLink to="/login" className="m-6">
            Login
          </NavLink>
          <NavLink to="/register" className="m-6">
            Register
          </NavLink>
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:bg-white hover:text-black rounded-xl m-6"
            >
              Logout
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
