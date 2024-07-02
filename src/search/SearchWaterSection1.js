import Wave4 from "../common/Wave4";
import Wave5 from "../common/Wave5";
import SearchIcon from "./SearchIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchWaterHotResult from "./SearchWaterHotResult";
import Transition from "../common/Transition";
import ClickMeContact from "../common/ClickMeContact";

const SearchWaterSection1 = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isStreetSelected, setIsStreetSelected] = useState(false);
  const [currentStreet, setCurrentStreet] = useState({});
  const [currentNumber, setCurrentNumber] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  const HandleChangeInput = async (e) => {
    try {
      const response = await fetch(
        //`https://api.${window.location.hostname}/autocomplete?search=${e.target.value}`
        //`https://${window.location.hostname}:4000/autocomplete?search=${e.target.value}`
        `https://encheu-backend-1tcm.vercel.app/autocomplete?search=${e.target.value}`

      );
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      console.log("Parece que o encheu está com problemas");
    }
  };

  const HandleClickStreetSearchResult = (e, result) => {
    setIsStreetSelected(true);
    window.scrollTo(0, 0);

    console.log(result);
    setCurrentStreet(result);
  };

  const HandleClickNumberSearchResult = (e, result) => {
    setCurrentNumber(result.number);
    setStartAnimation(true);
  };
  return (
    <div className="SearchWaterSection1">
      <div className="Search-Water-Section-1">
        <div className="Search-Water-Section-1-wave">
          <Wave4 />
        </div>
      </div>
      <div className="Search-Water-Section-2">
        <h3>
          {!isStreetSelected
            ? "Digite o nome da sua rua"
            : "Escolha o número mais próximo do endereço da sua casa"}
        </h3>
        {!isStreetSelected ? (
          <div className="Search-Water-Section-2-bar">
            <div className="Search-Water-Section-2-bar-wrapper">
              <img
                className="Search-Water-Section-2-bar-icon"
                src={SearchIcon}
              />
              <input
                className="Search-Water-Section-2-bar-input"
                type="text"
                placeholder="Ex: Rua João Pedro"
                onChange={HandleChangeInput}
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="Search-water-results">
        <Wave5 />

        <div className="Search-water-results-list">
          {!isStreetSelected
            ? searchResults.map((result) => (
                <SearchWaterHotResult
                  key={result._id}
                  result={result}
                  text={result.name}
                  onClick={(e) => HandleClickStreetSearchResult(e, result)}
                />
              ))
            : currentStreet["points"]
                .sort((a, b) => (a.number > b.number ? 1 : -1))
                .map((result) => (
                  <SearchWaterHotResult
                    key={result.number}
                    result={result}
                    text={result.number}
                    onClick={(e) => HandleClickNumberSearchResult(e, result)}
                  />
                ))}
        </div>
        <ClickMeContact text="Não encontrou sua rua?" position="fixed" />
      </div>
        <Transition
        isEnabled={true}
        startAnimation={startAnimation}
        navigateTo={`/street/${currentStreet._id}/${currentNumber}`}
      />
      
    </div>
  );
};

export default SearchWaterSection1;
