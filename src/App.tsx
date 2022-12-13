import { Route, Routes } from 'react-router-dom'

import { Layout } from './layouts'

import {
  Edit,
  Home,
  Product
} from './pages'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:id" element={ <Product /> } />
        <Route path="/:id/edit" element={ <Edit /> } />
        { /* <Route path="*" element={ <NotFound /> } /> */ }
      </Routes>
    </Layout>
  )
}
