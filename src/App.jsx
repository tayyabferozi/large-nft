import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import Landing from "./components/Landing";
import About from "./components/About";
import Rarity from "./components/Rarity";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

function App() {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavActive((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={clsx({ close: !isSideNavActive }, "dark-overlay")}
        onClick={toggleSideNav}
      ></div>
      <div className={clsx({ close: !isSideNavActive }, "sidenav")}>
        <div onClick={toggleSideNav} className="close">
          &times;
        </div>

        <Link to="/">
          {/* <h2 className="logo stroked">Tentacular</h2> */}
          <div className="logo">
            <img className="logo" src="./assets/imgs/logo.png" alt="logo" />
          </div>
        </Link>

        <Link onClick={toggleSideNav} offset={0} smooth={true} to="landing">
          Home
        </Link>
        <Link onClick={toggleSideNav} offset={-60} smooth={true} to="about">
          About
        </Link>
        <Link onClick={toggleSideNav} offset={50} smooth={true} to="rarity">
          Rarity
        </Link>
        <Link onClick={toggleSideNav} offset={-100} smooth={true} to="roadmap">
          Roadmap
        </Link>
        <Link onClick={toggleSideNav} offset={80} smooth={true} to="team">
          Team
        </Link>
        <div className="d-flex mt-4 social">
          <a
            href="https://twitter.com/tentacularnft"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <img src="./assets/vectors/nav-twitter.svg" alt="twiiter" />
          </a>
          <a
            href="https://discord.gg/tentacular"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <img src="./assets/vectors/nav-discord.svg" alt="discord" />
          </a>
          <a
            href="https://medium.com/@tentacularnft/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <img src="./assets/vectors/nav-social-3.svg" alt="nav-social-3" />
          </a>
        </div>
      </div>
      <div id="header" className="section">
        <div className="page-container">
          <div className="navbar">
            <div className="logo">
              {/* <h2 className="logo stroked">Tentacular</h2> */}
              <img className="logo" src="./assets/imgs/logo.png" alt="logo" />
            </div>
            <div className="menu show-sm" onClick={toggleSideNav}>
              <span />
              <span />
              <span />
            </div>
            <div className="nav hide-sm">
              <div className="links">
                <Link offset={0} smooth={true} to="landing">
                  Home
                </Link>
                <Link offset={-60} smooth={true} to="about">
                  About
                </Link>
                <Link offset={50} smooth={true} to="rarity">
                  Rarity
                </Link>
                <Link offset={-100} smooth={true} to="roadmap">
                  Roadmap
                </Link>
                <Link offset={80} smooth={true} to="team">
                  Team
                </Link>
              </div>

              <div className="social">
                <a
                  href="https://twitter.com/tentacularnft"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <img src="./assets/vectors/nav-twitter.svg" alt="twiiter" />
                </a>
                <a
                  href="https://discord.gg/tentacular"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <img src="./assets/vectors/nav-discord.svg" alt="discord" />
                </a>
                <a
                  href="https://medium.com/@tentacularnft/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <img
                    src="./assets/vectors/nav-social-3.svg"
                    alt="nav-social-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green">
        <Landing />
        <About />
      </div>
      <Rarity />
      <Roadmap />
      <Team />
    </>
  );
}

export default App;
