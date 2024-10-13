const APIURL = () => {
    const API = process.env.SERVERURL || 'http://localhost:8000/api';
    return { API };}

export { APIURL }
