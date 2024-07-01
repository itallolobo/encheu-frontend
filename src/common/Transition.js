import Wave from "react-wavify";
import "./Transition.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Transition = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`Transition ${
        props.isEnabled
          ? props.startAnimation
            ? props.isReversed
              ? " Animation-Reverse"
              : "Animation"
            : ""
          : "invisible"
      }   ${props.isReversed ? "Transition-Reversed" : ""}`}
      onAnimationEnd={() => {
        if (props.notLockAtEnd && !props.isReversed) {
          props.setStartAnimation(false); // reset animation to initial position
        }
        if (props.navigateTo) {
          navigate(props.navigateTo, { state: { startAnimation: true } });
        }
        //props.setStartAnimation(false);
      }}
    >
      <div className="Transition-wave">
        <Wave
          fill="#196f8b"
          paused={props.startAnimation ? false : true}
          options={{
            height: 60,
            amplitude: 15,
            speed: 1,
            points: 4,
          }}
        />
      </div>

      <div className="Transition-Section-1"> </div>
    </div>
  );
};

export default Transition;
