import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/6-12";

export async function getListData() {
    const res = await axios.get(`${BASE_URL}/subjects/?limit=9999&offset=0`);
    return res.data;
}

export async function getUserData(subjectId) {
    const res = await axios.get(`${BASE_URL}/subjects/${subjectId}/`);
    return res.data;
}

export async function getQuestionList(subjectId, nextPage = "") {
    const url = nextPage || `${BASE_URL}/subjects/${subjectId}/questions/`;
    const res = await axios.get(url, {
        params: {
            limit: 5,
        },
    });
    return res.data;
}

export async function addQuestion(subjectId, questionData) {
    const res = await axios.post(
        `${BASE_URL}/subjects/${subjectId}/questions/`,
        questionData
    );
    return res.data;
}

export async function deleteUserData(subjectId) {
    const res = await axios.delete(`${BASE_URL}/subjects/${subjectId}/`);
    return res.data;
}

export async function deleteQuestion(questionId) {
    const res = await axios.delete(`${BASE_URL}/questions/${questionId}/`);
    return res.data;
}

export async function postAnswer(questionId, answerData) {
    const res = await axios.post(
        `${BASE_URL}/questions/${questionId}/answers/`,
        answerData
    );
    return res.data;
}

export async function deleteAnswer(answerId) {
    const res = await axios.delete(`${BASE_URL}/answers/${answerId}/`);
    return res.data;
}

export async function editAnswer(answerId, editAnswerData) {
    const res = await axios.put(
        `${BASE_URL}/answers/${answerId}/`,
        editAnswerData
    );
    return res.data;
}

export async function postNewSubject(inputName) {
    const res = await axios.post(`${BASE_URL}/subjects/`, {
        name: `${inputName}`,
    });
    return res;
}

export async function postReaction(questionId, reaction) {
    const res = await axios.post(
        `${BASE_URL}/questions/${questionId}/reaction/`,
        {
            type: `${reaction}`,
        }
    );
    return res;
}
