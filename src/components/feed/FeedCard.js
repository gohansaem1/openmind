import { useState } from "react";
import "../../styles/FeedCard.css";
import AnswerBadge from "./AnswerBadge";
import likeIconOff from "../../assets/icons/thumbs-up-gray.svg";
import dislikeIconOff from "../../assets/icons/thumbs-down-gray.svg";
import likeIconOn from "../../assets/icons/thumbs-up-blue.svg";
import dislikeIconOn from "../../assets/icons/thumbs-down-blue.svg";

const FeedCard = ({ data, userData }) => {
    function TimeString(time) {
        const currentDate = new Date();
        const createdDate = new Date(time);

        const timeDiff = currentDate - createdDate;

        const hoursDiff = timeDiff / (1000 * 60 * 60);
        const daysDiff = hoursDiff / 24;
        const weeksDiff = daysDiff / 7;
        const monthsDiff = daysDiff / 30;

        if (monthsDiff >= 1) {
            return Math.floor(monthsDiff) + "달 전";
        } else if (weeksDiff >= 1) {
            return Math.floor(weeksDiff) + "주 전";
        } else if (daysDiff >= 1) {
            return Math.floor(daysDiff) + "일 전";
        } else if (hoursDiff >= 1) {
            return Math.floor(hoursDiff) + "시간 전";
        } else {
            return "방금 전";
        }
    }

    const { id, content, like, dislike, createdAt, answer } = data;
    const { name, imageSource } = userData;

    const { isRejected, createdAt: answerCreatedAt } = answer || {};

    let answerContent = answer?.content;

    const hasAnswer = !!answerContent;

    if (isRejected) {
        answerContent = "답변 거절";
    }

    const [reaction, setReaction] = useState(null);
    const [counts, setCounts] = useState({ like: like, dislike: dislike });

    const handleReactionClick = (type) => {
        if (reaction === type) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [type]: prevCounts[type] - 1,
            }));
            setReaction(null);
        } else {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [type]: prevCounts[type] + 1,
            }));
            if (reaction) {
                setCounts((prevCounts) => ({
                    ...prevCounts,
                    [reaction]: prevCounts[reaction] - 1,
                }));
            }
            setReaction(type);
        }
    };

    const formattedDate = TimeString(createdAt);
    const answerFormattedDate = TimeString(answerCreatedAt);

    return (
        <div className="FeedCard" key={id}>
            <AnswerBadge hasAnswer={hasAnswer} />
            <div className="FeedCard-container">
                <div className="FeedCard-question">
                    <div className="FeedCard-CreatedAt">
                        질문 • {formattedDate}
                    </div>
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
                                    {answerFormattedDate}
                                </span>
                            </div>
                            <div
                                className={
                                    isRejected ? "FeedCard-rejected" : ""
                                }>
                                {answerContent}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="FeedCard-reactionContainer">
                <div
                    className={`FeedCard-reaction ${reaction === "like" ? "clicked" : ""}`}
                    onClick={() => handleReactionClick("like")}>
                    <img
                        src={reaction === "like" ? likeIconOn : likeIconOff}
                        alt="likeIcon"
                        className="FeedCard-reactionIcon"
                    />
                    좋아요 {counts.like > 0 && counts.like}
                </div>
                <div
                    className={`FeedCard-reaction ${reaction === "dislike" ? "clicked" : ""}`}
                    onClick={() => handleReactionClick("dislike")}>
                    <img
                        src={
                            reaction === "dislike"
                                ? dislikeIconOn
                                : dislikeIconOff
                        }
                        alt="dislikeIcon"
                        className="FeedCard-reactionIcon"
                    />
                    싫어요 {counts.dislike > 0 && counts.dislike}
                </div>
            </div>
        </div>
    );
};

export default FeedCard;
