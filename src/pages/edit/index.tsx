import { useParams } from 'react-router-dom'

import { Form } from '../../components'

export const Edit: React.FC = () => {
  const { id } = useParams()

  return <Form isEdit productId={ Number(id) } />
}
