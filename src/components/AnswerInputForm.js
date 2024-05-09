import { useState } from "react";
import "../styles/AnswerInputForm.css";

const AnswerInputForm = ({ data, isEdit }) => {
    let answerContent = data.answer?.content;
    const initialValue = answerContent;

    const [inputValue, setInputValue] = useState(initialValue);
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setActive(e.target.value.trim() !== "");
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
                    disabled={!active}>
                    {active ? (isEdit ? `수정 완료` : `답변 완료`) : `답변 완료`}
                </button>
            </form>
        </>
    );
};

export default AnswerInputForm;
