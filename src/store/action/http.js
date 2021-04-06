import axios from "axios";
import qs from "qs"

const HTTP = axios.create({
    baseURL: "/api",
    withCredentials: true,
    transformRequest: (data) => {
        return qs.stringify(data)
    }
});

export default HTTP;

