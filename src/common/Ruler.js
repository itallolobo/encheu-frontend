const Ruler = (props) => {
  var rulerColor = "#00df73";
  var rulerSizeSection2 = 1476;
  switch (props.rulerState) {
    case 1:
      rulerColor = "#00df73";
      break;
    case 2:
      rulerColor = "#ff6962";
      break;
    case 3:
      rulerSizeSection2 = 800;
      break;
  }


  
  return (
    <div
      className={props.RulerClassName? props.RulerClassName : ""}
      style={{...!props.isNormal ? { top: "120px" } : {}, ...props.style}}
    >
      <svg
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 32.84 147.355 1878.403"
      >
        <g strokeWidth="0" fillRule="evenodd">
          <path
            d="M30.9 43.651h82.466a14 14 0 0 1 14 14V1879a14 14 0 0 1-14 14H30.9a14 14 0 0 1-14-14V57.651a14 14 0 0 1 14-14z"
            fill="#ff6962"
            stroke="#000"
          />
          <path
            d="M17,346H127V1476H17V346Z"
            fill={props.isNormal ? "#00df73" : "#ff6962"}
            stroke="#3a3a3a"
          />
        </g>
        <g strokeWidth="15">
          <path
            d="M30.895 47.647h82.466a14 14 0 0 1 14 14V1883a14 14 0 0 1-14 14H30.895a14 14 0 0 1-14-14V61.647a14 14 0 0 1 14-14z"
            stroke="#3a3a3a"
            fill="none"
          />
          <path
            d="M125 219v1H60v-1h65zm0 878v1H60v-1h65zm0 504v1H60v-1h65zm0 126v1H60v-1h65zm0 126v1H60v-1h65zm0-378v1H60v-1h65zm0-1004v1H60v-1h65zm0 752v1H60v-1h65zm0 126v1H60v-1h65zm0-378v1H60v-1h65zm0-625v1H60v-1h65zm0 250v1H60v-1h65zm0 126v1H60v-1h65zm0 125v1H60v-1h65zm0-754v1H60v-1h65zm-5 816v1H84v-1h36zm0-125v1H84v-1h36zm0 503v1H84v-1h36zm-2-753v1H82v-1h36zm0-251v1H82v-1h36zm0 752v1H82v-1h36zm0 126v1H82v-1h36zm0-503v1H82v-1h36zm0-251v1H82v-1h36zm0-250v1H82v-1h36zm0 1256v1H82v-1h36zm0 251v1H82v-1h36zm0 126v1H82v-1h36zm0-252v1H82v-1h36z"
            stroke="#3a3a3a"
            fillRule="evenodd"
            fill="#319fbc"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};
export default Ruler;
