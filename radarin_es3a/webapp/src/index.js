import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import reportWebVitals from "./reportWebVitals";

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App/>, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))s
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
