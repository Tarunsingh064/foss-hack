import axios from 'axios';

const API_URL = "http://127.0.0.1:8000"; // Django backend URL

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/api/register/`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/api/login/`, userData);
};
