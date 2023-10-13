import http from './httpService';

const apiEndpoint = process.env.REACT_APP_API_URL + "/auth";

export function login(email, password){
    return http.post(apiEndpoint, {email, password});
}