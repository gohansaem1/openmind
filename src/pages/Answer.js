import Header from "../components/Header";
import "../styles/Answer.css";

import { getQuestionList } from "../api/api";
import { getUserData } from "../api/api";
import { useState, useEffect } from "react";
import { AnswerList } from "../components/AnswerList";

const AnswerPage = () => {
    const [userData, setUserData] = useState({ data: null });
    const [questionList, setQuestionList] = useState({ data: null });

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserData(5816);
            const questionList = await getQuestionList(5816);
            setUserData(userData);
            setQuestionList(questionList);
        }
        fetchData();
    }, []);

    return (
        <>
            <Header userData={userData} />;
            <div className="Post-background">
                <AnswerList userData={userData} questionList={questionList} />
            </div>
        </>
    );
};

export default AnswerPage;
