import axios from '../axios';
export const handleLoginApi = async (email, password) => {
    let res = await axios.post('http://localhost:8081/api/login', { email, password });
    return res;
};
