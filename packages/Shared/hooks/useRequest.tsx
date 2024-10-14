import { useState, useEffect, useCallback } from 'react';
import { APIURL } from 'Shared/constants/API';
import axios, { AxiosError } from 'axios';
import useStorage from 'Shared/hooks/User/useStorage';

interface UseRequest {
    url: string | null;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any; 
}


interface ErrorResponse {
    message?: string;
}

const useRequest = ({ url, method = 'GET', data }: UseRequest) => {
    const [response, setResponse] = useState<any>(null); 
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { API } = APIURL();
    const { getToken } = useStorage();

    const token = getToken();

    const makeRequest = useCallback(async () => {
        setLoading(true);
        const headers = {
            "Authorization": `Bearer ${token}`
        };

        try {
            let res;
            switch (method) {
                case 'GET':
                    console.log('Making GET request to:', `${API}${url}`);
                    res = await axios.get(`${API}${url}`, { headers });
                    break;
                case 'POST':
                    res = await axios.post(`${API}${url}`, data, { headers });
                    break;
                case 'PUT':
                    res = await axios.put(`${API}${url}`, data, { headers });
                    break;
                case 'DELETE':
                    res = await axios.delete(`${API}${url}`, { data, headers });
                    break;
                default:
                    throw new Error('Invalid HTTP method');
            }

            setResponse(res.data);
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            setError(error.response?.data?.message || 'Server error');
        } finally {
            setLoading(false);
        }
    }, [API, url, method, data, token]);

    useEffect(() => {
        if (url) {
            makeRequest();  
        }
    }, [makeRequest, url]);

    return { response, error, loading, refetch: makeRequest };
};

export default useRequest;
