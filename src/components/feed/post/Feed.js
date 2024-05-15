import "../../../styles/Feed.css";

import messageIconBrown from "../../../assets/icons/Messages-brown.svg";

import NoQuestion from "../NoQuestion";
import QuestionList from "../QuestionList";

export default function Feed({ userData, questionList, id , type}) {
    return (
        <>
            {questionList.count > 0 ? (
                <div className="Questions-container">
                    <span className="Questions-numberOfQuestions">
                        <img src={messageIconBrown} alt="messageIconBrown" />{" "}
                        {questionList.count}개의 질문이 있습니다
                    </span>
                    <QuestionList
                        type={type}
                        userData={userData}
                        id={id}
                        QuestionListCount={questionList.count}
                    />
                </div>
            ) : (
                <NoQuestion />
            )}
        </>
    );
}
