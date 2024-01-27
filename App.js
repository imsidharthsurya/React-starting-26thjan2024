import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//   React.createElement(
//     "div",
//     { id: "child1" },
//     [React.createElement("h1", {}, "This is 1st and last heading of child1"),React.createElement("h2",{},"This is 2nd heading of child1")]
//   ),React.createElement(
//     "div",
//     { id: "child2" },
//     [React.createElement("h1", {}, "This is 1st heading of child2"),React.createElement("h2",{},"This is 2nd heading of child2")]
//   )]
// );

//react element using jsx
// const jsxheading=<h1 id="head1">This is jsx heading</h1>
// console.log(jsxheading)

//functional component
const Title=()=><h1>Learning React component</h1>;
const Middle=()=>{
    return (<div id="container">
        <Title/>
        <p>Made by sidharth 27-01-2024</p>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Middle/>)