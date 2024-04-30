import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Nav from "../components/Nav";
import LogoImg from "../assets/images/logo.svg";
import ArrowRightIcon from "../assets/icons/Arrow-right.svg";
import PersonIcon from "../assets/icons/Person.svg";
import "../styles/Main.css";

export default function MainPage() {
  let [inputName, setInputName] = useState(""); //사용자 이름 입력 상태관리

  return (
    <>
      <main>
        <header>
          <img className="main_header_logo" src={LogoImg} alt="로고이미지" />
          <button className="main_top_btn">
            <Link to="/list">
              질문하러 가기
              <span>
                <img src={ArrowRightIcon} alt="로고이미지" />
              </span>
            </Link>
          </button>
        </header>
        <div className="main_container">
          <div className="main_login_box">
            <div className="input_form">
              <span>
                <img src={PersonIcon} alt="로고이미지" />
              </span>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                value={inputName}
              />
            </div>
            <div className="input_button">
              <button>질문 받기</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
