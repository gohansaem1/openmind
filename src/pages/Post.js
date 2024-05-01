import "../styles/Post.css";
import Nav from "../components/Nav";
import Questions from "../components/feed/Question";
import profile from "../assets/images/Photo.svg";

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
    subjectId: 100,
    content: "세상에서 가장 귀여운 동물은?",
    like: 0,
    dislike: 0,
    createdAt: formatDate(new Date().getTime()),
    answer: {
      id: 11,
      questionId: 200,
      profileImage: profile,
      username: "마루는 고양이",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur",
      isRejected: false,
      createdAt: formatDate(new Date().getTime()),
    },
  },
  {
    id: 2,
    subjectId: 100,
    content: "세상에서 가장 귀여운 동물은?",
    like: 0,
    dislike: 0,
    createdAt: formatDate(new Date("2024-04-16")),
  },
  {
    id: 3,
    subjectId: 100,
    content: "세상에서 가장 귀여운 동물은?",
    like: 0,
    dislike: 0,
    createdAt: formatDate(new Date("2024-03-30")),
    answer: {
      id: 11,
      questionId: 200,
      profileImage: profile,
      username: "마루는 고양이",
      content: "",
      isRejected: true,
      createdAt: formatDate(new Date("2024-04-21")),
    },
  },
];

export default function PostPage() {
  return (
    <>
      <Nav />
      <div className="Post-background">
        <Questions mockData={mockData} />
      </div>
    </>
  );
}
