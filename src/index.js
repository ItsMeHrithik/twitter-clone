import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/App.css'

const Twitter = () => {
  return (
    <div className="tweet-page">
      <App />
    </div>
  );
};

ReactDOM.render(<Twitter />, document.getElementById("root"));
