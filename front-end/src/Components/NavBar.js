import { Link } from "react-router-dom";
import PigAlot from "../assets/PigAlot.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>
          <Link to="/snacks">
            <img src={PigAlot} alt="Snacks" />
          </Link>
        </h1>
      </div>
      <div className="navbar-text">
        <h2 className="navbar-title">
          The <span className="bold">Best Ever Tasting</span> Snacks
        </h2>
      </div>
      <div className="navbar-right">
        <button className="nav-button">
          <Link to="/snacks/new">New Snack</Link>
        </button>
        <button className="nav-button">
          <Link to="/about">About</Link>
        </button>
      </div>
    </nav>
  );
}

