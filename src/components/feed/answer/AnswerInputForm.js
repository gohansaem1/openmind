import { useState } from "react";
import "../../../styles/AnswerInputForm.css";

export default function AnswerInputForm({
    data,
    isEdit,
    onPostAnswer,
    onEditAnswer,
    answerContent,
    setAnswerContent,
}) {
    const [inputValue, setInputValue] = useState(answerContent || "");
    const [inputValued, setInputValued] = useState(inputValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const content = {
                content: inputValue,
                isRejected: false,
            };

            const formData = isEdit
                ? { ...content }
                : { ...content, questionId: data.id, team: "6-12" };
            if (isEdit) {
                await onEditAnswer(data.answer?.id, formData);
            } else {
                await onPostAnswer(data.id, formData);
            }
            setAnswerContent(inputValue);
            setInputValued(answerContent);
        } catch {
            console.log(e);
        }
    };

    return (
        <div className="feedCard-Answer">
            <form className="answer-inputForm" onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="답변을 입력해주세요"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className={`answer-inputButton ${inputValue.length > 0 && inputValue.trim() !== inputValued.trim() && "active"}`}
                    disabled={!inputValue.trim() || inputValue === inputValued}>
                    {isEdit ? "수정 완료" : "답변 완료"}
                </button>
            </form>
        </div>
    );
}
