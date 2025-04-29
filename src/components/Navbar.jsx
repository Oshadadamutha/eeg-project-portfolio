import '../styls/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>

        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="/project-page">
            Project Page ▾
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/week1">Week 1</a></li>
              <li><a href="/week2">Week 2</a></li>
              <li><a href="/week3">Week 3</a></li>
              <li><a href="/week4">Week 4</a></li>
              <li><a href="/week5">Week 5 and week 6</a></li>
              <li><a href="/week7">Week 7 and week 8</a></li>
              <li><a href="/week9">Week 9 and week 10</a></li>
              <li><a href="/week11">Week 11</a></li>
              <li><a href="/week12">Week 12</a></li>
              <li><a href="/week13">Week 13</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
