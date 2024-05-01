import Header from "../components/Header";
import "../styles/Answer.css";
import message from "../assets/icons/Messages.svg";
import FeedCard from "../components/FeedCard";
import { getAnswers } from "../api/api";

const AnswerPage = () => {
  const data = getAnswers(5589);

  console.log(data);

  return (
    <>
      <Header />;
      <div className="answer-container">
        <div className="delete-button-container">
          <button className="delete-button">삭제하기</button>
        </div>
        <div className="answer-section">
          <div className="answer-section-title">
            <img src={message} alt="question" />
            <h3>3개의 질문이 있습니다.</h3>
          </div>
          <FeedCard />
        </div>
      </div>
    </>
  );
};

export default AnswerPage;
