import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createUser = async (userData: { name: string; email: string }) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        throw error;
    }
};
