import React, { useState } from "react";
import "./Game.css";

const Hangman = () => {
  const words = ["javascript", "react", "node", "hangman", "developer"];
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [customWord, setCustomWord] = useState("");

  const pickRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const handleCustomWord = (e) => {
    setCustomWord(e.target.value);
  };

  const startCustomGame = () => {
    if (customWord.trim() !== "") {
      setSelectedWord(customWord.toLowerCase());
      setGuessedLetters([]);
      setMistakes(0);
      setGameOver(false);
      setCustomWord(""); // Limpia el campo de entrada
    }
  };

  const selectLetter = (letter) => {
    if (selectedWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setMistakes(mistakes + 1);
    }
  };

  const wordGuessed = () => {
    return selectedWord
      .split("")
      .every((letter) => guessedLetters.includes(letter));
  };

  const newGame = () => {
    const newWord = pickRandomWord();
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setMistakes(0);
    setGameOver(false);
  };

  React.useEffect(() => {
    if (mistakes >= 6) {
      setGameOver(true);
    }

    if (wordGuessed()) {
      setGameOver(true);
    }
  }, [mistakes, guessedLetters]);

  return (
    <div className="hangman_container">
      <h1>Hangman Game</h1>
      <div className="imagecustom_container">
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1698769731/replica/db23518eb222a30814f71385f59200f3-removebg-preview_rtkrhk.png"
          alt="game illustration"
        ></img>
        <div className="customgame_container">
          <label>
            Enter a custom word:
            <input
              className="custom_input"
              type="text"
              value={customWord}
              onChange={handleCustomWord}
            />
          </label>
          <button className="button_custom" onClick={startCustomGame}>
            Start Custom Game
          </button>
        </div>
      </div>
      <div id="hangman">
        <span
          className={`hangman-part hangman-part-1 ${
            mistakes > 0 ? "show" : ""
          }`}
        >
          😵‍💫
        </span>
        <span
          className={`hangman-part hangman-part-2 ${
            mistakes > 1 ? "show" : ""
          }`}
        >
          🤥
        </span>
        <span
          className={`hangman-part hangman-part-3 ${
            mistakes > 2 ? "show" : ""
          }`}
        >
          😵
        </span>
        <span
          className={`hangman-part hangman-part-4 ${
            mistakes > 3 ? "show" : ""
          }`}
        >
          🤕
        </span>
        <span
          className={`hangman-part hangman-part-5 ${
            mistakes > 4 ? "show" : ""
          }`}
        >
          🤧
        </span>
        <span
          className={`hangman-part hangman-part-6 ${
            mistakes > 5 ? "show" : ""
          }`}
        >
          😰
        </span>
      </div>
      <div className="attems_container">
        <p>Attempts left: {6 - mistakes}</p>
        <div className="letters_container">
          {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
            <button
              className="button_letter"
              key={letter}
              disabled={guessedLetters.includes(letter) || gameOver}
              onClick={() => selectLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      {gameOver ? (
        <div className="result_container">
          <p>{wordGuessed() ? "You won!" : "You lost!"}</p>
          <button className="button_newgame" onClick={newGame}>
            New Game
          </button>
        </div>
      ) : (
        <div className="word_to_guess">
          {selectedWord.split("").map((letter, index) => (
            <span key={index}>
              {guessedLetters.includes(letter) ? letter : "_"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hangman;
