import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";


function App() {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const name = "Hrithik Mahadik";
  return (
    <div>
      <h1>Twitter by Hrithik</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}
export default App;
