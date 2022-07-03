import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [charLimit, setCharlimit] = useState(50);
  const [fontsize, setFontsize] = useState(16);
  const [charCount, setCharcount] = useState(0);
  const [wordCount, setWordcount] = useState(0);
  const handleChange = (e) => {
    const text = e.target.value;

    //set no. of characters count
    setCharcount(text.length);
    //set no. of words count
    let w_count = 0;
    if (text.length > 0) {
      w_count = text.trim().split(" ").length;
    }
    setWordcount(w_count);
  };
  const handleCharLimitChange = (e) => {
    const value = e.target.value;
    setCharlimit(value);
  };
  const fontsizeChangeHandler = (e) => {
    setFontsize(e.target.value);
  };
  return (
    <div id="main">
      <h2>Font Size Picker</h2>
      <input
        type="range"
        id="fontSize-input"
        min="16px"
        max="32px"
        onChange={fontsizeChangeHandler}
      />
      <h3>word limit input</h3>
      <input
        type="number"
        id="char-limit-input"
        onChange={handleCharLimitChange}
        value={charLimit}
      />
      <br />
      <div>
        <textarea
          rows="4"
          style={{ fontSize: fontsize + "px" }}
          onChange={handleChange}
          maxLength={charLimit}
        />
      </div>
      <div id="word-counter">Total no. of words written {wordCount}</div>
      <div id="char-counter">Total no. of characters used {charCount}</div>
    </div>
  );
};

export default App;
// In this app we will be making a Word and Character counter app.
// First there needs to be a textarea element which will take the input
// from user.

// Below that element, create 2 divs with id="word-counter" and id="char-counter" respectively.
// #word-counter will show the number of words(empty space is not considered a word) and #char-counter will show the number of characters typed.

// Also make an input with id="char-limit-input" which takes a number which is the limit of characters we can type in.
// By default char limit should be 50.

// And the last input should be a slider input(with id ="fontSize-input") for taking the font size, default and min value should be 16px and max would be 32px.

// Apply the fontSize property to the textarea element.

