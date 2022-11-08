import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        VELOCE VIRDI
      </Link>
      <ul>
        <Link to="/">HOME</Link>
      </ul>
      <ul>
        <Link to="/cars">SALES</Link>
      </ul>
    </nav>
  );
}
