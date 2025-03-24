// src/services/api.js
import axios from 'axios';

// You can keep the base URL relative if you're using proxy
const API_BASE_URL = '/api';

export const getUser = () => {
    return axios.get(`${API_BASE_URL}/user`) // Assuming there's a backend endpoint at /api/user
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching user data:", error);
            throw error; // Re-throw the error to handle it in the component
        });
};

export const getCourses = () => {
    return axios.get(`${API_BASE_URL}/schedule/all`) // Assuming your schedule endpoint is /api/schedule/all
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching courses:", error);
            throw error; // Re-throw the error to handle it in the component
        });
};
