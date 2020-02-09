import axios from "axios";
import Config from "./config";

const api = axios.create({
    baseURL: Config.host,
});

export default api;