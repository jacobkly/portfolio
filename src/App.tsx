import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
