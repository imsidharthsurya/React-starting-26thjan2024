import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "This is 1st and last heading of child1"),React.createElement("h2",{},"This is 2nd heading of child1")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "This is 1st heading of child2"),React.createElement("h2",{},"This is 2nd heading of child2")]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
