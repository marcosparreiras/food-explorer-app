import { toast } from 'react-toastify';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://food-explorer-nntf.onrender.com',
});

export async function fetchWithErrorHandler(method, path, body = {}) {
    const methods = ['get', 'post', 'put', 'patch', 'delete'];
    if (!methods.includes(method)) {
        throw new Error(`${method} is not valid`);
    }
    try {
        const response = await api[method](path, body);
        return response.data || true;
    } catch (error) {
        console.log(error);
        if (error.response?.data?.message) {
            toast.error(error.response.data.message);
            return;
        }
        toast.error('Algo deu errado, tente novamente!');
        return false;
    }
}

export default api;
