import { Flex, Grid, Heading, IconButton, Text } from "@radix-ui/themes";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { usePagination } from "./hooks/usePagination";
import { CharacterCard } from "./components/CharacterCard";

/**
 * CharacterList component to display characters with pagination.
 */
export const CharacterList = () => {
  // Custom hook for handling pagination
  const { currentPage, nextPage, prevPage } = usePagination(1);
  // Custom hook for fetching characters data
  const { data: characters, isLoading } = useGetCharacters(`?page=${currentPage}`);

  return (
    <>
      {/* Title */}
      <Flex justify={"center"} mt={"8"}>
        <Heading size={"8"}>Rick and Morty API</Heading>
      </Flex>

      {/* Pagination Controls */}
      <Flex gap={"2"} justify={"between"} p={"5"} align={"center"}>
        {/* Button to navigate to the previous page */}
        <IconButton highContrast size={"4"} radius="full" onClick={prevPage} disabled={currentPage === 1}>
          <CaretLeftIcon width="30" height="30" />
        </IconButton>
        {/* Display current page number */}
        <Text as="span">Page {currentPage}</Text>
        {/* Button to navigate to the next page */}
        <IconButton highContrast size={"4"} radius="full" onClick={nextPage} disabled={!characters || characters.length === 0}>
          <CaretRightIcon width="30" height="30" />
        </IconButton>
      </Flex>

      {/* Grid of Character Cards */}
      <Grid columns={{ md: '2', xs: '1' }} width="auto" gap={"5"} px={{ md: '9', xs: '6' }}>
        {/* Map through characters array and render CharacterCard for each */}
        {
          characters.map(character => (
            <CharacterCard key={character.id} {...character} />
          ))
        }
      </Grid>
    </>
  )
}
