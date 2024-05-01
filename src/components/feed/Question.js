import "../../styles/Questions.css";
import FeedCard from "./FeedCard";
import messageIconBrown from "../../assets/icons/Messages-brown.svg";
import emptyMessageIcon from "../../assets/icons/Empty-message.svg";

const Questions = ({ mockData }) => {
  return (
    <>
      {mockData.length > 0 ? (
        <div className="Questions-container">
          <span className="Questions-numberOfQuestions">
            <img src={messageIconBrown} alt="messageIconBrown" />{" "}
            {mockData.length}개의 질문이 있습니다
          </span>
          {mockData.map((item) => (
            <FeedCard key={mockData.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="Questions-container noQuestion">
          <span className="Questions-numberOfQuestions">
            <img src={messageIconBrown} alt="messageIconBrown" /> 아직 질문이
            없습니다
          </span>
          <img
            className="Questions-emptyMessageIcon"
            src={emptyMessageIcon}
            alt="emptyMessageIcon"
          />
        </div>
      )}
    </>
  );
};

export default Questions;
