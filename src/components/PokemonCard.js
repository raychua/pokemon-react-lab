import React from "react";
import "../App.css";

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
        <div className="HP">HP</div>
        <div className="HP Value">: {base.HP}</div>
        <div className="Attack">Attack</div>
        <div className="Attack Value">: {base.Attack}</div>
        <div className="Defence">Defence</div>
        <div className="Defence Value">: {base.Defence}</div>
        <div className="SpAttack">SpAttack</div>
        <div className="SpAttack Value">: {base.SpAttack}</div>
        <div className="SpDefence">SpDefence</div>
        <div className="SpDefence Value">: {base.SpDefence}</div>
        <div className="Speed">Speed</div>
        <div className="Speed Value">: {base.Speed}</div>
      </div>
    </div>
  );
}

export default PokemonCard;
