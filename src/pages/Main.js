import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../assets/images/logo.svg";
import ArrowRightIcon from "../assets/icons/Arrow-right.svg";
import PersonIcon from "../assets/icons/Person.svg";
import { getListData, postNewSubject } from "../api/api";
import "../styles/Main.css";

export default function MainPage() {
    const [inputName, setInputName] = useState("");
    const [enrolledLists, setEnrolledLists] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getListData();
                const enrolledNames = res.results.map(subject => subject.name);
                setEnrolledLists(enrolledNames);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("다시 시도해주세요.");
            }
        };
        fetchData();
    }, []);

    const onChangeInput = (e) => {
        setInputName(e.target.value);
    };

    const handlePostNewUser = async () => {
        if (!inputName.trim()) {
            alert("이름을 입력해주세요!");
            return;
        }

        if (enrolledLists.includes(inputName)) {
            alert("이미 존재하는 이름입니다.");
            return;
        }

        try {
            const res = await postNewSubject(inputName);
            const userId = res.data.id;
            if (userId) {
                localStorage.setItem("userId", userId);
                navigate(`/post/${userId}/answer`);
            } else {
                alert("나의 페이지가 생성되지 않았어요.");
            }
        } catch (error) {
            console.error("Error posting data:", error);
            alert("포스팅이 안되었어요.");
        }
    };

    return (
        <main className="main-main">
            <header className="main-header">
                <img
                    className="main_header_logo"
                    src={LogoImg}
                    alt="로고이미지"
                />
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
                            onChange={onChangeInput}
                            value={inputName}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    handlePostNewUser();
                                }
                            }}
                        />
                    </div>
                    <div className="input_button">
                        <button onClick={handlePostNewUser}>질문 받기</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
