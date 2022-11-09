import React, { useEffect, useState } from "react";
import axios from "axios";
import CarItem from "./CarItem";

export default function CurrentCars() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });

  return (
    <div>
      {data?.map((obj) => {
        return <CarItem obj={obj} />;
      })}
    </div>
  );
}
