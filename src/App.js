import "./App.css";
import About from "./container/about/about";
import Contact from "./container/contacts/contact";
import Footer from "./container/footer/footer";
import Home from "./container/home/home";
import Navbar from "./container/navbar/navbar";
import Skills from "./container/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
