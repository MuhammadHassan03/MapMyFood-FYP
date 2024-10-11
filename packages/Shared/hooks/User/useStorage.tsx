const useStorage = () => {
    const  storage = window.localStorage;
    const  token = storage.getItem('token')
    if(token){
        return true;
    }
    return false;
}
export default useStorage