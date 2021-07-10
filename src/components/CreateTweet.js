import React from "react";
import {v4 as uuidv4} from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <h2>Tweet your thoughts</h2>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="90"
        rows="2"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};
export default CreateTweet;
