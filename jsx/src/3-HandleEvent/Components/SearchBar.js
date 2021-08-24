import React from "react";
import Clock from "../../time/TimeClass";
import "./AppStyle.css";
// NOTE // * onSubmit || onChange || onInputClick same as normal js events
class SearchBar extends React.Component {
  state = { term: "", onSubmitState: "" };
  // NOTE // * there is control element and uncontrolled element
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onInputClick(e) {
    e.preventDefault();
  }
  onInputSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui inverted segment">
        <Clock />
        <form className="ui form" onSubmit={this.onInputSubmit.bind(this)}>
          <label className="headText" htmlFor="searchBar">
            Search Your favorite Image
          </label>
          <input
            // * storing the value in state thats a stander in react
            // * and manipulate the value in the state like term: e.target.value.toUpperCase() make ever thing
            value={this.state.term}
            onChange={this.onInputChange}
            id="searchBar"
            className="field"
            type="text"
            placeholder="Search"
          />
          <input
            className="ui secondary button inverted"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
