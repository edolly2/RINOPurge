import "../styles/HeaderComponent.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/rino-logo-2.png";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="RINO Purge Brand" />
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                Our Purpose
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/news">
                RINO News
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/list">
                RINO List
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <button>
                <Link to="/donate">Donate</Link>
              </button>
            </li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger Menu Icon */}
        </div>
      </div>
      <Outlet />
    </header>
  );
};

export default HeaderComponent;
