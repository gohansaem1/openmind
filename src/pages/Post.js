import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserData, getQuestionList, addQuestion } from "../api/api";
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
                alert("데이터를 불러오는 중에 오류가 발생했어요");
            }
        }
        fetchData();
    }, [params.id]);

    const openModal = () => setIsModalOpen(true);

    const onSubmit = async (input) => {
        try {
            await addQuestion(userData.id, input);

            const updatedQuestionList = await getQuestionList(userData.id);
            setQuestionList(updatedQuestionList);

            setIsModalOpen(false);
        } catch (e) {
            alert("질문을 추가하는 중에 오류가 발생했어요");
        }
    };

    return (
        <>
            <Header userData={userData} />
            <div className="Post-background">
                <Questions userData={userData} questionList={questionList} />
                <FeedButton onClick={openModal} />
                {isModalOpen && (
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        modalBackgroundRef={modalBackgroundRef}
                        userData={userData}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        </>
    );
}
