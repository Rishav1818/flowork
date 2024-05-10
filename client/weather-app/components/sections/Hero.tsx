import { WeatherResponse } from "@/types";
import Image from "next/image";

const Hero = ({ data }: { data: WeatherResponse | null }) => {
  let img_desc = "imageNotFound";

  if (data) {
    img_desc = data.img_desc.toLowerCase();
  }

  return (
    data && (
      <section className="flex flex-col justify-center mt-3 mb-5 padding-x">
        <div className="relative">
          <Image
            src={`/hero/${img_desc}.webp`}
            width={1000}
            height={1000}
            alt="weather-img"
            priority={true}
            className="w-full h-[50vh] rounded-lg object-cover"
          />
          <div className="flex absolute bottom-0 p-3 justify-between w-full sm:gap-0 gap-2">
            <div className="flex flex-col gap-2 text-red-800 relative z-10">
              <h1 className=" sm:text-7xl text-3xl">{data?.temperature}°C</h1>
              <h2 className=" sm:text-3xl text-2xl">
                {data?.name}&nbsp;
                <span className="sm:inline-block hidden">
                  , {data.country}
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-red-800 relative z-10 my-auto">
              <h2 className=" sm:text-3xl text-2xl">{data?.weatherDescription.toUpperCase()}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Hero;
