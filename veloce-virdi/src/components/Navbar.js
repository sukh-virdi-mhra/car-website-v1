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
          <Link to="/">PARTS</Link>
        </li>
        <li>
          <Link to="/">SERVICING</Link>
        </li>
        <li>
          <Link to="/">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}
