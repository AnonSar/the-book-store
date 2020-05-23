import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = Props => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <Link to="/" className="book-logo">
            <i className="fas fa-book-open"></i>
          </Link>
          <ul className="categories">
            <li>
              <NavLink to="/book/category/HTML">HTML</NavLink>
            </li>
            <li>
              <NavLink to="/book/category/CSS">CSS</NavLink>
            </li>
            <li>
              <NavLink to="/book/category/JavaScript">JavaScript</NavLink>
            </li>
            <li>
              <NavLink to="/book/category/React">React</NavLink>
            </li>
            <li>
              <NavLink to="/book/category/Node.js">Node.js</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
