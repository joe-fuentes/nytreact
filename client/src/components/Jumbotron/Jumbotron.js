import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1 class="underline">New York Times Article Scrubber</h1>
    <h3>Search for and annotate articles of interest!</h3>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://developers.nytimes.com/"
    >
      Powered by The New York Times API
    </a>
  </div>
);

export default Jumbotron;
