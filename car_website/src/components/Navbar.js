import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CAR WEBSITE
      </Link>
      <ul>
        <Link to="/">HOME</Link>
      </ul>
      <ul>
        <Link to="/cars">CARS FOR SALE</Link>
      </ul>
    </nav>
  );
}
