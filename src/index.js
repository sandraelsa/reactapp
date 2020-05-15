import React from "react";
import ReactDOM from "react-dom";

import RegistrationForm from "./components/RegistrationForm";
import { GlobalStyle } from "./components/styles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <GlobalStyle />
    <RegistrationForm />
  </>,
  rootElement
);
