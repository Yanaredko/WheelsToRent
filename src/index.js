import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
import { ThemeProvider } from "@emotion/react";
import { Global } from "../src/GlobalStyles"

const theme = {
  colors: {
    primary: "#3470FF",
    primaryHover: "#0B44CD",
    white: "#FFFFFF",
    black: "#121417",
    grey: "#1214177f",
    lightGrey: "#1214170D",
  }
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/WheelsToRent">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        <Global />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

