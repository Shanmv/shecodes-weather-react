import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Elements from "./Elements";
import Forecast from "./Forecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  let [city, setCity] = useState("");
  let [header, setHeader] = useState("");
  let [weather, setWeather] = useState({});
  let [onload, setOnload] = useState("");
  let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eab52e4b15607908ae3212e851e07600&units=metric`;

  function displayWeather(response) {
    setOnload(true);
    setWeather({
      description: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity + "%",
      wind: Math.round(response.data.wind.speed) + "m/s",
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setHeader(city);
      axios.get(API).then(displayWeather);
    }
  }

  function updateHeader(event) {
    setCity(event.target.value);
  }
  let searchBar = (
    <>
      <header className="city-date">
        <form className="clearfix search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search for city..."
            className="bar"
            autocomplete="off"
            autofocus
            onChange={updateHeader}
          />
          <button className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <button
          
          className="locationButton"
          id="locationButton"
          title="Use Current Location"
        >
          <FontAwesomeIcon icon={faLocationDot} />
        </button>
      </header>
    </>
  );

  if (onload) {
    return (
      <>
        {searchBar}
        <h1 className="city-name">{header}</h1>
        <h2>Sunday, Feb 2 2023 </h2>
        <span>
          <small>Last update at 10:32pm</small>
        </span>
        <div className="current-wx">
          <h4>{weather.description}</h4>
          <p>
            <img
              src={weather.icon}
              className="weather-icon"
              alt="weather icon"
            />
            <span className="wx-degree temperature" id="today-wx">
              {weather.temperature}
            </span>
            <span className="degrees">
              <span className="celsius" id="celsius">
                ℃
              </span>
            </span>
          </p>
        </div>
        <Elements wind={weather.wind} humidity={weather.humidity} />
        <Forecast />
      </>
    );
  } else {
    return searchBar;
  }
}
