import Wave2 from "../common/Wave2";
import CirlceButton from "../common/CircleButton";
import { useState, useEffect } from "react";
import Transition from "../common/Transition";
const HomeWaterSection4 = (props) => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="Home-water-section4">
      <div className="Home-water-section4-wave">
        <Wave2 />
      </div>
      <div className="Home-water-section4-text">
        <h3>Como o nivel do rio afeta a sua casa?</h3>
        <h4>Descubra!</h4>
      </div>
      <CirlceButton
        color="#40B3DB"
        handleClick={() => {setStartAnimation(true)}}
      />
      <Transition
        isEnabled={true}
        startAnimation={startAnimation}
        navigateTo={"/search"}
      />
    </div>
  );
};

export default HomeWaterSection4;
