import React from "react";
import Tweet from "./Tweet";
import '../styles/App.css'

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="twitter-tweet">
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          setTweets={setTweets}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
