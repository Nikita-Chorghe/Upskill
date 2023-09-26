import http from "./httpService";
import config from "../config.json"

const apiEndpoint = config.apiUrl + "/courses";

export function getCourses(){
    return http.get(apiEndpoint)
}