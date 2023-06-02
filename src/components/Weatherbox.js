import React, { useState, useEffect } from 'react';

const WeatherBox = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = '1545a035347df6825fab878622116f75';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const { weather, main, sys, wind } = data;
        const temperature = `${Math.round(main.temp)}°C`;
        const currentDate = new Date().toLocaleDateString();
        const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const humidity = `${main.humidity}%`;
        const pressure = `${main.pressure} hPa`;
        const windSpeed = `${wind.speed} km/h`;

        const weatherData = {
          weatherImage: `https://openweathermap.org/img/w/${weather[0].icon}.png`,
          temperature,
          currentDate,
          sunsetTime,
          humidity,
          pressure,
          wind: windSpeed,
        };

        setWeatherData(weatherData);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const {
    weatherImage,
    temperature,
    currentDate,
    sunsetTime,
    humidity,
    pressure,
    wind,
  } = weatherData;

  return (
    <div className="container">
      <div className="weather-card">
        <img src={weatherImage} className="weather-image" alt="Weather" style={{ width: "15vw" }} />
        <div className="temperature text-light">
          <h1>{temperature}</h1>
        </div>
        <div className="date-time text-light">
          <h1>{currentDate}</h1>
        </div>
        <div className="info-row">
          <div className="info-item">
            <h3 className="text-light">
              <span className="info-label">Sunset Time :</span> {sunsetTime}
            </h3>
          </div>
          <div className="info-item">
            <h3 className="text-light">
              <span className="info-label">Humidity:</span> {humidity}
            </h3>
          </div>
          <div className="info-item">
            <h3 className="text-light">
              <span className="info-label">Pressure:</span> {pressure}
            </h3>
          </div>
          <div className="info-item">
            <h3 className="text-light">
              <span className="info-label">Wind:</span> {wind}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
