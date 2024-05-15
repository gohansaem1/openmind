import React, { useEffect, useState } from "react";

import "../../styles/QuestionList.css";

import { getQuestionList } from "../../api/api";
import FeedCard from "./post/FeedCard";
import FeedCardAnswer from "./answer/FeedCardAnswer";

export default function QuestionList({
    type,
    userData,
    id,
    QuestionListCount,
    rendering,
    setRendering,
    onDeleteQuestion,
}) {
    const [questions, setQuestions] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [QuestionListCount, rendering, setRendering]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getQuestionList(id);
            setQuestions(data.results);
            setNextPage(data.next);
        } catch (e) {
            console.error("Error fetching data", e);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = async () => {
        setLoading(true);
        try {
            const data = await getQuestionList(id, nextPage);
            setQuestions([...questions, ...data.results]);
            setNextPage(data.next);
        } catch (e) {
            console.error("Error fetching more data", e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {type === "post" && (
                <>
                    {questions.map((question) => (
                        <FeedCard
                            key={question.id}
                            data={question}
                            userData={userData}
                        />
                    ))}
                    {loading && <div className="LoadMore">...</div>}
                    {!loading && nextPage && (
                        <div
                            className="LoadMore button"
                            onClick={handleLoadMore}>
                            더보기
                        </div>
                    )}
                </>
            )}

            {type === "answer" && (
                <>
                    {questions.map((question) => (
                        <FeedCardAnswer
                            key={question.id}
                            data={question}
                            userData={userData}
                            rendering={rendering}
                            setRendering={setRendering}
                            onDeleteQuestion={onDeleteQuestion}
                        />
                    ))}
                    {loading && <div className="LoadMore">...</div>}
                    {!loading && nextPage && (
                        <div
                            className="LoadMore button"
                            onClick={handleLoadMore}>
                            더보기
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
