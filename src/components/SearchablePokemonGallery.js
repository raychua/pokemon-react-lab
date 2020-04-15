import React from "react";
import "../App.css";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchHeader from "./SearchHeader";
import PokemonGallery from "./PokemonGallery";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      pokemonData: [],
      errorMessage: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then((res) => {
        this.setState({
          pokemonData: res.data,
        });
        this.setState({
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: "Please Try Again" });
        this.setState({ isLoading: false });
      });
  }

  searchPokemon = (searchText) => {
    this.setState({ search: searchText });
  };

  filterPokemon() {
    return this.state.pokemonData.filter((pokemon) => {
      return pokemon.name.english
        .toUpperCase()
        .includes(this.state.search.toUpperCase());
    });
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
        <SearchHeader searchPokemon={this.searchPokemon} />
        <PokemonGallery pokemonData={this.filterPokemon()} />
      </div>
    );
  }

  render() {
    return <div>{this.state.isLoading ? <Loader /> : this.showGallery()}</div>;
  }
}

export default SearchablePokemonGallery;
