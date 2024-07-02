import Wave4 from "../common/Wave4";
import Wave5 from "../common/Wave5";
import CirlceButton from "../common/CircleButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCSSTransitionGroup from "react-transition-group";
import Transition from "../common/Transition";
import ClickMeContact from "../common/ClickMeContact";

const StreetWaterSection1 = (props) => {
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="StreetWaterSection1">
      <div className="Street-Water-Section-1">
        <div className="Street-Water-Section-1-wave">
          <Wave4 />
        </div>
      </div>
      <div className="Street-Water-Section-2">
        <h3>{`${props.streetData.name}, ${props.streetData.number}`}</h3>
        <img src={window.location.origin+"/street_img/62e57a5f94f155b96c71d1d9_640.jpg"}></img>
        <h4>{props.streetData.prediction} </h4>
      </div>

      <div className="Street-Water-History">
        <Wave5 />
        <div className="Street-Water-History-Section-1">
        <h3>Mas a minha casa já encheu?</h3>
        <h4>Volte no tempo com a gente!</h4>
        <CirlceButton color="#40B3DB" handleClick={() => {setStartAnimation(true);}} />
        </div>
        <ClickMeContact  text="Encontrou algum erro?" position="absolute"/>
      </div>
      <Transition
        isEnabled={true}
        startAnimation={startAnimation}
        navigateTo={`/history/${props.streetData._id}/${props.streetData.number}`}
      />
    </div>
  );
};

export default StreetWaterSection1;
