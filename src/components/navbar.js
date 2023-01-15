import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blogs" className={navLinkText}>
            Blogs
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/articles" className={navLinkText}>
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
