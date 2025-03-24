import axios from 'axios';

const API_BASE = '/api/courses';

export const getCourses = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
};

export const deleteCourse = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
};

// Optionally, add getCourse, createCourse, updateCourse as needed
