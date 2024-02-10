import axios from "axios";

const $api = axios.create({
    baseURL: 'https://192.168.1.3:5000/api/v1'
})

export default $api