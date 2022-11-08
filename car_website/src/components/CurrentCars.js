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
      <ul>
        {allCars.map((car) => {
          return (
            <li>
              <ul>
                <h3>{car.name}</h3>
                <h4>{car.mileage}</h4>
                <h4>{car.year}</h4>
                <h4>{car.price}</h4>
                <h4>{car.summary}</h4>
                <h4>{car.description}</h4>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
