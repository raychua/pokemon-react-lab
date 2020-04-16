import React from "react";
import "../App.css";
import "./PowerFilter.css";

const IMAGE_LINK = "/pokemonImage/";

class PowerFilterHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bug: true,
      Electric: true,
      Fairy: true,
      Fire: true,
      Flying: true,
      Grass: true,
      Ground: true,
      Normal: true,
      Poison: true,
      Water: true,
    };
  }

  updateFilter = (Powertype) => {
    const newValue = !this.state[Powertype];
    this.setState({ [Powertype]: newValue }, function () {
      this.filterPokemon();
    });
  };

  filterPokemon = () => {
    console.log(this.state);
    const originalPokemonList = [...this.props.pokemonData];
    const filteredPokemons = originalPokemonList.filter((pokemon) => {
      let found = false;
      pokemon.type.forEach((power) => {
        console.log("power this.state[power]:" + power + this.state[power]);
        if (this.state[power]) found = true;
      });
      return found;
    });
    console.log("filteredPokemons:" + filteredPokemons);
    this.props.setFilteredList(filteredPokemons);
  };

  render() {
    return (
      <div className="PowerFilterArea">
        <div className="PowerFilter">
          {this.state.Bug && (
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Bug.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Bug")}
            />
          )}
          {!this.state.Bug && (
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Bug.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Bug")}
              />
            </div>
          )}
        </div>
        {this.state.Electric && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Electric.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Electric")}
            />
          </div>
        )}
        {!this.state.Electric && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Electric.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Electric")}
              />
            </div>
          </div>
        )}
        {this.state.Fairy && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Fairy.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Fairy")}
            />
          </div>
        )}
        {!this.state.Fairy && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Fairy.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Fairy")}
              />
            </div>
          </div>
        )}
        {this.state.Fire && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Fire.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Fire")}
            />
          </div>
        )}
        {!this.state.Fire && (
          <div className="notSelected">
            <div className="PowerFilter">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Fire.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Fire")}
              />
            </div>
          </div>
        )}
        {this.state.Flying && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Flying.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Flying")}
            />
          </div>
        )}
        {!this.state.Flying && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Flying.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Flying")}
              />
            </div>
          </div>
        )}
        {this.state.Grass && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Grass.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Grass")}
            />
          </div>
        )}

        {!this.state.Grass && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Grass.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Grass")}
              />
            </div>
          </div>
        )}
        {this.state.Ground && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Ground.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Ground")}
            />
          </div>
        )}
        {!this.state.Ground && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Ground.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Ground")}
              />
            </div>
          </div>
        )}
        {this.state.Normal && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Normal.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Normal")}
            />
          </div>
        )}
        {!this.state.Normal && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Normal.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Normal")}
              />
            </div>
          </div>
        )}
        {this.state.Poison && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Poison.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Poison")}
            />
          </div>
        )}
        {!this.state.Poison && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Poison.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Poison")}
              />
            </div>
          </div>
        )}
        {this.state.Water && (
          <div className="PowerFilter">
            <img
              src={process.env.PUBLIC_URL + IMAGE_LINK + "Water.png"}
              alt="Filter Bug Power"
              onClick={() => this.updateFilter("Water")}
            />
          </div>
        )}
        {!this.state.Water && (
          <div className="PowerFilter">
            <div className="notSelected">
              <img
                src={process.env.PUBLIC_URL + IMAGE_LINK + "Water.png"}
                alt="Filter Bug Power"
                onClick={() => this.updateFilter("Water")}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PowerFilterHeader;
