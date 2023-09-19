import React from "react";
import Input from "../Input/Input";
import "../Search/Search.css";

export default function Search({ query, setQuery, searchWeather }) {
  const api = {
    key: "f43f05098cb01a9dc33397ad45616540",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchCity = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          searchWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="search-box">
      <Input
        className={"search-bar"}
        placeholder={"Search..."}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={searchCity}
      />
    </div>
  );
}
