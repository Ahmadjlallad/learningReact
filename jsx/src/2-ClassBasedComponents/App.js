import unsplash from "./../../API/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import CarsData from "./CarsData.json";
import "./AppStyle.css";
class App extends React.Component {
  state = { searchResults: CarsData }; // CarsData Initialize the state with an empty array is better for object types
  onSearchSubmit = async (term) => {
    const listOfImages = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    this.setState({ searchResults: listOfImages.data.results });
  };
  render = () => {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <a
          download="data.json"
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            JSON.stringify(this.state.searchResults)
          )}`}
        >
          click
        </a>
        <ImageList images={this.state.searchResults} />
      </div>
    );
  };
}
// NOTE //* See fetch() for the full options available, and more details.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export default App;
/*
// NOTE //* The fetch() API .
fetch(
  `https://api.unsplash.com/search/photos?query=${searchable}}`,
  {
    method: "GET",
    headers: {
      Authorization: `Client-ID vTZ3fhav1TidpRsWgFIux7UH1dcpYIBCYOE7OnJo-1s`,
    },
  }
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
  */
//* i could use new URLSearchParams({query: "mountains"}).toString() but literal string is better

// console.log(`https://api.unsplash.com/search/photos?query=mountains`);
