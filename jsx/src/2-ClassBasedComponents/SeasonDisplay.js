import React from "react";
import SeasonRender from "./SeasonRender.js";
// GeoLocationAsync();
// NOTE: I created this function but the instructor did the class approach

/*
const App1 = (props) => {
  return <div className="text container">{props.pos}</div>;
};

const renderReact = async () => {
  try {
    const position = await new Promise(function (resolved, reject) {
      return navigator.geolocation.getCurrentPosition(
        (position) => {
          resolved(position);
        },
        (rejects) => reject(rejects)
      );
    });
    if (position.code === 1) throw new Error(position.message);

    console.log(position);
    ReactDOM.render(
      <React.StrictMode>
        <App1
          pos={`this is my longitude position ${position.coords.longitude} come say hi if you ner`}
        />
      </React.StrictMode>,
      document.getElementById("root")
    );
  } catch (err) {
    console.log(err);
    ReactDOM.render(
      <React.StrictMode>
        <App1 pos={err.message} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
};
*/
// NOTE class based approach
// * to solve the Js xlm or Geo location we need to use state
// * state only works with class based components but we can use it with functions hoke
// * ! state is a plain object we create it with the options
// * state must be initialized with an object
// FIXME
// !! and can only update it with setState its setter method
// console.log(React);
const App = class extends React.Component {
  state = { lat: null, errMessene: "" };
  /*
  constructor(props) {
    // NOTE // ! we must have to have super(props)
    super(props);
    // NOTE // ! initialize state

    // this.render();
  }*/
  // NOTE // ! we must have to have render method
  /*//////////////////component life cycle methods///////////////////////*/
  // * componentDidMount call when first render componentDidMount() {}
  // * then when component get updated will invoke componentDidUpdate() {}
  //  * componentDidMount() {} is better for data fetching or loading
  // * right before componentDidUpdate() {} render() {} will invoke
  // * componentWillUnmount() {} when component get removed from DOM
  //  * use for clean up resources

  componentDidMount() {
    this.getGeoLocation();

    //  * componentDidMount() {} is better for data fetching or loading
  }
  componentDidUpdate() {}
  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // NOTE // ! update state with setState, notice here update
        // NOTE // ! the update using object assign not using = vary important
        this.setState({ lat: position.coords.latitude });
      },
      (rejects) => this.setState({ errMessene: rejects.message })
    );
  }
  render() {
    if (!this.state.errMessene && this.state.lat)
      return <SeasonRender lat={this.state.lat} />;
    if (this.state.errMessene && !this.state.lat)
      return <div className="text container">{this.state.errMessene}</div>;
    return <div className="text container">{"Loading"}</div>;
  }
};
export default App;
