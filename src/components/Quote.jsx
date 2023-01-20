import React from "react";
import { ReactComponent as Refresh } from "../assets/desktop/icon-refresh.svg";

export default function Quote(props) {
  const info = props.moreInfo ? "hidden" : "block";

  return (
    <div
      className={`${info} text-white my-8 mx-6 md:w-6/8 md:my-12 md:p-10 lg:w-1/2 lg:ml-28 2xl:ml-96`}
    >
      <div className="flex flex-col ">
        <div className="flex ">
          <p className="tracking-wider text-xl w-full">{props.quote.content}</p>
          <button
            onClick={props.refresh}
            className="self-start md:mt-1 xl:mr-8 xl:mt-1"
          >
            <Refresh />
          </button>
        </div>
        <h1 className="mt-2 text-2xl font-bold">{props.quote.author}</h1>
      </div>
    </div>
  );
}
