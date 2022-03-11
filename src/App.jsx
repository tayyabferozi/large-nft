import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function App() {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      let navbar = document.querySelector("#header");

      let scrolledVal = document.querySelector("html").scrollTop;

      if (scrolledVal > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }, []);

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
          <h2 className="logo stroked">Tentacular</h2>
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
          <a href="https://twitter.com/tentacularnft" className="btn">
            <img src="./assets/vectors/nav-twitter.svg" alt="twiiter" />
          </a>
          <a href="https://discord.gg/tentacular" className="btn">
            <img src="./assets/vectors/nav-discord.svg" alt="discord" />
          </a>
          <a href="https://medium.com/@tentacularnft/" className="btn">
            <img src="./assets/vectors/nav-social-3.svg" alt="nav-social-3" />
          </a>
        </div>
      </div>
      <div id="header" className="section">
        <div className="page-container">
          <div className="navbar">
            <div className="logo">
              <h2 className="logo stroked">Tentacular</h2>
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
                <a href="https://twitter.com/tentacularnft" className="btn">
                  <img src="./assets/vectors/nav-twitter.svg" alt="twiiter" />
                </a>
                <a href="https://discord.gg/tentacular" className="btn">
                  <img src="./assets/vectors/nav-discord.svg" alt="discord" />
                </a>
                <a href="https://medium.com/@tentacularnft/" className="btn">
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

      <Fade>
        <div id="landing" className="section landing">
          <img
            className="w-100"
            src="./assets/imgs/bg-hero.png"
            alt="bg-hero"
          />
        </div>
      </Fade>

      <Fade>
        <div id="about" className="section about">
          <img
            className="vector"
            src="./assets/vectors/about-us-bottom.svg"
            alt="about-us"
          />
          <img
            className="vector-bg"
            src="./assets/imgs/about-us-board.png"
            alt="about-us"
          />
          <div className="page-container">
            <div className="about-container">
              <div className="container-fluid px-0">
                <div className="main-row row">
                  <div className="col-lg-7">
                    <Fade left>
                      <h2>About Tentacular NFT</h2>

                      <p>
                        5,556 Tentacular have been forced out of their beloved
                        homes on Planet Berrylius and are now migrating to the
                        Ethereum blockchain.
                        <img
                          className="btn d-block my-3"
                          src="./assets/vectors/about-us-btn.svg"
                          alt="btn"
                        />
                        The Tentacular have migrated together as pairs. When you
                        adopt a Tentacular couple, supplementary Cave Land is
                        provided, a safe new place for your Tentacular to call
                        home.
                      </p>
                    </Fade>
                  </div>
                  <div className="col-lg-5">
                    <Fade right>
                      <img
                        className="nft w-100"
                        src="./assets/imgs/nft-green.png"
                        alt="nft"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div id="rarity" className="section">
        <div className="page-container">
          <div className="rarity-container">
            <Fade bottom>
              <div>
                <p className="fs-22 text-white text-center mb-4">
                  Each NFT is randomly generated from an assortment of over 200+
                  hand-drawn traits distributed amongst 7 attribute categories.
                  Not all Tentacular are equally strong in their harvest. The
                  rarity will determine the harvesting ability of your
                  Tentacular on their newly arable land.
                </p>
                <h2>Rarity</h2>
              </div>
            </Fade>

            <div className="nft-cards">
              <div className="container-fluid px-0">
                <Fade bottom cascade>
                  <div className="main-row row gy-4">
                    <div className="col-sm-6 col-md-3 col-lg">
                      <div className="nft-card">
                        <div className="main">
                          <h3>Merchant</h3>

                          <img src="./assets/vectors/nft-1.svg" alt="nft" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg">
                      <div className="nft-card">
                        <div className="main">
                          <h3>Artisan</h3>

                          <img src="./assets/vectors/nft-2.svg" alt="nft" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg">
                      <div className="nft-card">
                        <div className="main">
                          <h3>Knight</h3>

                          <img src="./assets/vectors/nft-3.svg" alt="nft" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg">
                      <div className="nft-card">
                        <div className="main">
                          <h3>Noble</h3>

                          <img src="./assets/vectors/nft-4.svg" alt="nft" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg">
                      <div className="nft-card">
                        <div className="main">
                          <h3>Royal</h3>

                          <img src="./assets/vectors/nft-5.svg" alt="nft" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div className="categories-container">
            <Fade bottom>
              <h2>Attribute Categories</h2>
            </Fade>

            <div className="categorie-cards">
              <div className="container-fluid px-0">
                <Slide bottom cascade>
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>Background</h3>

                          <img
                            src="./assets/vectors/category-1.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>Body</h3>

                          <img
                            src="./assets/vectors/category-2.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>Eyes </h3>

                          <img
                            src="./assets/vectors/category-3.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>Eye Accessory</h3>

                          <img
                            src="./assets/vectors/category-4.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>
                            Head <br /> Accessory
                          </h3>

                          <img
                            src="./assets/vectors/category-5.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>
                            Body <br /> Accessory
                          </h3>

                          <img
                            src="./assets/vectors/category-6.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="category-card">
                        <div className="main">
                          <h3>Base</h3>

                          <img
                            src="./assets/vectors/category-7.svg"
                            alt="category"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green">
        <div id="team" className="section">
          <img
            className="vector bottom"
            src="./assets/imgs/spikes-2.png"
            alt="spikes"
          />
          <div className="page-container">
            <Zoom>
              <h1>Core Team</h1>
            </Zoom>

            <div className="team-cards">
              <div className="container-fluid px-0">
                <Slide bottom cascade>
                  <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="team-card">
                        <img
                          src="./assets/vectors/team-mem-1.svg"
                          alt="team-mem"
                        />
                        <h3>TentacleMaster</h3>
                        <p className="text-white stroked-sm fs-20">
                          Founder and Project Lead
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team-card">
                        <img
                          src="./assets/vectors/team-mem-2.svg"
                          alt="team-mem"
                        />
                        <h3>LordTentacles</h3>
                        <p className="text-white stroked-sm fs-20">
                          Founder and Project Lead
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team-card">
                        <img
                          src="./assets/vectors/team-mem-3.svg"
                          alt="team-mem"
                        />
                        <h3>HJ</h3>
                        <p className="text-white stroked-sm fs-20">
                          Founder and Project Lead
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team-card">
                        <img
                          src="./assets/vectors/team-mem-4.svg"
                          alt="team-mem"
                        />
                        <h3>0xbb</h3>
                        <p className="text-white stroked-sm fs-20">
                          Founder and Project Lead
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>

                <h2 className="sub-title stroked text-white mt-5">
                  Moderation and Marketing
                </h2>

                <div className="row justify-content-center mt-5">
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card">
                      <img
                        src="./assets/vectors/team-mem-2.svg"
                        alt="team-mem"
                      />
                      <h3>TheNFTChief</h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="team-card">
                      <img
                        src="./assets/vectors/team-mem-3.svg"
                        alt="team-mem"
                      />
                      <h3>Darth Lini</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="foot">
          <h2 className="logo stroked">Tentacular</h2>
          <img
            className="vector"
            src="./assets/imgs/bg-foot.png"
            alt="bg-foot"
          />
        </div>
      </div>
    </>
  );
}

export default App;
