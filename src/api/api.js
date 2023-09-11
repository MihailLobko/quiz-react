import axios from 'axios';

const API_BASE_URL = 'https://64ef5e7a219b3e2873c463e3.mockapi.io/quiz/';

export const fetchQuizzes = () => axios.get(`${API_BASE_URL}/all`);
