import React from 'react'
import axios from 'axios';
import { APIURL } from 'Shared/constants/API'
import useStorage from 'Shared/hooks/User/useStorage';
// import useNavigate  from 'Shared/utils/navigation/useNavigate';

const useLogin = async (data: any,) => {
    const { setToken } = useStorage(); 
    const { API } = APIURL();
    // const navigate = useNavigate();
    try {
        const response = await axios.post(`${API}/auth/login`, data);
        console.log(response?.data?.message)
        if(response?.data?.message){
            return response?.data?.message;
        }
        if (response?.data?.token) {
            setToken(response?.data?.token);
            return "Login Succed"
            // navigate('/');
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
}

export { useLogin }