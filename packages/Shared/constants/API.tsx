export default function APIURL() {
    return process.env.SERVERURL || 'http://localhost:6000/api';
}