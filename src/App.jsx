import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Week1 from './components/Week1';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/week1" element={<Week1 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
