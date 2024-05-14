const AnswerContent = ({ isRejected, answerContent }) => {
    return (
        <div
            className={`feedCard-Answer ${isRejected ? "FeedCard-rejected" : ""}`}>
            {isRejected ? "답변 거절" : answerContent}
        </div>
    );
};

export default AnswerContent;
