import axios from "axios";

const $api = axios.create({
    baseURL: 'https://10.111.70.174:5000/api/v1'
})

export default $api