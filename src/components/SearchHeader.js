import React from "react";
import "../App.css";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  enterText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <div className="searchgrid">
        <div className="left"></div>
        <div className="search">
          <span className="searchtext">Search Pokemon</span>
          <span className="searchfield">
            <input
              className="inputText"
              id="Search"
              type="text"
              placeholder="Type Pokemon Name Here"
              value={this.state.searchText}
              onChange={this.enterText}
            />
            <input
              type="button"
              className="inputButton"
              value="Search"
              onClick={() => this.props.searchPokemon(this.state.searchText)}
            />
          </span>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default SearchHeader;
