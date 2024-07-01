import Wave4 from "../common/Wave4";
import CirlceButton from "../common/CircleButton";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StreetCard from "./StreetCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StreetHistoryWaterSection1 = (props) => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const card = document.getElementsByClassName(
      "Street-History-Water-Section-2"
    )[0];
    window.scrollTo(0, 0);
    if (card.offsetWidth < window.innerWidth + 100) {
      setIsScrollLocked(true);
    }
  }, []);
  return (
    <div
      className={`StreetWaterSection1 ${isScrollLocked ? "lock-Scroll" : ""}`}
    >
      <div className="Street-History-Water-Section-1">
        <div className="Street-History-Water-Section-1-wave">
          <Wave4 />
        </div>
      </div>
      <div className="Street-History-Water-Section-2">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {props.HistoryData.history ? (
            props.HistoryData.history
              .sort((a, b) => (a.year.slice(-4) > b.year.slice(-4) ? 1 : -1))
              .map((item, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="Street-History-Water-Section-2-Card"
                      key={index}
                    >
                      <StreetCard
                        index={index}
                        index_total={props.HistoryData.history.length}
                        floods={item.floods}
                        year={item.year}
                      />
                    </div>
                  </SwiperSlide>
                );
              })
          ) : (
            <h4>Ufa! Parece que sua rua nunca teve um enchente!</h4>
          )}
          <div className="Street-History-Water-Section-3">
            <CirlceButton
              direction="next"
              color="#319FBC"
              style={{
                right: "30px",
                position: "absolute",
                transform: "rotate(90deg)",
              }}
            />
            <CirlceButton
              direction="prev"
              color="#319FBC"
              style={{
                left: "30px",
                position: "absolute",
                transform: "rotate(-90deg)",
              }}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default StreetHistoryWaterSection1;
