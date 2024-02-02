import { Grid } from "@radix-ui/themes";
import { CharacterCard } from "./CharacterCard";
import { useGetCharacters } from "./hooks/useGetCharacters";

export const CharacterList = () => {

    const { data: characters, isLoading } = useGetCharacters('?page=1');

    return (
        <Grid columns='2' width="auto" gap={"5"} px={"9"}>
            {
                characters.map(character => (
                    <CharacterCard key={character.id} {...character}/>
                ))
            }
        </Grid>
    )
}
