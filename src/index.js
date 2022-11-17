import React from "react";
import ReactDOM from "react-dom/client";
import Flashcard from "./containers/Flashcard";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.clear();
root.render(
  <React.StrictMode>
    <Flashcard />
  </React.StrictMode>
);