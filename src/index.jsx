import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.scss";
import Theme from "./components/Templates/Default";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
