import { Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { CharacterCard } from "./components/CharacterCard";
import { usePagination } from "./hooks/usePagination";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

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
        <IconButton radius="full" onClick={prevPage} disabled={currentPage === 1}>
          <CaretLeftIcon />
        </IconButton>
        <Text as="span">Page {currentPage}</Text>
        <IconButton radius="full" onClick={nextPage} disabled={!characters || characters.length === 0}>
          <CaretRightIcon />
        </IconButton>
      </Flex>
    </>
  )
}
