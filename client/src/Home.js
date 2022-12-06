import { useNavigate, NavLink } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <video autoPlay loop muted id="background-video">
        <source src={require("./video.mp4")} type="video/mp4" />
      </video>
      <div className="flex flex-col justify-center items-center mt-72">
        <NavLink to="/login">
          <button className="font-sans font-black bg-black text-white text-6xl mb-10 p-8 rounded-xl min-w-max hover:bg-white hover:text-black hover:-translate-y-3 transition ease-in-out">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="font-sans font-black bg-black text-white text-6xl mb-10 p-8 rounded-xl min-w-max hover:bg-white hover:text-black hover:-translate-y-3 transition ease-in-out">
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
