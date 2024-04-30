import { useState } from "react";
import "../../styles/FeedCard.css";
import AnswerBadge from "./AnswerBadge";
import { ReactComponent as LikeIcon } from "../../assets/icons/thumbs-up.svg";
import { ReactComponent as DislikeIcon } from "../../assets/icons/thumbs-down.svg";

const FeedCard = (props) => {
  const {
    id,
    questionCreatedAt,
    question,
    profileImage,
    username,
    answerCreatedAt,
    answer,
  } = props.data;

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const hasAnswer = !!answer;

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(!dislikeClicked);
    setLikeClicked(false);
  };

  return (
    <div className="FeedCard">
      <AnswerBadge hasAnswer={hasAnswer} />
      <div className="FeedCard-container" key={id}>
        <div className="FeedCard-question">
          <div className="FeedCard-CreatedAt">질문 • {questionCreatedAt}</div>
          <div>{question}</div>
        </div>
        {profileImage && (
          <div className="FeedCard-answer">
            <img src={profileImage} alt="profile" />
            <div className="FeedCard-content">
              <div className="FeedCard-username">
                {username}
                <span className="FeedCard-CreatedAt">{answerCreatedAt}</span>
              </div>
              <div>{answer}</div>
            </div>
          </div>
        )}
      </div>
      <div className="FeedCard-reactionContainer">
        <div
          className={`FeedCard-reaction ${likeClicked ? "clicked" : ""}`}
          onClick={handleLikeClick}
        >
          <LikeIcon className="FeedCard-reactionIcon" />
          좋아요
        </div>
        <div
          className={`FeedCard-reaction ${dislikeClicked ? "clicked" : ""}`}
          onClick={handleDislikeClick}
        >
          <DislikeIcon className="FeedCard-reactionIcon" />
          싫어요
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
