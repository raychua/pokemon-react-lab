import React from "react";
import "../App.css";
//import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

function PokemonGallery({ pokemonData }) {
  const pokemonFound = pokemonData.length > 0;

  const pokemonCards = pokemonData.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
  });

  return (
    <div className="gallery">
      {pokemonFound && <div className="gallerylist">{pokemonCards}</div>}
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

export default PokemonGallery;
