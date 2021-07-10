import React, { Component } from "react";

export default class Tweet extends Component {
  render() {
    return (
      <div>
        <h2>UserName : {this.props.name}</h2>
        <h3>This will be a tweet</h3>
        <button>Like</button>
        <button>Delete</button>
      </div>
    );
  }
}
