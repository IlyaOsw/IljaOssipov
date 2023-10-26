import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import Particle from "./components/Common/Particle";
import Animation from "./components/Common/Animation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Animation />
    <Particle />
  </React.StrictMode>
);
