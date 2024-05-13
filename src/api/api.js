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

export async function getUserData(subjectId) {
    try {
        const res = await axios.get(`${BASE_URL}/subjects/${subjectId}/`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export async function getQuestionList(subjectId) {
    try {
        const res = await axios.get(
            `${BASE_URL}/subjects/${subjectId}/questions/`,
            {
                params: {
                    createdAt: "desc",
                    limit: 9999,
                },
            }
        );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export async function addQuestion(subjectId, questionData) {
    try {
        const res = await axios.post(
            `${BASE_URL}/subjects/${subjectId}/questions/`,
            questionData
        );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export async function postNewSubject(inputName) {
    try {
        const res = await axios.post(
            "https://openmind-api.vercel.app/6-12/subjects/",
            {
                name: `${inputName}`,
            }
        );
        return res;
    } catch (error) {
        console.log(error);
        alert("포스팅이 안되었어요.");
    }
}
