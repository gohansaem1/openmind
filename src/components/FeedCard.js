import thumbsUp from "../assets/icons/thumbs-up.svg";
import thumbsDown from "../assets/icons/thumbs-down.svg";
import more from "../assets/icons/More.svg";
import photo from "../assets/images/Photo.svg";
import "../styles/FeedCard.css";

const FeedCard = ({ question }) => {
  console.log(question);
  return (
    <>
      <div className="feed-card-wrapper">
        <div className="feed-card-container">
          <div className="feed-card-top-box">
            <div className="feed-card-state">미답변</div>
            <div className="feed-card-edit">
              <img src={more} alt="more" />
            </div>
          </div>
          <div className="feed-card-question-box">
            <p className="question-date">질문&middot;2주전</p>
            <p className="question">{question}</p>
          </div>
          <div className="user-profile-box">
            <img src={photo} alt="userPhoto" />

            <div className="user-answer-form">
              <p className="user-name">아초는고양이</p>
              <textarea
                type="text"
                placeholder="답변을 입력해주세요"
              ></textarea>
              <button className="answer-button">답변 완료</button>
            </div>
          </div>

          <div className="thumbs-up-down">
            <p>
              <img src={thumbsUp} alt="thumbs-up" />
              좋아요
            </p>
            <p>
              <img src={thumbsDown} alt="thumbs-down" />
              싫어요
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
