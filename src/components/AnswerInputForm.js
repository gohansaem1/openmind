import { useEffect, useState } from "react";
import "../styles/AnswerInputForm.css";

const AnswerInputForm = ({ data, isEdit, onPostAnswer }) => {
    let answerContent = data.answer?.content;
    const initialValue = answerContent;

    const [inputValue, setInputValue] = useState(initialValue);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittingError, setSubmittingError] = useState(null);
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setActive(e.target.value.trim() !== "");
    };

    const handlePostAnswer = () => {
        const answerData = { content: inputValue };
        onPostAnswer(data.id, answerData);
    };

    return (
        <>
            <form className="answer-inputForm">
                <textarea
                    type="text"
                    placeholder="답변을 입력해주세요"
                    value={inputValue}
                    onChange={handleChange}></textarea>
                <button
                    className={`answer-inputButton ${active && "active"}`}
                    onClick={handlePostAnswer}
                    disabled={!active}>
                    {active
                        ? isEdit
                            ? `수정 완료`
                            : `답변 완료`
                        : `답변 완료`}
                </button>
            </form>
        </>
    );
};

export default AnswerInputForm;
