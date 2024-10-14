import React from 'react'
import axios from 'axios';
import { APIURL } from 'Shared/constants/API'
import useStorage from 'Shared/hooks/User/useStorage';
// import useNavigate  from 'Shared/utils/navigation/useNavigate';


const useSignup = async (data: any) => {
    const { setToken } = useStorage(); 
    const { API } = APIURL();
    // const navigate = useNavigate();

    try {
        const response = await axios.post(`${API}/auth/signup`, data);
        if (response?.data?.token) {
            setToken(response?.data?.token);
            // navigate('/')
        }
    } catch (error) {
        console.error('Signup failed:', error);
    }
}

export { useSignup }