import { NavLink } from "react-router-dom";
import PigAlot from "../assets /PigAlot.png";
export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-links">

      <h1>
        <NavLink to="/snacks">
          <img src={PigAlot} className="logo" alt="Snacks" />
        </NavLink>
      </h1>
       
          <button>
            <NavLink to="/about">About</NavLink>
          </button>
          <br></br>
          <button>
            <NavLink to="/snacks/new">New Snack</NavLink>
          </button>
      </div>
    </nav>
  );
}
