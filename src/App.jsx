import { useEffect } from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

function App() {
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

  return (
    <>
      <div id="header" className="section">
        <div className="page-container">
          <div className="navbar">
            <div className="logo">
              <img src="./assets/vectors/logo.svg" alt="logo" />
            </div>
            <div className="nav">
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
                <a href="#0" className="btn">
                  <img src="./assets/vectors/nav-twitter.svg" alt="twiiter" />
                </a>
                <a href="#0" className="btn">
                  <img src="./assets/vectors/nav-discord.svg" alt="discord" />
                </a>
                <a href="#0" className="btn">
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
          <div className="page-container"></div>
        </div>
      </Fade>

      <Fade>
        <div id="about" className="section about">
          <img
            className="vector"
            src="./assets/imgs/about-us-bottom.png"
            alt="about-us"
          />
          <div className="page-container">
            <div className="about-container">
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-lg-7">
                    <Fade left>
                      <h2>About Us</h2>

                      <p>
                        The Tentacular genesis NFT collection will be set to go
                        live in April 2022. The Total Supply will be 5,556
                        Tentacular, and 2,778 Cave Land. 2,228 Tentacular will
                        be male, and 2,228 will be female. <br />
                        Every mint will consist of 2 Tentacular and 1 Cave Land
                        bundled into one transaction. There will not be the
                        ability to mint less than 2 Tentacular. The hand drawn
                        genesis collection is randomly generated from over 200
                        different hand drawn traits, spanning across 7 different
                        attribute categories.
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
              <h2>Rarity</h2>
            </Fade>
            <img
              className="vector top"
              src="./assets/imgs/spikes.png"
              alt="spikes"
            />

            <div className="nft-cards">
              <div className="container-fluid px-0">
                <Fade bottom cascade>
                  <div className="row">
                    <div className="col-lg">
                      <div className="nft-card">
                        <h3>Merchant</h3>

                        <img src="./assets/imgs/nft-1.png" alt="nft" />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="nft-card">
                        <h3>Artisan</h3>

                        <img src="./assets/imgs/nft-2.png" alt="nft" />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="nft-card">
                        <h3>Knight</h3>

                        <img src="./assets/imgs/nft-3.png" alt="nft" />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="nft-card">
                        <h3>Noble</h3>

                        <img src="./assets/imgs/nft-4.png" alt="nft" />
                      </div>
                    </div>
                    <div className="col-lg">
                      <div className="nft-card">
                        <h3>Royal</h3>

                        <img src="./assets/imgs/nft-5.png" alt="nft" />
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
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>
                            Background <br /> (19)
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>Color (100)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>Eyes (X)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>Eye Accessory (X)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>
                            Head <br /> Accessory (X)
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>
                            Body <br /> Accessory (X)
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="category-card">
                        <div className="main">
                          <h3>Base (X)</h3>
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
              <h1>Team</h1>
            </Zoom>

            <div className="team-cards">
              <div className="container-fluid px-0">
                <Slide bottom cascade>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="team-card">
                        <img
                          src="./assets/imgs/team-mem-1.png"
                          alt="team-mem"
                        />
                        <h3>John doe</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <img
                          src="./assets/imgs/team-mem-2.png"
                          alt="team-mem"
                        />
                        <h3>John doe</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <img
                          src="./assets/imgs/team-mem-3.png"
                          alt="team-mem"
                        />
                        <h3>John doe</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="team-card">
                        <img
                          src="./assets/imgs/team-mem-4.png"
                          alt="team-mem"
                        />
                        <h3>John doe</h3>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div id="foot">
          <img className="logo" src="./assets/vectors/logo-bg.svg" alt="logo" />
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
