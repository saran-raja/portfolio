import "./App.css";
import Contact from "./contacts/contact";
import Home from "./container/home/home";
import Navbar from "./container/navbar/navbar";
import Skills from "./container/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
