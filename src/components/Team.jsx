import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Team = () => {
  return (
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
                    <img src="./assets/vectors/team-mem-2.svg" alt="team-mem" />
                    <h3>TheNFTChief</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="team-card">
                    <img src="./assets/vectors/team-mem-3.svg" alt="team-mem" />
                    <h3>Darth Lini</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="foot">
        <img className="logo" src="./assets/imgs/logo-white.png" alt="logo" />
        <img className="vector" src="./assets/imgs/bg-foot.png" alt="bg-foot" />
      </div>
    </div>
  );
};

export default Team;
