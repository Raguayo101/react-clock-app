import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Info from "./components/Info";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modeInfo, setModeInfo] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [geo, setGeo] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [city, setCity] = useState(null);
  const [worldTime, setWorldTime] = useState([]);

  let quoteApi = `https://api.quotable.io/random`;
  let timeZoneApi = `https://worldtimeapi.org/api/ip`;

  const getQuoteApi = (Api) => {
    fetch(Api)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setQuotes(data);
      });
  };

  const getTimeApi = (Api) => {
    setTimeout(() => {
      fetch(Api)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setWorldTime(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 500);
  };

  // const getGeoApi = (Api) => {
  //   fetch(Api)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGeo(data);
  //     });
  // };

  // useEffect(() => {
  //   getGeoApi(geoApi);
  // }, []);
  // console.log(geo);

  useEffect(() => {
    getTimeApi(timeZoneApi);
  }, []);

  useEffect(() => {
    getQuoteApi(quoteApi);
  }, [refreshData]);

  const handleOnclickDark = () => {
    setDarkMode((prevState) => !prevState);
  };

  const handleOnClickInfo = () => {
    setModeInfo((prevState) => !prevState);
  };

  const handleOnClickRefresh = () => {
    setRefreshData((prevState) => !prevState);
  };

  const darkTheme = !darkMode ? "bg-img" : "bg-dark";

  return (
    <div className={`${darkTheme} h-full flex flex-col justify-between `}>
      <Quote
        moreInfo={modeInfo}
        quote={quotes}
        refresh={handleOnClickRefresh}
      />

      <Time
        theme={handleOnclickDark}
        showInfo={handleOnClickInfo}
        moreInfo={modeInfo}
        dark={darkMode}
        geo={geo}
        worldTime={worldTime}
      />

      <Info dark={darkMode} moreInfo={modeInfo} worldTime={worldTime} />
    </div>
  );
}

export default App;
