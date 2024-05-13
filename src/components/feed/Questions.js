import "../../styles/Questions.css";

import messageIconBrown from "../../assets/icons/Messages-brown.svg";

import NoQuestion from "./NoQuestion";
import QuestionList from "../QuestionList";

const Questions = ({ userData, questionList, id }) => {
    return (
        <>
            {questionList.count > 0 ? (
                <div className="Questions-container">
                    <span className="Questions-numberOfQuestions">
                        <img src={messageIconBrown} alt="messageIconBrown" />{" "}
                        {questionList.count}개의 질문이 있습니다
                    </span>
                    <QuestionList userData={userData} id={id} />
                </div>
            ) : (
                <NoQuestion />
            )}
        </>
    );
};

export default Questions;
