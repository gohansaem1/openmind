import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/6-12";
<<<<<<< HEAD

export async function getQuestionList(subjectId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/subjects/${subjectId}/questions/`,
      {
        params: {
          createdAt: "desc",
        },
      }
    );
=======
const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getQuestionList(subjectId) {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/${subjectId}/questions/`);
>>>>>>> 6cc92e1 (feat: mockData 삭제 및 API 호출 후 실제 데이터 적용)
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function getUserData(subjectId) {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/${subjectId}/`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
