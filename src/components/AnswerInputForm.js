import { useRef, useState } from "react";
import "../styles/AnswerInputForm.css";

const AnswerInputForm = ({ data }) => {
    let answerContent = data.answer?.content;
    const initialValue = answerContent;

    // const [isInputFIll, setIsInputFill] = useState(false);
    const [inputValue, setInputValue] = useState(initialValue);
    const inputRef = useRef();

    // if (inputRef.value) {
    //     setIsInputFill(true);
    // } else {
    //     setIsInputFill(false);
    // }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
            <form
                className="answer-inputForm"
                onSubmit={console.log("제출하기")}>
                <textarea
                    type="text"
                    value={inputValue}
                    ref={inputRef}
                    onChange={handleChange}></textarea>
                <button className="answer-inputButton">답변완료</button>
            </form>
        </>
    );
};

export default AnswerInputForm;
