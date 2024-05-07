import './index.css';
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import About from './components/About';
import Works from './components/Works';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ButtonUp from './components/ButtonUp';
import QuickContact from './components/QuickContact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
      <ButtonUp />
      <QuickContact />
    </div>
  );
}

export default App;
