import Header from "../components/Header";

import { getQuestionList } from "../api/api";
import { getUserData } from "../api/api";
import { useState, useEffect } from "react";
import { AnswerList } from "../components/AnswerList";

const AnswerPage = () => {
    const [userData, setUserData] = useState({ data: null });
    const [questionList, setQuestionList] = useState({ data: null });

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserData(5739);
            const questionList = await getQuestionList(5739);
            setUserData(userData);
            setQuestionList(questionList);
        }
        fetchData();
    }, []);
    console.log(questionList.results);

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
