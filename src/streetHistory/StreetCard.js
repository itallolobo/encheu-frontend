import Wave4 from "../common/Wave4";
import Wave5 from "../common/Wave5";
import CirlceButton from "../common/CircleButton";
import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import ReactCSSTransitionGroup from "react-transition-group";
import ClickMeContact from "../common/ClickMeContact";
import Timeline from "./StreetTimeline";

const StreetCard = (props) => {

  const isInverted = props.index % 2 === 0;
  const navigate = useNavigate();
  console.log(props.index_total);


  return (
    <>
    
      {props.index % 2 === 0 ? (
        <div className="Street-History-Card">
          <div className="Street-History-Card-Img">
            <img
              src={
                window.location.origin +
                "/street_img/62e57a5f94f155b96c71d1d9_640.jpg"
              }
            ></img>
          </div>

          <div className="Street-History-Card-List Street-History-Card-List-Inverted">
          <Timeline
            year={props.year}
            side={
              props.index === 0
                ? "right"
                : props.index === props.index_total - 1
                ? "left"
                : ""
            }
            index={props.index}
          />
            <ol>
              {props.floods.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      ) : (
        <div className="Street-History-Card">
          <div className="Street-History-Card-List ">
            <ol>
              {props.floods.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
          <Timeline
            year={props.year}
            side={
              props.index === 0
                ? "right"
                : props.index === props.index_total
                ? "left"
                : ""
            }
            index={props.index}
          />
          <div className="Street-History-Card-Img Street-History-Card-Img-Inverted ">
            <img
              src={
                window.location.origin +
                "/street_img/62e57a5f94f155b96c71d1d9_640.jpg"
              }
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default StreetCard;
