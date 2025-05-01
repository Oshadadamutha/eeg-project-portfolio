import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/project-page">
            Project Page ▾
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/week1">Week 1</Link></li>
              <li><Link to="/week2">Week 2</Link></li>
              <li><Link to="/week3">Week 3</Link></li>
              <li><Link to="/week4">Week 4</Link></li>
              <li><Link to="/week5">Week 5 and week 6</Link></li>
              <li><Link to="/week7">Week 7 and week 8</Link></li>
              <li><Link to="/week9">Week 9 and week 10</Link></li>
              <li><Link to="/week11">Week 11</Link></li>
              <li><Link to="/week12">Week 12</Link></li>
              <li><Link to="/week13">Week 13</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
