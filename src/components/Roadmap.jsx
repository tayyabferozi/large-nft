import React, { useState } from "react";
import clsx from "clsx";

import FaqItem from "../components/FaqItem";

const Roadmap = () => {
  const [roadmapRevealedState, setRoadmapRevealedState] = useState(1);
  const showMoreRoadmap = () => {
    setRoadmapRevealedState((prevState) => {
      if (prevState === 2) {
        return 2;
      }

      return (prevState += 1);
    });
  };

  return (
    <div className="ox-hidden">
      <div id="roadmap-top">
        <img className="w-100" src="./assets/imgs/spikes.png" alt="spikes" />
        <img
          src="./assets/imgs/roadmap-top.png"
          // src="./assets/vectors/roadmap-map-top.svg"
          className="w-100"
          alt="roadmap"
        />

        <div id="roadmap-wrap">
          {roadmapRevealedState !== 2 && (
            <button
              onMouseEnter={(e) =>
                e.target.classList.add(
                  "animate__animated",
                  "animate__rubberBand"
                )
              }
              onMouseLeave={(e) =>
                e.target.classList.remove(
                  "animate__animated",
                  "animate__rubberBand"
                )
              }
              className=""
              onClick={showMoreRoadmap}
              id="show-more-roadmap"
            >
              Expand Full Roadmap
            </button>
          )}
          <img className="w-100 gif" src="./assets/imgs/jins.gif" alt="jins" />
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

                    <h3>Launch of Berry-$BY and Tentacular Staking Rewards</h3>
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

                    <h3>
                      On-chain Compounding Berry Juicer
                      <a
                        className="d-block"
                        href="https://medium.com/@tentacularnft/tentacular-berry-juicer-b2a5ccbf5c0b"
                      >
                        View Mechanics
                      </a>
                    </h3>
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
                      <h3>
                        <a href="https://medium.com/@tentacularnft/tentacular-berry-juicer-b2a5ccbf5c0b">
                          View Mechanics
                        </a>
                      </h3>
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
              We will be updating this sections regularly
              {/*, so consider visitng our website time to time */}
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
                question: "Will the Smart Contract be Audited?",
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
  );
};

export default Roadmap;
