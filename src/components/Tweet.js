import React, { Component } from "react";

export default class Tweet extends Component {
  render() {
    const deleteTweet = () => {
      this.props.setTweets(
        this.props.tweets.filter((state) => state.id !== this.props.tweet.id)
      );
    };

    const likeTweet = () => {
      alert(`Tweet is Liked`);
    };
    return (
      <div>
        <h2>UserName : {this.props.name}</h2>
        <h3>{this.props.tweet.message}</h3>
        <button onClick={likeTweet}>Like</button>
        <button onClick={deleteTweet}>Delete</button>
      </div>
    );
  }
}
