import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />

        <footer>
          This project was coded by {" "}
          <a
            href=""


            
            target="_blank"
            rel="noopener noreferrer"
          >
            Faith Letsoara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/faithlets/react-weather/blob/main/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://beautiful-sprite-654b94.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
      </div>
   
  );
}