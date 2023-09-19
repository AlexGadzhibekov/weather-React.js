import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import LocationBox from "./components/LocationBox/LocationBox";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import InfoBox from "./components/InfoBox/InfoBox";

function App() {
  const [query, setQuery] = useState("");

  const [weather, setWeather] = useState({});

  const searchWeather = (result) => {
    setWeather(result);
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <Search
          query={query}
          setQuery={setQuery}
          searchWeather={searchWeather}
        />
        {typeof weather.main != "undefined" ? (
          <InfoBox weather={weather} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
