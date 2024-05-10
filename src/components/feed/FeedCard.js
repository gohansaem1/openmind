import timeString from "../../utils/timeString";
import "../../styles/FeedCard.css";
import AnswerBadge from "./AnswerBadge";
import Reactions from "./Reactions";

const FeedCard = ({ data, userData }) => {
    const { id, content, like, dislike, createdAt, answer } = data;
    const { name, imageSource } = userData;

    const { isRejected, createdAt: answerCreatedAt } = answer || {};

    let answerContent = answer?.content;

    const hasAnswer = !!answerContent;

    if (isRejected) {
        answerContent = "답변 거절";
    }

    const formattedDate = timeString(createdAt);
    const answerFormattedDate = timeString(answerCreatedAt);

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
            <Reactions like={like} dislike={dislike} />
        </div>
    );
};

export default FeedCard;
