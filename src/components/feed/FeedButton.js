import "../../styles/FeedButton.css";

const FeedButton = ({ onClick }) => {
  return (
    <>
      <button className="feedButton" onClick={onClick}>
        질문 작성하기
      </button>
    </>
  );
};

export default FeedButton;
