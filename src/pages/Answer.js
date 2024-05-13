import Header from "../components/Header";

import { getQuestionList } from "../api/api";
import { getUserData } from "../api/api";
import { useState, useEffect } from "react";
import { AnswerList } from "../components/feed/AnswerList";
import { useParams } from "react-router-dom";

const AnswerPage = () => {
    const [userData, setUserData] = useState({ data: null });
    const [questionList, setQuestionList] = useState({ data: null });
    const [rendering, setRendering] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserData(id);
            const questionList = await getQuestionList(id);
            setUserData(userData);
            setQuestionList(questionList);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rendering]);

    return (
        <>
            <Header userData={userData} />;
            <div className="Post-background">
                <AnswerList
                    userData={userData}
                    questionList={questionList}
                    rendering={rendering}
                    setRendering={setRendering}
                />
            </div>
        </>
    );
};

export default AnswerPage;
