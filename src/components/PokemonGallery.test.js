import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokemonGallery from "./PokemonGallery";

const POKEMON = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defence: 49,
      SpAttack: 65,
      SpDefence: 65,
      Speed: 45,
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defence: 63,
      SpAttack: 80,
      SpDefence: 80,
      Speed: 60,
    },
  },
];

describe("PokemonGallery", () => {
  it("should show pokemon cards", () => {
    const { getByText } = render(<PokemonGallery pokemonData={POKEMON} />);
    const firstPokemon = getByText("Bulbasaur");
    expect(firstPokemon).toBeInTheDocument();
    const nextPokemon = getByText("Ivysaur");
    expect(nextPokemon).toBeInTheDocument();
  });
});
