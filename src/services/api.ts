import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tablet.teknisa.com/francismararaujo/caetano/odhenPOS/backend/service/index.php'
})

export default api;