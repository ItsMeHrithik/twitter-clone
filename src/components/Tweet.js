import React, { Component } from "react";

export default class Tweet extends Component {
  render() {

 const deleteTweet = () => {
     alert(`Tweet will be deleted`);
}

const likeTweet = () => {
    alert(`Tweet is Liked`);
}
    return (
      <div>
        <h2>UserName : {this.props.name}</h2>
        <h3>This will be a tweet</h3>
        <button onClick={likeTweet} >Like</button>
        <button onClick={deleteTweet}>Delete</button>
      </div>
    );
  }
}
