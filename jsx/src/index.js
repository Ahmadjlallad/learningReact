// * Import the react and  react dom libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./3-HandleEvent/Components/App";
/*
NOTE: // * this is module from the 1-LearningProps
import commentsProj from "./1-LearningProps/commentsProj";
import firstProj from "./1-LearningProps/firstProj.js";
*/

/*
NOTE: // * this is module from the 2-ClassBasedComponents
import App from "./2-ClassBasedComponents/SeasonDisplay";
*/
// * we should use className instead of class
// * react will join const btn2 = ["Click My!", "Click Me!"]; automatically
// * and we have to replace for to htmlFor

// const App = (props) => {
//   return <div className="text container">{props.pos}</div>;
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
