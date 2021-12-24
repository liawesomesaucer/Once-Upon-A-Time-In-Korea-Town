import "./styles.css";
import { useState } from "react";

const isLetter = (str) => {
  return str?.length === 1 && str.match(/[a-z]/i);
};

export default function App() {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    if (
      text.length === 0 ||
      (text[text.length - 1] === " " &&
        isLetter(e.target.value[e.target.value.length - 1]))
    ) {
      setText(e.target.value.slice(0, e.target.value.length - 2) + " 🅱️");
    } else {
      setText(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1> 🅱️nce 🅱️pon 🅱️ 🅱️ime 🅱️n 🅱️orea 🅱️own</h1>
      <h2> 🅱️ype 🅱️omething</h2>
      <input type="text" onChange={handleChangeText} value={text} />
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Copy
      </button>
    </div>
  );
}
