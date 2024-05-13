import { useEffect, useState } from "react";
import "../../styles/AnswerInputForm.css";

const AnswerInputForm = ({
    data,
    isEdit,
    onPostAnswer,
    onEditAnswer,
    answerContent,
    setAnswerContent,
}) => {
    const initialValue = answerContent || [];

    const [inputValue, setInputValue] = useState(initialValue);
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [submittingError, setSubmittingError] = useState(null);
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setActive(e.target.value.trim() !== "");
    };

    const handlePostAnswer = async (e) => {
        e.preventDefault();
        const answerData = {
            questionId: data.id,
            content: inputValue,
            isRejected: false,
            team: "6-12",
        };
        const result = await onPostAnswer(data.id, answerData);
        setAnswerContent(inputValue);
    };

    const handleEditAnswer = async (e) => {
        e.preventDefault();
        const id = data.answer?.id;
        const editAnswerData = {
            content: inputValue,
            isRejected: false,
        };
        const result = await onEditAnswer(id, editAnswerData);
        setAnswerContent(inputValue);
    };

    return (
        <div className="feedCard-Answer">
            {isEdit ? (
                <form className="answer-inputForm" onSubmit={handleEditAnswer}>
                    <textarea
                        type="text"
                        placeholder="답변을 입력해주세요"
                        value={inputValue}
                        onChange={handleChange}></textarea>
                    <button
                        type="submit"
                        className={`answer-inputButton ${active && "active"}`}
                        disabled={!active}>
                        {active
                            ? isEdit
                                ? `수정 완료`
                                : `답변 완료`
                            : `답변 완료`}
                    </button>
                </form>
            ) : (
                <form className="answer-inputForm" onSubmit={handlePostAnswer}>
                    <textarea
                        type="text"
                        placeholder="답변을 입력해주세요"
                        value={inputValue}
                        onChange={handleChange}></textarea>
                    <button
                        type="submit"
                        className={`answer-inputButton ${active && "active"}`}
                        disabled={!active}>
                        {active
                            ? isEdit
                                ? `수정 완료`
                                : `답변 완료`
                            : `답변 완료`}
                    </button>
                </form>
            )}
        </div>
    );
};

export default AnswerInputForm;
