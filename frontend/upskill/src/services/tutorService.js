import http from './httpService';

const apiEndpoint =  "/tutors";
export function getTutors(){
    return http.get(apiEndpoint)
}

// export function deleteMovie(tutorId){
//     return http.delete(apiEndpoint + '/' + tutorId)
// }