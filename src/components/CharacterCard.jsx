import { Badge, Box, Card, Flex, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import React from 'react'

export const CharacterCard = ({ id, name, status, species, image, location, origin }) => {
  return (

    <Card>
      <Flex align={'center'} gap={'1'}>
        <Inset>
          <img src={image} alt="Character's image" style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 200,
          }} />
        </Inset>

        <Flex direction='column' mx={'5'}>
          <Text>
            <Heading>{name}</Heading>
            <Box>
              <Badge color={`${status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'}`}>{status}</Badge>
              &nbsp;
              <Badge color={`${species === 'Human' ? 'blue' : 'yellow'}`}>{species}</Badge>
            </Box>
          </Text>


          <Flex direction={'column'} mt={'2'}>
            <Text size={'3'}>
              First seen in:
            </Text>
            <Text size={'5'} weight={'bold'}>{origin.name}</Text>

            <Text size={'3'}>
              Last known location:
            </Text>
            <Text size={'5'} weight={'bold'}>{location.name}</Text>
          </Flex>

        </Flex>
      </Flex>
    </Card>


  )
}
