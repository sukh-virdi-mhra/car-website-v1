import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CurrentCars() {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((response) => {
      setAllCars(response.data);
    });
  }, []);

  if (!allCars) return null;

  return (
    <div>
      {allCars.map((car) => {
        return (
          <ul>
            <h3>{car.name}</h3>
            <h4>{car.price}</h4>
          </ul>
        );
      })}
    </div>
  );
}
