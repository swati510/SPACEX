import React from "react";
import Launchset from "./LaunchComponent";
const LaunchDetails = ({ onSetYear,LaunchYears, onSetLaunch, onSetLand,LaunchSuccess,LandSuccess }) => {
  
  return (
    <div className="cardLaunch">
      <h3 style={{ textAlignLast: "left" }}>Filters</h3>
      <Launchset
        onSetComponent={onSetYear}
        launchComponent={LaunchYears}
        title="Launch Year"
      />
      <Launchset
        onSetComponent={onSetLaunch}
        launchComponent={LaunchSuccess}
        title="Launch Success"
      />
      <Launchset
        onSetComponent={onSetLand}
        launchComponent={LandSuccess}
        title="Land Success"
      />
    </div>
  );
};

export default LaunchDetails;
