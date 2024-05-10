import { Request, Response } from 'express';
import axios, { AxiosError } from 'axios';
require('dotenv').config();

interface WeatherResponseData {
  cod: string;
  message: string;
  // Define other properties if needed
}

export const getWeatherData = async (req: Request, res: Response) => {
  const city = req.query.city as string;
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
    }

    const weatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      weatherDescription: response.data.weather[0].description,
      name: response.data.name,
      country: response.data.sys.country,
      feelsLike: response.data.main.feels_like,
      visibility: response.data.visibility,
      img_desc: response.data.weather[0].main
    };

    res.json(weatherData);
    return weatherData;
  } catch (error: unknown) {
    console.error('Error fetching weather data:', error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<WeatherResponseData>; // Type assertion
      if (axiosError.response && axiosError.response.status === 404 && axiosError.response.data.cod === '404') {
        res.status(404).json({ message: axiosError.response.data.message }); // Using the message from the response
      } else {
        res.status(500).json({ message: 'Failed to fetch weather data' });
      }
    } else {
      res.status(500).json({ message: 'Failed to fetch weather data' });
    }
  }
};
