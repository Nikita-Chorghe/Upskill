import http from './httpService';

const apiEndpoint = process.env.REACT_APP_API_URL + "/tutors";
export function getTutors(){
    return http.get(apiEndpoint)
}

// export function deleteMovie(tutorId){
//     return http.delete(apiEndpoint + '/' + tutorId)
// }