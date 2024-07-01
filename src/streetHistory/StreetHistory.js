import StreetHistoryWaterSection1 from "./StreetHistorySection1";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Transition from "../common/Transition";
import "./StreetCard.css";
import Loading from "../loading/Loading";
const StreetHistory = () => {
  const location = useLocation();

  let params = useParams();
  const [HistoryData, sethistoryData] = useState({});
  const [startAnimation, setStartAnimation] = useState(false);
  const [isLoadFinish, setIsLoadFinish] = useState(false);

  const getHistoryData = async () => {
    try {
      const response = await fetch(
        //`http://${window.location.hostname}:4000/history?_id=${params.streetId}&number=${params.number}`
        
        `https://encheu-backend-q2n4dzlfy-itallos-projects-2b4561f1.vercel.app/history?_id=${params.streetId}&number=${params.number}`


      );
      const data = await response.json();
      sethistoryData(data);
      setStartAnimation(true);
      setIsLoadFinish(true);
      console.log(data);
    } catch (err) {
      console.log("Parece que o encheu está com problemas");
    }
  };

  useEffect(() => {
    getHistoryData();
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
      {window.history.replaceState({}, document.title)}
      <StreetHistoryWaterSection1 key={134} HistoryData={HistoryData}/>
    </>
  );
};

export default StreetHistory;
