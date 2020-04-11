import React from "react";
import "../App.css";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

function PokemonGallery() {
  let i = 0;
  const newArray = [];

  for (i; i < pokemonData.length; i++) {
    newArray.push(<PokemonCard pokemon={pokemonData[i]} />);
  }
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
              id="Search"
              type="text"
              placeholder="Type Pokemon Name Here"
            />
          </span>
          <input type="submit" value="Submit"></input>
        </div>
        <div className="right"></div>
      </div>
      <div className="gallerylist">{newArray}</div>
    </div>
  );
}

export default PokemonGallery;
