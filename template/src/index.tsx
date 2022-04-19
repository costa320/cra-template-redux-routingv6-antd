import React from "react";
import ReactDOM from "react-dom/client";
/* ROUTING  */
import { BrowserRouter } from "react-router-dom";
/* REDUX */
import { Provider } from "react-redux";
import store from "./redux/store";
/* COMPONENTS */
import App from "./App";
/* EXTRA */
import reportWebVitals from "./reportWebVitals";

/* STYLE */
import "./assets/styles/index.css";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
