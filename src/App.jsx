import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Experience from "./Pages/Projects";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Hangman from "./Pages/Game";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/game" element={<Hangman />} />
      </Routes>
    </div>
  );
}

export default App;
