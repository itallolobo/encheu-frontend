const StreetCardTimeline = {
  zIndex: 3,
  top: "45%",
  position: "absolute",
  width: "100%",
  transform: "translateY(-50%)",
};

const StreetCardLineStyle = {
  borderRadius: "10px",
  
  width: "300px",
  height: "4px",
  backgroundColor: "#ffffff",
  margin: "0px",
  padding: "20px",
  padding: "0px",
  position: "absolute",
};

const StreetCardMarkerStyle = {
  borderRadius: "10px",
  position: "absolute",
  top: "-12px",
  width: "4px",
  height: "15px",
  backgroundColor: "#ffffff",
  margin: "0px",
  padding: "0px",
  position: "absolute",
  transform: "translateX(-50%)",
};

const StreetCardMarkerStyleH4 = {
  fontSize: "2.4vh",
  position: "absolute",
  top: "-50px",
  transform: "translateX(-50%)",
  fontWeight: "500",
  color: "#ffffff",
};



const FixToSide = (side) => {
  switch (side) {
    case "left":
      return {
        right: "50%",
        width: "100%",
      };
    case "right":
      return {
        width: "100%",
        left: "50%",
      };
    default:
      return {
        width: "100%",
      };
  }
};

const FixToSideMarker = (side) => {
  switch (side) {
    case "left":
      return {
        right: "-2px",
      };
    case "right":
      return {
        left: "0px",
      };
    default:
      return {
        left: "50%",
      };
  }
};
const FixToSideMarkerH4 = (side) => {
  switch (side) {
    case "left":
      return {
        left: "10px",
      };
    case "right":
      return {
        left: "0px",
      };
    default:
      return {
      };
  }
};


const InvertMarker = {
  scaleY: "1",
  top: "2px",

  
}

const InvertMarkerH4 = {
  scaleY: "1",
  top: "10px",

  
}

const Timeline = (props) => {
  const isInverted = props.index % 2 === 0;
  return (
    <div className="Street-Card-Timeline"  style={StreetCardTimeline}>
      <div
        className="Street-Card-Line"
        style={{ ...StreetCardLineStyle, ...FixToSide(props.side) }}
      >
        <div
          className="Street-Card-Line-Marker"
          style={{ ...StreetCardMarkerStyle, ...FixToSideMarker(props.side), ...isInverted ? InvertMarker : null} }
        >
          <h4
            style={{
              ...StreetCardMarkerStyleH4,
              ...FixToSideMarkerH4(props.side),
              ...isInverted ? InvertMarkerH4 : null,
            }}
          >
            {props.year}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
