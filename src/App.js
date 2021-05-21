import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import RocketList from "./components/RocketList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LaunchDetails from "./components/LaunchDetails";
import "./index.css";
const ApiURL = "https://api.spacexdata.com/v3/launches?limit=100";

function App() {
  const [launchData, setLaunchData] = useState([]);
  const [filteredData, setFilteredData] = useState(launchData);
  const initialLaunchYears=[
    { val: "2006", active: false },
    { val: "2007", active: false },
    { val: "2008", active: false },
    { val: "2009", active: false },
    { val: "2010", active: false },
    { val: "2011", active: false },
    { val: "2012", active: false },
    { val: "2013", active: false },
    { val: "2014", active: false },
    { val: "2015", active: false },
    { val: "2016", active: false },
    { val: "2017", active: false },
    { val: "2018", active: false },
    { val: "2019", active: false },
    { val: "2020", active: false },
  ];
  const initialLaunchLandSuccess=[
    { val: true, active: false },
    { val: false, active: false },
  ];
  const [LaunchYears, setLaunchYears] = useState(initialLaunchYears);
  const [launchSuccess, SetLaunchSuccess] = useState(initialLaunchLandSuccess);
  const [LandSuccess, SetLandSuccess] = useState(initialLaunchLandSuccess);
  useEffect(() => {
    getLaunchDataAxios();
  }, []);

  const getLaunchDataAxios = async () => {
    const response = await axios.get(ApiURL);
    setLaunchData(response.data);
    setFilteredData(response.data);
  };
  const setYear = (year, active) => {
    if (!active) {
      const filtered = launchData.filter((item) => item.launch_year === year);
      setFilteredData(filtered);
    } else {
      const filtered = launchData;
      setFilteredData(filtered);
    }
    setLaunchYears(
      LaunchYears.map((curr) =>
        year === curr.val
          ? { ...curr, active: !curr.active }
          : { ...curr, active: false }
      )
    );
    SetLaunchSuccess(initialLaunchLandSuccess);
    SetLandSuccess(initialLaunchLandSuccess);
  };
  const setLaunchSuccess = (val, active) => {
    if (!active) {
      const filtered = filteredData.filter(
        (item) => item.launch_success === val
      );
      setFilteredData(filtered);
    } else {
      const filtered = launchData;
      setFilteredData(filtered);
      setLaunchYears(initialLaunchYears);
      SetLandSuccess(initialLaunchLandSuccess);
    }
    SetLaunchSuccess(
      launchSuccess.map((curr) =>
        val === curr.val
          ? { ...curr, active: !curr.active }
          : { ...curr, active: false }
      )
    );
  };
  const setSuccessLand = (val, active) => {
    if (val === true) {
      setFilteredData(filteredData);
      SetLandSuccess([
        { val: true, active: !active },
        { val: false, active: false },
      ]);
    } else {
      if (!active) {
        setFilteredData([]);
        SetLandSuccess([
          { val: true, active: false },
          { val: false, active: true },
        ]);
      } else {
        setFilteredData(launchData);
        setLaunchYears(initialLaunchYears);
        SetLaunchSuccess(initialLaunchLandSuccess);
        SetLandSuccess(initialLaunchLandSuccess);
      }
    }
  };
  return (
    <div className="App">
      <Header title="SpaceX Launch Data" />
      <div className="row">
        <div className=" col sm-10 md-5 lg-2">
          <LaunchDetails
            onSetYear={setYear}
            LaunchYears={LaunchYears}
            onSetLaunch={setLaunchSuccess}
            onSetLand={setSuccessLand}
            LaunchSuccess={launchSuccess}
            LandSuccess={LandSuccess}
          />
        </div>
        <div className="col sm-10 md-5 lg-7">
          <div className="row">
            {filteredData.map((item) => {
              return <RocketList key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
      <Footer title="Developed by Swati Ahuja" />
    </div>
  );
}

export default App;
