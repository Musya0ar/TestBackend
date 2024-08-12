import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your Express server URL

// Get all users
export const getAllUsers = async () => {
    const response = await axios.get(`${API_URL}/api`);
    return response.data;
};

// Get a user by ID
export const getUserById = async (id) => {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data;
};

// Create a new user
export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/user`, userData);
    return response.data;
};

// Update a user
export const updateUser = async (userData) => {
    const response = await axios.put(`${API_URL}/user`, userData);
    return response.data;
};

// Delete a user
export const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/user`, {
        data: { id }
    });
    return response.data;
};
