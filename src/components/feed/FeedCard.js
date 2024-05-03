import { useState } from "react";
import "../../styles/FeedCard.css";
import AnswerBadge from "./AnswerBadge";
import { formatDate } from "../../pages/Post";

import likeIconOff from "../../assets/icons/thumbs-up-gray.svg";
import dislikeIconOff from "../../assets/icons/thumbs-down-gray.svg";
import likeIconOn from "../../assets/icons/thumbs-up-blue.svg";
import dislikeIconOn from "../../assets/icons/thumbs-down-blue.svg";

const FeedCard = (props) => {
  const { id, content, like, dislike, createdAt, answer } = props.data;
  const { name, imageSource } = props.userData;

  const { isRejected, createdAt: answerCreatedAt } = answer || {};

  let answerContent = answer?.content;

  const hasAnswer = !!answerContent;

  if (isRejected) {
    answerContent = "답변 거절";
  }

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(!dislikeClicked);
    setLikeClicked(false);
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR");
  const formattedDateString = formatDate(new Date(formattedDate));
  const answerFormattedDate = new Date(answerCreatedAt).toLocaleDateString(
    "ko-KR"
  );
  const answerFormattedDateString = formatDate(new Date(answerFormattedDate));

  return (
    <div className="FeedCard" key={id}>
      <AnswerBadge hasAnswer={hasAnswer} />
      <div className="FeedCard-container">
        <div className="FeedCard-question">
          <div className="FeedCard-CreatedAt">질문 • {formattedDateString}</div>
          <div>{content}</div>
        </div>
        {answerCreatedAt && (
          <div className="FeedCard-answer">
            <img
              className="FeedCard-profileImage"
              src={imageSource}
              alt="profile"
            />
            <div className="FeedCard-content">
              <div className="FeedCard-username">
                {name}
                <span className="FeedCard-CreatedAt">
                  {answerFormattedDateString}
                </span>
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
            src={likeClicked ? likeIconOn : likeIconOff}
            alt="likeIcon"
            className="FeedCard-reactionIcon"
          />
          좋아요 {like > 0 && like}
        </div>
        <div
          className={`FeedCard-reaction ${dislikeClicked ? "clicked" : ""}`}
          onClick={handleDislikeClick}
        >
          <img
            src={dislikeClicked ? dislikeIconOn : dislikeIconOff}
            alt="dislikeIcon"
            className="FeedCard-reactionIcon"
          />
          싫어요 {dislike > 0 && dislike}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
