import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <EasterEgg />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
