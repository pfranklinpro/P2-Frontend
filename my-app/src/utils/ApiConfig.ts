import axios from 'axios';

const SylvesterAPI = axios.create({
    baseURL: "http://ec2-34-227-114-54.compute-1.amazonaws.com:8080/sylvester",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export default SylvesterAPI;