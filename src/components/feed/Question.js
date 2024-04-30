import "../../styles/Questions.css";
import FeedCard from "./FeedCard";
import messageIcon from "../../assets/icons/Messages.svg";
import profile from "../../assets/images/Photo.svg";

const formatDate = (date) => {
  const today = new Date();
  const diffTime = Math.abs(today - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "오늘";
  } else if (diffDays === 1) {
    return "어제";
  } else if (diffDays <= 7) {
    return `${diffDays}일 전`;
  } else if (diffDays <= 14) {
    return "1주 전";
  } else if (diffDays <= 30) {
    const diffWeeks = Math.floor(diffDays / 7);
    return `${diffWeeks}주 전`;
  } else {
    return date.toLocaleDateString("ko-KR");
  }
};

const mockData = [
  {
    id: 1,
    questionCreatedAt: formatDate(new Date().getTime()),
    question: "세상에서 가장 귀여운 동물은?",
    profileImage: profile,
    username: "마루는 고양이",
    answerCreatedAt: formatDate(new Date().getTime()),
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    questionCreatedAt: formatDate(new Date("2024-04-16")),
    question: "세상에서 가장 귀여운 동물은?",
  },
  {
    id: 3,
    questionCreatedAt: formatDate(new Date("2024-03-30")),
    question: "세상에서 가장 귀여운 동물은?",
    profileImage: profile,
    username: "마루는 고양이",
    answerCreatedAt: formatDate(new Date("2024-04-21")),
    answer: "답변 거절",
  },
];

const Questions = () => {
  return (
    <>
      <header>header</header>
      <main className="Questions-background">
        <div className="Questions-container">
          <span className="Questions-numberOfQuestions">
            <img src={messageIcon} alt="messageIcon" /> {mockData.length}개의
            질문이 있습니다
          </span>
          <FeedCard data={mockData[0]} />
          <FeedCard data={mockData[1]} />
          <FeedCard data={mockData[2]} />
        </div>
      </main>
    </>
  );
};

export default Questions;
