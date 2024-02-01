import { Badge, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes'
import React from 'react'

export const CharacterCard = ({ id, name, status, species, image, location }) => {
  return (
    <Card>
      <Flex align={'center'} gap={'2'}>
        <Inset>
          <img src={image} alt="Character's image" />
        </Inset>
        <Badge>{status}</Badge>
        <Badge>{species}</Badge>
        <Text>
          Name:
          <Heading>{name}</Heading>
        </Text>
        <Text>
          Last known location:
          <Heading>{location.name}</Heading>
        </Text>
      </Flex>
    </Card>
  )
}
