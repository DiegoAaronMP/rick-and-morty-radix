import { Badge, Box, Card, Flex, Heading, Inset, Strong, Text } from '@radix-ui/themes'

// CharacterCard component to display individual character information
export const CharacterCard = ({ id, name, status, species, image, location, origin }) => {
  return (

    // The animate__ classes are used for a fadeIn animation effect.
    <Card className="animate__animated animate__fadeIn">
      <Flex align={'center'} gap={'1'}>
        <Inset>
          {/* Character image with responsive styling */}
          <img src={image} alt="Character's image" style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 200,
          }} />
        </Inset>

        {/* Flex container for text information */}
        <Flex direction='column' mx={'5'}>
          {/* Character name and badges for status and species */}
          <Text>
            <Heading>{name}</Heading>
            <Flex gap='1'>
              {/* Badge for character status with dynamic color */}
              <Badge color={`${status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'}`}>{status}</Badge>
              {/* Badge for character species with dynamic color */}
              <Badge color={`${species === 'Human' ? 'blue' : 'yellow'}`}>{species}</Badge>
            </Flex>
          </Text>

          {/* Flex container for location information */}
          <Flex direction={'column'} mt={'2'} ma>
            {/* Text indicating first seen location */}
            <Text size={'3'}>
              First seen in:
            </Text>
            <Text size={'5'} weight={'medium'}>{origin.name}</Text>

             {/* Text indicating last known location */}
            <Text size={'3'}>
              Last known location:
            </Text>
            <Text size={'5'} weight={'medium'}>{location.name}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}
