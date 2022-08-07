import react from "react";
import reactDom from "react-dom/client";

//Create a react app from scratch.

let root = reactDom.createRoot(document.getElementById("root"));

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

root.render(
  <div>
    <h1> Modules to complete: </h1>
    <ul>
      <li>React</li>
      <li>solidity</li>
      <li>wordPress</li>
    </ul>
  </div>
);
