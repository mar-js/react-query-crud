import { Link } from 'react-router-dom'

import { IProduct } from '../../interfaces'

import {
  Flex,
  Button,
  Heading,
  Text
} from '@chakra-ui/react'

export const Details: React.FC<IProduct> = ({
  id,
  name,
  description
}) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    py="2"
    px="3"
  >
    <Heading size="lg">{ name }</Heading>
    <Text fontSize="md">{ description }</Text>
    <Link to={ `/${id}/edit` }>
      <Button
        color="orange"
        bgColor="transparent"
        border="1px solid"
        margin="10px 5px"
        _hover={ {
          bgColor: 'orange',
          color: 'white'
        } }
      >
        Edit
      </Button>
    </Link>
  </Flex>
)
