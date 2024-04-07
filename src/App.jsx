import About from "./components/About";
import Blogs from "./components/Blogs";
import ButtonUp from "./components/ButtonUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <ButtonUp />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
