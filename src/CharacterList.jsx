import { CharacterCard } from "./CharacterCard";
import { useGetCharacters } from "./hooks/useGetCharacters";

export const CharacterList = () => {

    const { data: characters, isLoading } = useGetCharacters('?page=1');

    return (
        <div>
            {
                characters.map(character => (
                    <CharacterCard key={character.id} {...character}/>
                ))
            }
        </div>
    )
}
