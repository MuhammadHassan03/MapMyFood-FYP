import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from 'Shared/constants/API';

// Define a type for the hook return value
interface UseStorage {
    getToken: () => string | null;
    setToken: (token: string) => void;
    logout: () => void;
    getMe: () => Promise<any>;
}

const useStorage = (): UseStorage => {
    const getToken = (): string | null => {
        const token = window.localStorage.getItem('user');
        return token ? token : null;
    };

    const setToken = (token: string): void => {
        window.localStorage.setItem('user', token);
    };

    const logout = (): void => {
        window.localStorage.removeItem('user');
    };

    const getMe = async (): Promise<any> => {
        try {
            const token = getToken();
            if (token) {
                try {
                    const { API } = APIURL();
                    const response = await axios.get(`${API}/auth/getMe`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    if (response?.data?.token) {
                        setToken(response?.data?.token);
                    }
                    return response.data;
                } catch (error) {
                    logout();
                }
            }
        } catch (error) {
            return null;
        }
    };

    return {
        getToken,
        setToken,
        logout,
        getMe,
    };
};

export default useStorage;
