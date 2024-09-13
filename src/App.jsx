
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Hero from './components/Home/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import "@fontsource/taviraj"; // Defaults to weight 400
import "@fontsource/taviraj/400.css"; // Specify weight
import "@fontsource/taviraj/400-italic.css"; 
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';
import Career from './components/Career/Career';
function App() {
  

  return (
    <>
      <div className='root overflow-clip'>
      <Router>
        <Nav/>
        
        <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/gallery" element={<Gallery/>} />

      <Route path="/contact" element={<Contact/>} />
          </Routes>
    <Footer/>
        </Router>

        </div>
    </>
  )
}

export default App
