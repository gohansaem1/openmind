export async function getListData() {
  const res = await fetch(
    `https://openmind-api.vercel.app/6-12/subjects/?limit=9999&offset=0`
  );
  const body = await res.json();
  return body;
}
