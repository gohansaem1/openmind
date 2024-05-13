import "../../styles/Questions.css";

import messageIconBrown from "../../assets/icons/Messages-brown.svg";
import emptyMessageIcon from "../../assets/icons/Empty-message.svg";

const NoQuestion = () => {
    return (
        <div className="Questions-container noQuestion">
            <span className="Questions-numberOfQuestions">
                <img src={messageIconBrown} alt="messageIconBrown" /> 아직
                질문이 없습니다
            </span>
            <img
                className="Questions-emptyMessageIcon"
                src={emptyMessageIcon}
                alt="emptyMessageIcon"
            />
        </div>
    );
};

export default NoQuestion;
