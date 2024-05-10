"use client";
import { useLocationContext } from "@/context/ContextProvider";
import {
  getWeatherByLocationService,
} from "@/services";
import Image from "next/image";
import Button from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const { search, setSearch, setWeather } = useLocationContext();

  const handleClick = async () => {
    const term = search.toLowerCase();
    const weather = await getWeatherByLocationService(term);
    setWeather(weather);
  };

  return (
    <header className="padding-x">
      <nav className="flex w-full justify-between py-3 px-8">
        <div className="items-center sm:gap-3 gap-1">
          <Image src="/logo/logo.png" width={50} height={50} alt="logo-icon" />
        </div>
        <div className="flex justify-end sm:gap-3 gap-2">
          <Input
            type="text"
            placeholder="Search Location..."
            className="sm:w-[100px] lg:w-[300px] w-[80px]"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={handleClick}>Search</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
