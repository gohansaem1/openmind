import { useNavigate } from "react-router-dom";
import { deleteQuestion, deleteUserData } from "../../../api/api";
import messageIconBrown from "../../../assets/icons/Messages-brown.svg";
import "../../../styles/AnswerList.css";
import "../../../styles/Feed.css";
import NoQuestion from "../NoQuestion";
import QuestionList from "../QuestionList";

export default function AnswerList({
    type,
    userData,
    questionList,
    rendering,
    setRendering,
    id,
}) {
    const navigate = useNavigate();

    const handleDeleteFeed = async () => {
        try {
            await deleteUserData(id);
        } catch (e) {
            console.log(e.message);
        }
        localStorage.removeItem("userId");
        navigate("/");
    };

    const handleDeleteQuestion = async (questionId) => {
        try {
            await deleteQuestion(questionId);
        } catch (e) {
            console.log(e.message);
        }
        setRendering(!rendering);
    };

    return (
        <>
            {questionList.count > 0 ? (
                <>
                    <div className="answer-top-wrapper">
                        <button onClick={handleDeleteFeed}>삭제하기</button>
                    </div>

                    <div className="Questions-container">
                        <span className="Questions-numberOfQuestions">
                            <img
                                src={messageIconBrown}
                                alt="messageIconBrown"
                            />{" "}
                            {questionList.count}개의 질문이 있습니다
                        </span>
                        <QuestionList
                            rendering={rendering}
                            setRendering={setRendering}
                            onDeleteQuestion={handleDeleteQuestion}
                            type={type}
                            id={id}
                            userData={userData}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="answer-top-wrapper">
                        <button onClick={handleDeleteFeed}>삭제하기</button>
                    </div>
                    <NoQuestion />
                </>
            )}
        </>
    );
};
