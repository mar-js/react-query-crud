import { Link } from 'react-router-dom'

import {
  Box,
  Breadcrumb,
  BreadcrumbItem
} from '@chakra-ui/react'

export const Header: React.FC = () => (
  <Box
    as="header"
    w="100%"
    padding="5px"
    bgColor="blue.400"
  >
    <Breadcrumb>
      <BreadcrumbItem color="white">
        <Link to="/">Home</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
)
