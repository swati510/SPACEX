import React from "react";

const LaunchComponent = ({ onSetComponent, launchComponent, title}) => {
  function isBoolean(val) {
    return val === false || val === true;
  }
  
  return (
    <div className="cardContainer">
      <div className="CardText cardTitle">{title} </div>

      <div className="row ">
       
          {launchComponent.map((curr) => {
            return (
              <div class="colx sm-3 md-3 lg-3">
                <button
                  className="btn "
                  value={curr.val}
                  style={{backgroundColor:curr.active?"green":"#90ee90"}}
                  onClick={() => {
                    onSetComponent(curr.val,curr.active)}}
                >
                  {isBoolean(curr.val) ? (curr.val ? "True" : "False") : curr.val}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LaunchComponent;
