import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this points to the correct CSS file with Tailwind imports
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
