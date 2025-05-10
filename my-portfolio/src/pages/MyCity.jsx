import React, { useState, useEffect } from 'react';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const latitude = 47.9133;
  const longitude = 30.6528;
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,precipitation,showers,snow_depth,snowfall,dew_point_2m,visibility&timezone=Europe%2FMoscow`;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setWeather(data);
      } catch (err) {
        console.error('Помилка завантаження погоди:', err);
        setError('Помилка завантаження погоди');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  // Отримання даних для відображення
  const currentWeather = weather?.hourly;
  
  return (
    <div>
      <h1>Моє місто: Київ</h1>
      
      {/* Виведення основних погодних параметрів */}
      <p>Температура: {currentWeather?.temperature_2m[0]}°C</p>
      <p>Відчувається як: {currentWeather?.apparent_temperature[0]}°C</p>
      <p>Вологість: {currentWeather?.relative_humidity_2m[0]}%</p>
      <p>Ймовірність опадів: {currentWeather?.precipitation_probability[0]}%</p>
      <p>Дощ: {currentWeather?.rain[0]} мм</p>
      <p>Сніг: {currentWeather?.snowfall[0]} см</p>
      <p>Сніговий покрив: {currentWeather?.snow_depth[0]} см</p>
      <p>Точка роси: {currentWeather?.dew_point_2m[0]}°C</p>
      <p>Видимість: {currentWeather?.visibility[0]} км</p>
    </div>
  );
};

export default MyCity;
