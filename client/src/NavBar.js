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
            <NavLink
              to="/profile"
              className="m-6 hover:font-extrabold hover:-translate-y-1 transition ease-in-out"
            >
              Profile
            </NavLink>
          ) : null}
          {user ? null : (
            <NavLink
              to="/login"
              className="m-6 hover:font-extrabold hover:-translate-y-1 transition ease-in-out"
            >
              Login
            </NavLink>
          )}
          {user ? null : (
            <NavLink
              to="/register"
              className="m-6 hover:font-extrabold hover:-translate-y-1 transition ease-in-out"
            >
              Register
            </NavLink>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="m-6 hover:font-extrabold hover:-translate-y-1 transition ease-in-out"
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
