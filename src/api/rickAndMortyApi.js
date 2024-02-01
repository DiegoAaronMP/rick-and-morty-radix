import axios from 'axios';

const rickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
});

export default rickAndMortyApi;