const HomeWaterSection2 = (props) => {
  return (
    <div className="Home-water-section2">
      <div className="Home-water-section2-text">
        <h2>
          O Nível do Rio Doce está{" "}
          <span
            style={props.isNormal ? { color: "#00df73" } : { color: "#ff6962" }}
          >
            {props.isNormal ? "normal" : "anormal"}
          </span>
          , {!props.isFloodQuota ? "fora da cota de inundação" : "dentro da cota de inundação"}
        </h2>
      </div>
    </div>
  );
};

export default HomeWaterSection2;
