import axios from 'axios';

// Creating an instance of Axios with a base URL for the Rick and Morty API
const rickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
});

export default rickAndMortyApi;