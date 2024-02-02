import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { CharacterCard } from "./components/CharacterCard";
import { usePagination } from "./hooks/usePagination";

export const CharacterList = () => {

  const { currentPage, nextPage, prevPage } = usePagination(1);

  const { data: characters, isLoading } = useGetCharacters(`?page=${currentPage}`);

  return (
    <>
      <Grid columns='2' width="auto" gap={"5"} px={"9"}>
        {
          characters.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))
        }
      </Grid>

      <Flex gap={"2"} justify={"center"} mt={"5"}>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <Text>Page {currentPage}</Text>
        <Button onClick={nextPage} disabled={!characters || characters.length === 0}>
          Next Page
        </Button>
      </Flex>
    </>
  )
}
