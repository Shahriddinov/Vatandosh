import React from "react";
import Council from "./components/Council/Council";
import Volunter from "./components/VolunterCouncil/VolunterCouncil";
import News from "./components/News/News";

function VolunterHome() {
  return (
    <div>
      <Council />
      <Volunter />
      <News />
    </div>
  );
}

export default VolunterHome;
