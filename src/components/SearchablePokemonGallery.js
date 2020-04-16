import React from "react";
import "../App.css";

import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchHeader from "./SearchHeader";
import PowerFilterHeader from "./PowerFilterHeader";
import PokemonGallery from "./PokemonGallery";
import POKEMON from "../pokemon/pokemon";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      pokemonData: [],
      searchedPokemonList: [],
      filteredPokemonList: [],
      finalPokemonList: [],
      errorMessage: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      pokemonData: [...POKEMON],
      searchedPokemonList: [...POKEMON],
      filteredPokemonList: [...POKEMON],
      finalPokemonList: [...POKEMON],
    });
    axios(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then((res) => {
        this.setState({
          /*           pokemonData: res.data,
          searchedPokemonList: res.data,
          filteredPokemonList: res.data,
          finalPokemonList: res.data, */

          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Please Try Again" });
        this.setState({ isLoading: false });
      });
  }

  setSearchedList = (searchedPokemon) => {
    this.setState(
      {
        searchedPokemonList: [...searchedPokemon],
      },
      function () {
        this.setFinalList();
      }
    );
  };

  setFilteredList = (filteredPokemons) => {
    this.setState(
      {
        filteredPokemonList: [...filteredPokemons],
      },
      function () {
        this.setFinalList();
      }
    );
  };

  setFinalList() {
    const tempList = this.state.searchedPokemonList.filter((element) =>
      this.state.filteredPokemonList.includes(element)
    );
    this.setState({ finalPokemonList: [...tempList] });
  }

  showGallery() {
    return (
      <div className="gallery">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/pokemonImage/Pokemon-Logo.png"}
            alt="Header Logo"
          />
        </div>
        <SearchHeader
          pokemonData={this.state.pokemonData}
          setFilteredList={this.setSearchedList}
        />
        <PowerFilterHeader
          pokemonData={this.state.pokemonData}
          setFilteredList={this.setFilteredList}
        />
        <PokemonGallery pokemonData={this.state.finalPokemonList} />
      </div>
    );
  }

  render() {
    return <div>{this.state.isLoading ? <Loader /> : this.showGallery()}</div>;
  }
}

export default SearchablePokemonGallery;
