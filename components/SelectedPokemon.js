import React from "react";

const SelectedPokemon = (props) => {
  const { selectedPokemon } = props;
  return (
    <div className="selectedPokemon">
      <div className="img-container">
        <img src={selectedPokemon.sprites.front_default} />
        <img src={selectedPokemon.sprites.back_default} />
        <div className="selected-name-container">
          <div className="selected-name">{selectedPokemon.name}</div>
        </div>
      </div>
      <div className="stats-container">
        <div className="bar-chart hp" data-total="100%" animated>
          <span
            className="bar-chart--inner"
            style={{ width: selectedPokemon.stats[0].base_stat / 3 + "%" }}
          ></span>
          <span className="bar-chart--text">
            HP: {selectedPokemon.stats[0].base_stat}/300
          </span>
        </div>
        <div className="bar-chart atk" data-total="100%" animated>
          <span
            className="bar-chart--inner"
            style={{ width: selectedPokemon.stats[1].base_stat / 3 + "%" }}
          ></span>
          <span className="bar-chart--text">
            ATK: {selectedPokemon.stats[1].base_stat}/300
          </span>
        </div>
        <div className="bar-chart def" data-total="100%" animated>
          <span
            className="bar-chart--inner"
            style={{ width: selectedPokemon.stats[2].base_stat / 3 + "%" }}
          ></span>
          <span className="bar-chart--text">
            DEF: {selectedPokemon.stats[2].base_stat}/300
          </span>
        </div>
        <div className="bar-chart spd" data-total="100%" animated>
          <span
            className="bar-chart--inner"
            style={{ width: selectedPokemon.stats[5].base_stat / 3 + "%" }}
          ></span>
          <span className="bar-chart--text">
            SPD: {selectedPokemon.stats[5].base_stat}/300
          </span>
        </div>
      </div>
      {/* {selectedPokemon.sprites ? (
        <img src={selectedPokemon.sprites.front_default} />
      ) : (
        <div></div>
      )} */}
      {/* <img src={selectedPokemon.sprites.back_default} /> */}
    </div>
  );
};

export default SelectedPokemon;
