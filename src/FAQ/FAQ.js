import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import Faq from "react-faq-component";
import "./FAQ.css";
import Transition from "../common/Transition";
import Loading from "../loading/Loading";
import ClickMeContact from "../common/ClickMeContact";

const data = {
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: "#40b3db",
  titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
  textAling: "left",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

const FAQ = (props) => {
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
        navigateTo={"/faq"}
      />
        {window.history.replaceState({}, document.title)}
        <div className="FAQ-content">
      <div className="FAQ-content-section-1">
        <Faq data={data} styles={styles} config={config} />
        <div>
        <ClickMeContact text="Não encontrou o que procurava?" position="relative" />
      </div>
      </div>

    </div>
    </>
  );

};
export default FAQ;
