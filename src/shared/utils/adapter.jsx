import axios from 'axios';

export const adapter = axios.create({
    baseURL: '/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
});
