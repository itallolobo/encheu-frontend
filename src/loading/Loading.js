import Ruler from "../common/Ruler";
import LoadWave from "./loadRiver.png";
import "./riverAnimation.css";
import {useState} from "react";

const LoadStyle = {
  backgroundColor: "#00b4dd",
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: "10",
};

const LoadSection1Style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "200px",
};

const LoadSection1RiverStyle = {
  position: "absolute",
  width: "100%",
  top : "20px",
  left: "0px",
  height: "150%",
  zIndex: "2",
};


const LoadRulerStyle = {
  position: "absolute",
  left: "45px",
  width: "20px",
  height: "auto",
  zIndex: "1",
};

const LoadSection1RiverBottomStyle = {
  marginTop: "-7px",
  width: "100%",
  height: "83%",
  backgroundColor: "#00b4dd",
};

const Load = (props) => {
    const [isLoadAnimationFinish, setIsLoadAnimationFinish] = useState(false);
  return (
    <div style={LoadStyle} onAnimationEnd={() => {setIsLoadAnimationFinish(true)}} className={props.isLoadFinish? "fade-out":""} >
      <div style={LoadSection1Style} className="Load-Section-1">
        <div style={LoadSection1RiverStyle} className={isLoadAnimationFinish? "":"Load-Section-1-River"}>
          <img src={LoadWave} style={{ width: "100%" }} />
          <div
            style={LoadSection1RiverBottomStyle}
            className="Load-Section-1-River-Bottom"
          ></div>
        </div>
        <Ruler style={LoadRulerStyle} isNormal={true} />
      </div>
    </div>
  );
};

export default Load;
