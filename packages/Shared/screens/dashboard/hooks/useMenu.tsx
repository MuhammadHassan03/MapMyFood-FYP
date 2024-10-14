import useRequest from 'Shared/hooks/useRequest'; // Assuming useRequest is already correctly implemented

const useMenu = () => {
    // Define the API endpoint and method
    const url = "/restaurant/menu";
    const method = 'GET';

    const { response: menusData, error, loading, refetch } = useRequest({ url, method });
    console.log('response', menusData,)
    return {
        menusData,
        loading,
        error,
        refetch
    };
};

export default useMenu;
