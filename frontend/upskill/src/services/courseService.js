import http from "./httpService";



const apiEndpoint = process.env.REACT_APP_API_URL + "/courses";

export function getCourses(){
    return http.get(apiEndpoint)
}