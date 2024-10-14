const APIURL = () => {
    const API = process.env.SERVERURL || 'http://localhost:9000/api';
    return { API };}

export { APIURL }
