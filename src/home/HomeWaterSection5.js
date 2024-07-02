import Wave3 from "../common/Wave3";
import CirlceButton from "../common/CircleButton";
import { useState, useEffect } from "react";
import Transition from "../common/Transition";
const HomeWaterSection4 = (props) => {
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div className="Home-water-section5">
      <div className="Home-water-section5-wave">
        <Wave3 />
      </div>
      <div className="Home-water-section5-text">
        <h3>Tem alguma duvida?</h3>
        <h4>Confira nosso FAQ</h4>
      </div>
      <CirlceButton
        color="#319FBC"
        handleClick={() => {
          setStartAnimation(true);
        }}
      />
      <Transition
        isEnabled={true}
        startAnimation={startAnimation}
        navigateTo={"/faq"}
      />
    </div>
  );
};

export default HomeWaterSection4;
