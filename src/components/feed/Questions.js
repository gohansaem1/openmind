import "../../styles/Questions.css";

import FeedCard from "./FeedCard";
import messageIconBrown from "../../assets/icons/Messages-brown.svg";
import LoadMore from "../LoadMore";
import NoQuestion from "./NoQuestion";

const Questions = ({ userData, questionList }) => {
    return (
        <>
            {questionList.count > 0 ? (
                <div className="Questions-container">
                    <span className="Questions-numberOfQuestions">
                        <img src={messageIconBrown} alt="messageIconBrown" />{" "}
                        {questionList.count}개의 질문이 있습니다
                    </span>
                    {questionList.results.map((item) => (
                        <FeedCard
                            key={item.id}
                            data={item}
                            userData={userData}
                        />
                    ))}
                    <LoadMore questionList={questionList} />
                </div>
            ) : (
                <NoQuestion />
            )}
        </>
    );
};

export default Questions;
