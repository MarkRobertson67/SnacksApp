import { Link } from "react-router-dom";
import PigAlot from "../assets/PigAlot.png";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/snacks">
          <img src={PigAlot} alt="Snacks" className="rounded-circle" width="125" height="125" />
        </Link>
        <div className="navbar-text">
          <h2 className="navbar-title">
            The <span className="fw-bold">Best Ever Tasting</span> Snacks
          </h2>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-danger me-2" to="/snacks/new">
                New Snack
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}