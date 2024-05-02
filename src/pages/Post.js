import { useState, useRef, useEffect } from "react";
import { getUserData } from "../api/apitemp";
import { getQuestionList } from "../api/apitemp";
<<<<<<< HEAD
=======

import "../styles/Post.css";

>>>>>>> 6cc92e1 (feat: mockData 삭제 및 API 호출 후 실제 데이터 적용)
import Nav from "../components/Nav";
import Questions from "../components/feed/Questions";
import FeedButton from "../components/feed/FeedButton";
import Modal from "../components/Modal";
import Header from "../components/Header";

<<<<<<< HEAD
import "../styles/Post.css";

=======
>>>>>>> 6cc92e1 (feat: mockData 삭제 및 API 호출 후 실제 데이터 적용)
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

<<<<<<< HEAD
=======
  console.log(userData);
  console.log(questionList);

>>>>>>> 6cc92e1 (feat: mockData 삭제 및 API 호출 후 실제 데이터 적용)
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
