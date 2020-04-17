import React from "react";
import {
  render,
  fireEvent,
  within,
  waitForElement,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchablePokemonGallery from "./SearchablePokemonGallery";
import POKEMON from "../pokemon/pokemon";
import axios from "axios";
import MockAxiosAdapter from "axios-mock-adapter";
const mockAxios = new MockAxiosAdapter();

describe("SearchablePokemonGallery", () => {
  beforeEach(() => {
    mockAxios
      .onGet(
        "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
      )
      .replyOnce(200, POKEMON);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("should render an input box", async () => {
    const { getByLabelText } = render(<SearchablePokemonGallery />);
    //const pokemonSearchInput = getByLabelText("pokemon-search");
    await waitForElement(() => getByLabelText("pokemon-search"));
    expect(getByLabelText("pokemon-search")).toBeInTheDocument();
  });

  it("should get 51 pokemon cards", async () => {
    const { getAllByTestId } = render(<SearchablePokemonGallery />);
    //const pokemonCards = getAllByTestId("pokemon-card");
    await waitForElement(() => getAllByTestId("pokemon-card"));
    expect(getAllByTestId("pokemon-card")).toHaveLength(51);
  });
});
