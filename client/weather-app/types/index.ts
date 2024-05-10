import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  weather: WeatherResponse | null;
  setWeather: Dispatch<SetStateAction<WeatherResponse | null>>;
};

export type WeatherCardProps = {
  imgSrc: string;
  title: string;
  value: string;
};

export type WeatherResponse = {
    temperature: string,
    humidity: string,
    windSpeed: string,
    weatherDescription: string,
    name: string,
    country: string,
    feelsLike: string,
    visibility: string,
    img_desc: string
};