import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div class="nav">
      <Link to="/">Veloce Virdi</Link>
      <ul>
        <li>
          <Link to="/cars">SALES</Link>
        </li>
        <li>
          <Link to="/parts">PARTS</Link>
        </li>
        <li>
          <Link to="/servicing">SERVICING</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}
