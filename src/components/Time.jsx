import { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../assets/desktop/icon-arrow-down.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";

export default function Time(props) {
  const [date, setDate] = useState();

  useEffect(() => {
    setInterval(() => {
      const clock = new Date();
      setDate(clock.toLocaleTimeString());
    }, 50);
  }, []);

  // - "Good morning" between 5am and 12pm
  // - "Good afternoon" between 12pm and 6pm
  // - "Good evening" between 6pm and 5am

  const greeting = () => {
    let time = parseInt(date);
    if (time > 5) {
      return "Good Morning";
    } else if (time > 12) {
      return "Good morning";
    } else {
      return "Good evening";
    }
  };

  const toggleIcon = !props.dark ? (
    <Sun className="mr-4" />
  ) : (
    <Moon className="mr-4" />
  );

  return (
    <div className="text-white mx-6 my-12 md:mr-16 2xl:mt-96 ">
      <div className="my-12 lg:flex lg:justify-around ">
        <div>
          <p className="flex text-lg mb-4 tracking-wide font-thin">
            <button onClick={props.theme}>{toggleIcon}</button>
            {greeting()}
          </p>
          <h1 className="text-3xl flex font-bold mb-4 md:text-xxl">
            {date}
            <span className="text-lg self-end font-thin md:text-4xl">
              {props.worldTime.abbreviation}
            </span>
          </h1>
          <p className="tracking-wide md:m-4 md:text-xl">
            {props.worldTime.timezone}

            {/* In {props.geo.location.city.name}
            {props.geo.location.continent.code} */}
          </p>
        </div>
        <div className="self-end">
          <button
            onClick={props.showInfo}
            className=" my-10 bg-white tracking-wide items-center flex h-10 justify-center  text-midnight rounded-2xl w-28"
          >
            {!props.moreInfo && <p>MORE</p>}
            {props.moreInfo && <p>LESS</p>}
            <span className=" bg-midnight ml-3 w-8 h-8 rounded-2xl p-2.5">
              <ArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
