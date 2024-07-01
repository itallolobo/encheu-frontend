
import { useNavigate } from "react-router-dom";
const h4Style = {
        color: "#FFFFFF",

        fontSize: "medium",
        fontWeight: 400,
        margin: "0",
        bottom: "10px",
        paddingBottom: "0px",
        //centrilize text
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%", 

};


const spanStyle = {
    fontWeight: "200",
    margin: "0",
    fontSize: "medium",

};
const ClickMeContact = (props) => {
    const navigate = useNavigate();
    return(
    
    <div onClick={() => {navigate("/contact")}}>
    <h4 style={{...h4Style, position:`${props.position ? props.position : "absolute"}` }} >{props.text} <span style={spanStyle} >clique aqui</span></h4>
    </div>);
};

export default ClickMeContact;
