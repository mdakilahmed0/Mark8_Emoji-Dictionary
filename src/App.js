import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️‍🩹": "Heart break",
  "😑": "Annoyance",
  "❤️ ": "Love",
  "🍎": "Apple",
  "🍑": "Peach",
  "🌽": "Maize",
  "🍔": "Burger",
  "🤬": "Shit"
};

var emojisWeAdded = Object.keys(emojiDictionary);
var name = "to EmoD";

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Check to other site, We don't add shitty emojis...";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: "blue" }}>{name}</span>
      </h1>
      <input onChange={emojiInputHandler} />
      <div id="output">{meaning}</div>
      <h2>Emojis we have in our db...</h2>
      {emojisWeAdded.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "6px", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
