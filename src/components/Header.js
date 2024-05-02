import headerBackgroundImage from "../assets/images/Image2.svg";
import headerLogo from "../assets/images/logo.svg";
import shareCopy from "../assets/icons/Link.svg";
import shareKakao from "../assets/icons/Kakao.svg";
import shareFacebook from "../assets/icons/Facebook.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ userData }) => {
  return (
    <header>
      <img
        className="header-background-image"
        src={headerBackgroundImage}
        alt="headerBackgroundImage"
      />
      <div className="header-wrapper">
        <div className="header-wrapperContainer">
          <Link to="/">
            <img className="header-logo" src={headerLogo} alt="logo" />
          </Link>
          <img
            className="header-profileImage"
            src={userData.imageSource}
            alt="header-profileImage"
          />
          <p className="header-userName">{userData.name}</p>
          <div className="header-shareLink">
            <img src={shareCopy} alt="shareCopy" />
            <img src={shareKakao} alt="shareKakao" />
            <img src={shareFacebook} alt="shareFacebook" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
