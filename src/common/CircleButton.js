import { useNavigate } from "react-router-dom";
import Transition from "../common/Transition";
import { useSwiper } from "swiper/react";

const CirlceButton = (props) => {
  const swiper = useSwiper();
  return (
    <div
      className="Circle-button"
      style={props.style}
      onClick={() => {
        if (props.direction){
          if (props.direction === "next") {
            swiper.slideNext();
          } else {
            swiper.slidePrev();
          }
        }
        else{
          props.handleClick();
        }

        
      }}
    >
      <svg
        xmlns="https://www.w3.org/2000/svg"
        width="80px"
        fillRule="evenodd"
        viewBox="0 0 1000 1000 "
      >
        <path
          d="M500-1.908c276.669 0 500.95 224.284 500.95 500.954S776.669 1000 500 1000-.954 775.715-.954 499.046 223.331-1.908 500-1.908z"
          fill={props.color}
        />
        <g stroke="#fff" strokeLinejoin="round" strokeWidth="132.94">
          <path
            d="M195.315,629.483L498.007,326.79Zm0,0L498.007,326.79Zm0,0L498.007,326.79Zm0,0L498.007,326.79Z"
            fill="#fff"
          />
          <path d="M800.659,629.139L498.341,326.821Zm0,0L498.341,326.821Zm0,0L498.341,326.821Zm0,0L498.341,326.821Z" />
        </g>
      </svg>
    </div>
  );
};

export default CirlceButton;
