import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "8435e7b391fb06102e2d62d080f58dfa"; // add your API key here
let city = "New York, USA"; // replace this with your city

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);

  return (
    <h2>It is currently {weather && weather.main.temp} F° in {city}.</h2>
  );
}

export default Weather;