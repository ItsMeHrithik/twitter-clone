import React from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from './components/TweetList';

function App() {
  const name = "Hrithik Mahadik";
  return (
    <div>
      <h1>Twitter by Hrithik</h1>
      <CreateTweet />
      <TweetList name={name}/>
    </div>
  );
}
export default App;
