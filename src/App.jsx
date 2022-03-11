import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import FaqItem from "./components/FaqItem";

function App() {
  const [isSideNavActive, setIsSideNavActive] = useState(false);
  const [roadmapRevealedState, setRoadmapRevealedState] = useState(1);

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

  const showMoreRoadmap = () => {
    setRoadmapRevealedState((prevState) => {
      if (prevState === 2) {
        return 2;
      }

      return (prevState += 1);
    });
  };

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
                          onClick={() => {
                            window
                              .open(
                                "https://medium.com/@tentacularnft/planet-berrylius-f62fcc4107ce",
                                "_blank"
                              )
                              .focus();
                          }}
                          className="c-pointer btn d-block my-3"
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

      <div className="ox-hidden">
        <div id="roadmap-top">
          <img className="w-100" src="./assets/imgs/spikes.png" alt="spikes" />
          <img
            src="./assets/vectors/roadmap-map-top.svg"
            className="w-100"
            alt="roadmap"
          />

          <div id="roadmap-wrap">
            <img
              className="w-100 gif"
              src="./assets/imgs/jins.gif"
              alt="jins"
            />
            <div className="jins">
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-1.svg"
                alt="jin"
              />
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-2.svg"
                alt="jin"
              />
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-3.svg"
                alt="jin"
              />
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-4.svg"
                alt="jin"
              />
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-5.svg"
                alt="jin"
              />
              <img
                className="jin"
                src="./assets/vectors/caves-and-stones/jin-6.svg"
                alt="jin"
              />
            </div>
            <div className="roadmap-section-container">
              <div className="section" id="roadmap">
                <div
                  className={clsx("page-container", {
                    three: roadmapRevealedState === 2,
                  })}
                >
                  <h1 className="text-center">Roadmap</h1>

                  <div
                    onClick={showMoreRoadmap}
                    className={clsx(
                      "section mt-5",
                      {
                        one: roadmapRevealedState === 0,
                      },
                      {
                        two: roadmapRevealedState === 1,
                      },
                      {
                        three: roadmapRevealedState === 2,
                      }
                    )}
                    id="roadmap-sm"
                  >
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>
                      <h3>Website Launch</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Partnerships</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Tentacular Couple and Cave Land Mint</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>OpenSea and Rarity Tools Verification</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>
                        Fund Community Wallet and Marketing Wallet with 10 ETH
                        each
                      </h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Tentacular Dashboard</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>
                        Launch of Berry-$BY and Tentacular Staking Rewards
                      </h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Berry Shop for Collaborations and Merchandise</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Integration of Community Alpha Partner</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>On-chain Compounding Berry Juicer </h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Upgrade your Tentacular with $BY</h3>
                    </div>
                    <div className="item">
                      <div className="img">
                        <img
                          src="./assets/vectors/caves-and-stones/cave-1.svg"
                          alt="cave"
                        />
                      </div>

                      <h3>Endangermint V0</h3>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "roadmap-main",
                      {
                        one: roadmapRevealedState === 0,
                      },
                      {
                        two: roadmapRevealedState === 1,
                      },
                      {
                        three: roadmapRevealedState === 2,
                      }
                    )}
                    onClick={showMoreRoadmap}
                  >
                    {/* <Fade bottom cascade> */}
                    <div className="caves">
                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-1.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-2.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-3.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-4.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-5.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-6.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-7.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-8.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-9.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-10.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-11.svg"
                        alt="cave"
                      />

                      <img
                        className="cave"
                        src="./assets/vectors/caves-and-stones/cave-12.svg"
                        alt="cave"
                      />
                    </div>
                    {/* </Fade> */}
                    {/* <Fade cascade> */}
                    <div className="stones">
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-1.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-2.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-3.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-4.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-5.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-6.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-7.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-8.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-9.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-10.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-11.svg"
                        alt="stone"
                      />
                      <img
                        className="stones"
                        src="./assets/vectors/caves-and-stones/stones-12.svg"
                        alt="stone"
                      />
                    </div>
                    {/* </Fade> */}
                    {/* <Bounce cascade> */}
                    <div className="texts">
                      <h3>Website Launch</h3>
                      <h3>Partnerships</h3>
                      <h3>
                        Tentacular Couple <br />
                        and Cave Land Mint
                      </h3>
                      <h3>
                        OpenSea and Rarity <br /> Tools Verification
                      </h3>
                      <h3>
                        Fund Community Wallet and Marketing <br />
                        Wallet with 10 ETH each
                      </h3>
                      <h3>Tentacular Dashboard</h3>
                      <h3 className="text-end">
                        Launch of Berry-$BY and <br /> Tentacular Staking <br />{" "}
                        Rewards
                      </h3>
                      <h3>
                        Berry Shop for Collaborations <br />
                        and Merchandise
                      </h3>
                      <h3 className="text-end">
                        Integration of <br />
                        Community <br />
                        Alpha Partner
                      </h3>
                      <h3>
                        On-chain Compounding <br />
                        Berry Juicer
                      </h3>
                      <h3 className="text-end">
                        Upgrade your <br />
                        Tentacular with $BY
                      </h3>
                      <h3>Endangermint V0</h3>
                    </div>
                    {/* </Bounce> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="section">
          <div className="page-container">
            <div className="text-center">
              <h1>FAQ</h1>

              <p className="text-white stroked-sm fs-20">
                We will be updating this sections regularly, so consider visitng
                our website time to time
              </p>
            </div>

            <div className="faq-main">
              {[
                {
                  question: "When is the mint date?",
                  answer: "April 2022",
                },
                {
                  question: "What is the mint price?",
                  answer: "TBA",
                },
                {
                  question: "What blockchain will Tentacular reside on?",
                  answer: "ETH",
                },
                {
                  question: "How many Tentacular NFTs will there be?",
                  answer:
                    "The Tentacular ecosystem starts with a hand-drawn genesis collection of 5,556 randomly generated Gen 0 Tentacular bundled with 2,778 Cave Land NFTs.",
                },
                {
                  question: "Is there a whitelist?",
                  answer:
                    "Yes, please join our discord server to learn more about how to earn your whitelist spot.",
                },
                {
                  question: "Are there any opportunities to join the team?",
                  answer:
                    "Yes, please join our discord server to apply for a position on the team.",
                },
                {
                  question:
                    "Will the Smart Contract be Audited? by a trusted and reputable third-party before launch to ensure fairness and security?",
                  answer: "Yes.",
                },
                {
                  question: "Will low gas minting be implemented?",
                  answer: "Yes.",
                },
              ].map((el, idx) => {
                return <FaqItem {...el} key={"faq-" + idx} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green">
        <div id="team" className="section">
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
          {/* <h2 className="logo stroked">Tentacular</h2> */}
          <img className="logo" src="./assets/imgs/logo-white.png" alt="logo" />
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
