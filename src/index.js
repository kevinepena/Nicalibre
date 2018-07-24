import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import registerServiceWorker from "./registerServiceWorker";

const config = {
    apiKey: "AIzaSyDWKgnSKX0QgnmLN2PWFuDOwIxHCNEt-88",
    authDomain: "nica-633ff.firebaseapp.com",
    databaseURL: "https://nica-633ff.firebaseio.com",
    projectId: "nica-633ff",
    storageBucket: "nica-633ff.appspot.com",
    messagingSenderId: "151630291637"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
