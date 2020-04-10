import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

const IMAGE_LINK = "/pokemonImage/";

function showTypes(type) {
  const newArray = [];
  type.forEach((element) => {
    newArray.push(
      <div className="pokemontype">
        <img
          src={process.env.PUBLIC_URL + IMAGE_LINK + element + ".png"}
          alt={element}
        />
        <span className={element}>{element}</span>
      </div>
    );
  });
  return newArray;
}

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  const imgId = "/pokemonImage/" + id + ".png";

  return (
    <div className="pokemoncard">
      <div className="pokemonpic">
        <img src={process.env.PUBLIC_URL + imgId} alt={name.english} />
      </div>
      <div className="name">{name.english}</div>
      <div className="pokemontypes">{showTypes(type)}</div>
      <div className="attributes">
        <ul>
          <li>HP : {base.HP}</li>
          <li>Attack : {base.Attack}</li>
          <li>Defence : {base.Defence}</li>
          <li>SpAttack : {base.SpAttack}</li>
          <li>SpDefence : {base.SpDefence}</li>
          <li>Speed : {base.Speed}</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonData[39]} />
    </div>
  );
}

export default App;
