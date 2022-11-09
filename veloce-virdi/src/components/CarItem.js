import React, { useEffect, useState } from "react";
import axios from "axios";
import { decode as atob, encode as btoa } from "base-64";

export default function CarItem(props) {
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(props.obj);
    setImage(
      btoa(
        new Uint8Array(props.obj.img.data.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      )
    );
  }, []);
  return (
    <div>
      <h1>CURRENT CARS FOR SALE</h1>
      <img src={`data:image/png;base64,${image}`} alt="" width="300" />
      <p>{props.obj.name}</p>
      <p>{props.obj.price}</p>
    </div>
  );
}
