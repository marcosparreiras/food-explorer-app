import { createContext, useContext, useState, useEffect } from 'react';
import api, { fetchWithErrorHandler } from '../services/api';

/* eslint-disable */
const AuthContext = createContext();

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function login({ email, password }) {
        const data = await fetchWithErrorHandler('post', '/sessions', {
            email,
            password,
        });
        if (!data) {
            return;
        }
        const { token, user } = data;
        localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
        localStorage.setItem('@foodexplorer:token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ token, user });
    }

    function logout() {
        localStorage.removeItem('@foodexplorer:user');
        localStorage.removeItem('@foodexplorer:token');
        localStorage.removeItem('@foodexplorer:favs');
        localStorage.removeItem('@foodexplorer:order');
        setData({});
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@foodexplorer:user'));
        const token = localStorage.getItem('@foodexplorer:token');
        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
