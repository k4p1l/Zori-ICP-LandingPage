import logo from "./assets/zori-logo.png";
import "./assets/css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Zori" />
        </Link>
      </div>
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/about">About Us</Link>
        <Link to="/marketplace">NFT Marketplace</Link>
        <Link to="/avatar">3d Avatar</Link>
        <Link to="/spaces">3d Spaces</Link>
      </div>
      <div className="get-started">
        <a href="getStarted">Get Started</a>
      </div>
      <div className="backdrop"></div>
    </nav>
  );
};

export default Navbar;
