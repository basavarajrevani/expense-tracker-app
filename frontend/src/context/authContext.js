import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/v1/auth/`;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Set up axios interceptors for token handling
    useEffect(() => {
        // Request interceptor
        axios.interceptors.request.use(
            (config) => {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user?.token) {
                    config.headers.Authorization = `Bearer ${user.token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response interceptor for handling token expiration
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    localStorage.removeItem('user');
                    setUser(null);
                }
                return Promise.reject(error);
            }
        );
    }, []);

    // Load user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                setUser(userData);
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    const register = async (username, email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}register`, {
                username,
                email,
                password
            });
            
            // Automatically log in after successful registration
            const userData = response.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            
            return userData;
        } catch (err) {
            console.error('Registration error:', err.response?.data || err.message);
            const errorMessage = err.response?.data?.message || 'Registration failed';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}login`, {
                email,
                password
            });
            
            const userData = response.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            
            return userData;
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            const errorMessage = err.response?.data?.message || 'Login failed';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        // Clear any existing Authorization header
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            error,
            register,
            login,
            logout,
            setError
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
