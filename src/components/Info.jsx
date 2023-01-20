import React from "react";

export default function Info(props) {
  const info = !props.moreInfo ? "hidden" : "block";
  const darkMode = !props.dark ? "bg-blur" : "bg-blur-dark text-white";

  return (
    <div className={`${darkMode} flex flex-col justify-center ${info}`}>
      <div className="md:flex md:justify-evenly md:mb-12 ">
        <div className="flex justify-evenly text-xs mb-4 md:flex-col 2xl:w-128 lg:w-128">
          <p className="w-44 tracking-wider md:text-base md:mb-2">
            CURRENT TIMEZONE
          </p>
          <p className="font-bold text-xm md:text-4xl">
            {props.worldTime.timezone}
          </p>
        </div>
        <div className="flex justify-evenly text-xs mb-4 md:flex-col">
          <p className="tracking-wider w-44 md:text-base md:mb-2">
            DAY OF THE YEAR
          </p>
          <p className="font-bold text-xl md:text-5xl">
            {props.worldTime.day_of_year}
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-evenly">
        <div className="flex justify-evenly text-xs mb-4 md:flex-col 2xl:w-128 lg:w-128">
          <p className="tracking-wider w-44 md:text-base md:mb-2">
            DAY OF THE WEEK
          </p>
          <p className="font-bold text-xl md:text-5xl">
            {props.worldTime.day_of_week}
          </p>
        </div>
        <div className="flex justify-evenly text-xs mb-4 md:flex-col">
          <p className="tracking-wider w-44 md:text-base md:mb-2">
            WEEK NUMBER
          </p>
          <p className="font-bold text-xl md:text-5xl">
            {props.worldTime.week_number}
          </p>
        </div>
      </div>
    </div>
  );
}
