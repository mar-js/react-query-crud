import { FormEvent, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useMutation } from 'react-query'

import { format, parse } from '../../helpers'

import { createProduct, editProduct } from '../../api/products'

import { IProductOptionalValue, IForm } from '../../interfaces'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react'

export const Form: React.FC<IForm> = ({ isEdit, productId }) => {
  const NAVIGATE = useNavigate()
  const [ product, setProduct ] = useState<IProductOptionalValue>({
    name: '',
    description: '',
    price: 0
  })
  const addProduct = useMutation({
    mutationFn: createProduct,
    onSuccess: () => alert('Product Added!')
  })
  const changeProduct = useMutation({
    mutationFn: editProduct,
    onSuccess: () => alert('Product Edited!')
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (isEdit) {
      changeProduct.mutate({
        id: productId,
        ...product
      })

      return NAVIGATE(-1)
    }

    return addProduct.mutate({
      ...product,
      inStock: false
    })
  }
  const handleChangeNumberInput = (valueString: string) => setProduct({
    ...product,
    price: parse(valueString)
  })
  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement

    setProduct({
      ...product,
      [name]: value
    })
  }
  const handleClickBtnBack = () => NAVIGATE(-1)

  return (
    <Box
      onSubmit={ handleSubmit }
      minW="300px"
      maxW="600px"
      margin="20px auto 0"
      padding="0 5px"
    >
      <form method={ isEdit ? 'PUT' : 'POST' }>
        <FormControl isRequired my="10px">
          <FormLabel>Product name</FormLabel>
          <Input
            onChange={ handleChange }
            name="name"
            placeholder="Any"
          />
        </FormControl>
        <FormControl isRequired my="10px">
          <FormLabel>Product description</FormLabel>
          <Input
            onChange={ handleChange }
            name="description"
            placeholder="Lorem lorem"
          />
        </FormControl>
        <FormControl isRequired my="10px">
          <FormLabel>Price</FormLabel>
          <NumberInput
            onChange={ handleChangeNumberInput }
            value={ format((product.price as number).toString()) }
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Flex alignItems="center" justifyContent={ isEdit ? 'space-evenly' : 'center' }>
          <Button
            type="submit"
            colorScheme="teal"
            size="sm"
          >
            { isEdit ? 'Edit' : 'Add' }
          </Button>
          { isEdit && (
            <Button
              type="submit"
              colorScheme="pink"
              size="sm"
              onClick={ handleClickBtnBack }
            >
            Back
            </Button>
          ) }
        </Flex>
      </form>
    </Box>
  )
}
