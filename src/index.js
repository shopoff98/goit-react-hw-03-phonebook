// index.js
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { theme } from "./components/constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
