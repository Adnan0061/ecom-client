import axios from "axios";

// const BASE_URL = "https://aqueous-falls-89489.herokuapp.com/api/"
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmZlZjZjOGNmMzQ1ZjgyZTlhMGI5MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDEwMjkxODUsImV4cCI6MTY0MTI4ODM4NX0.b4n5TjxN9XB_xlQge4BtxWMoNVvwtCRkiggBxuSx7b4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});