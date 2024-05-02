import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/6-12";
const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getQuestionList(subjectId) {
  try {
    const res = await axios.get(`${BASE_URL}/subjects/${subjectId}/questions/`);
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
