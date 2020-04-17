import React from "react";
import "./SearchHeader.css";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      search: "",
    };
  }

  startSearch = () => {
    console.log("this.state.search in startSearch:" + this.state.search);
    this.setState({ search: this.state.searchText }, function () {
      this.searchPokemon();
    });
  };

  searchPokemon = () => {
    const originalPokemonList = [...this.props.pokemonData];
    const filteredPokemons = originalPokemonList.filter((pokemon) => {
      return pokemon.name.english
        .toUpperCase()
        .includes(this.state.search.toUpperCase());
    });

    this.props.setFilteredList(filteredPokemons);
  };

  enterText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  keyPress = (event) => {
    if (event.keyCode === 13) {
      this.startSearch();
    }
  };

  render() {
    return (
      <div className="searchgrid">
        <div className="left"></div>
        <div className="search">
          <span className="searchtext">Search Pokemon</span>
          <span className="searchfield">
            <input
              aria-label="pokemon-search"
              className="inputText"
              id="Search"
              type="text"
              placeholder="Type Pokemon Name Here"
              value={this.state.searchText}
              onChange={this.enterText}
              onKeyDown={this.keyPress}
            />
            <input
              type="button"
              className="inputButton"
              value="Search"
              onClick={() => this.startSearch()}
            />
          </span>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default SearchHeader;
