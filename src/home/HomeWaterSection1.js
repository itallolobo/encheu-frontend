import { useState, useEffect } from "react";
import Wave from "react-wavify";
import Ruler from "../common/Ruler";
const HomeWaterSection1 = (props) => {
  return (
    <div className="Home-water-section-1">
      <div className="Home-water-section-1-wave">
        <Wave
          fill="#40b3db"
          paused={false}
          options={{
            height: 60,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        />
      </div>
      <Ruler RulerClassName="Home-water-section-1-ruler" isNormal={props.isNormal} />
    </div>
  );
};

export default HomeWaterSection1;
