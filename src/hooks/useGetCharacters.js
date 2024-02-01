import { useState, useEffect } from "react";
import rickAndMortyApi from "../api/rickAndMortyApi";

export const useGetCharacters = (url) => {

    const [characters, setCharacters] = useState({
        data: [],
        isLoading: true,
    });


    const getCharacters = async () => {

        setCharacters({
            ...characters,
            isLoading: true,
        });


        const { data } = await rickAndMortyApi.get(url);
        const { results } = data;

        setCharacters({
            data: results,
            isLoading: false,
        });
    }

    useEffect(() => {
        getCharacters();
    }, [url]);

    return characters;

}