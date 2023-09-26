import http from './httpService';
import config from "../config.json"


const apiEndpoint = config.apiUrl + "/tutors"
export function getTutors(){
    return http.get(apiEndpoint)
}

// export function deleteMovie(tutorId){
//     return http.delete(apiEndpoint + '/' + tutorId)
// }