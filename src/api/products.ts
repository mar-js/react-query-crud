import { IProduct, IProductOptionalValue } from '../interfaces'

export const getProducts = async (): Promise<IProduct[] | void> => {
  try {
    const RESPONSE = await fetch('http://localhost:3003/products')
    const DATA: IProduct[] = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN GET PRODUCTS', { error })
  }
}

export const getProduct = async (id: number): Promise<IProduct | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/products/${id}`)
    const DATA: IProduct = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN GET PRODUCT', { error })
  }
}

export const createProduct = async (product: IProductOptionalValue): Promise<IProduct | void> => {
  try {
    const RESPONSE = await fetch('http://localhost:3003/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const DATA: IProduct = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN POST PRODUCT', { error })
  }
}

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/products/${id}`, { method: 'DELETE' })
    const DATA = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN DELETE PRODUCT', { error })
  }
}

export const editStockProduct = async (product: IProductOptionalValue): Promise<IProduct | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const DATA: IProduct = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN PUT STOCK PRODUCT', { error })
  }
}

export const editProduct = async (product: IProductOptionalValue): Promise<IProduct | void> => {
  try {
    const RESPONSE = await fetch(`http://localhost:3003/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const DATA: IProduct = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR IN PUT PRODUCT', { error })
  }
}
