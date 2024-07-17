import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;