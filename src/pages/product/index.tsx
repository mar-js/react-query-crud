import { useQuery } from 'react-query'

import { useParams } from 'react-router-dom'

import { getProduct } from '../../api/products'

import { IProduct } from '../../interfaces'

import { Details } from '../../components'

export const Product: React.FC = () => {
  const { id } = useParams()
  const {
    isLoading,
    data,
    isError,
    error
  } = useQuery({
    queryKey: 'product',
    queryFn: () => getProduct(Number(id))
  })

  if (isLoading) return <i>Loading...</i>

  if (isError) return <b>{ (error as { message: string })?.message }</b>

  return <Details { ...(data as IProduct) } />
}
