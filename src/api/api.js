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
