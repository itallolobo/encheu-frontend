import Wave1 from "../common/Wave1";

const HomeWaterSection3 = (props) => {
    return(

        <div className="Home-water-section3">
        <div className="Home-water-section3-wave">
            <Wave1 />
        </div>
            <div className="Home-water-section3-text">
            <h3>{props.predText}</h3>
            </div>
        </div>
    );
};


export default HomeWaterSection3;