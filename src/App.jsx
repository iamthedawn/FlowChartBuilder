import { createRoot } from "react-dom/client";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
