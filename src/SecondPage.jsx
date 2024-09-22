import "./assets/css/Secondpage.css";
import zori_land from "../public/images/spaces/zori land.png";
import podcast from "../public/images/spaces/Podcast.jpg";
import nature from "../public/images/spaces/Nature Space.jpg";
import nft1 from "../public/images/nfts/1.jpg";

const SecondPage = () => {
  return (
    <div className="second-page">
      <div>
        <h1>3D SPACES</h1>
        <div className="spaces">
          <div className="img-wrapper">
            <img src={zori_land} alt="" />
          </div>

          <div className="img-wrapper">
            <img src={podcast} alt="" />
          </div>
          <div className="img-wrapper">
            <img src={nature} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1>TRENDING NFTs</h1>
        <div className="cards">
          <div className="card">
            <div className="card-container">
              <img src={nft1} alt="" />
              <p>Stack Sorted</p>
            </div>
          </div>{" "}
          <div className="card">
            <div className="card-container">
              <img src={nft1} alt="" />
              <p>Stack Sorted</p>
            </div>
          </div>{" "}
          <div className="card">
            <div className="card-container">
              <img src={nft1} alt="" />
              <p>Stack Sorted</p>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <img src={nft1} alt="" />
              <p>Stack Sorted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
