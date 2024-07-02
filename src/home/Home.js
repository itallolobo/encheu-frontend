import "./Home.css";
import { useState, useEffect } from "react";
import HomeWaterSection1 from "./HomeWaterSection1";
import HomeWaterSection2 from "./HomeWaterSection2";
import HomeWaterSection3 from "./HomeWaterSection3";
import HomeWaterSection4 from "./HomeWaterSection4";
import HomeWaterSection5 from "./HomeWaterSection5";
import HomeWaterBottom from "./HomeWaterBottom";
import Loading from "../loading/Loading";

const Home = () => {
  const [homeData, setHomeData] = useState({});
  const [isLoadFinish, setIsLoadFinish] = useState(false);

  const getHomeData = async () => {
    try {
      //const response = await fetch(`https://api.${window.location.hostname}/home`);
      //const response = await fetch(`http://${window.location.hostname}:4000/home`);
      const response = await fetch(`https://encheu-backend-1tcm.vercel.app/home`);


      const data = await response.json();
      setHomeData(data);
      setIsLoadFinish(true);
    } catch (err) {
      console.log("Parece que o encheu está com problemas");
    }
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <Loading isLoadFinish={isLoadFinish}/>
      <HomeWaterSection1 isNormal={homeData.isNormal} />
      <HomeWaterSection2
        isNormal={homeData.isNormal}
        isFloodQuota={homeData.isFloodQuota}
      />
      <HomeWaterSection3
        isNormal={homeData.isNormal}
        predText={homeData.predText}
      />
      <HomeWaterSection4 isNormal={homeData.isNormal} />
      <HomeWaterSection5 isNormal={homeData.isNormal} />
      <HomeWaterBottom />
    </>
  );
};

export default Home;
