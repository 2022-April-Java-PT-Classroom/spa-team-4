import Nasa from "./Nasa";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import style from "./style.module.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nasa />
  </StrictMode>
);