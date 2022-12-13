import { useQuery } from 'react-query'

import { getProducts } from '../../api/products'

import { IInitialState, IProduct } from '../../interfaces'

import { Product } from '../'

import { SimpleGrid, Text } from '@chakra-ui/react'

export const Products: React.FC = () => {
  const {
    isLoading,
    data,
    isError,
    error
  } = useQuery({
    queryKey: [ 'products' ],
    queryFn: getProducts,
    initialData: []
  })

  if (isError) return <b>{ (error as { message: string })?.message }</b>

  return (
    <>
      <Text fontSize="4xl" align="center">Products List:</Text>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        spacing={ 2 }
        padding="0 5px"
      >
        { (data as IProduct[]).map((product: IInitialState) => (
          <Product
            key={ product.id }
            isLoading={ isLoading }
            { ...product }
          />
        )) }
      </SimpleGrid>
    </>
  )
}
