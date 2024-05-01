import { useState } from "react";
import "../../styles/FeedCard.css";
import AnswerBadge from "./AnswerBadge";
import likeIconOff from "../../assets/icons/thumbs-up-gray.svg";
import dislikeIconOff from "../../assets/icons/thumbs-down-gray.svg";
import likeIconOn from "../../assets/icons/thumbs-up-blue.svg";
import dislikeIconOn from "../../assets/icons/thumbs-down-blue.svg";

const FeedCard = (props) => {
  const { id, content, like, dislike, createdAt, answer } = props.data;

  const {
    profileImage,
    username,
    isRejected,
    createdAt: answerCreatedAt,
  } = answer || {};

  let answerContent = answer?.content;

  if (isRejected) {
    answerContent = "답변 거절";
  }

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const hasAnswer = !!answerContent;

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(!dislikeClicked);
    setLikeClicked(false);
  };

  return (
    <div className="FeedCard" key={id}>
      <AnswerBadge hasAnswer={hasAnswer} />
      <div className="FeedCard-container">
        <div className="FeedCard-question">
          <div className="FeedCard-CreatedAt">질문 • {createdAt}</div>
          <div>{content}</div>
        </div>
        {profileImage && (
          <div className="FeedCard-answer">
            <img src={profileImage} alt="profile" />
            <div className="FeedCard-content">
              <div className="FeedCard-username">
                {username}
                <span className="FeedCard-CreatedAt">{answerCreatedAt}</span>
              </div>
              <div className={isRejected ? "FeedCard-rejected" : ""}>
                {answerContent}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="FeedCard-reactionContainer">
        <div
          className={`FeedCard-reaction ${likeClicked ? "clicked" : ""}`}
          onClick={handleLikeClick}
        >
          <img
            src={likeIconOff}
            alt="likeIcon"
            className="FeedCard-reactionIcon"
          />
          좋아요
        </div>
        <div
          className={`FeedCard-reaction ${dislikeClicked ? "clicked" : ""}`}
          onClick={handleDislikeClick}
        >
          <img
            src={dislikeIconOff}
            alt="dislikeIcon"
            className="FeedCard-reactionIcon"
          />
          싫어요
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
