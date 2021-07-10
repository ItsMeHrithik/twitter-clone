import React, { Component } from "react";
import Tweet from "./Tweet";

export default class TweetList extends Component {
  render() {
    return (
      <div className="tweet-list">
        <Tweet name={this.props.name}/>
        <Tweet name={this.props.name}/>
        <Tweet name={this.props.name}/>
      </div>
    );
  }
}
