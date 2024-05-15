import "../../../styles/FeedCard.css";

import timeString from "../../../utils/timeString";

import AnswerBadge from "../AnswerBadge";
import Reactions from "../Reactions";

export default function FeedCard({ data, userData }) {
    const { id, content, like, dislike, createdAt, answer } = data;
    const { name, imageSource } = userData;

    const { isRejected, createdAt: answerCreatedAt } = answer || {};

    const formattedDate = timeString(createdAt);
    const answerFormattedDate = timeString(answerCreatedAt);

    const answerContent = () => {
        if (isRejected) {
            return "답변 거절";
        } else if (answer) {
            return answer.content;
        } else {
            return null;
        }
    };

    return (
        <div className="FeedCard" key={id}>
            <AnswerBadge hasAnswer={!!answer} />
            <div className="FeedCard-container">
                <div className="FeedCard-question">
                    <div className="FeedCard-CreatedAt">
                        질문 • {formattedDate}
                    </div>
                    <div className="FeedCard-head">{content}</div>
                </div>
                {answer && (
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
                                    isRejected
                                        ? "FeedCard-rejected"
                                        : "feedCard-Answer "
                                }>
                                {answerContent()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Reactions like={like} dislike={dislike} id={id} />
        </div>
    );
}
