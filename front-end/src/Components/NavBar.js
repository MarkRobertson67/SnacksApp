import { Link } from "react-router-dom";
import PigAlot from "./public/PigAlot.png"

export default function NavBar() {
  return (
    <nav>
      <h1>
      <Link to="/snacks">
          <img src={PigAlot} alt="Snacks" />
        </Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}