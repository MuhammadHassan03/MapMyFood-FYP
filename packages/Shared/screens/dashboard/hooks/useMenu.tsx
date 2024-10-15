import { useState } from 'react';
import useRequest from 'Shared/hooks/useRequest';
import axios from 'axios'
import { APIURL } from 'Shared/constants/API';
import useStorage from 'Shared/hooks/User/useStorage';


const useMenu = () => {
    const { API } = APIURL();
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState("");
    const { getToken } = useStorage();
    const token = getToken();
    const headers = {
        "Authorization": `Bearer ${token}`
    };
    const baseUrl = "/restaurant/menu";

    const {
        response: menusData,
        error: fetchError,
        loading: fetchLoading,
        refetch: refetchMenus,
    } = useRequest({ url: baseUrl, method: 'GET' });

    const addMenu = async (menuData) => {
        setLoading(true);
        const url = `${API}/restaurant/menu`

        console.log('MENYU RESPONSE', url)
        const response = await axios.post(url, { headers }, menuData)
        if (response?.data?.message) {
            console.error("Failed to add menu:", response?.data?.message);
            setError(response?.data?.message);
        }
        refetchMenus();
        setLoading(false)
        return { response };
    };

    // Update existing menu (PUT request)
    const updateMenu = async (menuId, updatedData) => {
        setLoading(true);
        const { response, error, loading } = useRequest({
            url: `${baseUrl}/${menuId}`,
            method: 'PUT',
            data: updatedData,
        });

        if (error) {
            console.error("Failed to update menu:", error);
            setError(error);
        }

        refetchMenus();
        setLoading(false)
        return { response, loading, error };
    };

    const deleteMenu = async (menuId) => {
        setLoading(true);
        const { response, error, loading } = useRequest({
            url: `${baseUrl}/${menuId}`,
            method: 'DELETE',
        });

        if (error) {
            console.error("Failed to delete menu:", error);
            setError(error);
        }

        refetchMenus();
        setLoading(false)
        return { response, loading, error };
    };

    return {
        menusData,
        fetchLoading,
        fetchError,
        refetchMenus,
        addMenu,
        updateMenu,
        deleteMenu,
        Loading,
        Error
    };
};

export default useMenu;
