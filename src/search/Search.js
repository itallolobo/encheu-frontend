import "./Search.css";
import Transition from "../common/Transition";
import Loading from "../loading/Loading";
import {useLocation} from 'react-router-dom';

import { useState, useEffect } from "react";

import SearchWaterSection1 from "./SearchWaterSection1";
const Search = () => {
  const location = useLocation();
  window.scrollTo(0, 0)

  const [isLoadFinish, setIsLoadFinish] = useState(false);
  useEffect(() => {
    setIsLoadFinish(true);
    window.scrollTo(0, 0)
  } , [])
  return (
    <>
    {location.state? "": <Loading isLoadFinish={isLoadFinish}/>}
      <Transition
        isEnabled={location.state ? true :"" }
        isReversed={true}
        startAnimation={true}
        navigateTo={"/search"}
      />
        {window.history.replaceState({}, document.title)}
        <SearchWaterSection1 />
        
    </>
  );
};

export default Search;
