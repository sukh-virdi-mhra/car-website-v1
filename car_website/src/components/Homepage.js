import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Link to="/cars">
        <button>VIEW CARS FOR SALE</button>
      </Link>
    </div>
  );
}
