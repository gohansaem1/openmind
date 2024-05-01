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
