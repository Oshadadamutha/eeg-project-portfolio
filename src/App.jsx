import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Week1 from './components/Week1';

function App() {
  return (
    <dev>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/week1' element={<Week1 />} />
      </Routes>
    </dev>
  );
}

export default App;