"use client";
import Hero from "@/components/sections/Hero";
import Weather from "@/components/sections/Weather";
import { useLocationContext } from "@/context/ContextProvider";
import {
  getWeatherByLocationService,
} from "@/services";
import { useEffect } from "react";

export default function Home() {
  const { weather, setWeather } = useLocationContext();

  useEffect(() => {
    const firstFunction = async () => {
      const weather = await getWeatherByLocationService("london");
      setWeather(weather);
    };
    firstFunction();
  }, []);

  return (
    <>
      <Hero data={weather} />
      <section className="flex flex-col justify-center mt-3 mb-5 padding-x">
        <Weather data={weather} />
      </section>
    </>
  );
}
