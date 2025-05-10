import React, { useState, useEffect } from 'react';

const MyCity = () => {
  const [city, setCity] = useState('Kyiv');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError('Помилка завантаження погоди');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Моє місто: {city}</h1>

      {loading && <p>Завантаження...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <>
          <p>🌡 Температура: {weather.current_condition[0].temp_C}°C</p>
          <p>🌥 Опис: {weather.current_condition[0].weatherDesc[0].value}</p>
          <p>🌬 Вітер: {weather.current_condition[0].windspeedKmph} км/год</p>
          <p>💧 Вологість: {weather.current_condition[0].humidity}%</p>
        </>
      )}
    </div>
  );
};

export default MyCity;
