import { useState, useEffect } from "react";
import rickAndMortyApi from "../api/rickAndMortyApi";

/**
 * Custom hook to fetch character data from the Rick and Morty API.
 * @param {string} url - The URL for fetching characters.
 * @returns {object} characters - Object containing character data and loading state.
 */
export const useGetCharacters = (url) => {

    // State to hold character data and loading state
    const [characters, setCharacters] = useState({
        data: [],
        isLoading: true,
    });

    // Fetch characters from the API.
    const getCharacters = async () => {

        setCharacters({
            ...characters,
            isLoading: true,
        });

        try {
            // Make API request and extract character results
            const { data } = await rickAndMortyApi.get(url);
            const { results } = data;

            // Set character data and update loading state
            setCharacters({
                data: results,
                isLoading: false,
            });
        } catch (error) {
            // Handle error and update loading state
            console.error('Error fetching characters:', error);
            setCharacters({
                data: [],
                isLoading: false,
            });
        }
    }

    // Effect to fetch characters when the URL changes
    useEffect(() => {
        getCharacters();
    }, [url]);

    // Return characters object containing data and loading state
    return characters;

}