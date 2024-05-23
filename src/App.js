import "./App.css";
import About from "./container/about/about";
import Contact from "./container/contacts/contact";
import Footer from "./container/footer/footer";
import Home from "./container/home/home";
import Navbar from "./container/navbar/navbar";
import Project from "./container/project/project";
import Skills from "./container/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
