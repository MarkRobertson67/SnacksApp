import { Link } from "react-router-dom";
import PigAlot from "../assets/PigAlot.png";
// import "@fontsource/lobster";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(to right, #e6e6e6, #333333)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/snacks">
          <img src={PigAlot} alt="Snacks" className="rounded-circle" width="125" height="125" />
        </Link>
        <div className="navbar-text" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
          <h2 className="navbar-title text-center" style={{ textAlign: "center", fontFamily: "Comic Sans MS, cursive", background: 'linear-gradient(to right, blue, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The <span className="fw-bold">Best Ever, Tasting</span> Snacks
          </h2>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-danger me-2 shadow-sm" to="/snacks/new">
                New Snack
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger shadow-sm" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

