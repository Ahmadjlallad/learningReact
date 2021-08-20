// * Create a react component

// * babel will convert jsx to js
// * behind the scenes, react will convert jsx to js
/*
const App = () => #__PURE__
? React.createElement("div", null, "Hi There!");
*/
/*
in HTML normal 


*/
import React from "react";
const firstProj = function () {
  const btn = "123";
  const btn2 = ["Click ", " Me!"];
  return (
    <div>
      <label htmlFor="name" className="label">
        {" "}
        Enter Name:{" "}
      </label>
      <input type="text" name="name" id="name" />
      <button
        // * we can't do style like this
        // style="background-color: aquamarine; color: wheat"
        // * this is the right way to do it
        // *  pass a js object to style and convert - to camel case
        style={{ backgroundColor: "blue", color: "white" }}
      >
        {btn2}
        {btn}
      </button>
    </div>
  );
};
export default firstProj;
