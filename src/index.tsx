import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const client = createClient({
  url: "https://countries.trevorblades.com/",
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider value={client}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
