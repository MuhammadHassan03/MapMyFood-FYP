import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIURL } from 'Shared/constants/API';

const useStorage = () => {
    // const [user, setUser] = useState(null);

    const getToken = () => {
        const token = window.localStorage.getItem('user');
        return token ? token : null;
    };

    const setToken = (token) => {
        window.localStorage.setItem('user', token);
    };

    const logout = () => {
        window.localStorage.removeItem('user');
    };

    const getMe = async () => {
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
                        setToken(response?.data?.token)
                    }
                    return response.data;
                } catch (error) {
                    logout();
                }
            }
        }
        catch (error) {
            return null;
        }
    };


    // useEffect(() => {
    //     getMe();
    // }, []);

    return {
        getToken,
        setToken,
        logout,
        getMe,
    };
};

export default useStorage;
