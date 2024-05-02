import axios from "axios";

export async function getListData() {
  try {
    const res = await axios.get(
      `https://openmind-api.vercel.app/6-12/subjects/?limit=9999&offset=0`
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

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
