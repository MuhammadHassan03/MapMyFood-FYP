import React from  'react'
import axios from 'axios';
import APIURL from 'Shared/constants/API'

const useLogin = async (data,) => {
    const response = await axios.post(`${APIURL}/auth/login`, data)
    console.log('response', response)
}

export { useLogin }