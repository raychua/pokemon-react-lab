import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchablePokemonGallery from "./SearchablePokemonGallery";

describe("SearchablePokemonGallery", () => {
  it("should render an input box", () => {
    const { getByLabelText } = render(<SearchablePokemonGallery />);
    const pokemonSearchInput = getByLabelText("pokemon-search");
    expect(pokemonSearchInput).toBeInTheDocument();
  });

  it("should get 51 pokemon cards", () => {
    const { getAllByTestId } = render(<SearchablePokemonGallery />);
    const pokemonCards = getAllByTestId("pokemon-card");
    expect(pokemonCards).toHaveLength(51);
  });
});
