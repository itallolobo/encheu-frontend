import StreetWaterSection1 from "./StreetWaterSection1";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../common/Transition";
import "./StreetHome.css";
import Loading from "../loading/Loading";
const StreetHome = () => {
  const location = useLocation();
  let params = useParams();
  const [streetData, setstreetData] = useState({});
  const [startAnimation, setStartAnimation] = useState(false);
  const [isLoadFinish, setIsLoadFinish] = useState(false);

  const getstreetData = async () => {
    try {
      const response = await fetch(
        //`http://${window.location.hostname}:4000/street?_id=${params.streetId}&number=${params.number}`
        `https://encheu-backend-q2n4dzlfy-itallos-projects-2b4561f1.vercel.app/street?_id=${params.streetId}&number=${params.number}`


      );
      const data = await response.json();
      setstreetData(data);
      setStartAnimation(true);
      setIsLoadFinish(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getstreetData();
  }, []);
  window.scrollTo(0, 0);
  return (
    <>
    {location.state ? "": <Loading isLoadFinish={isLoadFinish}/>}
      <Transition
        isEnabled={location.state ? true : false}
        startAnimation={startAnimation}
        isReversed={true}
        

      />
      {window.history.replaceState({}, document.title)} {/* para não ficar no historico */}
      <StreetWaterSection1 streetData={streetData} />
    </>
  );
};

export default StreetHome;
