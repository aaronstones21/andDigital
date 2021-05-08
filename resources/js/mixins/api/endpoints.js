import axios from 'axios'

let token = document.head.querySelector('meta[name="csrf-token"]')

const endpoints = window.endpoints

const member = axios.create({
    baseURL: endpoints.member,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': token ? token.content : ''
    },
})

const api = axios.create({
    // Necessary for Laravel Sanctum
    withCredentials: true,
    baseURL: endpoints.api,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': token ? token.content : ''
    },
})

// Add a response interceptor
api.interceptors.response.use((response) => { return response }, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger

    // This so that if an unauthorised request is made e.g. when the user's
    // Have expired, they are appropriately redirected to the login page
    if (error.response.status === 401) {
        window.location = `//${window.location.hostname}/login`;
    }
    return Promise.reject(error);
});

export default {
    member,
    api
}