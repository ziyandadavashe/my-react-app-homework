import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        {/* Aquí le pasas la ciudad por defecto */}
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ziyanda-davashe-a3919b1a/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ziyanda Davashe
          </a>{" "}
          and is
          <a
            href="https://github.com/ziyandadavashe/my-react-app-homework"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://extraordinary-scone-cf661a.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
