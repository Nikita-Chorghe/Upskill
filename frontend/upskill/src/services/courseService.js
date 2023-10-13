import http from "./httpService";



const apiEndpoint =  "/courses";

export function getCourses(){
    return http.get(apiEndpoint)
}