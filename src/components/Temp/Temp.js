import React from "react";
import "../Temp/Temp.css";

export default function Temp({ temp }) {
  return <div className="temp">{Math.round(temp - 273.5)} °C</div>;
}
