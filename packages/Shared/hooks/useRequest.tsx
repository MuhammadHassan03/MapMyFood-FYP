import { useState, useEffect, useCallback } from 'react';
import { APIURL } from 'Shared/constants/API';
import axios from 'axios';
import useStorage from 'Shared/hooks/User/useStorage';

const useRequest = ({ url, method = 'GET', data = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
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
            switch (method.toUpperCase()) {
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
        } catch (error) {
            setError(error.response ? error.response.data : 'Server error');
        } finally {
            setLoading(false);
        }
    }, [API, url, method, data, token]);

    useEffect(() => {
        makeRequest();  
    }, [makeRequest]);

    return { response, error, loading, refetch: makeRequest };
};

export default useRequest;
