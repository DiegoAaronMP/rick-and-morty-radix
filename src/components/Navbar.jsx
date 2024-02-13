import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Box, Flex, Heading, IconButton, } from "@radix-ui/themes"

const handleLinkedInClick = () => {
  // Opens LinkedIn profile in a new tab
  window.open('https://www.linkedin.com/in/diego-aaron-macias');
}

export const Navbar = () => {
  return (
    <Box>
      {/* Navigation bar layout */}
      <Flex px={"5"} pt={"2"} direction={"row"} justify={"between"} align={"center"}>
        {/* Heading */}
        <Heading weight={"light"}>
          Diego Aarón MP
        </Heading>
        {/* LinkedIn icon button */}
        <IconButton onClick={handleLinkedInClick} color="blue">
          <LinkedInLogoIcon width="80%" height="80%" />
        </IconButton>
      </Flex>
      {/* Additional content in the navbar */}
      <Flex py={"9"} align={"center"} justify={"center"}>
        <Heading size={"9"} weight={"bold"}>
          Rick and Morty API
        </Heading>
      </Flex>
    </Box>
  )
}
