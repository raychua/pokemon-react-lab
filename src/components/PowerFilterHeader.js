import React from "react";
import "../App.css";
import "./PowerFilter.css";
import POWERTYPES from "../pokemon/Powertypes";

const IMAGE_LINK = "/pokemonImage/";

class PowerFilterHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = POWERTYPES.reduce((state, cur) => {
      state[cur] = true;
      return state;
    }, {});
  }

  updateFilter = (Powertype) => {
    const newValue = !this.state[Powertype];
    this.setState({ [Powertype]: newValue }, function () {
      this.filterPokemon();
    });
  };

  filterPokemon = () => {
    const originalPokemonList = [...this.props.pokemonData];
    const filteredPokemons = originalPokemonList.filter((pokemon) => {
      let found = false;
      pokemon.type.forEach((power) => {
        if (this.state[power]) found = true;
      });
      return found;
    });
    this.props.setFilteredList(filteredPokemons);
  };

  showPowerTypes() {
    const typeImages = POWERTYPES.map((powertype) => {
      if (this.state[powertype]) {
        return (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + powertype + ".png"}
              alt="Hide Bug Power"
              onClick={() => this.updateFilter(powertype)}
            />
          </div>
        );
      } else {
        return (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + powertype + ".png"}
                alt="Show Bug Power"
                onClick={() => this.updateFilter(powertype)}
              />
            </div>
          </div>
        );
      }
    });
    return typeImages;
  }

  render() {
    return <div className="PowerFilterArea">{this.showPowerTypes()}</div>;
  }
}

export default PowerFilterHeader;
