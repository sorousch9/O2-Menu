import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/o2logo .png";
import logo2 from "../../assets/o2BL.png";
import { FaBars, FaTimes } from "react-icons/fa";
import filter from "../../assets/Ico/filter-circle-dollar.svg";
import house from "../../assets/Ico/house-laptop.svg";
import laptop from "../../assets/Ico/laptop-mobile.svg";
import mobile from "../../assets/Ico/mobile-signal-out.svg";
import tv from "../../assets/Ico/tv.svg";
import {
  BsCart2,
  BsPerson,
  BsSearch,
  BsPatchCheck,
  BsLightbulb,
} from "react-icons/bs";

import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={click ? "logo2 active" : "logo2"}>
          <img src={logo2} alt="logo2" />
        </div>

        <ul className={click ? "nav-menu-left active" : "nav-menu-left"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img className="icoL" src={mobile} alt="logo tv" />
              Mobilfunk
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img className="icoL" src={house} alt="logo tv" /> Internet
              zuhause
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img className="icoL" src={filter} alt="logo tv" /> Kombi-Angebote
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img className="icoL" src={tv} alt="logo tv" /> Tv & Extras
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img className="icoL" src={laptop} alt="logo tv" /> Geräte
            </Link>
          </li>
        </ul>

        <ul className={click ? "nav-menu-center active" : "nav-menu-center"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <BsSearch className="iconBootstrap" /> Suche
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <BsPatchCheck className="iconBootstrap" /> Warum O<sub>2</sub>
            </Link>
          </li>
        </ul>

        <ul className={click ? "nav-menu-right active" : "nav-menu-right"}>
          <li className="nav-item">
            <Link to="/" className={click ? "nav-linkR active" : "nav-linkR"}>
              <BsPerson className="iconBootstrap" /> Mein O<sub>2</sub>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={click ? "nav-linkR active" : "nav-linkR"}>
              <BsLightbulb className="iconBootstrap" /> Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={click ? "nav-linkR active" : "nav-linkR"}>
              <BsCart2 className="iconBootstrap" />
              Warenkorb
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={23} style={{ color: "black" }} />
          ) : (
            <FaBars size={30} style={{ color: "white" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
