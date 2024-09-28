import "../assets/css/avatar.css";
import avatar from "../assets/zori-gif.gif";
import Tilt from "react-parallax-tilt";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-col1">
        <h1>
          Do you want to <br /> look alike or <br /> be <span>creative</span>{" "}
          with <br />
          <span>AI avatar?</span>
        </h1>
        <div className="avatar-buttons">
          <div>
            <a href="zoriAvatar">Zori Avatar</a>
          </div>
          <div>
            <a href="zoriAvatar">AI Avatar</a>
          </div>
        </div>
      </div>

      <div className="avatar-col2">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ceabff"
          glarePosition="all"
          glareBorderRadius="16px"
          scale="1.15"
          transitionSpeed="2000"
        >
          <img src={avatar} alt="avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Avatar;
