import bg from "./assets/Group 3.png";
import "./assets/css/Firstpage.css";
import avatar from "./assets/avatar.svg";
import dfinity from "./assets/dfinity logo 1.png";
import icp from "./assets/download 1.png";
import icp_in from "./assets/icp in 1.png";

const FirstPage = () => {
  return (
    <>
      <main className="fp-main">
        <img className="first-bg" src={bg} alt="bg" />

        <div className="left-content">
          <h2>Discover the</h2>
          <h1 className="metaverse">METAVERSE</h1>
          <h2>Collect and Sell</h2>
          <h1 className="extraordinary">EXTRAORDINARY NFTS</h1>
        </div>

        <div className="right-content">
          <img src={avatar} alt="" />
          <div className="stats">
            <div>
              <h1>3+</h1>
              <h2>3D SPACES</h2>
            </div>
            <div>
              <h1>100+</h1>
              <h2>NFTs</h2>
            </div>
            <div>
              <h1>10+</h1>
              <h2>AVATARS</h2>
            </div>
          </div>
          <div className="frosted-glass">
            <div>
              <p>Total Price</p>
              <div>
                <p>12.35 ICP</p>
                <span>+12.45%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="trusted-by">
        <h1>Trusted By</h1>
        <div className="images">
          <img src={dfinity} alt="" />
          <img src={icp} alt="" />
          <img src={icp_in} alt="" />
        </div>
      </div>
    </>
  );
};

export default FirstPage;

