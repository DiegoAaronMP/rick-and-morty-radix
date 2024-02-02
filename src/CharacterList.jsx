import { Flex, Grid, Heading, IconButton, Text } from "@radix-ui/themes";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { CharacterCard } from "./components/CharacterCard";
import { usePagination } from "./hooks/usePagination";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

export const CharacterList = () => {

  const { currentPage, nextPage, prevPage } = usePagination(1);

  const { data: characters, isLoading } = useGetCharacters(`?page=${currentPage}`);

  return (
    <>
    <Flex justify={"center"} mt={"8"}>
      <Heading size={"8"}>Rick and Morty API</Heading>
    </Flex>

      <Flex gap={"2"} justify={"between"} p={"5"} align={"center"}>
        <IconButton highContrast size={"4"} radius="full" onClick={prevPage} disabled={currentPage === 1}>
          <CaretLeftIcon width="30" height="30"/>
        </IconButton>
        <Text as="span">Page {currentPage}</Text>
        <IconButton highContrast size={"4"} radius="full" onClick={nextPage} disabled={!characters || characters.length === 0}>
          <CaretRightIcon width="30" height="30"/>
        </IconButton>
      </Flex>

      <Grid columns={{md: '2', xs: '1'}} width="auto" gap={"5"} px={{md: '9', xs: '6'}}>
        {
          characters.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))
        }
      </Grid>
    </>
  )
}
