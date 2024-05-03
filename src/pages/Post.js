import { useState, useRef, useEffect } from "react";
import { getUserData } from "../api/apitemp";
import { getQuestionList } from "../api/apitemp";

import "../styles/Post.css";

import Questions from "../components/feed/Questions";
import FeedButton from "../components/feed/FeedButton";
import Modal from "../components/Modal";
import Header from "../components/Header";

export const formatDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today - targetDate);
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

export default function PostPage() {
  const [userData, setUserData] = useState({ data: null });
  const [questionList, setQuestionList] = useState({ data: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalBackgroundRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserData(5739);
      const questionList = await getQuestionList(5739);
      setUserData(userData);
      setQuestionList(questionList);
    }
    fetchData();
  }, []);

  console.log(userData);
  console.log(questionList);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <Header userData={userData} />
      <div className="Post-background">
        <Questions userData={userData} questionList={questionList} />
        <FeedButton onClick={openModal} />
        {isModalOpen && (
          <Modal
            setIsModalOpen={setIsModalOpen}
            modalBackgroundRef={modalBackgroundRef}
            userData={userData}
          />
        )}
      </div>
    </>
  );
}
