import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" },
];

export default class Test extends React.Component {
  mapNameToLi = (usersNameAndId) => {
    return usersNameAndId.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
  };
  render() {
    return <ul>{this.mapNameToLi(users)}</ul>;
  }
}
