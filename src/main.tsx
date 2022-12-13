import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import {
  QueryClientProvider,
  QueryClient
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'

const CLIENT = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ CLIENT }>
      <BrowserRouter>
        <ChakraProvider>
          <ReactQueryDevtools />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
