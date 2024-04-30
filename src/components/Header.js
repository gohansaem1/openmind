import headerBackgroundImage from "../assets/images/Image2.svg";
import headerLogo from "../assets/images/logo.svg";
import shareCopy from "../assets/icons/Link.svg";
import shareKakao from "../assets/icons/Kakao.svg";
import shareFacebook from "../assets/icons/Facebook.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="headerBackgroundImage"
        src={headerBackgroundImage}
        alt="headerBackgroundImage"
      />
      <div className="Wrapper">
        <div className="container">
          <Link to="/">
            <img className="headerLogo" src={headerLogo} alt="logo" />
          </Link>
          <div className="userProfileImage"></div>
          <p className="userName">아초는고양이</p>
          <div className="sharedLink">
            <div>
              <img src={shareCopy} alt="shareCopy" />
            </div>
            <div>
              <img src={shareKakao} alt="shareKakao" />
            </div>
            <div>
              <img src={shareFacebook} alt="shareFacebook" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
