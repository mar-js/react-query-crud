import { FormEvent } from 'react'

import { useMutation } from 'react-query'

import { Link } from 'react-router-dom'

import { deleteProduct, editStockProduct } from '../../api/products'

import { IProduct } from '../../interfaces'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Skeleton,
  Checkbox
} from '@chakra-ui/react'

export const Product: React.FC<IProduct> = ({
  isLoading,
  id,
  name,
  description,
  price,
  inStock
}) => {
  const removeProduct = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => alert('Product removed')
  })
  const changeStockProduct = useMutation({
    mutationFn: editStockProduct,
    onSuccess: () => alert('Stock of Product changed')
  })

  const handleChange = (e: FormEvent) => {
    const { checked } = e.target as HTMLInputElement

    changeStockProduct.mutate({
      id,
      name,
      description,
      price,
      inStock: checked
    })
  }
  const handleClick = () => removeProduct.mutate(id)

  return (
    <Card>
      <CardHeader>
        { isLoading ? <Skeleton height="15px" /> : <Heading size="md">{ name }</Heading> }
      </CardHeader>
      <CardBody>
        { isLoading ? <Skeleton height="15px" /> : <Text>{ description }</Text> }
        { isLoading ? (
          <Skeleton
            width="30px"
            height="15px"
            startColor="blue.600"
            endColor="blue.500"
          />
        ) : (
          <Text
            color="blue.600"
            fontSize="1xl"
            fontWeight="bold"
          >${ price }</Text>
        ) }
      </CardBody>
      <CardFooter
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Link to={ `/${id}` } style={ { width: '100%' } }>
          <Button
            w="100%"
            color="orange"
            bgColor="transparent"
            my="1"
            border="1px solid"
            _hover={ {
              bgColor: 'orange',
              color: 'white'
            } }
          >
            View
          </Button>
        </Link>
        <Button
          w="100%"
          isLoading={ isLoading }
          color="red.400"
          bgColor="transparent"
          my="1"
          border="1px solid"
          _hover={ {
            bgColor: 'red.400',
            color: 'white'
          } }
          onClick={ handleClick }
        >Remove</Button>
        <Checkbox
          margin="10px 5px"
          colorScheme="green"
          isChecked={ inStock }
          onChange={ handleChange }
        >In stock</Checkbox>
      </CardFooter>
    </Card>
  )
}
