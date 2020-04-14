import React from "react";
import "../App.css";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      search: "",
    };
  }

  enterText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  searchPokemon = () => {
    this.setState({ search: this.state.searchText });
  };

  render() {
    let i = 0;
    let pokemonFound = true;
    const newArray = [];

    for (i; i < pokemonData.length; i++) {
      let pokemon = pokemonData[i];
      if (
        pokemon.name.english
          .toUpperCase()
          .includes(this.state.search.toUpperCase())
      )
        newArray.push(<PokemonCard pokemon={pokemonData[i]} />);
    }
    if (newArray.length === 0 ? (pokemonFound = false) : (pokemonFound = true));

    return (
      <div className="gallery">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/pokemonImage/Pokemon-Logo.png"}
            alt="Header Logo"
          />
        </div>
        <div className="searchgrid">
          <div className="left"></div>
          <div className="search">
            <span className="searchtext">Search Pokemon</span>
            <span className="searchfield">
              <input
                className="inputText"
                id="Search"
                type="text"
                placeholder="Type Pokemon Name Here"
                value={this.state.searchText}
                onChange={this.enterText}
              />
              <input
                type="button"
                className="inputButton"
                value="Search"
                onClick={this.searchPokemon}
              />
            </span>
          </div>
          <div className="right"></div>
        </div>
        {pokemonFound && <div className="gallerylist">{newArray}</div>}
        {!pokemonFound && (
          <div>
            <div className="notfoundcontainer">
              <div className="notfound">
                Ops! We can't find your pokemon. Please try again
              </div>
            </div>
            <div className="imageSize">
              <img
                src={process.env.PUBLIC_URL + "/pokemonImage/notfound.png"}
                alt="Pokemon not found"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PokemonGallery;
