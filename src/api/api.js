const BASE_URL = "https://openmind-api.vercel.app/6-12";
const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getAnswers(answerId) {
  const res = await fetch(`${BASE_URL}/answers/${answerId}/`, {
    headers,
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}
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
