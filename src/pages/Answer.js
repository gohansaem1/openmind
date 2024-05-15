import Header from "../components/feed/Header";

import { getQuestionList } from "../api/api";
import { getUserData } from "../api/api";
import { useState, useEffect } from "react";
import AnswerList from "../components/feed/answer/AnswerList";
import { useParams } from "react-router-dom";

export default function AnswerPage() {
    const [userData, setUserData] = useState({});
    const [questionList, setQuestionList] = useState([]);
    const [rendering, setRendering] = useState(false);

    const { id } = useParams();

    async function fetchUserData() {
        try {
            const userData = await getUserData(id);
            setUserData(userData);
        } catch (e) {
            console.error("Failed to fetch user data", e);
        }
    }

    async function fetchQuestionList() {
        try {
            const questionList = await getQuestionList(id);
            setQuestionList(questionList);
        } catch (e) {
            console.error("Failed to fetch question list", e);
        }
    }

    useEffect(() => {
        fetchUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchQuestionList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header userData={userData} />;
            <div className="Post-background">
                <div className="answer-container">
                    <AnswerList
                        type="answer"
                        userData={userData}
                        questionList={questionList}
                        rendering={rendering}
                        setRendering={setRendering}
                        id={id}
                    />
                </div>
            </div>
        </>
    );
};
