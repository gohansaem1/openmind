import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserData, getQuestionList } from "../api/api";
import "../styles/Post.css";

import Questions from "../components/feed/Questions";
import FeedButton from "../components/feed/FeedButton";
import Modal from "../components/Modal";
import Header from "../components/Header";

export default function PostPage() {
    const [userData, setUserData] = useState({ data: null });
    const [questionList, setQuestionList] = useState({ data: null });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalBackgroundRef = useRef();
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await getUserData(params.id);
                const questionList = await getQuestionList(params.id);
                setUserData(userData);
                setQuestionList(questionList);
            } catch (e) {
                console.log("데이터를 불러오는 중에 오류가 발생했습니다:", e);
            }
        }
        fetchData();
    }, [params.id]);

    const openModal = () => setIsModalOpen(true);

    return (
        <>
            <Header userData={userData} />
            <div className="Post-background">
                <Questions userData={userData} questionList={questionList} />
                <FeedButton onClick={openModal} />
                {isModalOpen && (
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        modalBackgroundRef={modalBackgroundRef}
                        userData={userData}
                    />
                )}
            </div>
        </>
    );
}
