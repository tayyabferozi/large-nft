import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Rarity = () => {
  return (
    <div id="rarity" className="section">
      <div className="page-container">
        <div className="rarity-container">
          <Fade bottom>
            <div>
              <p className="fs-22 text-white text-center mb-4">
                Each NFT is randomly generated from an assortment of over 200+
                hand-drawn traits distributed amongst 7 attribute categories.
                Not all Tentacular are equally strong in their harvest. The
                rarity will determine the harvesting ability of your Tentacular
                on their newly arable land.
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
                          src="./assets/imgs/category-2.png"
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
  );
};

export default Rarity;
