import "./App.css";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Findme from "./Pages/Findme";
function App() {
  return (
    <div>
      <div className="title">
        <h1>👋🏻 Welcome!!</h1>
      </div>
      <About />
      <Projects />
      <Findme />
    </div>
  );
}

export default App;
