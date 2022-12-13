import { IChildren } from '../interfaces'

import { Header } from './header'

import { Container } from '@chakra-ui/react'

export const Layout: React.FC<IChildren> = ({ children }) => (
  <>
    <Header />
    <Container as="main" maxW="1200px" pb="4">
      { children }
    </Container>
  </>
)
