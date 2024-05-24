import { Element } from "react-scroll";
import "./App.css";
import About from "./container/about/about";
import Contact from "./container/contacts/contact";
import Footer from "./container/footer/footer";
import Home from "./container/home/home";
import Navbar from "./container/navbar/navbar";
import Project from "./container/project/project";
import Skills from "./container/skills/skills";
import BackTop from "antd/es/float-button/BackTop";

function App() {
  return (
    <div className="App">
      <div>
        <BackTop />
        Scroll down to see the bottom-right
        <strong style={{ color: "rgba(64, 64, 64, 0.6)" }}> gray </strong>
        button.
      </div>
      <Navbar />
      <Element name="test1" className="element">
        <Home />
      </Element>
      <Element name="test2" className="element">
        <About />
      </Element>
      <Element name="test3" className="element">
        <Skills />
      </Element>
      <Element name="test4" className="element">
        <Project />
      </Element>
      <Element name="test5" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
