import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/normalize.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import AuthProvider from "./context/auth";



const rootElement = document.getElementById("root");
ReactDom.render(<AuthProvider><App /></AuthProvider>, rootElement);
