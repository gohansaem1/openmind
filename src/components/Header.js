import headerBackgroundImage from "../assets/images/Image2.svg";
import headerLogo from "../assets/images/logo.svg";
import shareCopy from "../assets/icons/Link.svg";
import shareKakao from "../assets/icons/Kakao.svg";
import shareFacebook from "../assets/icons/Facebook.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ userData }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src={headerBackgroundImage}
          className="header-backgroundImage"
          alt="header-backgroundImage"
        />
      </div>

      <div className="header-wrapper">
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
          <img className="header-shareIcon" src={shareCopy} alt="shareCopy" />
          <img className="header-shareIcon" src={shareKakao} alt="shareKakao" />
          <img
            className="header-shareIcon"
            src={shareFacebook}
            alt="shareFacebook"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
